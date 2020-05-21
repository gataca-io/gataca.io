import React from "react"
import Layout from "../layouts/Layout"
import homeStyles from "./../styles/pages/home.module.scss"
import homeData  from "./../../content/data/homeData.json"
import configMetaData  from "./../../content/data/configMetaData.json"
import Partners from "../components/PartnersSection/Partners"
import Bullets from "../components/BulletsSection/Bullets"
import BulletsPlusGraph from "../components/BulletsPlusGraphSection/BulletsPlusGraph"
import Cta from "../components/CtaSection/Cta"
import IntroSection from "../components/IntroSection/Intro"

export default function IndexPage() {
  return (
    <Layout page="home" bgColor="inherit" className={homeStyles.base}>
      <article className={homeStyles.home} >
        <IntroSection data={homeData.introSection} link={configMetaData.bookACallUrl}/>
        <Partners info={homeData.partnersSection} />
        <Bullets data={homeData.bulletsSection}/>
        <BulletsPlusGraph data={homeData.bulletsEnhancedSection}/>
        <Cta data={homeData.ctaSection}/>
      </article>
    </Layout>
  )
}
