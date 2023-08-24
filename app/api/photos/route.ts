import { NextResponse } from "next/server"
import { BASE_URL, API_KEY, API_SECRET } from "../../lib/auth"
import { NextApiRequest } from "next"

export async function GET(req: NextApiRequest) {
  const params = new URLSearchParams()

  params.append('max_results', "1") //! UPDATE THIS # AFTER TESTING
  params.append('context', "true")
  
  //* to pull out the nextCursor value passed into the request
  const regex = /=(.+)/; // match '=' and capture everything that follows
  const matcher = req.url?.match(regex)
  
  if (matcher) {
    params.append("next_cursor", matcher[0].slice(1)) // getting rid of the = from the string & assigning it to next_cursor
  }

  console.log("GET PARAMS: ", params)

  const res = await fetch(BASE_URL + '/resources/image' + `?${params}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic " + btoa(`${API_KEY}:${API_SECRET}`)
    },
  })

  const responseJson = await res.json()

  // see console for printout
  // console.log("CONTEXT: ", responseJson.resources[0].context)
  // console.log("METADATA: ", responseJson.resources[0].metadata)
  return NextResponse.json(responseJson)
}