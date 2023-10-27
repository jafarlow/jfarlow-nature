"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import profilePhotoData from "../../profilePhotoData.json"

export default function HomeImage() {
  // using ` | any` here to avoid error on `.path/alt/id` for the {} prior to loading anything into state
  const [profilePic, setProfilePic] = useState<ProfilePic | any>({}) 
  const photos: ProfilePic[] = profilePhotoData.photos 

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    const num = getRandomInt(photos.length)
    setProfilePic(photos[num])
  }, [])

  return (
    <figure className="about-fig">
      <Image 
        src={profilePic.path || ""} 
        alt={profilePic.alt || ""} 
        key={profilePic.id} 
        width={800} 
        height={450} 
        unoptimized={true} 
        placeholder="blur" 
        blurDataURL={"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mNkKHKsZyACMI4qpK9CAG4PC/9UjHYEAAAAAElFTkSuQmCC "} 
        className="about-pic"/>
      <figcaption className="about-fig-cap">{profilePic.location}</figcaption>
    </figure>
  )
}
