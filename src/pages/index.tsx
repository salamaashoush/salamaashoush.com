import { Link } from "gatsby"
import { Layout } from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1>Hello home page</h1>
      <Link to="/about">About</Link>
    </Layout>
  )
}
