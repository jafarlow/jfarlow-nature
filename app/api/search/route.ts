import { NextResponse } from "next/server"
import { BASE_URL, API_KEY, API_SECRET } from "../../lib/auth"
import { NextApiRequest } from "next"

// TODO: clear console logs and update max_results value
export async function GET(req: NextApiRequest) {
  const params = new URLSearchParams()

  //* parse the input req to get any params that were passed in
  //NOTE: order is based on searchImages() params
  const requrl = new URLSearchParams(req.url)
  const [ expression, next_cursor ] = Array.from(requrl.values())

  // remember: "expression" is how the Cloudinary API refers to a search term
  params.append('expression', expression)
  params.append('max_results', "12")

  //* Need to include [] so that with_field is treated as an array, not a string
  //* otherwise only the second with_field will be sent
  params.append('with_field[]', "context")
  params.append('with_field[]', "metadata")
  
  if (next_cursor) {
    params.append("next_cursor", next_cursor) // getting rid of the = from the string & assigning it to next_cursor
  }

  // console.log("GET PARAMS: ", params)

  const res = await fetch(BASE_URL + '/resources/search' + `?${params}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic " + btoa(`${API_KEY}:${API_SECRET}`)
    },
  })

  const responseJson = await res.json()

  // console.log("SEARCH RESPONSE JSON: ", responseJson)
  // see console for printout
  // console.log("CONTEXT: ", responseJson.resources[0].context)
  // console.log("METADATA: ", responseJson.resources[0].metadata)
  return NextResponse.json(responseJson)
}