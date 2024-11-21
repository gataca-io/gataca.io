import * as React from "react"
import * as styles from "./whiteButton.module.scss"
import cx from "classnames"
import { ButtonModelOld } from "../../../../interfaces/interfaces"

const WhiteButton: React.FC<ButtonModelOld> = props => {
  const { label, icon, outlined, className, action } = props
  return (
    <button
      className={`${outlined ? styles?.outlinedButton : styles?.button} ${cx(
        "buttonLG"
      )} ${className && className}`}
      onClick={action}
    >
      {label}
    </button>
  )
}

export default WhiteButton
