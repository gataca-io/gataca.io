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

  return (
    <section className={`${styles.firstSection} ${cx("containerMaxWidth")}`}>
      <div className={styles.firstSection__content}>
        <div className={styles.leftColumn}>
          <div className={cx("heading1 marginBottom32")}>
            <h1 className={`${cx("heading1 marginBottom32")}`}>{title}</h1>
            {Array.isArray(descriptionParagraphs) &&
              descriptionParagraphs?.map((el: string, index: number) => {
                return (
                  <p
                    key={"paragraph" + index}
                    className={`${cx("bodyRegularXL neutral700")}`}
                  >
                    {el}
                  </p>
                )
              })}
          </div>

          <PurpleButton
            label={button?.label}
            action={() => window.open(gatacaStudioURL, "_blank")}
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
