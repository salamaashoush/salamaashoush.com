import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "../components/MainLayout"
import { ReadLink } from "../components/ReadLink"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }
  }
`
type Props = {
  data: { mdx: { frontmatter: { title: string }; body: string } }
}
export default function PostTemplate({ data: { mdx: post } }: Props) {
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <MDXRenderer>{post.body}</MDXRenderer>
      <ReadLink to="/">&larr; back to all posts</ReadLink>
    </Layout>
  )
}
