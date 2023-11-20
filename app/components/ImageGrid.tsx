/* eslint-disable @next/next/no-img-element */

type Props = {
  imageList: any[],
  openImageViewer: (index: number) => void,
  // keyboardNav: (e: React.KeyboardEvent<HTMLImageElement>, index: number) => void //? For if the keydown is on the img element
  keyboardNav: (e: React.KeyboardEvent<HTMLDivElement>, index: number) => void //* For if the keydown is on the div element

}

export default function ImageGrid( {imageList, openImageViewer, keyboardNav}: Props ) {
  return (
    <div className="grid-wrapper">
      <p className="instruction">Select an image to view it in full screen</p>
      <div className="image-grid">
        {imageList.map((image, index) => (
          <div 
            className="img-card" key={image.asset_id}
            onClick={ () => openImageViewer(index) }
            onKeyDown={ (event) => keyboardNav(event,index)}
            tabIndex={0}
          >
            <img 
              className='thumbnail'
              src={image.secure_url} 
              alt={image.context?.custom?.alt || image.context?.alt || ""} 
              // key={image.asset_id}
              width={356}
              height={238}
            />
            {/* Cloudinary calls shows "title" in their UI, but serves it as "caption" in the custom metadata */}
            <footer className="img-footer">{image.context?.custom?.caption || image.context?.caption}</footer>
          </div>
        ))}
      </div>
    </div>
  )
}