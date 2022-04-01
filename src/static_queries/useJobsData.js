import { graphql, useStaticQuery } from "gatsby"

export default function useJobsData() {
  const data = useStaticQuery(graphql`
      {
          allMarkdownRemark(
              sort: {
                  order: DESC,
                  fields: [frontmatter___date]
              },
              filter: 
                {
                    fileAbsolutePath: {regex: "/jobs/.*\\\\.md$/"},
                    frontmatter: {active: { eq: true }}
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
                          active
                          date(formatString: "MMMM Do, YYYY")
                      }
                  }
              }
          }
      }
  `)
  return data.allMarkdownRemark.edges
}

