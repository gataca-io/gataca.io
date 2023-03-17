import * as React from "react"
import * as styles from "./numberedText.module.scss"
import cx from "classnames"
import { ButtonModel } from "../../../../../interfaces/interfaces"

export type INumberedTextProps = {
  number: string
  title: string
  description: string
  className?: any
}

const NumberedText: React.FC<INumberedTextProps> = props => {
  const { number, title, description, className } = props
  return (
    <div
      className={`${cx("marginTop32 marginBottom12")} ${cx(styles.container)}`}
    >
      <p className={`${cx("heading1")} ${cx(styles.number)}`}>{number}</p>
      <p className={`${cx("heading6")} ${cx(styles.title)}`}>{title}</p>
      <p className={`${cx("bodyRegularMD")}`}>{description}</p>
    </div>
  )
}

export default NumberedText
