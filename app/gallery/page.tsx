/* eslint-disable @next/next/no-img-element */
'use client'

import { useCallback, useEffect, useState } from 'react'

import Form from '../components/Form'
import ImageGrid from '../components/ImageGrid'
import MobileGrid from '../components/MobileGrid'
import Lightbox from '../components/Lightbox'

import getImages from '../lib/getImages'
import searchImages from '../lib/searchImages'

export default function Gallery() {

  const [imageList, setImageList] = useState<any[]>([])
  const [initialImageList, setInitialImageList] = useState<any[]>([])

  // "next_cursor" is a hash value provided in the API response so long as there are more than the default 10 images in the grouping returned
  // subsequent images loads (or appending to the bottom of the view) means taking the "next_cursor" and using that as a query param in the API request
  // which basically says "start the next batch from here, please"
  const [nextCursor, setNextCursor] = useState<string>("")

  //* modify tags for search functionality
  const [checked, setChecked] = useState<any>([])
  
  const [searchValue, setSearchValue] = useState<string>('')

  //* for the image view overlay
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const [browserWindow, setBrowserWindow] = useState<number[]>([]) // to be able to access the window object

  // Cloudinary will return images in descending order from when they were uploaded to their service (there's no way to randomize initial GET)
  // this function will sort each batch of 12 images based on their asset_id, which is a random UUID generated by Cloudinary upon image upload
  // while this won't randomize the load each time, it will make certain that the most recently uploaded 12 images will shift order based on the asset_id
  // this will also work for when "load more" is triggered -- that batch of 12 will be sorted, appeneded to the original list (original won't be sorted again)
  const ordered = (responseJson:any) => responseJson.resources.sort((a:any,b:any) => {
    // the actual image objects are within the 'resources' array
    return a.asset_id.localeCompare(b.asset_id, undefined)
  })

  useEffect(() => {
    setBrowserWindow([window.innerWidth, window.innerHeight]) // calling it here so it allows for the app to build
    const fetchData = async () => {
      const responseJson = await getImages("") 

      setImageList(ordered(responseJson))
      setInitialImageList(ordered(responseJson))
      
      // using the name as declared in the respone -- we don't have control over that
      setNextCursor(responseJson.next_cursor)
    }
    fetchData()
  }, [])

  
  const handleLoadMoreButtonClick = async () => {
    let responseJson: any = {}
    // Admin & Search APIs have different length NC values
    if (nextCursor.length > 64) {
      responseJson = await searchImages(searchValue, nextCursor)
    } else {
      responseJson = await getImages(nextCursor)
    }
    setImageList((currentImageList) => [...currentImageList, ...ordered(responseJson)])
    setNextCursor(responseJson.next_cursor)
  }

  const updateTagSearch = (e: {target: { id: string; }}) => {
    // PART 1: modify search value(s)
    let regex = new RegExp(e.target.id)
    if (searchValue.includes(e.target.id)) {
      setSearchValue(searchValue.replace(regex, '').trim())
    } else {
      setSearchValue(searchValue + " " + e.target.id)
    }

    // PART 2: set checked/unchecked status on checkbox
    if (checked.includes(e.target.id)) {
      setChecked(checked.filter((x: string) => x !== e.target.id))
    } else {
      checked.push(e.target.id)
      setChecked([...checked])
    }
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>):Promise<any> => {
    e.preventDefault()
    if (searchValue && searchValue !== " ") {
      // initial submit must have nextCursor be an empty string as Admin API NC is 64 chars but Search API NC is 96 chars
      // which means we can't use the one from getImages()
      const responseJson = await searchImages(searchValue, "")

      setImageList(responseJson.resources)
      setNextCursor(responseJson.next_cursor)
    }

    // If user submitted a filtering selection, but then clicks to clear it & submit again (instead of clicking reset) without selecting another search option
    if (searchValue === "" && imageList !== initialImageList) resetSearch()
  }

// gets the initial batch of 12 images & save to state
  const resetSearch = async () => {
    const responseJson = await getImages("")
    setImageList(ordered(responseJson))
    setInitialImageList(ordered(responseJson))
    setNextCursor(responseJson.next_cursor) // assign next_cursor value if it exists
    setSearchValue('') // clear the search term from the input field
    setChecked([]) // clear checked status
  }

  const clearSelection = async () => {    
    setSearchValue('') // clear the search term from the input field
    setChecked([]) // clear checked status
  }

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  // event type inferred from context
  const keyboardNav = (e: React.KeyboardEvent<HTMLDivElement>, index: number) => {
    if (e.defaultPrevented) {
      return;
    }

    switch (e.key) {
      case "Enter":
        openImageViewer(index)
        break;
      case " ": 
        openImageViewer(index)
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }

    e.preventDefault() // Cancel the default action to avoid it being handled twice
    return
  }

  return (
    <main className='App'>
      {/* @ts-ignore: Unreachable code error */}
      <Form 
        checked={checked} 
        updateTagSearch={updateTagSearch} 
        handleFormSubmit={handleFormSubmit} 
        clearSelection={clearSelection} 
        resetSearch={resetSearch}
      />

      {/* modify grid based (essentially) on mobile vs tablet or larger */}
      {(browserWindow[0] > 450  && browserWindow[1] > 450)
        ? <ImageGrid imageList={imageList} keyboardNav={keyboardNav} openImageViewer={openImageViewer} />
        : <MobileGrid imageList={imageList} />
      }

      {isViewerOpen && <Lightbox imageList={imageList} currentImage={currentImage} closeImageViewer={closeImageViewer}/>}

      {/* this syntax says both must be true (since nextCursor is the only one that could be false here, it's fine) */}
      {nextCursor && <button className='load-more' onClick={handleLoadMoreButtonClick}>Load more images</button>}

    </main>
  )
}