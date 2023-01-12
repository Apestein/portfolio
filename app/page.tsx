import "./globals.scss"
import "./app.css"
import Image from "next/image"
import discordDemo from "../public/discord-clone-demo.webp"
import waldoDemo from "../public/waldo-demo.webp"
import shoppingDemo from "../public/shopping-cart-demo.webp"
import battleshipDemo from "../public/battleship-demo.webp"
import portfolioDemo from "../public/portfolio-demo.webp"
import Contact from "./(components)/Contact"

export default function Home() {
  return (
    <main id="hero-container" className="flex flex-col">
      <div id="stars" className="-z-10"></div>
      <div id="stars2" className="-z-10"></div>
      <div id="stars3" className="-z-10"></div>
      <article className="text-drop-shadow grid min-h-screen place-content-center text-center text-neutral-500 dark:drop-shadow-none">
        <h1 className="clamp-text dark:hover:text-glow group peer flex justify-center gap-[1.5vw] ">
          <p>LUC </p>
          <p className="w-0 overflow-hidden italic opacity-0 transition-all duration-500 sm:group-hover:w-[13ch] sm:group-hover:opacity-100">
            "DUMBFOUNDED"
          </p>
          <p>LEDO</p>
        </h1>
        <h2 className="dark:peer-hover:text-glow mb-2 text-2xl italic">
          Fullstack Web Developer
        </h2>
        <q className="dark:peer-hover:text-glow">
          <span className="line-through">Chess</span> Code speaks for itself
        </q>
        <cite className="dark:peer-hover:text-glow">&mdash;Hans Niemann</cite>
      </article>
      <section className="mb-3 items-start text-xs md:flex md:items-center md:gap-4 md:text-xl">
        <Image
          className="md:max-w-[60vw]"
          src={discordDemo}
          alt="discord-demo"
          placeholder="blur"
        />
        <aside className="grid flex-auto grid-cols-2 place-content-center text-center">
          <b className="col-span-2 text-center">Discord Clone</b>
          <em className="underline">Features</em>
          <em className="underline">Technologies Used</em>
          <ul>
            <li>Authentication</li>
            <li>Message Post/Edit/Delete</li>
            <li>User Profile Picture Change</li>
            <li>Infinite Scroll</li>
            <li>Real Time Update</li>
            <li>Fully Responsive Design</li>
          </ul>
          <ul>
            <li>Vite & Vitest</li>
            <li>Firebase (auth, firestore, storage, and hosting)</li>
            <li>React Testing Library</li>
            <li>Typescript</li>
            <li>Tailwind</li>
          </ul>
        </aside>
      </section>
      <section className="mb-3 items-start text-xs md:flex md:items-center md:gap-4 md:text-xl">
        <Image
          className="md:max-w-[60vw]"
          src={waldoDemo}
          alt="waldo-demo"
          placeholder="blur"
        />
        <aside className="grid flex-auto grid-cols-2 place-content-center text-center">
          <b className="col-span-2 text-center">Where's Waldo</b>
          <em className="underline">Features</em>
          <em className="underline">Technologies Used</em>
          <ul>
            <li>Multiple Maps</li>
            <li>Highscore Leaderboards</li>
            <li>Timer</li>
            <li>Mobile Supported Carousel</li>
            <li>Cheat Option</li>
          </ul>
          <ul>
            <li>Jest with React Testing Library</li>
            <li>Firebase (firestore)</li>
            <li>Typescript</li>
            <li>Styled Components</li>
          </ul>
        </aside>
      </section>
      <section className="mb-3 items-start text-xs md:flex md:items-center md:gap-4 md:text-xl">
        <Image
          className="md:max-w-[60vw]"
          src={shoppingDemo}
          alt="shopping-demo"
          placeholder="blur"
        />
        <aside className="grid flex-auto grid-cols-2 place-content-center text-center">
          <b className="col-span-2 text-center">Shopping Cart</b>
          <em className="underline">Features</em>
          <em className="underline">Technologies Used</em>
          <ul>
            <li>Get Products From API</li>
            <li>Add Products To Cart</li>
            <li>Multiple Pages</li>
            <li>Cart Checkout Modal</li>
            <li>Modern Ecommerce Design</li>
          </ul>
          <ul>
            <li>Fake Store API</li>
            <li>Jest with React Testing Library</li>
            <li>React Router</li>
            <li>Styled Components</li>
            <li>Figma</li>
          </ul>
        </aside>
      </section>
      <section className="mb-3 items-start text-xs md:flex md:items-center md:gap-4 md:text-xl">
        <Image
          className="md:max-w-[60vw]"
          src={battleshipDemo}
          alt="battleship-demo"
          placeholder="blur"
        />
        <aside className="grid flex-auto grid-cols-2 place-content-center text-center">
          <b className="col-span-2 text-center">Discord Clone</b>
          <em className="underline">Features</em>
          <em className="underline">Technologies Used</em>
          <ul>
            <li>Drag and Drop Ships</li>
            <li>Rotate Ships</li>
            <li>Randomize Ship Placement</li>
            <li>Random AI play</li>
          </ul>
          <ul>
            <li>Vanilla Javascript</li>
            <li>Jest Testing</li>
          </ul>
        </aside>
      </section>
      <section className="mb-3 items-start text-xs md:flex md:items-center md:gap-4 md:text-xl">
        <Image
          className="outline outline-1 outline-white md:max-w-[60vw]"
          src={battleshipDemo}
          alt="portfolio-demo"
          placeholder="blur"
        />
        <aside className="grid flex-auto grid-cols-2 place-content-center text-center">
          <b className="col-span-2 text-center">This Website</b>
          <em className="underline">Features</em>
          <em className="underline">Technologies Used</em>
          <ul>
            <li>Fully Responsive Design</li>
            <li>Neat Animations</li>
            <li>Blog Page</li>
            <li>Dark Mode Toggle</li>
            <li>Optimized For Fast Load</li>
          </ul>
          <ul>
            <li>NextJS 13</li>
            <li>TurboPack</li>
            <li>Typescript</li>
            <li>Tailwind</li>
            <li>Vitest Testing</li>
          </ul>
        </aside>
      </section>
      <Contact />
    </main>
  )
}
