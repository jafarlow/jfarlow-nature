import { NextResponse } from "next/server"
import { BASE_URL, API_KEY, API_SECRET } from "../lib/auth"

export async function GET() {
  const params = new URLSearchParams()

  // params.append('context', "true")
  // params.append('tags', "true")
  params.append('max_results', "1")
  params.append('expression', "birds")
  
  //* Need to include [] so that with_field is treated as an array, not a string
  //* otherwise only the second with_field will be sent
  params.append('with_field', "context")
  params.append('with_field', "metadata")

  // if (nextCursor) {
  //   params.append('next_cursor', nextCursor)
  // }

  //! In GET requests, there can be no body, so all params must be passed in as part of the URL
  const res = await fetch(BASE_URL + '/resources/search' + `?${params}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic " + btoa(API_KEY+":"+API_SECRET)
    },
  })

  const responseJson = await res.json()

  return NextResponse.json(responseJson)
}