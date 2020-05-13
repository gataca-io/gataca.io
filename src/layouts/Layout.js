import React from "react"
import Header from "../components/Header/Header"
import Helmet from "react-helmet"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import layoutStyles from "./layout.module.scss"

export default function Layout(props) {
  const { metaTitle, metaDescription, title } = useSiteMetadata()
  return (
    <section
      className={`${layoutStyles.layout} ${
        props.page === "info" &&
        layoutStyles.info_page}`}
      style={{
        backgroundColor: props.bgColor,
      }}
    >
      <Helmet>
        <html lang="en" />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <Header page={props.page} title={title} />
      <div className={layoutStyles.content}>{props.children}</div>
    </section>
  )
}
