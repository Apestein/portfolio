import PocketBase from "pocketbase"
async function getPost(noteId: string) {
  const pb = new PocketBase("http://127.0.0.1:8090")
  const record = await pb.collection("posts").getOne(noteId)
  return record
}

export default async function Post({ params }: any) {
  console.log(params)
  const post = await getPost(params.id)
  return (
    <article className="h-screen pt-16">
      <h1 className="text-3xl">{post.title}</h1>
      <p className="">{post.content}</p>
    </article>
  )
}
