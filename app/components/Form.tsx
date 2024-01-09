"use client"

import { useState } from "react";
import Tags from "./Tags"

type Props = {
  checked: any[],
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<any>,
  updateTagSearch: (e: { target: { id: string } }) => void,
  clearSelection: () => Promise<void>,
  resetSearch: () => Promise<void>
}

export default function Form( { checked, handleFormSubmit, updateTagSearch, clearSelection, resetSearch}: Props ) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [buttonText, setButtonText] = useState("View")
  const [buttonTextCode, setButtonTextCode] = useState('&#9656;')
  // UTF-8 decimal values for stylized arrows: 9656 for right arrow, 9662 for down arrow
  // https://www.w3schools.com/charsets/ref_html_entities_d.asp

  //! requires using dangerouslySetInnerHTML in order to parse this into HTML text
  // previously using `String.fromCodePoint()` requires UTF-16, which would break browser experiences that do no support it as a default
  // caused confusion b/c Ubuntu *does* support UTF-16, but Windows & Android do not, so my testing showed it working fine, whereas everywhere else it was broken

  const handleHiddenChange = () => {
    setIsExpanded(!isExpanded)
    
    if (buttonText === "View") setButtonText("Hide")
    else setButtonText("View")

    if (buttonTextCode === '&#9662;') setButtonTextCode('&#9656;')
    else setButtonTextCode('&#9662;')
  }

  return (
    <>
      <button 
        id="accordion-trigger" 
        aria-controls="tag-search" 
        aria-expanded={isExpanded} 
        type="button" 
        onClick={handleHiddenChange}
      >
        {buttonText} categories <span dangerouslySetInnerHTML={{__html: buttonTextCode}}></span>
      </button>
      <form onSubmit={handleFormSubmit} id="tag-search" className='tags-form' role="region" aria-labelledby="accordion-trigger"
        aria-hidden={!isExpanded}>
        <label htmlFor="tagsearch" id="form-label">Filter by category:</label>
        <Tags checked={checked} updateTagSearch={updateTagSearch}/>
        <div className="buttons-wrapper">
          <button type="submit" id="submit">Confirm selection</button>
          <button type="button" id="clear" onClick={clearSelection}>Clear selection</button>
          <button type="button" id="reset" onClick={resetSearch}>Reset page</button>
        </div>
      </form>
    </>
  )
}