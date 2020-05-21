import React from "react"
import HeaderSection from "../components/HeaderSection/HeaderSection"
import Helmet from "react-helmet"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import layoutStyles from "./layout.module.scss"
import FooterSection from "../components/FooterSection/FooterSection"

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
        <HeaderSection title={title} />
        
        <div className={layoutStyles.content}>{props.children}</div>
    
        <FooterSection/>
    </section>
  )
}
