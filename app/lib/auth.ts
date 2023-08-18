// using "as" here to get rid of default "string | undefined" type
// const CLOUD_NAME = process.env.CLOUD_NAME as string
export const API_KEY = process.env.API_KEY as unknown as number
export const API_SECRET = process.env.API_SECRET as string
export const BASE_URL = `https://api.cloudinary.com/v1_1/drhoch1am`

export const nextCursor = "c0748b7215f565694b552556d8fcbf2e9ccfda60b074d6c7082922556e9703416907e7e5f120723106ea6dd2be199197"