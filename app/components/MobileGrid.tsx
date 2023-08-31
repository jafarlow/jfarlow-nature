/* eslint-disable @next/next/no-img-element */

import scientificRef from "../lib/scientificRef";

type Props = {
  imageList: any[],
}

export default function MobileGrid( {imageList}: Props ) {
  return (
    <div className="mobile-image-grid">
      {imageList.map((image) => (
        <figure className="mobile-figure" key={Math.random()}>
          <img className="mobile-thumbnail" src={image.secure_url} alt={image.context?.custom?.alt || image.context?.alt || ""} />
          <figcaption className="mobile-caption">{scientificRef(image.metadata?.caption) ?? ''}</figcaption>
        </figure>
      ))}
    </div>
  )
}
