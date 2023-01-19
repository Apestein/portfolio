import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyA7HiQuPsFD7tmDyErHCkQlOSXkowiDJ30",
  authDomain: "portfolio-29949.firebaseapp.com",
  projectId: "portfolio-29949",
  storageBucket: "portfolio-29949.appspot.com",
  messagingSenderId: "680021598475",
  appId: "1:680021598475:web:535d4852f14c1a2c2f020e",
  measurementId: "G-EKTBSG7SBS",
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const revalidate = 60

async function getPosts() {
  try {
    const posts: any[] = []
    const querySnapshot = await getDocs(collection(db, "posts"))
    querySnapshot.forEach((doc) => posts.push(doc.data()))
    return posts
  } catch (error) {
    console.log(error)
  }
}

export default async function Blog() {
  const posts = await getPosts()
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
