import Link from "next/link"
import { Stars } from "../(components)/Animations"
import PocketBase from "pocketbase"

async function getPosts() {
  const pb = new PocketBase("http://127.0.0.1:8090")
  const records = await pb.collection("posts").getFullList(200, {
    sort: "-created",
  })
  return records
}

export default async function Blog() {
  const posts = await getPosts()
  return (
    <main className="min-h-screen overflow-hidden px-3 pt-16">
      <Stars />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </main>
  )
}

function Post({ post }: any) {
  const { id, title, description } = post
  return (
    <Link href={`/blog/${id}`}>
      <article className="mb-5 rounded-xl p-3 shadow-2xl outline outline-1 outline-neutral-500">
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
      </article>
    </Link>
  )
}
