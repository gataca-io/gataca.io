import React, { useEffect, useState } from "react"
import data from "../../../content/data/education.json"
import { BuildHelmet } from "../../components/auxiliary/HelmetBuilder"
import BigBullet from "../../components/BigBullet/BigBullet"
import BulletCenter from "../../components/BulletCenter/BulletCenter"
import BulletOne from "../../components/BulletOne/BulletOne"
import CtaSection from "../../components/CtaSection/CtaSection"
import HeadLineSection from "../../components/HeadLineSection/HeadLineSection"
import TextBulletsSection from "../../components/TextBulletsSection/TextBulletsSection"
import Layout from "../../layouts/Layout"
import styles from "./education.module.scss"

type IEducationProps = {}

const Education: React.FC<IEducationProps> = ({}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {}, [])

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
        <div className={styles.circle2} />
        <div className={styles.circle3} />
        <div className={styles.circle4} />
        <div className={styles.circle5} />
        <HeadLineSection
          big
          title={data.headline.title}
          subtitle={data.headline.subtitle}
          ctaText={data.headline.buttonText}
          ctaLink={data.headline.buttonLink}
        />
        <iframe
          style={{
            borderWidth: 1,
            borderColor: "rgba(0 0 0 0.1)",
            overflow: "hidden",
          }}
          width="400"
          height="550"
          allow="autoplay; fullscreen; picture-in-picture"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FSv2i65QdWknphJjh7cUbZp%2FUntitled%3Fpage-id%3D0%253A1%26node-id%3D1%253A196%26viewport%3D-40%252C-29%252C1.13%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A193"
        ></iframe>
      </section>

      <section className={styles.introSection}>
        <div>
          <h2>{data.intro.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: data.intro.description }} />
        </div>
      </section>

      <section className={styles.lineContainer}>
        <div className={styles.line} />
      </section>

      <section className={styles.sectionStyle}>
        <div className={styles.circle6} />
        <div className={styles.circle7} />
        <div className={styles.subContainer}>
          {data.firstSection.bullets.map((bullet, i) => {
            return (
              <BigBullet
                imgSize={"l"}
                key={bullet.title}
                title={bullet.title}
                bulletsStyles={styles.bigBulletsContainer}
                description={bullet.description}
                image={bullet.image}
              />
            )
          })}
        </div>
      </section>

      {/*HOW IT WORKS*/}
      <section className={styles.howItWorksSection}>
        <TextBulletsSection
          showIndex
          backgroundColor={"var(--bg-grey)"}
          textBullets={data.secondSection.steps}
          title={data.secondSection.title}
        />
      </section>

      {/*THE IMPACT*/}
      <section className={styles.detailContainer}>
        <div>
          <h2>{data.thirdSectionTop.title}</h2>
          <div className={styles.bulletsContainer}>
            {data.thirdSectionTop.bullets.map((bullet) => {
              return <BulletCenter data={bullet} />
            })}
          </div>
        </div>
      </section>

      <section className={styles.detailContainer}>
        <div>
          <h2>{data.thirdSectionBottom.title}</h2>
          <div className={styles.bulletsContainer}>
            {data.thirdSectionBottom.bullets.map((bullet) => {
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
        ctaUrl={data.bottomSection.buttonLink}
        backgroundColor={"var(--bg-grey)"}
        ctaText={data.bottomSection.buttonText}
        title={data.bottomSection.title}
      />
    </Layout>
  )
}

Education.defaultProps = {}

export default Education
