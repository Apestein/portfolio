import crypto from "crypto"

export default async function Blog() {
  const posts = [
    {
      id: crypto.randomUUID(),
      title: "This Tailwind Twitter Drama Could Have Been Avoided",
      description: "Did you know about this tailwind class sorting hack?",
      link: "https://dev.to/apestein/this-tailwind-twitter-drama-could-have-been-avoided-23cb",
    },
    {
      id: crypto.randomUUID(),
      title: "Intuitive Vim Keybinding For VScode",
      description:
        "Is vim hard to pick up? Well, not anymore with my intuitive keybindings for VScode vim extension.",
      link: "https://dev.to/apestein/intuitive-vim-keybinding-for-vscode-2ga0",
    },
  ]
  return (
    <section className="min-h-screen pt-16">
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  )
}

function Post({ post }: any) {
  const { title, description, link } = post
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <article className="mb-5 rounded-xl p-3 shadow-2xl outline outline-1 outline-neutral-500">
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
      </article>
    </a>
  )
}
