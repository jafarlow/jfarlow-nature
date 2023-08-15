import { BASE_URL, API_KEY, API_SECRET } from "./auth"

export default async function getTags() {
  const params = new URLSearchParams()

  // tags right now will not be this many, so it's a safe number to use
  params.append('max_results', "20")

  const res = await fetch(BASE_URL + '/tags' + `?${params}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic " + btoa(API_KEY+":"+API_SECRET)
    },
  })

  // convert to JSON format
  //! might need to make this a NextResponse as well
  const responseJson = await res.json()
  return responseJson
}