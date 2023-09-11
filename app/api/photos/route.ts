import { NextResponse } from "next/server"
import { BASE_URL, API_KEY, API_SECRET } from "../../lib/auth"
import { NextRequest } from "next/server"
import { limiter } from "../config/limiter"

export async function GET(req: NextRequest) {
  const params = new URLSearchParams()

  params.append('max_results', "12")
  params.append('context', "true")
  
  //* parse the input req to get any params that were passed in
  const requrl = new URLSearchParams(req.url)
  const [ next_cursor ] = Array.from(requrl.values())

  if (next_cursor) {
    params.append("next_cursor", next_cursor) // getting rid of the = from the string & assigning it to next_cursor
  }

  const remainingRequests = await limiter.removeTokens(1)

  if (remainingRequests < 0) {
    return new NextResponse(null, {
      status: 429,
      statusText: "Too many requests",
      headers: {
        "Content-Type": "text/plain",
      }
    })
  }

  const res = await fetch(BASE_URL + '/resources/image' + `?${params}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic " + btoa(`${API_KEY}:${API_SECRET}`)
    },
  })

  const responseJson = await res.json()

  return NextResponse.json(responseJson)
}