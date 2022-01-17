import React, { useEffect } from "react"
import HeaderSection from "../components/HeaderSection/HeaderSection"
import layoutStyles from "./layout.module.scss"
import FooterSection from "../components/FooterSection/FooterSection"
import configMetaData from "../../content/data/configMetaData.json"

import mixpanel from 'mixpanel-browser';
export default function Layout(props) {
  
  const removeAnalyticsCookies = () => {
    // console.log("removeAnalitics")
    document.cookie = "_ga" + "=; Path=/; Domain=.gataca.io; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    document.cookie = "_gid" + "=; Path=/; Domain=.gataca.io; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    document.cookie = "gataca_io_accepted" + "=; Path=/; Domain=.gataca.io; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    document.cookie = "_gat_UA-133561010-1" + "=; Path=/; Domain=.gataca.io; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    document.cookie = "fs_uid" + "=; Path=/; Domain=.gataca.io; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
  }
  
  const deleteAllCookies = () => {
    // console.log("deleteAllCookies")
    if (typeof document !== `undefined`) {
      const cookies = document.cookie.split(";")
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i]
        const eqPos = cookie.indexOf("=")
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
        document.cookie = name + "=; Path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
      }
    }
  }
  
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  
  useEffect(() => {
    mixpanel.init('358bba736311028757bfcda6b89b3983', {debug: true});
    mixpanel.track('Sign up');
    const hubspotStateCookie = getCookie("__hs_cookie_cat_pref")
    // console.log("HUBSPOT COOKIE => ", hubspotStateCookie)
    if (hubspotStateCookie) {
      const cookieStructure = hubspotStateCookie.split(",")
      // console.log("COOKIE STRUCTURE => ", cookieStructure)
      // Analytics
      if (cookieStructure && cookieStructure.length > 0) {
        if (cookieStructure[0] && cookieStructure[0].includes("false")) {
          removeAnalyticsCookies()
          // Functionality
        } else if (cookieStructure[1] && cookieStructure[1].includes("false")) {
          
          // Advertisementent
        } else if (cookieStructure[2] && cookieStructure[2].includes("false")) {
        
        } else if (
          cookieStructure[2] && cookieStructure[1] && cookieStructure[0] &&
          cookieStructure[0].includes("false") &&
          cookieStructure[1].includes("false") &&
          cookieStructure[2].includes("false")
        ) {
          deleteAllCookies()
        }
      }
    }
    
    const _hsp = window._hsp = window._hsp || []
    window.onload = function() {
      const hubspotBanner = document.getElementById("hs-eu-decline-button")
      // console.log(hubspotBanner)
      if (hubspotBanner) {
        hubspotBanner.onclick = function() {
          deleteAllCookies()
          removeAnalyticsCookies()
          _hsp.push(["revokeCookieConsent"])
        }
      }
    }
    
    return () => {
    
    }
  }, [])
  
  
  return (
    <section
      className={`${layoutStyles.layout} ${
        props.page === "info" &&
        layoutStyles.info_page}`}
      style={{
        backgroundColor: props.bgColor,
      }}
    >
      
      <HeaderSection
        location={props.location}
        title={configMetaData.title}
        link={configMetaData}/>
      
      <div className={layoutStyles.content}>
        {props.children}
      </div>
      
      <FooterSection/>
    
    </section>
  )
}
