import React, { useEffect } from "react"
import HeaderSection from "../components/HeaderSection/HeaderSection"
import layoutStyles from "./layout.module.scss"
import FooterSection from "../components/FooterSection/FooterSection"
import configMetaData from "../../content/data/configMetaData.json"

export default function Layout(props) {
  useEffect(() => {
    clearNotConsentedCookies()
    listenConsentEvents()
    return () => {}
  }, [])

  function getCookie(name) {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop().split(";").shift()
  }

  const listenConsentEvents = () => {
    const _hsp = (window._hsp = window._hsp || [])

    _hsp.push([
      "addPrivacyConsentListener",
      function (consent) {
        if (!consent.categories.analytics) {
          removeAnalyticsCookies()
        } else {
          setGaConsentAnalyticCookie()
        }
        if (!consent.categories.functionality) {
          removeFunctionalCookies()
        }
      },
    ])

    window.onload = function () {
      const hubspotBanner = document.getElementById("hs-eu-decline-button")
      if (hubspotBanner) {
        hubspotBanner.onclick = function () {
          deleteAllCookies()
          removeAnalyticsCookies()
          _hsp.push(["revokeCookieConsent"])
        }
      }
    }
  }

  const setGaConsentAnalyticCookie = () => {
    const date = new Date()
    const durationInDays = 90
    date.setTime(date.getTime() + durationInDays * 24 * 60 * 60 * 1000)
    const expirationDate = "; expires=" + date.toGMTString()

    document.cookie =
      "__gat_analytics_consent" + "=" + "1" + expirationDate + "; path=/"
  }

  const clearNotConsentedCookies = () => {
    const analyticsAcceptedCookie = getCookie("__gat_analytics_consent")
    const hubspotStateCookie = getCookie("__hs_cookie_cat_pref")

    if (hubspotStateCookie) {
      const cookieStructure = hubspotStateCookie.split(",")
      // Analytics
      if (cookieStructure && cookieStructure.length > 0) {
        if (cookieStructure[0] && cookieStructure[0].includes("false")) {
          removeAnalyticsCookies()
          // Functionality
        } else if (cookieStructure[1] && cookieStructure[1].includes("false")) {
          // Advertisementent
        } else if (cookieStructure[2] && cookieStructure[2].includes("false")) {
        } else if (
          cookieStructure[2] &&
          cookieStructure[1] &&
          cookieStructure[0] &&
          cookieStructure[0].includes("false") &&
          cookieStructure[1].includes("false") &&
          cookieStructure[2].includes("false")
        ) {
          deleteAllCookies()
        }
      }
    }

    if (!analyticsAcceptedCookie && !hubspotStateCookie) {
      removeAnalyticsCookies()
      console.log("HOLA", document.cookie)
    }
  }

  const removeAnalyticsCookies = () => {
    document.cookie = "_ga" + "=; Path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    document.cookie =
      "_gid" + "=; Path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    document.cookie =
      "gataca_io_accepted" + "=; Path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    document.cookie =
      "_gat_UA-133561010-1" + "=; Path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    document.cookie =
      "fs_uid" + "=; Path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    document.cookie =
      "__gat_analytics_consent" +
      "=; Path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
  }

  const removeFunctionalCookies = () => {
    document.cookie =
      "__hs_cookie_cat_pref" +
      "=; Path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
  }

  const deleteAllCookies = () => {
    if (typeof document !== `undefined`) {
      const cookies = document.cookie.split(";")
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i]
        const eqPos = cookie.indexOf("=")
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
        document.cookie =
          name + "=; Path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
      }
    }
  }

  return (
    <section
      className={`${layoutStyles.layout} ${
        props.page === "info" && layoutStyles.info_page
      }`}
      style={{
        backgroundColor: props.bgColor,
      }}
    >
      <HeaderSection
        location={props.location}
        title={configMetaData.title}
        link={configMetaData}
      />
      <div className={layoutStyles.content}>{props.children}</div>
      <FooterSection />
    </section>
  )
}
