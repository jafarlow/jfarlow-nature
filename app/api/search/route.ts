import { NextResponse } from "next/server"
import { BASE_URL, API_KEY, API_SECRET } from "../../lib/auth"
import { NextApiRequest } from "next"

export async function GET(req: NextApiRequest) {
  const params = new URLSearchParams()

  //* parse the input req to get any params that were passed in
  //NOTE: order is based on searchImages() params
  const requrl = new URLSearchParams(req.url)
  const [ expression, next_cursor ] = Array.from(requrl.values())

  console.log("REQ URL OBJ: ", requrl)
  console.log("REQ URL OBJ KEYS: ", requrl.keys())
  console.log("REQ URL OBJ VALUES: ", Array.from(requrl.values()))
  console.log("EXPRESSION: ", expression)
  console.log("NEXT_CURSOR: ", next_cursor)
  // remember: "expression" is how the Cloudinary API refers to a search term
  params.append('expression', expression)
  params.append('max_results', "2") //! UPDATE THIS # AFTER TESTING
  
  //* Need to include [] so that with_field is treated as an array, not a string
  //* otherwise only the second with_field will be sent
  params.append('with_field[]', "context")
  params.append('with_field[]', "metadata")
  
  // //* to pull out the nextCursor value passed into the request
  // const regex = /=(.+)/g; // match '=' and capture everything that follows
  // const matcher = req.url?.match(regex)

  // console.log("MATCHER OBJ: ", matcher)
  
  if (next_cursor) {
    params.append("next_cursor", next_cursor) // getting rid of the = from the string & assigning it to next_cursor
  }

  console.log("GET PARAMS: ", params)

  const res = await fetch(BASE_URL + '/resources/search' + `?${params}`, {
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