import React from "react"
import Layout from "../layouts/Layout"
import homeStyles from "./../styles/pages/home.module.scss"
import homeData  from "./../../content/data/homeData.json"
import Intro from "../components/IntroSection/Intro"
import Partners from "../components/PartnersSection/Partners"
import Bullets from "../components/BulletsSection/Bullets"
import BulletsPlusGraph from "../components/BulletsPlusGraphSection/BulletsPlusGraph"
import Cta from "../components/CtaSection/Cta"
import Footer from "../components/FooterSection/Footer"

export default function IndexPage() {
  return (
    <Layout page="home" bgColor="inherit" className={homeStyles.base}>
      <article className={homeStyles.home}>
        
        <Intro data={homeData.introSection}/>
        <Partners data={homeData.partnerSection}/>
        <Bullets data={homeData.bulletsSection}/>
        <BulletsPlusGraph data={homeData.mainSection}/>
        <Cta data={homeData.mainSection}/>
        <Footer/>
        
      </article>
    </Layout>
  )
}
