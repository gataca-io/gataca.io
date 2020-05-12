import React from "react"
import Layout from "../components/Layout/Layout"
import homeStyles from "./../styles/pages/home.module.scss"
import homeData  from "./../../content/data/homeData.json"
import IntroSection from "../components/IntroSection/Intro"
import PartnersSection from "../components/PartnersSection/Partners"
import DigitalIdentities from "../components/DigitalIdentitiesSection/DigitalIdentities"

export default function IndexPage() {
  return (
    <Layout page="home" bgColor="inherit" className={homeStyles.base}>
      <article className={homeStyles.home}>
        <IntroSection data={homeData.introSection}/>
        <PartnersSection data={homeData.partnerSection}/>
        <DigitalIdentities data={homeData.digitalIdentities}/>
      </article>
    </Layout>
  )
}
