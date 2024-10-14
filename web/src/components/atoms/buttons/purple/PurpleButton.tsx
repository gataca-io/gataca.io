import * as React from "react"
import cx from "classnames"
import { ButtonModelOld } from "../../../../interfaces/interfaces"
import * as styles from "./purpleButton.module.scss"

const PurpleButton: React.FC<ButtonModelOld> = props => {
  const { label, outlined, icon, IconComponent, className, action } = props
  return (
    <button
      className={`${outlined ? styles?.outlinedButton : styles?.button} ${cx(
        "buttonMD"
      )} ${className && className}`}
      onClick={action}
    >
      <span className={cx("buttonMD")}>{label}</span>
      {icon && <img src={icon} />}
      {IconComponent && IconComponent}
    </button>
  )
}

export default PurpleButton
