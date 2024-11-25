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
        const {
          idCard,
          upperIconOpened,
          upperIconClosed,
          numberIconText,
          mainIcon,
          title,
          content,
          size,
          contentAlign,
          moreContent,
          button,
          chip,
        } = item

        return (
          <div
            key={`card__` + index}
            style={{ width: cardWidth, height: cardHeight }}
          >
            <Card
              idCard={idCard}
              upperIconOpened={upperIconOpened}
              upperIconClosed={upperIconClosed}
              numberIconText={numberIconText}
              mainIcon={mainIcon}
              title={title}
              content={content}
              size={size}
              contentAlign={contentAlign}
              moreContent={moreContent}
              button={{
                idButton: button?.idButton,
                label: button?.label,
                icon: button?.icon,
                style: button?.style,
                color: button?.color,
                size: button?.size,
                noPaddingText: button?.noPaddingText,
                disabled: button?.disabled,
                link: button?.link,
                url: button?.url,
                outsideWeb: button?.outsideWeb,
                action: () => window.open(button?.url, "_blank"),
              }}
              chip={{
                idChip: chip?.idChip,
                text: chip?.text,
                type: chip?.type,
                form: chip?.form,
                disabled: chip?.disabled,
                color: chip?.color,
                chipSize: chip?.chipSize,
                leadingIcon: chip?.leadingIcon,
                trailingIcon: chip?.trailingIcon,
              }}
            />
          </div>
        )
      })}
    </div>
  )
}

export default CardsContainer
