/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import scientificRef from "../lib/scientificRef";

type Props = {
  imageList: any[],
}

export default function MobileGrid( {imageList}: Props ) {
  return (
    <div className="mobile-image-grid">
      {imageList.map((image) => (
        <figure className="mobile-figure" key={Math.random()}>
          <Image 
            className="mobile-thumbnail" 
            src={image.secure_url} 
            alt={image.context?.custom?.alt || image.context?.alt || ""} 
            width={400} 
            height={266}       
            unoptimized={true} 
            placeholder="blur" 
            blurDataURL={"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mNkKHKsZyACMI4qpK9CAG4PC/9UjHYEAAAAAElFTkSuQmCC "} 
          />
          <figcaption className="mobile-caption">{scientificRef(image.metadata?.caption) ?? ''}</figcaption>
        </figure>
      ))}
    </div>
  )
}
