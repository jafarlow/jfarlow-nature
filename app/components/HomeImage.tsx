"use client"
/* eslint-disable @next/next/no-img-element */

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
    // <img src={profilePic.path} alt={profilePic.alt} key={profilePic.id}/>
    <Image src={profilePic.path || ""} alt={profilePic.alt || ""} key={profilePic.id} width={800} height={450} unoptimized={true} className="profile-pic"/>
  )
}
