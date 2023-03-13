import * as React from "react"
import * as styles from "./purpleButton.module.scss"
import cx from "classnames"

export type IButtonProps = {
  label: string
  icon?: string
  outlined?: boolean
  className?: any
  action: (x?: any) => void
}

const Button: React.FC<IButtonProps> = props => {
  const { label, icon, outlined, className, action } = props
  return (
    <button
      className={`${outlined ? styles?.outlinedButton : styles?.button} ${cx(
        "buttonMD"
      )} ${className && className}`}
    >
      {label}
    </button>
  )
}

export default Button
