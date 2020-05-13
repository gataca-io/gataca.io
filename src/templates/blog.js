import React, { Fragment } from "react"
import Layout from "./../layouts/Layout"
import { graphql, Link } from "gatsby"
import useBlogData from '../static_queries/useBlogData'
import blogTemplateStyles from "../styles/templates/blog.module.scss"
//this component handles the blur img & fade-ins
import Img from 'gatsby-image'
import SafeImage  from "../components/SafeImage"

export default function Blog(props) {
  const data = props.data.wordpressPost
  const allBlogData = useBlogData()
  const nextSlug = getNextSlug(data.slug)

  function getNextSlug(slug) {
    const allSlugs = allBlogData.edges.map(blog => {
      return blog.node.slug
    })
    const nextSlug = allSlugs[allSlugs.indexOf(slug) + 1]
    if(nextSlug !== undefined && nextSlug !== '') {
      return nextSlug
    } else {
      return allSlugs[0]
    }
  }
  
  console.log(data);

  const page = <Layout>
    <article className={blogTemplateStyles.blog}>
      <figure className={blogTemplateStyles.blog__hero}>
        <SafeImage media={data.featured_media} alt={data.title}></SafeImage>
      </figure>
      <div className={blogTemplateStyles.blog__info}>
        <h1>{data.title}</h1>
        <h3>{data.date}</h3>
      </div>
      <div
        className={blogTemplateStyles.blog__body}
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></div>
      <div className={blogTemplateStyles.blog__footer}>
        <h2>
          Written By: {data.author.name}
        </h2>
        <Link to={`blog/${nextSlug}`} className={blogTemplateStyles.footer__next}>
          <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" x="0px" y="0px" viewBox="0 0 26 26" enableBackground="new 0 0 26 26" >
            <path d="M23.021,12.294l-8.714-8.715l-1.414,1.414l7.007,7.008H2.687v2h17.213l-7.007,7.006l1.414,1.414l8.714-8.713  C23.411,13.317,23.411,12.685,23.021,12.294z"/>
          </svg>
        </Link>
      </div>
    </article>
  </Layout>
  
  return page
}

//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
export const getPostData = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      id
      title
      content
        date
        author {
            name
            slug
        }
      featured_media {
        source_url
        alt_text
        media_details {
          width
        }
      }
      categories {
        id
        name
        path
      }
#      tags {
#        id
#        title
#        path
#      }
    }
  }
`

