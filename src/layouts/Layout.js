import React from "react"
import HeaderSection from "../components/HeaderSection/HeaderSection"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import layoutStyles from "./layout.module.scss"
import FooterSection from "../components/FooterSection/FooterSection"
import configMetaData from "../../content/data/configMetaData.json"


export default function Layout(props) {
  // const { title } = useSiteMetadata()
  
  return (
      <section
        className={`${layoutStyles.layout} ${
          props.page === "info" &&
          layoutStyles.info_page}`}
        style={{
          backgroundColor: props.bgColor,
        }}
      >
        
        <HeaderSection title={configMetaData.title} link={configMetaData}/>
        
        <div className={layoutStyles.content}>
          {props.children}
        </div>
        
        <FooterSection />
    </section>
  )
}
