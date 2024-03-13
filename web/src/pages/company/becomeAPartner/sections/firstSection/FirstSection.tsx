import * as React from "react"
import cx from "classnames"
import { images } from "../../../../../images/images"
import { gatacaStudioURL } from "../../../../../data/globalData"
import { ButtonModel } from "../../../../../interfaces/interfaces"
import PurpleButton from "../../../../../components/atoms/buttons/purple/PurpleButton"
import * as styles from "./firstSection.module.scss"

export type ISectionProps = {
  title: string
  descriptionParagraphs: string | string[]
  button: ButtonModel
}

const FirstSection: React.FC<ISectionProps> = props => {
  const { title, descriptionParagraphs, button } = props

  let applyFormSection: HTMLVideoElement | null | undefined

  React.useEffect(() => {
    applyFormSection = document
      ? (document?.getElementById("applyFormSection") as HTMLVideoElement)
      : undefined
  })

  const scrollToAplyForm = () => {
    applyFormSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className={`${styles.firstSection} ${cx("containerMaxWidth")}`}>
      <div className={styles.firstSection__content}>
        <div className={styles.leftColumn}>
          <div className={cx("marginBottom32")}>
            <h1 className={`${cx("heading1 marginBottom32")}`}>{title}</h1>

            {(!Array.isArray(descriptionParagraphs) && typeof descriptionParagraphs === "string" ? (
                <p
                  className={`${cx("bodyRegularXL neutral700")}`}
                >
                  {descriptionParagraphs}
                </p>
              ) : (
                Array.isArray(descriptionParagraphs) &&
                descriptionParagraphs?.map((el: string, index: number) => {
                  return (
                    <p
                      key={"paragraph" + index}
                      className={`${cx("bodyRegularXL neutral700")}`}
                    >
                      {el}
                    </p>
                  )
                })
              ))}
          </div>

          <PurpleButton
            label={button?.label}
            action={() => scrollToAplyForm()}
          />
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.imagesContainer}>
            <img src={images.puzzle}></img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstSection
