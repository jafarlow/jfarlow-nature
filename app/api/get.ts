import getImages from "../lib/getImages";
import { NextApiResponse, NextApiRequest } from "next";

export default async function handler(res: NextApiResponse, req: NextApiRequest) {
  const params = JSON.parse(req.body)
  const results = await getImages(params)

  return res.status(200).json({ ...results })
}