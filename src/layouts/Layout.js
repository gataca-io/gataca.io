import React from "react"
import HeaderSection from "../components/HeaderSection/HeaderSection"
import Helmet from "react-helmet"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import layoutStyles from "./layout.module.scss"
import FooterSection from "../components/FooterSection/FooterSection"
import configMetaData from "../../content/data/configMetaData.json"
import footerSectionData from "../../content/data/footerSectionData.json"
import { BuildHelmet } from "../components/auxiliary/HelmetBuilder"

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
        
        <HeaderSection title={title} link={configMetaData}/>
        
        <div className={layoutStyles.content}>{props.children}</div>
        <FooterSection data={footerSectionData}/>
    </section>
  )
}
