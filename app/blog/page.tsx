import Link from "next/link"

export default function Blog() {
  return (
    <main className="min-h-screen px-3 pt-10">
      <Post title="First Blog" description="My First Blog" />
      <Post title="Second Blog" description="My Second Blog" />
    </main>
  )
}

function Post({ title, description, id }: any) {
  return (
    <Link href={`/blog/${title.split(" ").join("")}`}>
      <article className="mb-5 p-3 outline outline-1 outline-white">
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
      </article>
    </Link>
  )
}
