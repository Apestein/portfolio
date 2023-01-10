"use client"
import Lottie from "lottie-react"
import starryBg from "../../public/starry-background.json"

export default function Background() {
  return (
    <Lottie
      className="fixed right-0 -z-10 h-full"
      animationData={starryBg}
      loop={true}
    />
  )
}
