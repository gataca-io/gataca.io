import React, { useState, useEffect } from "react"
import Layout from "../layouts/Layout"
import { BuildHelmet } from "../components/auxiliary/HelmetBuilder"
import developersPageData from "../../content/data/developersPage.json"
import HeadLineSection from "../components/HeadLineSection/HeadLineSection"
import TextBulletsSection from "../components/TextBulletsSection/TextBulletsSection"
import styles from "./developers.module.scss"
import BigBullet from "../components/BigBullet/BigBullet"
import BulletCenter from "../components/BulletCenter/BulletCenter"
import CtaSection from "../components/CtaSection/CtaSection"
import configMetaData from "../../content/data/configMetaData.json"

type IDevelopersProps = {}

const defaultProps = {

}

const Developers: React.FC<IDevelopersProps> = ({}) => {

  useEffect(() => {

  }, [])

  return (
    <Layout>
      <BuildHelmet
        title={developersPageData.metas.title}
        description={developersPageData.metas.description}
        twitterImg={developersPageData.metas.twitterImage}
        facebookImg={developersPageData.metas.facebookImage}
        linkedInImg={developersPageData.metas.facebookImage}
      />

      <section className={styles.headlineContainer}>
        <HeadLineSection
          big
          icon={developersPageData.introProductsSection.icon}
          title={developersPageData.introProductsSection.title}
          subtitle={developersPageData.introProductsSection.subtitle}
        />
      </section>

{/*
      <TextBulletsSection
        title={developersPageData.textBulletsSection.title}
        textBullets={developersPageData.textBulletsSection.textBullets}
      />
      */}

      <section className={styles.sectionStyle}>
        <div>
          {/*TODO: REMOVE SLICE FOR CLOUD*/}
          {
            developersPageData.bigBulletsSection.bullets.slice(1).map((bullet, i) => {
              return <BigBullet
                bulletsStyles={styles.bulletContainer}
                right={i % 2 !== 0}
                key={bullet.title}
                imgSize={"l"}
                title={bullet.title}
                description={bullet.description}
                image={bullet.image}
                ctaText={bullet.ctaText ? bullet.ctaText : "Go"}
                ctaUrl={bullet.link}
              />
            })
          }
        </div>
      </section>

{/*
      <section className={styles.sectionStyleWraps}>
        <h2>{developersPageData.allCases.title}</h2>
        <div>
          {
            developersPageData.allCases.bullets.map(bullet => {
              return <BulletCenter
                key={bullet.title}
                data={bullet}/>
            })
          }
        </div>
      </section>
*/}

      <CtaSection
        ctaText={developersPageData.ctaSection.ctaText}
        ctaUrl={configMetaData.bookACallUrl}
        backgroundColor={"var(--bg-grey)"}
        title={developersPageData.ctaSection.title}
        description={developersPageData.ctaSection.description}
      />

    </Layout>
  )
}

Developers.defaultProps = defaultProps

export default Developers
