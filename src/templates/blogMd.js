import React, { Fragment } from "react"
import Layout from "./../layouts/Layout"
import { graphql } from "gatsby"
// import useBlogData from "../static_queries/useMdBlogData"
import blogTemplateStyles from "../styles/templates/blog.module.scss"
//this component handles the blur img & fade-ins
import Img from "gatsby-image"
import { BuildHelmet } from "../components/auxiliary/HelmetBuilder"
import cx from "classnames"

const definedSlug = "decentralized-finance-self-sovereign-identity-a-tale-of-decentralization-a-new-paradigm-of-trust"

function buildHeroImage(frontmatter, slug) {
  const heroImage = frontmatter.hero_image
  return !!heroImage ? (
    <figure className={cx(
      slug === definedSlug ? blogTemplateStyles.blog__hero_bottom : blogTemplateStyles.blog__hero,
    )}>
      <Img
        fluid={frontmatter.hero_image.childImageSharp.fluid}
        alt={frontmatter.title}
      />
    </figure>
  ) : (
    <Fragment/>
  )
}

export default function BlogMd(props) {
  const data = props.data.markdownRemark
  
  function passImageIfExist(image) {
    return !!image ? image.publicURL : null
  }
  
  return (
    <Layout>
      
      <BuildHelmet
        title={
          data.frontmatter.meta_data.title
        }
        description={
          data.frontmatter.meta_data.description
        }
        facebookImg={passImageIfExist(
          data.frontmatter.meta_data.image ? data.frontmatter.meta_data.image : "",
        )}
        linkedInImg={passImageIfExist(
          data.frontmatter.meta_data.image ? data.frontmatter.meta_data.image : "",
        )}
        twitterImg={passImageIfExist(
          data.frontmatter.meta_data.image ? data.frontmatter.meta_data.image : "",
        )}
      />
      
      <article className={blogTemplateStyles.blog}>
        {/*HERO IMAGE*/}
        {buildHeroImage(data.frontmatter, data.fields.slug)}
        <div className={blogTemplateStyles.blog__info}>
          <h1>{data.frontmatter.title}</h1>
          {data.frontmatter.date && <h3>{data.frontmatter.date}</h3>}
        </div>
        <div
          className={blogTemplateStyles.blog__body}
          dangerouslySetInnerHTML={{ __html: data.html }}
        />
        
      </article>
    </Layout>
  )
}

//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
export const getPostData = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        hero_image {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid
            }
          }
          publicURL
        }
        meta_data {
          description
          title
          imageData {
            childImageSharp {
              fluid(maxWidth: 1500) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
        }
      }
      html
    }
  }
`
