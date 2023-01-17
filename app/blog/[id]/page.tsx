import Image from "next/image"
import PocketBase from "pocketbase"

async function getPost(noteId: string) {
  const pb = new PocketBase("http://127.0.0.1:8090")
  const record = await pb.collection("posts").getOne(noteId)
  return record
}

async function getMeme() {
  const response = await fetch("https://meme-api.com/gimme/ProgrammerHumor")
  const data = await response.json()
  return data.url
}

export default async function Post({ params }: any) {
  const post = await getPost(params.id)
  const memeURL = await getMeme()
  return (
    <main className="min-h-screen px-10 pt-16">
      <article className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <Image
          className="h-auto w-[500px]"
          src={memeURL}
          priority
          width={500}
          height={500}
          alt="meme-pic"
        />
        <cite>Random meme by meme-api</cite>
      </article>
    </main>
  )
}
