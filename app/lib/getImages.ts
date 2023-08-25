export default async function getImages(nextCursor:string) {
  const params = new URLSearchParams()

  if (nextCursor) {
    params.append('next_cursor', nextCursor)
  }

  const res = await fetch("../api/photos" + `?${params}`)

  // TODO: write a better error handler
  if(!res.ok) throw new Error("PANIC AT THE GETIMAGES FUNCTION")

  const resJson = await res.json()

  return resJson
}