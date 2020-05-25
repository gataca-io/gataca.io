/*
import { graphql, useStaticQuery } from "gatsby"

export default function useBlogData() {
  const data = useStaticQuery(graphql`
      query postsWordpress {
          allWordpressPost {
              pageInfo {
                  pageCount
                  currentPage
              }
              edges {
                  node {
                      id
                      title
                      path
                      slug
                      excerpt
                      featured_media {
                          source_url
                          alt_text
                          media_details {
                              width
                          }
                      }
                  }
              }
          }
      }
  `)
  return data.allWordpressPost
}


*/
