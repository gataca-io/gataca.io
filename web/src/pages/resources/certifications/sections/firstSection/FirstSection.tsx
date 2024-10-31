import * as React from "react"
import cx from "classnames"
import { images } from "../../../../../images/images"
import { files } from "../../../../../assets/files/files"
import { ButtonModelOld } from "../../../../../interfaces/interfaces"
import * as styles from "./firstSection.module.scss"
import PurpleButton from "../../../../../components/atoms/buttons/purple/PurpleButton";
import {gatacaStudioURL} from "../../../../../data/globalData";

export type ISectionProps = {
  title: string
  description: string
  list: {
    id: number
    attributes: {
      title: string
      firstParagraph: string
      secondParagraph: string
      thirdParagraph: string
      fourthParagraph: string
      button: ButtonModelOld
      image: {
        data: {
          attributes: {
            url: string
            alternativeText: string
          }
        }
      }
    }
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
        <h1 className={`${cx("heading1 marginBottom32")}`}>Certifications</h1>
        <p className={`${cx("bodyRegularXL neutral700")}`}>{description}</p>
      </div>

      {list?.map((item, index) => {
        const { title, firstParagraph, secondParagraph, thirdParagraph, fourthParagraph, button, image } = item.attributes

        return (
          <div key={`${"certication__" + index}`} className={styles?.certifications__cards}>
            <div className={styles?.leftSide}>
              <img src={image.data.attributes.url} alt={image.data.attributes.alternativeText}></img>
            </div>
            <div className={styles?.rightSide}>
              <h4 className={cx("heading4 marginBottom32")}>{title}</h4>
              {firstParagraph && (
                  <p
                      className={`${cx(
                          "bodyRegularMD neutral700 marginBottom20"
                      )}`}
                  >
                    {firstParagraph}
                  </p>
              )}
              {secondParagraph && (
                  <p
                      className={`${cx(
                          "bodyRegularMD neutral700 marginBottom20"
                      )}`}
                  >
                    {secondParagraph}
                  </p>
              )}
              {thirdParagraph && (
                  <p
                      className={`${cx(
                          "bodyRegularMD neutral700 marginBottom20"
                      )}`}
                  >
                    {thirdParagraph}
                  </p>
              )}
              {fourthParagraph && (
                  <p
                      className={`${cx(
                          "bodyRegularMD neutral700 marginBottom20"
                      )}`}
                  >
                    {fourthParagraph}
                  </p>
              )}

              <div
                  className={`${cx("marginTop32")} ${styles?.buttonContainer}`}
              >
                <a
                    className={`${styles?.purpleLink}`}
                    target="_blank"
                    href={button?.url}
                    download={button?.fileName ? button?.fileName : undefined}
                >
                  <span className={cx("buttonLG")}>{button?.label}</span>
                </a>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default FirstSection
