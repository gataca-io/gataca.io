import * as React from "react"
import * as styles from "./tag.module.scss"
import cx from "classnames"
import { ButtonModel } from "../../../interfaces/interfaces"

export type ITagProps = {
  label: string
  className?: any
}

const Tag: React.FC<ITagProps> = props => {
  const { label, className } = props
  return (
    <div
      className={`${styles?.tag} ${cx("buttonMD")} ${className && className}`}
    >
      <p className={`${cx("buttonSM")}`}>{label}</p>
    </div>
  )
}

export default Tag
