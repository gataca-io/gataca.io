import React from "react"
import HeaderSection from "../components/HeaderSection/HeaderSection"
import layoutStyles from "./layout.module.scss"
import FooterSection from "../components/FooterSection/FooterSection"
import configMetaData from "../../content/data/configMetaData.json"
import CookieConsent from "react-cookie-consent"


export default function Layout(props) {
  // const { title } = useSiteMetadata()
  
  const removeCookies = () => {
    const _hsp = window._hsp = window._hsp || [];
    document.getElementById("removeCookies").onclick = function() {
      _hsp.push(['revokeCookieConsent']);
    };
    document.cookie = '_ga' + '=; Path=/; Domain=.example.com; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = '_gid' + '=; Path=/; Domain=.example.com; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'gataca_io_accepted' + '=; Path=/; Domain=.example.com; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
  
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
          debug={true}
          buttonText="Accept"
          declineButtonText={"Decline"}
          onAccept={() =>{
          
          }}
          onDecline={() => {
            removeCookies();
          }}
          cookieName="gataca_io_accepted"
          enableDeclineButton
          style={{ background: "white",
            color: "rgb(24, 27, 94)",
            border: "1px solid rgb(24, 27, 94)",
            boxShadow: "0px 5px 10px #00000010",
            maxWidth: 400,
            lineHeight:1.3,
            margin: 50
          }}
          buttonStyle={{ color: "white", fontSize: "13px", backgroundColor: "rgb(24, 27, 94)" }}
          declineButtonStyle={{ color: "rgb(24, 27, 94)", fontSize: "13px", backgroundColor: "white" }}
          expires={150}
        >
          
          {configMetaData.cookies}{" "}
        </CookieConsent>
        
    </section>
  )
}
