// Might need some tweaking here to account for custom fields I've enabled in Cloudinary, like with "context"
type CloudImage = {
  asset_id: string,
  public_id: string,
  format: string,
  version: number,
  resource_type: string,
  type: string,
  created_at: Date,
  bytes: number,
  width: number,
  height: number,
  folder: string,
  url: string,
  secure_url: string,
  context: {
    custom: {
      alt: string,
    },
  },
  metadata: {
    caption: string,
    country: [string],
  },
  tags?: [string],
}

type ProfilePic = {
  id: number,
  path: string,
  name: string,
  location: string,
  alt: string,
}