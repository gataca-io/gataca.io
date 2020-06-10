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
import Helmet from "react-helmet"
import { BuildHelmet } from "../components/auxiliary/HelmetBuilder"

export default function IndexPage() {
  return (
    <Layout className={homeStyles.base}>
      <BuildHelmet
        title={configMetaData.title}
        description={configMetaData.description}
        twitterImg={configMetaData.twitterImage}
        facebookImg={configMetaData.facebookImage}
        linkedInImg={configMetaData.linkedInImage}
      />
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
