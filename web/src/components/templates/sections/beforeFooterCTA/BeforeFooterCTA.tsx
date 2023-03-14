import * as React from "react"
import * as styles from "./beforeFooterCTA.module.scss"
import { ButtonModel } from "../../../../interfaces/interfaces"
import cx from "classnames"
import { images } from "../../../../images/images"
import {
  marketAndroidURI,
  marketIosURI,
} from "../../../../globalData/globalData"
import PurpleButton from "../../../atoms/buttons/purple/PurpleButton"
import WhiteButton from "../../../atoms/buttons/white/WhiteButton"

export type IBeforeFooterCTAProps = {
  title: string
  description: string
  storeButtons?: boolean
  leftButton?: ButtonModel
  rightButton?: ButtonModel
}

const BeforeFooterCTASection: React.FC<IBeforeFooterCTAProps> = props => {
  const { title, description, storeButtons, leftButton, rightButton } = props
  return (
    <section className={styles?.beforeFooterCTA}>
      <h6 className={`${cx("heading1 marginBottom24")}`}>{title}</h6>
      <p className={`${cx("bodyRegularXL marginBottom24")}`}>{description}</p>
      {storeButtons ? (
        <div>
          <a
            className={`${cx("bodyRegularXL marginRight20")}`}
            href={marketIosURI}
            target="_blank"
          >
            <img src={images.brandAppleButton} />
          </a>
          <a href={marketAndroidURI} target="_blank">
            <img src={images.brandGoogleButton} />
          </a>
        </div>
      ) : leftButton || rightButton ? (
        <div>
          {leftButton && (
            <WhiteButton
              label={leftButton?.label}
              className={`${leftButton.className} ${
                leftButton && cx("marginRight20")
              }`}
              outlined
              action={leftButton?.action}
            />
          )}
          {rightButton && (
            <PurpleButton
              label={rightButton?.label}
              className={rightButton?.className}
              action={rightButton?.action}
            />
          )}
        </div>
      ) : null}
    </section>
  )
}

export default BeforeFooterCTASection
