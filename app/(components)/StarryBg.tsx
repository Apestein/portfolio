"use client"
import Lottie from "lottie-react"
import starryBg from "../../public/starry-background.json"

export default function Background() {
  return <Lottie animationData={starryBg} loop={true} />
}
