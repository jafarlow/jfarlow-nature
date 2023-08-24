export default async function searchImages(searchValue:string, nextCursor?:string) {
  const params = new URLSearchParams()

  params.append("expression", searchValue)
  if (nextCursor) {
    params.append('next_cursor', nextCursor)
  }

  //TODO: add error handling
  const res = await fetch("../api/search" + `?${params}`)
  const resJson = await res.json()

  return resJson
}