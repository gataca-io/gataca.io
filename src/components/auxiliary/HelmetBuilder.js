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
  
  let url = `${site.siteMetadata.siteUrl}`;
  if (typeof window !== 'undefined') {
    url = `${site.siteMetadata.siteUrl}${window.location.pathname}`
    console.log(url);
  }
  const twitterHandler = `${site.siteMetadata.twitterHandler}`
  
  return (
    <Helmet>
    <html lang="en" />
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
  
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/manifest.json"/>
      <meta name="msapplication-TileColor" content="#ffffff"/>
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
      <meta name="theme-color" content="#ffffff"/>
      
  </Helmet>
  
  
  )
}
