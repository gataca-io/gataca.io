import React, { useEffect } from "react"
import HeaderSection from "../components/HeaderSection/HeaderSection"
import layoutStyles from "./layout.module.scss"
import FooterSection from "../components/FooterSection/FooterSection"
import configMetaData from "../../content/data/configMetaData.json"


export default function Layout(props) {
  
  const removeAnalyticsCookies = () => {
    console.log("removeAnalitics")
    document.cookie = "_ga" + "=; Path=/; Domain=.gataca.io; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    document.cookie = "_gid" + "=; Path=/; Domain=.gataca.io; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    document.cookie = "gataca_io_accepted" + "=; Path=/; Domain=.gataca.io; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    document.cookie = "_gat_UA-133561010-1" + "=; Path=/; Domain=.gataca.io; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    document.cookie = "fs_uid" + "=; Path=/; Domain=.gataca.io; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
  }
  
  const deleteAllCookies = () => {
    console.log("deleteAllCookies")
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
  
  const getCookie = (name) => {
    if (typeof document !== `undefined`) {
      const dc = document.cookie
      const prefix = name + "="
      let end = document.cookie.indexOf(";", begin)
      let begin = dc.indexOf("; " + prefix)
      if (begin === -1) {
        begin = dc.indexOf(prefix)
        if (begin !== 0) return null
      } else {
        begin += 2
        if (end === -1) {
          end = dc.length
        }
      }
      // because unescape has been deprecated, replaced with decodeURI
      //return unescape(dc.substring(begin + prefix.length, end));
      return decodeURI(dc.substring(begin + prefix.length, end))
    }
  }
  
  
  const hubspotStateCookie = getCookie("__hs_cookie_cat_pref")
  
  
  useEffect(() => {
    if (hubspotStateCookie) {
      const cookieStructure = hubspotStateCookie.split(",")
      console.log("COOKIE STRUCTURE => ", cookieStructure)
      // Analytics
      if (cookieStructure && cookieStructure.length > 0) {
        if (cookieStructure[0].includes("false")) {
          removeAnalyticsCookies()
          // Functionality
        } else if (cookieStructure[1].includes("false")) {
          
          // Advertisementent
        } else if (cookieStructure[2].includes("false")) {
        
        } else if (
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
      console.log(hubspotBanner)
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
  }, [hubspotStateCookie])
  
  
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
