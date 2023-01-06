import "./globals.css"

export default function Home() {
  return (
    <main className="flex flex-col justify-center text-center">
      <h1 className="text-9xl">Luc Ledo</h1>
      <h2>Fullstack Web Developer</h2>
      <figure>
        <q>
          "<span className="line-through">Chess</span> Code speaks for itself"
        </q>
        <figcaption>
          &mdash;<cite>Hans Niemann</cite>
        </figcaption>
      </figure>
    </main>
  )
}
