import { NextResponse } from "next/server"
import { BASE_URL, API_KEY, API_SECRET } from "../../lib/auth"

export async function GET() {
  const params = new URLSearchParams()

  params.append('max_results', "12") //* # of tags is currently less than 12

  const res = await fetch(BASE_URL + '/tags/image' + `?${params}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic " + btoa(`${API_KEY}:${API_SECRET}`)
    },
  })

  const responseJson = await res.json()

  // see console for printout
  console.log("TAGS: ", responseJson.tags)
  return NextResponse.json(responseJson.tags)
}