import { BASE_URL, API_KEY, API_SECRET } from "./auth"

export const searchImages = async (searchValue:string, nextCursor?:string) => {
  const params = new URLSearchParams()
  
  // remember: "expression" is how the Cloudinary API refers to a search term
  params.append('expression', searchValue)

  //* Need to include [] so that with_field is treated as an array, not a string
  //* otherwise only the second with_field will be sent
  params.append('with_field[]', "context")
  params.append('with_field[]', "metadata")

  if (nextCursor) {
    params.append('next_cursor', nextCursor)
  }

  const res = await fetch(BASE_URL + '/resources/search' + `?${params}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic " + btoa(API_KEY+":"+API_SECRET)
    },
  })

  // convert to JSON format
  const responseJson = await res.json()

  return responseJson
}