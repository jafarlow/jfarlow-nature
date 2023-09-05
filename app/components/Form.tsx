import Tags from "./Tags"

type Props = {
  checked: any[],
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<any>,
  updateTagSearch: (e: { target: { id: string } }) => void,
  clearSelection: () => Promise<void>,
  resetSearch: () => Promise<void>
}

export default function Form( { checked, handleFormSubmit, updateTagSearch, clearSelection, resetSearch}: Props ) {
  return (
    <form onSubmit={handleFormSubmit} id="tag-search" className='tags-form'>
      <label htmlFor="tagsearch" id="form-label">Filter by category:</label>
      <Tags checked={checked} updateTagSearch={updateTagSearch}/>
      <div className="buttons-wrapper">
        <button type="submit" id="submit">Confirm selection</button>
        <button type="button" id="clear" onClick={clearSelection}>Clear selection</button>
        <button type="button" id="reset" onClick={resetSearch}>Reset page</button>
      </div>
    </form>
  )
}