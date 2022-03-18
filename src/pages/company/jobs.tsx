import React, { useState, useEffect } from "react"
import styles from "./jobs.module.scss"
import pressData from "../../../content/data/pressPage.json"
import Layout from "../../layouts/Layout"
import HeadLineSection from "../../components/HeadLineSection/HeadLineSection"
import useJobsData from "../../static_queries/useJobsData"
import { Link } from "gatsby"

export default function Jobs() {

  const jobsData = useJobsData()
  console.log(jobsData);

  useEffect(() => {

  }, [])

  return (
    <Layout>
      <div className={styles.mainContainer}>
        <div className={styles.contactHeader}>
          <HeadLineSection
            big
            title={"Jobs"}
            description={"Come and build with us"}
          />
        </div>
        <section className={styles.jobSection}>
          {jobsData.map((el: any) => {
            return <Link to={"/jobs/" + el.node.fields.slug}>
              <div>
              <h3>{el.node.frontmatter.title}</h3>
              <p>{el.node.frontmatter.description}</p>
              {/*<p>{el.node.frontmatter.date}</p>*/}
              </div>
            </Link>
          })}
        </section>
      </div>
    </Layout>
  )
}

//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
/*export const query = graphql`
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
                }
            }
        }
    }
`*/

/*

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`
*/
