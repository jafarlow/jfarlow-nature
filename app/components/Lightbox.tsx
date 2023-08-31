import ImageViewer from "./ImageViewer"

type Props = {
  imageList: any[],
  currentImage: number,
  closeImageViewer: () => void
}

export default function Lightbox( { imageList, currentImage, closeImageViewer}: Props ) {
  return (
    <div className='lightbox'>
        <ImageViewer
          src={ imageList }
          currentIndex={ currentImage }
          disableScroll={ true }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
          role="dialog"
        />
    </div>
  )
}