import { NextResponse } from "next/server"
import { BASE_URL, API_KEY, API_SECRET } from "../../lib/auth"

export async function GET() {
  const params = new URLSearchParams()

  params.append('max_results', "1") //! UPDATE THIS # AFTER TESTING
  params.append('context', "true")

  const res = await fetch(BASE_URL + '/resources/image' + `?${params}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic " + btoa(`${API_KEY}:${API_SECRET}`)
    },
  })

  const responseJson = await res.json()

  // see console for printout
  console.log("CONTEXT: ", responseJson.resources[0].context)
  console.log("METADATA: ", responseJson.resources[0].metadata)
  return NextResponse.json(responseJson)
}