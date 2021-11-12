import React, { useState, useEffect } from "react"
import Layout from "../../layouts/Layout"
import TextBulletsSection from "../../components/TextBulletsSection/TextBulletsSection"
import { BuildHelmet } from "../../components/auxiliary/HelmetBuilder"
import HeadLineSection from "../../components/HeadLineSection/HeadLineSection"
import useCasesPageData from "../../../content/data/useCasesPage.json"
import useCasesData from "../../../content/data/useCasesData.json"

import styles from "./indexUseCases.module.scss"
import BigBullet from "../../components/BigBullet/BigBullet"
import BulletCenter from "../../components/BulletCenter/BulletCenter"
import CtaSection from "../../components/CtaSection/CtaSection"
import configMetaData from "../../../content/data/configMetaData.json"
import Blurrycircle from "../../components/blurryCircle/blurryCircle"
import GreatElementsSection from "../../components/GreatElementsSection/GreatElementsSection"
import homeData from "../../../content/data/homeData.json"

type IUseCasesProps = {}

const UseCases: React.FC<IUseCasesProps> = ({}) => {

  const [useCasesList, setUseCasesList] = useState<any>(useCasesData.list.slice(1))
  useEffect(() => {

  }, [])


  return (
    <Layout>
      <BuildHelmet
        title={useCasesPageData.metas.title}
        description={useCasesPageData.metas.description}
        twitterImg={useCasesPageData.metas.twitterImage}
        facebookImg={useCasesPageData.metas.facebookImage}
        linkedInImg={useCasesPageData.metas.facebookImage}
      />

      <section className={styles.headLineContainer}>
        <div className={styles.circle2}/>
        <div className={styles.circle3}/>
        <div className={styles.circle4}/>
        <Blurrycircle size={200}/>
        <HeadLineSection
          big
          title={useCasesPageData.introProductsSection.title}
          subtitle={useCasesPageData.introProductsSection.description}
        />
      </section>

      <section className={styles.sectionStyleWraps}>
        <h2>{useCasesPageData.allCases.title}</h2>
        <div className={styles.line}/>
        <div>
          {
            useCasesPageData.allCases.bullets.map(bullet => {
              return <BulletCenter
                key={bullet.title}
                data={bullet}/>
            })
          }
        </div>
      </section>

{/*      <TextBulletsSection
        title={useCasesPageData.textBulletsSection.title}
        textBullets={useCasesPageData.textBulletsSection.textBullets}
      />*/}

{/*      <GreatElementsSection
        title={useCasesPageData.bigBulletsSection.title}
        bullets={useCasesList}
      />*/}

      <section className={styles.sectionStyle}>
        <div>
          <h2>{useCasesPageData.bigBulletsSection.title}</h2>
          <h3>{useCasesPageData.bigBulletsSection.subtitle}</h3>
          {/*<div className={styles.line}/>*/}
          {
            useCasesPageData.bigBulletsSection.bullets.map((bullet: any) => {
              return <BigBullet
                bulletsStyles={styles.sectorsBulletStyle}
                key={bullet.title}
                title={bullet.title}
                description={bullet.description}
                image={bullet.image}
                ctaText={"Learn more"}
                ctaUrl={bullet.link}
              />
            })
          }
        </div>
      </section>



      <CtaSection
        ctaText={useCasesPageData.ctaSection.ctaText}
        ctaUrl={configMetaData.bookACallUrl}
        title={useCasesPageData.ctaSection.title}
        description={useCasesPageData.ctaSection.description}
      />

    </Layout>
  )
}

UseCases.defaultProps = {}

export default UseCases
