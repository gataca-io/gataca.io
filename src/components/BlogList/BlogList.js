import React from "react"
import { Link } from "gatsby"
import useBlogData from "../../static_queries/useMdBlogData"
import blogListStyles from "./bloglist.module.scss"
import Img from 'gatsby-image'
import SafeImage from "../SafeImage"

export default function BlogList() {
  const data = useBlogData()
  const wordpressBlogData = data.edges;
  
  function renderWorpressBlogData() {
    return (
      <div>
        {wordpressBlogData
          .filter(blog => blog.node.title !== "")
          .map(blog => {
            return (
              <Link to={`/insights/${blog.node.slug}`} key={blog.node.id}>
                <li className={blogListStyles.li} key={blog.node.slug}>
                  <div className={blogListStyles.list__hero}>
                    <SafeImage media={blog.node.featured_media}></SafeImage>
                  </div>
                  <div className={blogListStyles.list__info}>
                    <h2>{blog.node.title}</h2>
                    <h3>{blog.node.date}</h3>
                    <p dangerouslySetInnerHTML={{ __html: blog.node.excerpt }}></p>
                  </div>
                </li>
              </Link>
            )
          })}
      </div>
    )
  }
  
  return (
    <section>
      <ul className={blogListStyles.list}>{renderWorpressBlogData()}</ul>
    </section>
  )
}

