import * as React from "react"
import cx from "classnames"
import { images } from "../../../../../images/images"
import * as styles from "./firstSection.module.scss"

export type ISectionProps = {
  title: string
  descriptionParagraphs: string | string[]
}

const FirstSection: React.FC<ISectionProps> = props => {
  const { title, descriptionParagraphs } = props

  return (
    <section className={`${styles.firstSection} ${cx("containerMaxWidth")}`}>
      <div className={styles.firstSection__content}>
        <div className={styles.leftColumn}>
          <h1 className={`${cx("heading1 marginBottom32")}`}>Join Gataca!</h1>
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
        <div className={styles.rightColumn}>
          <div className={styles.imagesContainer}>
            <div>
              <div>
                <img src={images.gatacaTeamCareers1}></img>
              </div>
              <div>
                <img src={images.gatacaTeamCareers2}></img>
              </div>
            </div>
            <div>
              <img src={images.gatacaTeamCareers3}></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstSection
