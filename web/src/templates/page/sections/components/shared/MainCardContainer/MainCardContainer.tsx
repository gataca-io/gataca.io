import * as React from "react"
import cx from "classnames"
import { MainCardContainerModel } from "../../../../../../interfaces/interfaces"
import * as styles from "./mainCardContainer.module.scss"
import Card from "../card/Card"

const MainCardContainer: React.FC<MainCardContainerModel> = props => {
  const { idItem, columns, card } = props

  const columnStyles: Record<string, string> = {
    one: styles?.oneColumn,
    two: styles?.twoColumns,
    three: styles?.threeColumns,
    four: styles?.fourColumns,
  }

  return (
    <div id={idItem} className={`${styles.card} ${cx("containerMaxWidth")} `}>
      <div
        className={`${styles.card__container} ${cx(
          columns ? columnStyles[columns] : ""
        )}`}
      >
        {card?.map((item: any, index: number) => {
          const {
            idCard,
            dynamicCard,
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
            <Card
              key={`card__` + index}
              idCard={idCard}
              dynamicCard={dynamicCard}
              upperIconOpened={upperIconOpened}
              upperIconClosed={upperIconClosed}
              numberIconText={numberIconText}
              mainIcon={mainIcon}
              title={title}
              content={content}
              size={size}
              contentAlign={contentAlign}
              moreContent={moreContent}
              className={size === "small" ? styles?.smallCard : ""}
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
        })}
      </div>
    </div>
  )
}

export default MainCardContainer
