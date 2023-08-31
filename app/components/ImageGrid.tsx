/* eslint-disable @next/next/no-img-element */

type Props = {
  imageList: any[],
  openImageViewer: (index: number) => void,
  keyboardNav: (e: React.KeyboardEvent<HTMLImageElement>, index: number) => void
}

export default function ImageGrid( {imageList, openImageViewer, keyboardNav}: Props ) {
  return (
    <div className="grid-wrapper">
      <p className="instruction">Select an image to view it in full screen</p>
      <div className="image-grid">
        {imageList.map((image, index) => (
          <img 
            className='thumbnail'
            src={image.secure_url} 
            alt={image.context?.custom?.alt || image.context?.alt || ""} 
            onClick={ () => openImageViewer(index) }
            onKeyDown={ (event) => keyboardNav(event,index)}
            key={image.asset_id}
            tabIndex={0}
            width={356}
            height={238}
          />
        ))}
      </div>
    </div>
  )
}