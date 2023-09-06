export const beforeMod =
`//BEFORE:
<div className="content" onClick={handleClick}>
  <div className="slide">
    <img className="image" src={props.src[currentIndex]} alt="" />
  </div>
</div>`

export const afterMod =         
`//AFTER:
<figure className="figure" onClick={handleClick} tabIndex={0}>
  <img className="image" src={image.secure_url} alt={image.context?.alt} />
  <figcaption className="caption">{image.metadata?.caption}</figcaption>
</figure>`