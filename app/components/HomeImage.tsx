"use client"
import { useEffect, useState } from "react"
import profilePhotoData from "../../profilePhotoData.json"

export default function HomeImage() {
  const [profilePic, setProfilePic] = useState<{}>({})
  const profile = profilePhotoData.photos 

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    console.log(profile)
    const num = getRandomInt(profile.length)
    console.log("JUST ONE: ", profile[num])
    setProfilePic(profile[num])
  }, [])

  return (
    <img src={profilePic.path} alt={profilePic.alt} key={profilePic.id}/>
  )
}
