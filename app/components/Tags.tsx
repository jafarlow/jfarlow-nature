import tags from "../../tags.json"

type Props = {
  checked: any[],
  updateTagSearch: (e: { target: { id: string; }; }) => void
}

export default function Tags({checked, updateTagSearch}: Props) {
  // need to double call it for some odd reason...
  const tagsList = tags.tags

  // using index as key here because the list is static, and its order will not change. Otherwise an alternative option would be required
  return (
    <div id="tags-wrapper">
      {tagsList.map((tag:string, index) => (
        <label key={index} htmlFor={tag} className={checked.includes(tag) ? "checked tag" : "tag"}>
          <input 
            type='checkbox'
            checked={checked.includes(tag)}
            key={index}
            name={tag}
            id={tag}
            onChange={updateTagSearch}
          />
          {tag}
        </label>
      ))} 
    </div>
  )
}
