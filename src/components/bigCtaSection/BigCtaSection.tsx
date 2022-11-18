import { Link } from "gatsby"
import React from "react"
import homeData from "../../../content/data/homeData.json"
import styles from "./bigcta.module.scss"

type IBigCtaSectionProps = {}

const BigCtaSection: React.FC<IBigCtaSectionProps> = ({}) => {
  return (
    <React.Fragment>
      <section className={styles.mainSection}>
        <div className={styles.subContainer}>
          <div className={styles.textBox}>
            <h1>{homeData.bigCtaSection.title}</h1>
            <h3>{homeData.bigCtaSection.description}</h3>
            <Link to={homeData.bigCtaSection.ctaUrl}>
              <button className={styles.ctaButton}>
                {" "}
                {homeData.bigCtaSection.ctaText}
              </button>
            </Link>
          </div>

          <div className={styles.hero_container}>
            <img
              src={homeData.bigCtaSection.image}
              alt={homeData.bigCtaSection.title}
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

BigCtaSection.defaultProps = {}

export default BigCtaSection
