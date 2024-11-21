import * as React from "react"
import * as styles from "./actionCardList.module.scss"
import ActionCard from "./component/ActionCard"

export type IactionCardListProps = {
  list?: any
  className?: string
  showItem: any
  setShowItem: (x: number) => void
}

const ActionCardList: React.FC<IactionCardListProps> = props => {
  const { list, className, showItem, setShowItem } = props

  return (
    <div
      className={`${styles?.actionCardList__container} ${
        className && className
      }`}
    >
      {list?.action_card?.data?.attributes?.actionCard?.map(
        (el: any, index: number) => {
          const {
            idActionCard,
            upperIconOpened,
            upperIconClosed,
            trailingIcon,
            titleCard,
            titleContent,
            content,
            button,
            chip,
          } = el
          return (
            <ActionCard
              idActionCard={idActionCard}
              key={"actionCard__" + index}
              index={index + 1}
              selected={showItem === index + 1}
              showItem={index => {
                setShowItem(index)
              }}
              upperIconOpened={upperIconOpened}
              upperIconClosed={upperIconClosed}
              trailingIcon={trailingIcon}
              titleCard={titleCard}
              titleContent={titleContent}
              content={content}
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
          )
        }
      )}
    </div>
  )
}

export default ActionCardList
