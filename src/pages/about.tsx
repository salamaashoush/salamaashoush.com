import { Link } from "gatsby"
import React from "react"
import { Layout } from "../components/layout"

export default function About() {
  return (
    <Layout>
      <h1>Hello about</h1>

      <Link to="/">Home </Link>
    </Layout>
  )
}
