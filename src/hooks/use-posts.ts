import { graphql, useStaticQuery } from "gatsby"
import { IPost } from "../models/blog"

export function usePosts(): IPost[] {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            date
            title
            slug
            imageAlt
            image {
              publicURL
            }
          }
          excerpt
        }
      }
    }
  `)
  return data.allMdx.nodes.map(
    ({
      frontmatter: {
        date,
        title,
        slug,
        image: { publicURL },
        imageAlt,
      },
      excerpt,
    }) => ({
      date,
      title,
      slug,
      image: publicURL,
      imageAlt,
      excerpt,
    })
  )
}
