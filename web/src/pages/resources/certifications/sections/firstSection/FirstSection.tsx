import * as React from "react"
import cx from "classnames"
import { images } from "../../../../../images/images"
import { files } from "../../../../../assets/files/files"
import { ButtonModel } from "../../../../../interfaces/interfaces"
import * as styles from "./firstSection.module.scss"

export type ISectionProps = {
  title: string
  description: string
  list: {
    title: string
    descriptionParagraphs: string | string[]
    button: ButtonModel
  }[]
}

const FirstSection: React.FC<ISectionProps> = props => {
  const { title, description, list } = props

  return (
    <section
      className={`${styles?.firstSection__container} ${cx(
        "containerMaxWidth"
      )}`}
    >
      <div className={styles?.header}>
        <h1 className={`${cx("heading1 marginBottom32")}`}>{title}</h1>
        <p className={`${cx("bodyRegularXL neutral700")}`}>{description}</p>
      </div>
      <div className={styles?.certifications__cards}>
        <div className={styles?.leftSide}>
          <img src={images.ISO27001Logo}></img>
        </div>
        <div className={styles?.rightSide}>
          {list?.map((item, index) => {
            const { title, descriptionParagraphs, button } = item

            return (
              <div key={`${"certication__" + index}`}>
                <h4 className={cx("heading4 marginBottom32")}>{title}</h4>
                {Array.isArray(descriptionParagraphs) &&
                  descriptionParagraphs?.map((el: string, index: number) => {
                    return (
                      <p
                        key={"paragraph" + index}
                        className={`${cx(
                          "bodyRegularMD neutral700 marginBottom20"
                        )}`}
                      >
                        {el}
                      </p>
                    )
                  })}
                <div
                  className={`${cx("marginTop32")} ${styles?.buttonContainer}`}
                >
                  <a
                    className={`${styles?.purpleLink}`}
                    target="_blank"
                    href={files.ISO27001Certification}
                    download={button?.fileName}
                  >
                    <span className={cx("buttonLG")}>{button?.label}</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FirstSection
