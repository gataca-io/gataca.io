import * as React from "react"
import cx from "classnames"
import { images } from "../../../../../images/images"
import PurpleButton from "../../../../../components/atoms/buttons/purple/PurpleButton"
import { ButtonModel } from "../../../../../interfaces/interfaces"
import { gatacaStudioURL } from "../../../../../data/globalData"
import * as styles from "./firstSection.module.scss"
import { navigate } from "gatsby"

export type ISectionProps = {
  title: string
  description: string
  button?: ButtonModel
}

const FirstSection: React.FC<ISectionProps> = props => {
  const { title, description, button } = props

  return (
    <div
      className={styles.firstSection__container}
      style={{ position: "relative" }}
    >
      <section className={`${styles.firstSection} ${cx("containerMaxWidth")}`}>
        <div className={styles.firstSection__leftSide}>
          <h1 className={`${cx("heading1 marginBottom32")}`}>{title}</h1>
          <p className={`${cx("bodyRegularXL")}`}>{description}</p>

          <div className={styles.buttons_container}>
            {button && (
              <PurpleButton
                label={button?.label}
                action={() => navigate("/company/contact")}
              />
            )}
          </div>
        </div>
        <div className={styles.firstSection__rightSide}>
          <img
            className={styles.firstSection__imageContainer}
            src={images.macFloating}
          />
        </div>
      </section>
    </div>
  )
}

export default FirstSection
