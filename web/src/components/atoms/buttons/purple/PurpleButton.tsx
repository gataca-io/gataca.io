import * as React from "react"
import cx from "classnames"
import { ButtonModel } from "../../../../interfaces/interfaces"
import * as styles from "./purpleButton.module.scss"

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
