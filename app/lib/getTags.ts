export default async function getTags() {
  const res = await fetch("../api/tags")
  const resJson = await res.json()
  return resJson
}