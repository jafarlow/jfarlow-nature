import { NextResponse } from "next/server"

// using "as" here to get rid of default "string | undefined" type
const CLOUD_NAME = process.env.CLOUD_NAME as string
const API_KEY = process.env.API_KEY as unknown as number
const API_SECRET = process.env.API_SECRET as string

const BASE_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}`

export async function GET(req: Request) {
  const res = await fetch(BASE_URL + '/resources/image', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic " + btoa(API_KEY+":"+API_SECRET)
    },
    params: {
      max_results: 12,
      context: true,
      next_cursor : req.query.next_cursor
    }
  })

  const images: Todo[] = await res.json()

  return NextResponse.json(todos)
}