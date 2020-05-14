import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query getMetadata {
      site {
        siteMetadata {
          title
          metaTitle
          metaDescription
        }
      }
    }
  `)
  return data.site.siteMetadata
}

