import { graphql, useStaticQuery } from "gatsby"

export default function useJobsData() {
  const data = useStaticQuery(graphql`
      {
          allMarkdownRemark(
              sort: {
                  order: DESC,
                  fields: [frontmatter___date]
              },
              filter: {
                  fileAbsolutePath: {regex: "/jobs/.*\\\\.md$/"}
              }
          ) {
              edges {
                  node {
                      fields {
                          slug
                      }
                      frontmatter {
                          title
                          description
                          date
                      }
                  }
              }
          }
      }
  `)
  return data.allMarkdownRemark.edges
}

