import React, { useState, useEffect } from "react"
import PressSection from "../../components/PressSection/PressSection"
import Layout from "../../layouts/Layout"
import pressData from "../../../content/data/pressPage.json"
import stylesBullet from "../../components/BigBullet/bigbullet.module.scss"
import { Button } from "carbon-components-react"
import styles from "./press.module.scss"
type IPressProps = {}

const Press: React.FC<IPressProps> = ({}) => {

  useEffect(() => {

  }, [])

  return (
    <Layout>
      <div className={styles.mainContainer}>
        <div className={styles.textContainer}>
          <h2>{pressData.subtitle}</h2>
          <p>{pressData.description}</p>
          <a href={pressData.ctaUrl}>
            <Button
              className={stylesBullet.ctaButton}
              disabled={false}
              iconDescription="Button icon"
              kind="primary"
              renderIcon={undefined}
              size="default"
              tabIndex={0}
              type="button"
            >{pressData.ctaText}</Button>
          </a>
        </div>
        <div className={styles.imageSection}>
          <div>
            <img src={pressData.illustration}/>
          </div>
        </div>
      </div>
      <PressSection/>
    </Layout>
  )
}

Press.defaultProps = {}

export default Press
