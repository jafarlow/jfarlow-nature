import tags from "../../tags.json"

type Props = {
  checked: any[],
  updateTagSearch: (e: { target: { id: string; }; }) => void
}

export default function Tags({checked, updateTagSearch}: Props) {
  // need to double call it for some odd reason...
  const tagsList = tags.tags

  return (
    <div id="tags-wrapper">
      {tagsList.map((tag:string, index) => (
        <label key={index} htmlFor={tag} className={checked.includes(tag) ? "checked tag" : "tag"}>
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
