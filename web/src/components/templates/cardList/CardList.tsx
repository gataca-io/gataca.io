import * as React from "react"
import cx from "classnames"
import * as styles from "./cardList.module.scss"

export type ICardListProps = {
  id: string
  icon: string
  title: string
  description: string
}

const CardList: React.FC<ICardListProps> = props => {
  const { id, icon, title, description } = props
  return (
    <div id={id} className={`${styles?.card__list} ${cx("marginBottom32")}`}>
      <img src={icon} />
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  )
}

export default CardList
