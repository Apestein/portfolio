import PocketBase from "pocketbase"

export const revalidate = 60

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
    <section className="min-h-screen pt-16">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  )
}

function Post({ post }: any) {
  const { title, description } = post
  return (
    <a
      href="https://www.freecodecamp.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <article className="mb-5 rounded-xl p-3 shadow-2xl outline outline-1 outline-neutral-500">
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
      </article>
    </a>
  )
}
