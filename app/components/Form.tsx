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
  const [buttonTextCode, setButtonTextCode] = useState(11208)
  // UTF-8 decimal values for stylized arrows: 11208 for right arrow, 11206 for down arrow
  // https://www.w3schools.com/charsets/ref_utf_arrows.asp

  const handleHiddenChange = () => {
    setIsExpanded(!isExpanded)
    
    if (buttonText === "View") setButtonText("Hide")
    else setButtonText("View")

    if (buttonTextCode === 11208) setButtonTextCode(11206)
    else setButtonTextCode(11208)
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
        {buttonText} categories {String.fromCharCode(buttonTextCode)}
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