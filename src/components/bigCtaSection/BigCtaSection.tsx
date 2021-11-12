import React, { useState, useEffect } from "react"
import homeData from "../../../content/data/homeData.json"
import styles from "./bigcta.module.scss"
import ctaStyles from "../CtaSection/cta.module.scss"
import { Button } from "carbon-components-react"
import { Link } from "gatsby"

type IBigCtaSectionProps = {}

const BigCtaSection: React.FC<IBigCtaSectionProps> = ({}) => {

  useEffect(() => {

  }, [])

  return (
    <React.Fragment>
      <section className={styles.mainSection}>

        {/*        <div className={styles.overBackground}/>
        <div className={styles.container}>
          <div className={styles.faceOne}/>
          <div className={styles.faceTwo}/>
          <div className={styles.faceThree}/>
          <div className={styles.circleTop}/>
          <div className={styles.circle2}/>
          <div className={styles.circle3}/>
          <div className={styles.circle4}/>
          <div className={styles.blurredBox}></div>
          <img src={"/glassy/glassySquare.svg"} alt={""}/>
          <div className={styles.textBox}>
            <h1>{homeData.bigCtaSection.title}</h1>
            <h3>{homeData.bigCtaSection.description}</h3>
            <p>{homeData.bigCtaSection.subDescription}</p>
          </div>

          <div className={styles.textBox}>
            <h1>{homeData.bigCtaSection.title}</h1>
            <h3>{homeData.bigCtaSection.description}</h3>
            <p>{homeData.bigCtaSection.subDescription}</p>
          </div>
        </div>*/}

        <div className={styles.subContainer}>

          <div className={styles.hero_container_mobile}>
            <div className={styles.circle2}/>
            <div className={styles.circle3}/>
            <div className={styles.circle4}/>
            <div className={styles.circle5}/>
            <div className={styles.gridContainer_mobile}>
              {homeData.newIntroSection.images.map(img => {
                return <div className={styles.imageContainerMobile}>
                  <img src={img} alt={""}/>
                </div>
              })
              }
            </div>
            {/*<img src={homeData.newIntroSection.image}/>*/}
          </div>

          <div className={styles.textBox}>
            <h1>{homeData.bigCtaSection.title}</h1>
            <h3>{homeData.bigCtaSection.description}</h3>
            {/*<p>{homeData.bigCtaSection.subDescription}</p>*/}
            <Link to={homeData.bigCtaSection.ctaUrl}>

              <Button
                className={styles.ctaButton}
                disabled={false}
                iconDescription="Button icon"
                kind="primary"
                renderIcon={undefined}
                size="default"
                tabIndex={0}
                type="button"
              > {homeData.bigCtaSection.subDescription}</Button>
            </Link>
          </div>

          <div className={styles.hero_container}>
            <div className={styles.circleTop}/>
            <div className={styles.circle2}/>
            <div className={styles.circle3}/>
            <div className={styles.circle4}/>
            <div className={styles.circle5}/>
            <div className={styles.gridContainer}>
              {homeData.newIntroSection.images.map(img => {
                return <div className={styles.imageContainer}>
                  <img src={img} alt={""}/>
                </div>
              })
              }
            </div>
            {/*<img src={homeData.newIntroSection.image}/>*/}
          </div>
        </div>

      </section>
    </React.Fragment>
  )
}

BigCtaSection.defaultProps = {}

export default BigCtaSection
