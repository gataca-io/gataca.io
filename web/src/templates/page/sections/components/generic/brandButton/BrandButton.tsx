import * as React from "react"
import * as styles from "./brandButton.module.scss"
import { ButtonModel } from "../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"

const BrandButton: React.FC<ButtonModel> = props => {
  const { idButton, icon, className, color, size, url, outsideWeb } = props

  const sizeStyles: Record<string, string> = {
    web: styles?.buttonLarge,
    app: styles?.buttonSmall,
  }

  const colorStyles: Record<string, string> = {
    white: styles?.whiteColor,
    black: styles?.blackColor,
  }

  return (
    <>
      <button
        id={idButton}
        className={`
          ${size ? sizeStyles[size] : styles?.brandButton} ${
          color ? colorStyles[color] : styles?.brandButton
        } ${styles.brandButton} ${className && className}`}
        onClick={() => window?.open(url, outsideWeb ? "_blank" : "_self")}
      >
        {icon ? (
          <StrapiImage image={icon ? icon : null} url={icon ? icon : null} />
        ) : null}
      </button>
    </>
  )
}

export default BrandButton
