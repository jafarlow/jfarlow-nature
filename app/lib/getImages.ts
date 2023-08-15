// import { NextResponse } from "next/server"
import { BASE_URL, API_KEY, API_SECRET } from "./auth"

export default async function getImages(nextCursor?: string) {
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
  })

  const responseJson = await res.json()

  return responseJson
}