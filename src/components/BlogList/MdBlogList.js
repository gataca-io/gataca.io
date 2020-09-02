import React from "react"
import { Link } from "gatsby"
import useBlogData from "../../static_queries/useMdBlogData"
import blogListStyles from "./bloglist.module.scss"
import StackGrid from "react-stack-grid"
import { SizeMe } from "react-sizeme"

import Img from "gatsby-image"

function BuildImage(image) {
  const imageEl = image.hero_image
  return !!imageEl ? <Img
    fluid={
      imageEl.childImageSharp.fluid
    }
    alt={image.title}
  /> : null
}

export default function BlogList(props) {
  const blogData = useBlogData()
  
  function renderBlogData() {
    return (
      <SizeMe>
        {({ size }) => {
          return <StackGrid
            columnWidth={
              (size.width >= 672 && size.width <= 1100) ? "50%"
                : size.width <= 672 ? "100%"
                : "33%"
            }
            gutterWidth={
              20
            }
            gutterHeight={
              20
            }
          >
            {blogData
              .filter(blog => blog.node.frontmatter.title !== "")
              .map(blog => {
                return (
                  <div className={`${blogListStyles.post}`} key={blog.node.id}>
                    <Link to={`/insights/${blog.node.fields.slug}`}>
                      <li className={`${blogListStyles.li}`} key={blog.node.fields.slug}>
                        <div className={blogListStyles.list__hero}>
                          {BuildImage(blog.node.frontmatter)}
                        </div>
                        <div className={blogListStyles.list__info}>
                          <h2>{blog.node.frontmatter.title}</h2>
                          <h3>{blog.node.frontmatter.date}</h3>
                          <p>{blog.node.excerpt}</p>
                        </div>
                      </li>
                    </Link>
                  </div>
                )
              })}
          </StackGrid>
        }}
      </SizeMe>
    )
  }
  
  return (
    <section>
      <div className={`${blogListStyles.mainContainer}`}>
        {
          // setTimeout(el => {
            renderBlogData()
          // }, 100)
        }
      </div>
    </section>
  )
}

