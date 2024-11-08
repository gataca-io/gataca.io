import * as React from "react"
import cx from "classnames"
import * as styles from "./highlightCard.module.scss"
import ListGroup from "../../../list/listGroup/ListGroup"

export type IHighlightCardProps = {
  idItem?: string
  title?: string
  list_options?: any
  className?: string
}
const HighlightCard: React.FC<IHighlightCardProps> = props => {
  const { idItem, title, list_options, className } = props

  return (
    <div
      id={idItem}
      className={`${styles?.highlightCard__container} ${
        className && className
      }`}
    >
      <p className={cx("bodyBoldLG  neutral1000")}>{title}</p>
      <ListGroup listOptions={list_options?.data} />
    </div>
  )
}

export default HighlightCard
