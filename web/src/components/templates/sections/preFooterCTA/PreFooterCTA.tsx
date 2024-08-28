import * as React from "react"
import * as styles from "./preFooterCTA.module.scss"
import { ButtonModel } from "../../../../interfaces/interfaces"
import cx from "classnames"
import { images } from "../../../../images/images"
import { marketAndroidURI, marketIosURI } from "../../../../data/globalData"
import PurpleButton from "../../../atoms/buttons/purple/PurpleButton"
import WhiteButton from "../../../atoms/buttons/white/WhiteButton"

export type IPreFooterCTAProps = {
  title: string
  description: string
  storeButtons?: boolean
  leftButton?: ButtonModel
  rightButton?: ButtonModel
  className?: string
}

const PreFooterCTASection: React.FC<IPreFooterCTAProps> = props => {
  const {
    title,
    description,
    storeButtons,
    leftButton,
    rightButton,
    className,
  } = props
  return (
    <section className={`${styles?.preFooterCTA} ${className && className}`}>
      <h6 className={`${cx("heading1 marginBottom24")}`}>{title}</h6>
      <p className={`${cx("bodyRegularXL marginBottom14")}`}>{description}</p>
      {storeButtons ? (
        <div>
          <a
            className={`${cx("bodyRegularXL margin10")}`}
            href={marketIosURI}
            target="_blank"
          >
            <img src={images.brandAppleButton} />
          </a>
          <a
            href={marketAndroidURI}
            target="_blank"
            className={`${cx("margin10")}`}
          >
            <img src={images.brandGoogleButton} />
          </a>
        </div>
      ) : leftButton || rightButton ? (
        <div>
          {leftButton?.label && (
            <WhiteButton
              label={leftButton?.label}
              className={`${leftButton.className} ${
                leftButton && cx("margin10")
              }`}
              outlined
              action={leftButton?.action}
            />
          )}
          {rightButton?.label && (
            <PurpleButton
              label={rightButton?.label}
              className={`${rightButton?.className} ${cx("margin10")}`}
              action={rightButton?.action}
            />
          )}
        </div>
      ) : null}
    </section>
  )
}

export default PreFooterCTASection
