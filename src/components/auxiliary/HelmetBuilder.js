import Helmet from "react-helmet"
import React from "react"
import { useStaticQuery, graphql } from 'gatsby';

function buildMetaTitle(title) {
    return (!!title) ? <title>{title}</title> : null;
}

function buildMetaDescription(description) {
    return (!!description) ? <meta name="description" content={description}/> : null;
}

export const BuildHelmet = ({title, description, facebookImg, twitterImg, linkedInImg}) => {
  console.log({title, description, facebookImg, twitterImg, linkedInImg})
  const { site } = useStaticQuery(
    graphql`
        query {
            site {
                siteMetadata {
                    title
                    metaTitle
                    metaDescription
                    siteUrl
                    twitterHandler
                }
            }
        }
    `,
  );
  
  const url = `${site.siteMetadata.siteUrl}${window.location.pathname}`
  const twitterHandler = `${site.siteMetadata.twitterHandler}`
  
  return (
    <Helmet>
    {buildMetaTitle(title)}
    {buildMetaDescription(description)}
    <link rel="canonical" href={url} />
    
    {/*FACEBOOK*/}
    
    <meta property="og:url"                content={url} />
    <meta property="og:type"               content="article" />
    <meta property="og:title"              content={title} />
    <meta property="og:description"        content={description} />
    <meta property="og:image"              content={facebookImg} />
    {/*<meta property="og:image:width"              content="pixels" /> CHANGE AMMOUT*/}
    {/*<meta property="og:image:height"              content="pixels" /> CHANGE AMMOUT*/}
    {/*<meta property="og:image:type"              content="image/jpeg | image/gif | image/png" /> CHANGE AMMOUT*/}
    
    {/*TWITTER*/}
    
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:site" content={url}/>
    <meta name="twitter:creator" content={twitterHandler}/>
    <meta name="twitter:title" content={title}/>
    <meta name="twitter:description" content={description}/>
    <meta name="twitter:image" content={twitterImg}/>
    
    {/*LINKED IN*/}
    <meta property="og:title" content={title}/>
    <meta property="og:image" content={linkedInImg}/>
    <meta property="og:description" content={description}/>
    <meta property="og:url" content={url} />
  </Helmet>
  )
}
