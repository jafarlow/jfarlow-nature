export default async function getImages(nextCursor:string) {
  const res = await fetch("../api/photos")
  const resJson = await res.json()
  return resJson
}