import React from "react"
import { Helmet } from "react-helmet-async"
import { gatacaURL, twitterHandler } from "../../../data/globalData"

interface IHelmet {
  title: string
  description: string
  keywords: string
  rrssImg?: string
  canonicalURL?: string
}

export const SeoHelmet: React.FC<IHelmet> = props => {
  const { title, description, rrssImg, keywords, canonicalURL } = props

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {!!canonicalURL?.length && <link rel="canonical" href={canonicalURL} />}
      {!!keywords?.length && <meta name="keywords" content={keywords} />}

      {/*FACEBOOK*/}
      <meta property="og:url" content={gatacaURL} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={
          (process.env.STRAPI_API_URL &&
            process.env.STRAPI_API_URL + rrssImg) ||
          ""
        }
      />

      {/*TWITTER*/}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={
          (process.env.STRAPI_API_URL &&
            process.env.STRAPI_API_URL + rrssImg) ||
          ""
        }
      />
      <meta name="twitter:site" content={gatacaURL} />
      <meta name="twitter:creator" content={twitterHandler} />

      {/*WEB SAVED IN STARTING SCREEN*/}
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="manifest" href="/manifest.json" />

      {/*TODO: Add icons when they are created*/}
      {/* <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      /> */}
    </Helmet>
  )
}
