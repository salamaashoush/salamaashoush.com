import { graphql, useStaticQuery } from "gatsby"

export function useSiteMetaData() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          title
          author
        }
      }
    }
  `)
  return data.site.siteMetadata
}
