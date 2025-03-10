import * as React from "react"
import cx from "classnames"
import { images } from "../../../../images/images"
import PurpleButton from "../../../../components/atoms/buttons/purple/PurpleButton"
import { ButtonModelOld } from "../../../../interfaces/interfaces"
import { gatacaStudioURL } from "../../../../data/globalData"
import * as styles from "./firstSection.module.scss"

export type ISectionProps = {
  title: string
  description: string
  leftButton?: ButtonModelOld
  rightButton: ButtonModelOld
}

const FirstSection: React.FC<ISectionProps> = props => {
  const { title, description, leftButton, rightButton } = props

  let videoSection: HTMLVideoElement | null | undefined

  React.useEffect(() => {
    videoSection = document
      ? (document?.getElementById("homeVideoSection") as HTMLVideoElement)
      : undefined
  })

  const scrollToVideo = () => {
    videoSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      className={styles.firstSection__container}
      style={{ position: "relative" }}
    >
      <section className={`${styles.firstSection} ${cx("containerMaxWidth")}`}>
        <div className={styles.firstSection__leftSide}>
          <h1 className={`${cx("heading1 marginBottom32")}`}>{title}</h1>
          <p className={`${cx("bodyRegularXL")}`}>{description}</p>
          {leftButton || rightButton ? (
            <div className={styles.buttons_container}>
              {leftButton && (
                <PurpleButton
                  label={leftButton?.label}
                  action={() => window.open(leftButton?.url, "_blank")}
                />
              )}
              {rightButton && (
                <PurpleButton
                  label={rightButton?.label}
                  className={`${rightButton.className}`}
                  outlined={rightButton?.outlined ? true : false}
                  action={() => window.open(rightButton?.url, "_blank")}
                />
              )}
            </div>
          ) : null}
        </div>
        <div className={styles.firstSection__rightSide}>
          <img
            className={styles.firstSection__imageContainer}
            src={images.mainHomeImage}
          />
        </div>
      </section>
    </div>
  )
}

export default FirstSection
