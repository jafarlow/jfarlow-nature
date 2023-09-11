import errorHandling from "./errorHandling"

export default async function getImages(nextCursor:string) {
  const params = new URLSearchParams()

  if (nextCursor) {
    params.append('next_cursor', nextCursor)
  }

  const res = await fetch("../api/photos" + `?${params}`)

  if (!res.ok) errorHandling(res)

  const resJson = await res.json()

  return resJson
}