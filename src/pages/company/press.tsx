import React, { useEffect } from "react"
import PressSection from "../../components/PressSection/PressSection"
import Layout from "../../layouts/Layout"
import pressData from "../../../content/data/pressPage.json"
import styles from "./press.module.scss"
import HeadLineSection from "../../components/HeadLineSection/HeadLineSection"

type IPressProps = {}

const Press: React.FC<IPressProps> = ({}) => {

  useEffect(() => {

  }, [])

  return (
    <Layout>
      <div className={styles.mainContainer}>
        <div className={styles.pressHeader}>
          <HeadLineSection
            big
            title={pressData.subtitle}
            description={pressData.description}
            ctaText={pressData.ctaText}
            ctaLink={pressData.ctaUrl}
            darkButton={true}
            imagePath={pressData.illustration}
            />
        </div>
      </div> 
      <PressSection/>
    </Layout>
  )
}

Press.defaultProps = {}

export default Press
