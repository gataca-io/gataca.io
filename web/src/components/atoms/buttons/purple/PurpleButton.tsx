import * as React from "react"
import * as styles from "./purpleButton.module.scss"
import cx from "classnames"
import { ButtonModel } from "../../../../interfaces/interfaces"

const PurpleButton: React.FC<ButtonModel> = props => {
  const { label, icon, outlined, className, action } = props
  return (
    <button
      className={`${outlined ? styles?.outlinedButton : styles?.button} ${cx(
        "buttonMD"
      )} ${className && className}`}
      onClick={action}
    >
      {label}
    </button>
  )
}

export default PurpleButton
