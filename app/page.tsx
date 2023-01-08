import "./globals.css"
import Image from "next/image"
import discordDemo from "../public/discord-clone-demo.webp"
import waldoDemo from "../public/waldo-demo.webp"
import shoppingDemo from "../public/shopping-cart-demo.webp"
import battleshipDemo from "../public/battleship-demo.webp"

export default function Home() {
  function handleIntroAnimation(e: any) {
    if (e === "frame")
      document.getElementById("intro-lottie")!.style.display = "none"
  }
  return (
    <main className="flex flex-col px-3">
      <article className="grid min-h-screen place-content-center text-center">
        <h1 className="text-9xl">Luc Ledo</h1>
        <h2 className="mb-2 text-2xl italic">Fullstack Web Developer</h2>
        <figure>
          <q>
            "<span className="line-through">Chess</span> Code speaks for itself"
          </q>
          <figcaption>
            &mdash;<cite>Hans Niemann</cite>
          </figcaption>
        </figure>
      </article>
      <Image className="w-[1000px]" src={discordDemo} alt="discord-demo" />
      <Image className="w-[1000px]" src={waldoDemo} alt="waldo-demo" />
      <Image className="w-[1000px]" src={shoppingDemo} alt="shopping-demo" />
      <Image
        className="w-[1000px]"
        src={battleshipDemo}
        alt="battleship-demo"
      />
    </main>
  )
}
