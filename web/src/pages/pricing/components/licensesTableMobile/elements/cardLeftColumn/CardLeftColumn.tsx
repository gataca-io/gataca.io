import * as React from "react"
import cx from "classnames"
import * as styles from "./cardLeftColumn.module.scss"
import HoverTooltip from "../../../../../../components/elements/tooltip/hoverTooltip/HoverTooltip"

export type ICardLeftColumnProps = {
  text: string
  information?: string
}

export const CardLeftColumn: React.FC<ICardLeftColumnProps> = props => {
  const { text, information } = props
  return (
    <div key={0} className={styles.card__row}>
      <div>
        <p className={`${cx("bodyRegularSM")}`}>{text}</p>
        {information?.length && information?.length > 0 ? (
          <HoverTooltip label={information} />
        ) : null}
      </div>
    </div>
  )
}

export default CardLeftColumn
