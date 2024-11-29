import * as React from "react"
import * as styles from "./actionCardList.module.scss"
import ActionCard from "./component/ActionCard"

export type IActionCardListProps = {
  idItem?: string
  list?: any
  className?: string
  showItem: any
  setShowItem: (x: any) => void
  subOptionClickedID?: string
  scrollIntoView: (x: any) => void
}

const ActionCardList: React.FC<IActionCardListProps> = props => {
  const {
    list,
    className,
    showItem,
    setShowItem,
    subOptionClickedID,
    scrollIntoView,
  } = props

  const idItemComponent = list?.action_card?.data?.attributes?.idItem
  return (
    <div
      id={idItemComponent}
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

          const subOptionClickedIDComparison =
            subOptionClickedID === idActionCard
          return (
            <ActionCard
              idActionCard={idActionCard}
              key={"actionCard__" + index}
              index={index + 1}
              subOptionClickedID={subOptionClickedID}
              selected={
                showItem ===
                (subOptionClickedIDComparison ? idActionCard : index + 1)
              }
              showItem={index => {
                subOptionClickedIDComparison
                  ? (setShowItem(idActionCard),
                    idActionCard && scrollIntoView(idActionCard))
                  : setShowItem(index)
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
