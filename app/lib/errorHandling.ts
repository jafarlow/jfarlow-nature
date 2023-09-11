export default function errorHandling(res: Response) {
  let message = ""
  if (res.status === 401) {
    // thrown if authorization is invalid, which would be thrown if API key/secret or cloud name has changed
    message = "Something went wrong with accessing the data. Please email Jacob at jfarlownature@gmail.com to let him know you received error code 401"
  }
  if (res.status === 420) {
    // thrown if Cloudinary has rate limited me. Probs means I've overshot my data allowance for the month
    message = "Jacob's in trouble with Cloudinary. Please email him at jfarlownature@gmail.com and let him know you received error code 420"
  }
  if (res.status === 429) {
    // 429 comes from custom limiter
    message = "Too many attempts. I appreciate your enthusiasm, but let's pause for a bit. Try again in a minute or two."
  }
  throw new Error(`Status code: ${res.status} : ${message}`)
}