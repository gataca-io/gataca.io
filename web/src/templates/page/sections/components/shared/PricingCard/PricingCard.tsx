import React from "react"
import cx from "classnames"
import * as styles from "./pricingCard.module.scss"
import Button from "../../generic/button/Button"
import { PricingCardModel } from "../../../../../../interfaces/interfaces"
import ListGroup from "../list/listGroup/ListGroup"

const PricingCard: React.FC<PricingCardModel> = props => {
  const {
    className,
    idItem,
    titleAmountSize,
    lists,
    listRow,
    name,
    description,
    frecuencyMonthly,
    frecuencyYearly,
    amountYearly,
    amountMonthly,
    button,
    customPrice,
    extraInfo,
    period,
  } = props

  const titleAmountSizeStyles: Record<string, string> = {
    medium: "heading4",
    large: "heading3",
  }

  const periodYear = period === "year"

  const getPrice = () => {
    if (periodYear) {
      return amountYearly == undefined || amountYearly < 0
        ? customPrice
        : new Intl.NumberFormat("en-DE").format(amountYearly)
    } else {
      return amountMonthly == undefined || amountMonthly < 0
        ? customPrice
        : new Intl.NumberFormat("en-DE").format(amountMonthly)
    }
  }

  return (
    <div
      id={idItem}
      className={`${styles?.pricingCard} ${className && className}`}
    >
      <div>
        {name && <p className={`${cx("bodyBoldXL")}`}>{name}</p>}
        {description && (
          <p className={`${cx("marginTop8 bodyRegularMD neutral700")}`}>
            {description}
          </p>
        )}
      </div>

      <div
        className={`${styles?.pricingCard__price} ${
          periodYear ? styles?.minHeigth : ""
        }`}
      >
        <p>
          <span
            className={`${
              titleAmountSize
                ? titleAmountSizeStyles[titleAmountSize]
                : "heading3"
            }`}
          >
            {getPrice()}
          </span>
          <span
            className={`${
              titleAmountSize
                ? titleAmountSizeStyles[titleAmountSize]
                : "heading3"
            }`}
          >
            {(amountYearly || amountMonthly) && <span>€</span>}
          </span>

          <span className={`${cx("neutral700 bodyRegularMD marginLeft8")}`}>
            {periodYear ? frecuencyYearly : frecuencyMonthly}
          </span>
        </p>
        {periodYear && (
          <p className={`${cx("neutral700 bodyRegularSM")}`}>{extraInfo}</p>
        )}
      </div>

      {lists?.data && (
        <div>
          <ListGroup listOptions={lists?.data} />
        </div>
      )}
      {listRow?.data && (
        <div>
          <ListGroup listOptions={listRow?.data} listRow />
        </div>
      )}

      {(button?.label?.length ||
        button?.icon?.data?.attributes?.url?.length) && (
        <Button
          {...button}
          action={() =>
            window?.open(button?.url, button?.outsideWeb ? "_blank" : "_self")
          }
        />
      )}
    </div>
  )
}

export default PricingCard
