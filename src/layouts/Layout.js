import React from "react"
import HeaderSection from "../components/HeaderSection/HeaderSection"
import layoutStyles from "./layout.module.scss"
import FooterSection from "../components/FooterSection/FooterSection"
import configMetaData from "../../content/data/configMetaData.json"
import CookieConsent from "react-cookie-consent"


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
  
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          cookieName="myAwesomeCookieName2"
          style={{ background: "white",
            color: "rgb(24, 27, 94)",
            borderTop: "1px solid rgb(24, 27, 94)",
          }}
          buttonStyle={{ color: "white", fontSize: "13px", backgroundColor: "rgb(24, 27, 94)" }}
          expires={150}
        >
          {configMetaData.cookies}{" "}
        </CookieConsent>
        
    </section>
  )
}
