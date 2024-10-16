import * as React from "react"
import * as styles from "./buttonIcon.module.scss"
import { ButtonModel } from "../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"

const ButtonIcon: React.FC<ButtonModel> = props => {
  const { idButton, icon, action, style, color, size, disabled } = props

  const buttonStyles: Record<string, string> = {
    square: styles?.squareButton,
  }

  const sizeStyles: Record<string, string> = {
    buttonSM: styles?.buttonSM,
  }

  const colorStyles: Record<string, string> = {
    green: styles?.greenColor,
    yellow: styles?.yellowColor,
    blue: styles?.blueColor,
    lightPurple: styles?.lightPurpleColor,
    teal: styles?.tealColor,
    pink: styles?.pinkColor,
    red: styles?.redColor,
  }

  return (
    <>
      <button
        id={idButton}
        className={`${style ? buttonStyles[style] : styles?.buttonIcon} ${
          size ? sizeStyles[size] : styles?.buttonIcon
        } ${color ? colorStyles[color] : styles?.buttonIcon}  ${
          styles.buttonIcon
        } ${disabled ? styles.disabled : ""}`}
        onClick={action}
      >
        {icon ? <StrapiImage image={icon ? icon : null} /> : null}
      </button>
    </>
  )
}

export default ButtonIcon
