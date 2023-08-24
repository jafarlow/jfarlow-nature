export default async function searchImages(searchValue:string, nextCursor?:string) {
  const params = new URLSearchParams()

  params.append("expression", searchValue)
  if (nextCursor) {
    params.append('next_cursor', "9a679844a7e3ccae541aa3ba8b7162aed1377829f985a07756fef96cf500480d")
  }

  const res = await fetch("../api/search" + `?${params}`)
  const resJson = await res.json()

  return resJson
}