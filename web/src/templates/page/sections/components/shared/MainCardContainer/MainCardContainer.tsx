import * as React from "react"
import cx from "classnames"
import { MainCardContainerModel } from "../../../../../../interfaces/interfaces"
import * as styles from "./mainCardContainer.module.scss"
import Card from "../card/Card"
import PricingCard from "../PricingCard/PricingCard"

const MainCardContainer: React.FC<MainCardContainerModel> = props => {
  const { columns, card, pricing } = props

  const columnStyles: Record<string, string> = {
    one: styles?.oneColumn,
    two: styles?.twoColumns,
    three: styles?.threeColumns,
    four: styles?.fourColumns,
  }

  return (
    <div
      className={`${styles.card__container} ${cx(
        columns ? columnStyles[columns] : ""
      )}`}
    >
      {card?.map((item: any, index: number) => {
        const { size, button } = item

        item.button
          ? (item.button.action = () => window.open(button?.url, "_blank"))
          : null

        return (
          <Card
            key={`card__` + index}
            {...item}
            className={size === "small" ? styles?.smallCard : ""}
          />
        )
      })}

      {pricing?.map((el: any, index: number) => {
        const { button } = el

        el.button
          ? (el.button.action = () => window.open(button?.url, "_blank"))
          : null

        return (
          <PricingCard
            key={`pricingCard__` + index}
            {...el}
            className={styles?.smallCard}
          />
        )
      })}
    </div>
  )
}

export default MainCardContainer
