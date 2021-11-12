import React, { useState, useEffect } from "react"
import Layout from "../../layouts/Layout"
import { BuildHelmet } from "../../components/auxiliary/HelmetBuilder"
import HeadLineSection from "../../components/HeadLineSection/HeadLineSection"
import data from "../../../content/data/education.json"
import BigBulletsSection from "../../components/BigBulletsSection/BigBulletsSection"
import TextBulletsSection from "../../components/TextBulletsSection/TextBulletsSection"
import BulletsSection from "../../components/BulletsSection/BulletsSection"
import CtaSection from "../../components/CtaSection/CtaSection"
import BigBullet from "../../components/BigBullet/BigBullet"

import styles from "./education.module.scss"
import BulletOne from "../../components/BulletOne/BulletOne"
import BulletCenter from "../../components/BulletCenter/BulletCenter"

type IEducationProps = {}

const Education: React.FC<IEducationProps> = ({}) => {
  const [count, setCount] = useState(0)

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

      <section className={styles.lineContainer}>
        <div className={styles.line}/>
      </section>

      <section className={styles.sectionStyle}>
        <div className={styles.circle6}/>
        <div className={styles.circle7}/>
        <div>
          {
            data.bigBulletsSection.bullets.map((bullet, i) => {
              return <BigBullet
                imgSize={"l"}
                key={bullet.title}
                title={bullet.title}
                bulletsStyles={styles.bigBulletsContainer}
                description={bullet.description}
                image={bullet.image}/>
            })
          }
        </div>
      </section>


      {/*HOW IT WORKS*/}
      <section className={styles.howItWorksSection}>
        <TextBulletsSection
          showIndex
          backgroundColor={"var(--bg-grey)"}
          textBullets={data.textBulletsPlusIconsSection_one.textBullets}
          title={data.textBulletsPlusIconsSection_one.title}/>
      </section>


      {/*THE IMPACT*/}
      <section className={styles.detailContainer}>
        <div>
          <h2>{data.bulletsSection.title}</h2>
          <div className={styles.bulletsContainer}>
            {data.bulletsSection.bullets.map(bullet => {
              return (
                <BulletCenter
                  data={bullet}
                />
              )
            })}
          </div>
        </div>
      </section>

{/*      <TextBulletsSection
        icons
        textBullets={data.textBulletsPlusIconsSection.textBullets}
        title={data.textBulletsPlusIconsSection.title}/>*/}

      <section className={styles.detailContainer}>
        <div>
          <h2>{data.bulletsSection_three.title}</h2>
          <div className={styles.bulletsContainer}>
            {data.bulletsSection_three.bullets.map(bullet => {
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
      </section>

      <CtaSection
        ctaUrl={data.ctaSection.ctaLink}
        backgroundColor={"var(--bg-grey)"}
        ctaText={data.ctaSection.ctaText}
        title={data.ctaSection.title}
      />
    </Layout>
  )
}

Education.defaultProps = {}

export default Education
