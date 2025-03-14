import React from "react"
import { Helmet } from "react-helmet-async"
import { gatacaURL, twitterHandler } from "../../../data/globalData"
import { SeoModel, StrapiImageModel } from "../../../interfaces/interfaces"
import { images } from "../../../images/images"

export const SeoHelmet: React.FC<SeoModel> = props => {
  const {
    metaTitle,
    metaDescription,
    rrssImg,
    keywords,
    canonicalURL,
    alternateURL,
  } = props

  const getSeoRRSSImgURL = (image?: StrapiImageModel) =>
    image?.data?.attributes?.url ? image?.data?.attributes?.url : undefined

  return (
    <Helmet>
      <html lang="en" />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {!!canonicalURL?.length && <link rel="canonical" href={canonicalURL} />}
      {alternateURL?.data?.map(item => {
        const { url, hreflangLocale } = item.attributes
        return (
          <link
            key={"hrefLangLocale__" + Math.random()}
            rel="alternate"
            href={url}
            hreflang={hreflangLocale}
          />
        )
      })}

      {!!keywords?.length && <meta name="keywords" content={keywords} />}
      {/*FACEBOOK*/}
      <meta property="og:url" content={gatacaURL} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      {rrssImg && (
        <meta
          property="og:image"
          content={
            (process.env.STRAPI_API_URL &&
              process.env.STRAPI_API_URL + getSeoRRSSImgURL(rrssImg)) ||
            ""
          }
        />
      )}
      {/*TWITTER*/}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {rrssImg && (
        <meta
          name="twitter:image"
          content={
            (process.env.STRAPI_API_URL &&
              process.env.STRAPI_API_URL + getSeoRRSSImgURL(rrssImg)) ||
            ""
          }
        />
      )}
      <meta name="twitter:site" content={gatacaURL} />
      <meta name="twitter:creator" content={twitterHandler} />
      {/*WEB SAVED IN STARTING SCREEN*/}
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="mask-icon"
        href={images.favicon}
        sizes="32x32"
        type="image/png"
      />
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
