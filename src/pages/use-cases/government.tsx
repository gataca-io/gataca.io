import React, { useState, useEffect } from "react" // we need this to make JSX compile
import Layout from "../../layouts/Layout"
import HeadLineSection from "../../components/HeadLineSection/HeadLineSection"
import data from "../../../content/data/government.json"
import { BuildHelmet } from "../../components/auxiliary/HelmetBuilder"

import styles from "./government.module.scss"
import BigBullet from "../../components/BigBullet/BigBullet"
import TextBulletsSection from "../../components/TextBulletsSection/TextBulletsSection"
import BulletsSection from "../../components/BulletsSection/BulletsSection"
import CtaSection from "../../components/CtaSection/CtaSection"

import BulletOne from "../../components/BulletOne/BulletOne"
import ExplainedInfographics from "../../components/ExplainedInfoGraphics/ExplainedInfographics"
import certify from "../../../content/data/certify.json"

type IGovernmentProps = {}

const Government: React.FC<IGovernmentProps> = ({}) => {

  useEffect(() => {

  }, [])

  return (
    <Layout>

      <BuildHelmet
        title={data.metas.title}
        description={data.metas.description}
        twitterImg={data.metas.twitterImage}
        facebookImg={data.metas.facebookImage}
        linkedInImg={data.metas.facebookImage}
      />

      <section className={styles.headlineContainer}>
        <div className={styles.circle2}/>
        <div className={styles.circle3}/>
        <div className={styles.circle4}/>
        <div className={styles.circle5}/>
        <HeadLineSection
          big
          title={data.headline.title}
          subtitle={data.headline.subtitle}
          ctaText={data.headline.ctaText}
          ctaLink={data.headline.ctaLink}
        />
      </section>

      <section className={styles.introSection}>
        <div>
          <h2>{data.theResult.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: data.theResult.description }}/>
        </div>
      </section>

      {/*USE CASES*/}
      <section className={styles.chipsSection}>
        <div>
          <h3>{data.useCases.title}</h3>
          {/*<div className={styles.line}/>*/}
          <div className={styles.chipsContainer}>
            {data.useCases.elements.map(el => {
              return (
                <div className={styles.chip}>
                  <p>{el}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className={styles.sectionProblem}>

        <section className={styles.sectionStyle}>
          <div>
            <img src={data.theProblem.image} alt={data.theProblem.title}/>
            <h3>{data.theProblem.head}</h3>
            <h2>{data.theProblem.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: data.theProblem.description }}/>
          </div>
        </section>

        <section className={styles.sectionStyle}>
          <div>
            <img src={data.theSolution.image} alt={data.theSolution.title}/>
            <h3>{data.theSolution.head}</h3>
            <h2>{data.theSolution.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: data.theSolution.description }}/>
          </div>
        </section>

      </section>

      {/*CREDENTIALS AND USE CASES*/}
      {/*      <section className={styles.detailContainer}>
        <div>

          <div className={styles.bulletsContainer}>
            {data.bulletsSection.bullets.map(bullet => {
              return (
                <BulletOne
                  bulletContainerStyles={styles.bulletCont}
                  center
                  data={bullet}
                />
              )
            })}
          </div>
        </div>
      </section>*/}


      {/*DIGITISATION*/}
      {/*      <TextBulletsSection
        backgroundColor={"var(--bg-grey)"}
        textBullets={data.textBulletsSection.textBullets}
        title={data.textBulletsSection.title}
      />*/}

      {/*HOW IT WORKS*/}
      {/*      <TextBulletsSection
        icons
        iconSize={60}
        textBullets={data.textBulletsPlusIconsSection.textBullets}
        title={data.textBulletsPlusIconsSection.title}
      />*/}

      {/*    <BulletsSection
        centeredBullets
        bullets={data.bulletsSection_two.bullets}/>*/}


      {/*THE IMPACT*/}
      {/*      <section className={styles.detailContainer}>
        <div>
          <h2>{data.bulletsSection_two.title}</h2>
          <div className={styles.bulletsContainer}>
            {data.bulletsSection_two.bullets.map(bullet => {
              return (
                <BulletOne
                  center
                  data={bullet}
                />
              )
            })}
          </div>
        </div>
      </section>*/}

      {/*OUR PRINCIPLES*/}
      {/*      <TextBulletsSection
        icons
        iconSize={60}
        textBullets={data.textBulletsPlusIconsSection_two.textBullets}
        title={data.textBulletsPlusIconsSection_two.title}
      />*/}

      {/*the impact*/}
      {/*      <BulletsSection
        mainIcon={data.bulletsSection_two.icon}
        title={data.bulletsSection_two.title}
        bullets={data.bulletsSection_three.bullets}/>*/}

      {/*SOLUTION IN ACTION*/}
      {/*      <section className={styles.detailContainer}>
        <div>
          <h2>{data.bulletsSection_three.title}</h2>
          <div className={styles.bulletsContainer}>
            {data.bulletsSection_three.bullets.map(bullet => {
              return (
                <BulletOne
                  center
                  data={bullet}
                />
              )
            })}
          </div>
        </div>
      </section>*/}

      <ExplainedInfographics
        title={certify.explainSection.title}
        bullets={certify.explainSection.bullets}
        infographic={certify.explainSection.infographic}
      />

      <CtaSection
        backgroundColor={"var(--bg-grey)"}
        ctaUrl={data.ctaSection.ctaLink}
        ctaText={data.ctaSection.ctaText}
        title={data.ctaSection.title}
      />

    </Layout>
  )
}

Government.defaultProps = {}

export default Government