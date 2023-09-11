import errorHandling from "./errorHandling"

export default async function searchImages(searchValue:string, nextCursor?:string) {
  const params = new URLSearchParams()

  params.append("expression", searchValue)
  
  if (nextCursor) {
    params.append('next_cursor', nextCursor)
  }

  const res = await fetch("../api/search" + `?${params}`)

  if (!res.ok) errorHandling(res)

  const resJson = await res.json()

  return resJson
}