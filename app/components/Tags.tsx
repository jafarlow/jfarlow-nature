type Props = {
  tags: string[],
  checked: any[],
  updateTagSearch: (e: { target: { id: string; }; }) => void
}

export default function Tags({tags, checked, updateTagSearch}: Props) {
  return (
    <div id="tags-wrapper">
      {tags.map((tag:string) => (
        <label key={Math.random()} htmlFor={tag} className={checked.includes(tag) ? "checked tag" : "tag"}>
          <input 
            type='checkbox'
            checked={checked.includes(tag)}
            className='test'
            key={Math.random()}
            name={tag}
            id={tag}
            onChange={updateTagSearch}
          />
          {tag.replace(/^./, tag[0].toUpperCase())}
        </label>
      ))} 
    </div>
  )
}
