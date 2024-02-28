import * as React from "react"
import cx from "classnames"
import { images } from "../../../../../images/images"
import * as styles from "./firstSection.module.scss"

export type ISectionProps = {
  titleHeader: string
  descriptionHeader: string
  title: string
  descriptionParagraphs: string | string[]
}

const FirstSection: React.FC<ISectionProps> = props => {
  const { titleHeader, descriptionHeader, title, descriptionParagraphs } = props

  return (
    <section className={`${styles.firstSection} ${cx("containerMaxWidth")}`}>
      <div className={styles.firstSection__header}>
        <h1
          className={`${cx("heading1 marginBottom32")} ${styles.title}`}
          dangerouslySetInnerHTML={{
            __html: "Bringing <span>real-life trust</span> to the Internet",
          }}
        ></h1>
        <p className={`${cx("bodyRegularXL neutral700")}`}>
          {descriptionHeader}
        </p>
      </div>
      <div className={styles.firstSection__content}>
        <div className={styles.leftColumn}>
          <img src={images.gatacaTeam}></img>
        </div>
        <div className={styles.rightColumn}>
          <h3 className={`${cx("heading3 marginBottom12")}`}>{title}</h3>
          {Array.isArray(descriptionParagraphs) &&
            descriptionParagraphs?.map((el: string, index: number) => {
              return (
                <p
                  key={"paragraph" + index}
                  className={`${cx("bodyRegularXL neutral700 marginBottom20")}`}
                >
                  {el}
                </p>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default FirstSection
