import * as React from "react"
import cx from "classnames"
import { CardModel } from "../../../../../../../../interfaces/interfaces"
import * as styles from "./cardsContainer.module.scss"
import Card from "../../../card/Card"

export type ICardsContainerProps = {
  idItem?: string
  card?: CardModel[]
  cardWidth?: number
  cardHeight?: number
}

const CardsContainer: React.FC<ICardsContainerProps> = props => {
  const { idItem, card, cardWidth, cardHeight } = props

  return (
    <div id={idItem} className={`${styles.cards__container}`}>
      {card?.map((item: any, index: number) => {
        return (
          <div
            key={`card__` + index}
            style={{ width: cardWidth, height: cardHeight }}
          >
            <Card
              {...item}
              button={{
                ...item?.button,
                action: () => window.open(item?.button?.url, "_blank"),
              }}
              chip={{ ...item?.chip }}
            />
          </div>
        )
      })}
    </div>
  )
}

export default CardsContainer
