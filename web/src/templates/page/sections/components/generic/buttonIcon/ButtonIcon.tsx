import * as React from "react"
import * as styles from "./buttonIcon.module.scss"
import { ButtonModel } from "../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"

const ButtonIcon: React.FC<ButtonModel> = props => {
  const { idButton, icon, action, style, fillColor, size } = props

  return (
    <>
      <button
        id={idButton}
        className={`${
          style === "square" ? styles?.squareButton : styles?.buttonIcon
        } ${size === "buttonSM" ? styles?.buttonSM : styles?.buttonIcon} ${
          fillColor === "green"
            ? styles?.greenFill
            : fillColor === "yellow"
            ? styles?.yellowFill
            : fillColor === "blue"
            ? styles?.blueFill
            : fillColor === "light-purple"
            ? styles?.lightPurpleFill
            : fillColor === "teal"
            ? styles?.tealFill
            : fillColor === "pink"
            ? styles?.pinkFill
            : fillColor === "red"
            ? styles?.redFill
            : styles?.buttonIcon
        } ${styles.buttonIcon}`}
        onClick={action}
      >
        {icon ? <StrapiImage image={icon ? icon : null} /> : null}
      </button>
    </>
  )
}

export default ButtonIcon
