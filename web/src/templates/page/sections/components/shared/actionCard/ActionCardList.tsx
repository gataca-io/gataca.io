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
          const { idActionCard } = el

          const subOptionClickedIDComparison =
            subOptionClickedID === idActionCard
          return (
            <ActionCard
              {...el}
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
              button={{
                ...el?.button,
                action: () => window.open(el?.button?.url, "_blank"),
              }}
            />
          )
        }
      )}
    </div>
  )
}

export default ActionCardList
