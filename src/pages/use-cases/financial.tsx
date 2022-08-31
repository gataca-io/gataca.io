import React, {useEffect} from "react";
import data from "../../../content/data/financialPageData.json";
import {BuildHelmet} from "../../components/auxiliary/HelmetBuilder";
import BigBullet from "../../components/BigBullet/BigBullet";
import BulletOne from "../../components/BulletOne/BulletOne";
import CtaSection from "../../components/CtaSection/CtaSection";
import HeadLineSection from "../../components/HeadLineSection/HeadLineSection";
import Layout from "../../layouts/Layout";
import styles from "./financial.module.scss";


type IFinancialProps = {}

const Financial: React.FC<IFinancialProps> = ({}) => {

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
        <div className={styles.circle1}/>
        <div className={styles.circle2}/>
        <div className={styles.circle3}/>
        <div className={styles.circle4}/>
        <HeadLineSection
          big
          title={data.headline.title}
          subtitle={data.headline.subtitle}
          ctaText={data.headline.buttonText}
          ctaLink={data.headline.buttonLink}
        />
      </section>

      <section className={styles.introSection}>
        <div className={styles.introSection__content}>
          <h2>{data.intro.title}</h2>
          <p className={styles.introSection__content__text} dangerouslySetInnerHTML={{ __html: data.intro.description }}/>
        </div>
      </section>

      <section className={styles.sectionStyle}>
        <div className={styles.circle5}/>
        <div className={styles.subContainer}>
        <h2 className={styles.title}>{data.firstSection.title}</h2>
          {
            data.firstSection.bullets.map((bullet, i) => {
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

      <section className={styles.chipsSection}>
        <div className={styles.chipsSection__content}>
          <h2 className={styles.chipsSection__content__title}>{data.secondSection.title}</h2>
          {/*<div className={styles.line}/>*/}
          <div className={styles.chipsContainer}>
            {data.secondSection.useCases.map(el => {
              return (
                <div className={styles.chip}>
                    <img className={styles.chip__image} src={el.icon} alt={el.text}/>
                    <p className={styles.chip__text} >{el.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className={styles.detailContainer}>
        <div>
          <h2>{data.thirdSection?.topItems?.title}</h2>
          <div className={styles.bulletsContainer}>
            {data.thirdSection?.topItems?.items.map(item => {
              return (
                <div className={styles.bigChip}>
                    <img className={styles.bigChip__image} src={item.image} alt={item.title}/>
                    <p className={styles.bigChip__text} >{item.title}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>


      <section className={styles.detailContainer}>
        <div>
          <h2>{data.thirdSection?.bottomItems?.title}</h2>
          <div className={styles.bulletsContainer}>
            {data.thirdSection?.bottomItems?.items.map(item => {
              return (
                <BulletOne
                  bulletContainerStyles={styles.bulletContent}
                  center
                  data={item}
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

Financial.defaultProps = {}

export default Financial
