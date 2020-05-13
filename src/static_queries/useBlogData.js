import { graphql, useStaticQuery } from "gatsby"

export default function useBlogData() {
/*  data.mdPosts = useStaticQuery(graphql`
    query getBlogData {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "MMMM Do, YYYY")
              author
              title
              hero_image {
                childImageSharp {
                  fluid( maxWidth: 800 ) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            excerpt(pruneLength: 200)
            fields {
              slug
            }
          }
        }
      }
    }
  `)*/
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


