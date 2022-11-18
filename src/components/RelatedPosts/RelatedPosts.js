import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { SizeMe } from "react-sizeme"
import StackGrid from "react-stack-grid"
import blogListStyles from "../BlogList/bloglist.module.scss"
import Img from "gatsby-image"
import homeData from "./../../../content/data/homeData.json"
import styles from "./relatedposts.module.scss"

function BuildImage(image) {
  const imageEl = image.hero_image
  return !!imageEl ? (
    <Img
      className={`${blogListStyles.imageContainer}`}
      fluid={imageEl.childImageSharp.fluid}
      alt={image.title}
    />
  ) : null
}

const RelatedPosts = ({}) => {
  const data = useStaticQuery(graphql`
    query getLastBlogs {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        limit: 3
        filter: { fileAbsolutePath: { regex: "/posts/.*\\\\.md$/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "MMMM Do, YYYY")
              title
              hero_image {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            excerpt(pruneLength: 190)
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges

  return (
    <section className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <h3>{homeData.sixthSection.title}</h3>
      </div>
      <SizeMe>
        {({ size }) => {
          return (
            <StackGrid
              appearDelay={20}
              gutterWidth={20}
              gutterHeight={size.width >= 672 ? 10 : 20}
              columnWidth={
                size.width >= 672 && size.width <= 1100
                  ? "27%"
                  : size.width <= 672
                  ? "100%"
                  : "27%"
              }
            >
              {posts
                .filter((blog) => blog.node.frontmatter.title !== "")
                .map((blog) => {
                  return (
                    <div className={styles.post} key={blog.node.id}>
                      <Link to={`/blog/${blog.node.fields.slug}`}>
                        <li key={blog.node.fields.slug}>
                          <div className={styles.list__hero}>
                            {BuildImage(blog.node.frontmatter)}
                          </div>
                          <div className={styles.list__info}>
                            <h3>{blog.node.frontmatter.title}</h3>
                            <p className={styles.date}>
                              {blog.node.frontmatter.date}
                            </p>
                            <p className={styles.excerpt}>
                              {blog.node.excerpt}
                            </p>
                          </div>
                        </li>
                      </Link>
                    </div>
                  )
                })}
            </StackGrid>
          )
        }}
      </SizeMe>
    </section>
  )
}

export default RelatedPosts
