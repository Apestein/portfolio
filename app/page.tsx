import Image from "next/image"
import portfolioDemo from "../public/portfolio-demo.webp"
import Contact from "./(components)/Contact"

export default function Home() {
  return (
    <>
      <article className="text-drop-shadow grid min-h-screen place-content-center text-center text-neutral-500">
        <h1 className="clamp-text dark:hover:text-glow group peer flex justify-center gap-[1.5vw]">
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
      <section className="mb-3 items-start text-xs md:flex md:items-center md:gap-4 xl:text-xl">
        <video autoPlay loop muted className="rounded-xl md:max-w-[60vw]">
          <source src="discord-demo.webm" type="video/webm" />
          <source src="discord-demo.mp4" type="video/mp4" />
        </video>
        <aside className="grid flex-auto grid-cols-2 place-content-center text-center">
          <b className="col-span-2 text-center md:mb-3 xl:text-3xl">
            Discord Clone
          </b>
          <em className="underline">Features</em>
          <em className="underline">Technologies Used</em>
          <ul>
            <li>-Authentication</li>
            <li>-CRUD App</li>
            <li>-User Profile Picture Change</li>
            <li>-Infinite Scroll</li>
            <li>-Real Time Update</li>
            <li>-Fully Responsive Design</li>
          </ul>
          <ul>
            <li>-Vite & Vitest</li>
            <li>-Firebase (auth, firestore, storage, and hosting)</li>
            <li>-React Testing Library</li>
            <li>-Typescript</li>
            <li>-Tailwind</li>
          </ul>
        </aside>
      </section>
      <section className="mb-3 items-start text-xs md:flex md:items-center md:gap-4 xl:text-xl">
        <video autoPlay loop muted className="rounded-xl md:max-w-[60vw]">
          <source src="waldo-demo.webm" type="video/webm" />
          <source src="waldo-demo.mp4" type="video/mp4" />
        </video>
        <aside className="grid flex-auto grid-cols-2 place-content-center text-center">
          <b className="col-span-2 text-center md:mb-3 xl:text-3xl">
            Where's Waldo
          </b>
          <em className="underline">Features</em>
          <em className="underline">Technologies Used</em>
          <ul>
            <li>-Multiple Maps</li>
            <li>-Highscore Leaderboards</li>
            <li>-Timer</li>
            <li>-Mobile Supported Carousel</li>
            <li>-Cheat Option</li>
          </ul>
          <ul>
            <li>-Jest/React Testing Library</li>
            <li>-Firebase (firestore)</li>
            <li>-Typescript</li>
            <li>-Styled Components</li>
          </ul>
        </aside>
      </section>
      <section className="mb-3 items-start text-xs md:flex md:items-center md:gap-4 xl:text-xl">
        <video autoPlay loop muted className="rounded-xl md:max-w-[60vw]">
          <source src="shopping-demo.webm" type="video/webm" />
          <source src="shopping-demo.mp4" type="video/mp4" />
        </video>
        <aside className="grid flex-auto grid-cols-2 place-content-center text-center">
          <b className="col-span-2 text-center md:mb-3 xl:text-3xl">
            Shopping Cart
          </b>
          <em className="underline">Features</em>
          <em className="underline">Technologies Used</em>
          <ul>
            <li>-Get Products From API</li>
            <li>-Transition Animations</li>
            <li>-Multiple Pages</li>
            <li>-Cart Checkout Modal</li>
            <li>-Modern Ecommerce Design</li>
          </ul>
          <ul>
            <li>-Fake Store API</li>
            <li>-Jest/React Testing Library</li>
            <li>-React Router</li>
            <li>-Styled Components</li>
            <li>-Figma</li>
          </ul>
        </aside>
      </section>
      <section className="mb-3 items-start text-xs md:flex md:items-center md:gap-4 xl:text-xl">
        <video autoPlay loop muted className="rounded-xl md:max-w-[60vw]">
          <source src="battleship-demo.webm" type="video/webm" />
          <source src="battleship-demo.mp4" type="video/mp4" />
        </video>
        <aside className="grid flex-auto grid-cols-2 place-content-center text-center">
          <b className="col-span-2 text-center md:mb-3 xl:text-3xl">
            BattleShip
          </b>
          <em className="underline">Features</em>
          <em className="underline">Technologies Used</em>
          <ul>
            <li>-Drag and Drop Ships</li>
            <li>-Rotate Ships</li>
            <li>-Randomize Ship Placement</li>
            <li>-Random AI play</li>
          </ul>
          <ul>
            <li>-Vanilla Javascript</li>
            <li>-Jest Testing</li>
          </ul>
        </aside>
      </section>
      <section className="mb-3 items-start text-xs md:flex md:items-center md:gap-4 xl:text-xl">
        <Image
          className="rounded-xl md:max-w-[60vw]"
          src={portfolioDemo}
          alt="portfolio-demo"
          placeholder="blur"
        />
        <aside className="grid flex-auto grid-cols-2 place-content-center text-center">
          <b className="col-span-2 text-center md:mb-3 xl:text-3xl">
            This Website
          </b>
          <em className="underline">Features</em>
          <em className="underline">Technologies Used</em>
          <ul>
            <li>-Fully Responsive Design</li>
            <li>-CSS Animations</li>
            <li>-Blog Page</li>
            <li>-Dark Mode Toggle</li>
            <li>-Optimized Media Assets</li>
          </ul>
          <ul>
            <li>-NextJS 13</li>
            <li>-TurboPack</li>
            <li>-Typescript</li>
            <li>-Tailwind</li>
            <li>-Vitest Testing</li>
          </ul>
        </aside>
      </section>
      <Contact />
    </>
  )
}
