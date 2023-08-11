import { NextResponse } from "next/server"
import { BASE_URL, API_KEY, API_SECRET } from "../lib/auth"

export async function GET(nextCursor?: string) {
  const params = new URLSearchParams()

  params.append('context', "true")
  params.append('max_results', "2")
  params.append('tags', "true")
  if (nextCursor) {
    params.append('next_cursor', nextCursor)
  }

  //! In GET requests, there can be no body, so all params must be passed in as part of the URL
  const res = await fetch(BASE_URL + '/resources/image' + `?${params}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic " + btoa(API_KEY+":"+API_SECRET)
    },
    // params: {
    //   max_results: 12,
    //   context: true,
    //   next_cursor : req.query.next_cursor
    // }
  })

  const images: Image[] = await res.json()

  return NextResponse.json(images)
}