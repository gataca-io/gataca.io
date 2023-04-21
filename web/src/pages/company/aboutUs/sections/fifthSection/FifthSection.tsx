import * as React from "react"
import cx from "classnames"
import { images } from "../../../../../images/images"
import * as styles from "./fifthSection.module.scss"

export type ISectionProps = {
  title: string
  list: {
    title: string
  }[]
}

const awardsLogos = [
  images.madridLogo,
  images.ngiEssifLogo,
  images.businessInsiderLogo,
  images.webSubmitLogo,
  images.jffLogo,
  images.mitSandbox,
  images.blockIsLogo,
  images.cdtiNeotecLogo,
  images.redEsLogo,
]

const FifthSection: React.FC<ISectionProps> = props => {
  const { title, list } = props

  return (
    <section className={`${styles.fifthSection} ${cx("containerMaxWidth")}`}>
      <div className={styles.fifthSection__content}>
        <div className={styles.header}>
          <h3 className={`${cx("heading3")}`}>{title}</h3>
        </div>
        <div className={styles.listContainer}>
          {list?.map((item, index) => {
            return (
              <div key={"awards__" + index} className={styles.listAwards}>
                <div
                  className={`${styles.imageContainer} ${cx("marginBottom24")}`}
                >
                  <img src={awardsLogos[index]}></img>
                </div>
                <p className={`${styles.title} ${cx("bodyBoldLG")}`}>
                  {item.title}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FifthSection
