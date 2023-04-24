import * as React from "react"
import cx from "classnames"
import * as styles from "./cardLeftColumn.module.scss"
import HoverTooltip from "../../../../../../components/elements/tooltip/hoverTooltip/HoverTooltip"

export type ICardLeftColumnProps = {
  text: string
}

export const CardLeftColumn: React.FC<ICardLeftColumnProps> = props => {
  const { text } = props
  return (
    <div key={0} className={styles.card__row}>
      <div>
        <p className={`${cx("bodyRegularSM")}`}>{text}</p>
        <HoverTooltip label={"hola"} />
      </div>
    </div>
  )
}

export default CardLeftColumn
