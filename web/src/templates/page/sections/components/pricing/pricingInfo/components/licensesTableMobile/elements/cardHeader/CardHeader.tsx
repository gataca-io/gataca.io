import * as React from "react"
import cx from "classnames"
import * as styles from "./cardHeader.module.scss"

export type ICardHeaderProps = {
  title: any
}

export const CardHeader: React.FC<ICardHeaderProps> = props => {
  const { title } = props
  return (
    <div key={0} className={styles?.card__header}>
      <p className={`${cx("bodyBoldLG")}`}>{title}</p>
    </div>
  )
}

export default CardHeader
