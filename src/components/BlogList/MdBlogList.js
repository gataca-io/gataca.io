import React from "react"
import { Link } from "gatsby"
import useBlogData from "../../static_queries/useMdBlogData"
import blogListStyles from "./bloglist.module.scss"
import SafeImage from "../SafeImage"

import Img from 'gatsby-image'

export default function BlogList() {
  const blogData = useBlogData()
  function renderBlogData() {
    return (
      <React.Fragment>
      {/*<div className={`bx--row ${blogListStyles.row}`}>*/}
        {blogData
          .filter(blog => blog.node.frontmatter.title !== "")
          .map(blog => {
            return (
              <Link className={`${blogListStyles.post}`} to={`/insights/${blog.node.fields.slug}`} key={blog.node.id}>
                <li className={`${blogListStyles.li}`} key={blog.node.fields.slug}>
                  <div className={blogListStyles.list__hero}>
                    <Img
                      fluid={
                        blog.node.frontmatter.hero_image.childImageSharp.fluid
                      }
                      alt={blog.node.frontmatter.title}
                    />
                  </div>
                  <div className={blogListStyles.list__info}>
                    <h2>{blog.node.frontmatter.title}</h2>
                    <h3>{blog.node.frontmatter.date}</h3>
                    <p>{blog.node.excerpt}</p>
                  </div>
                </li>
              </Link>
            )
          })}
      {/*</div>*/}
      </React.Fragment>
    )
  }
  return (
    <section>
      <ul className={`${blogListStyles.mainContainer}`}>{renderBlogData()}</ul>
    </section>
  )
}

