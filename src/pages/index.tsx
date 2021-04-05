import { Link } from "gatsby"
import { Layout } from "../components/Layout"
import { PostPreview } from "../components/PostPreview"
import { usePosts } from "../hooks/use-posts"

export default function Home() {
  const posts = usePosts()
  console.log(posts)
  return (
    <Layout>
      <h1>Hello home page</h1>
      {posts.map(post => (
        <PostPreview post={post} key={post.slug} />
      ))}
      <Link to="/about">About</Link>
    </Layout>
  )
}
