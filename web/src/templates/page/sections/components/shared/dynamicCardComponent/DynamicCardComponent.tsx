import * as React from "react"
import cx from "classnames"
import * as styles from "./dynamicCardComponent.module.scss"
import { HeadingModel } from "../../../../../../interfaces/interfaces"
import Heading from "../Heading/Heading"
import DynamicCard from "../dynamicCard/DynamicCard"

export type ISectionProps = {
  idItem?: string
  heading?: HeadingModel
  dynamicCards?: any
  background?: boolean
  bgVerticalAlign?: string
}

const DynamicCardComponent: React.FC<ISectionProps> = props => {
  const { idItem, heading, dynamicCards, background, bgVerticalAlign } = props

  const bgVerticalAlignStyles: Record<string, string> = {
    center: styles?.alignCenter,
    bottom: styles?.alignBottom,
  }

  return (
    <div
      className={styles.dynamicCardComponent__container}
      style={{ position: "relative" }}
    >
      <div
        className={`${styles.dynamicCardComponent} ${cx("containerMaxWidth")}`}
      >
        <div className={styles.dynamicCardComponent__elements}>
          {heading && (
            <Heading
              idHeading={heading?.idHeading}
              titleSize={heading?.titleSize}
              align={heading?.align}
              extraText={heading?.extraText}
              title={heading?.title}
              sectionName={heading?.sectionName}
              content={heading?.content}
              buttonGroup={heading?.buttonGroup?.buttons?.data}
              list={heading?.list?.list_options?.data}
              segmentedButton={heading?.segmentedButton?.buttons?.data}
              table={heading?.table?.content}
              className={styles?.headingContainer}
              chip={{
                idChip: heading?.chip?.idChip,
                text: heading?.chip?.text,
                type: heading?.chip?.type,
                form: heading?.chip?.form,
                disabled: heading?.chip?.disabled,
                color: heading?.chip?.color,
                chipSize: heading?.chip?.chipSize,
                leadingIcon: heading?.chip?.leadingIcon,
                trailingIcon: heading?.chip?.trailingIcon,
              }}
              button={{
                idButton: heading?.button?.idButton,
                label: heading?.button?.label,
                icon: heading?.button?.icon,
                style: heading?.button?.style,
                color: heading?.button?.color,
                size: heading?.button?.size,
                noPaddingText: heading?.button?.noPaddingText,
                disabled: heading?.button?.disabled,
                link: heading?.button?.link,
                url: heading?.button?.url,
                outsideWeb: heading?.button?.outsideWeb,
                action: () => window.open(heading?.button?.url, "_blank"),
              }}
            />
          )}

          <div
            id={idItem || "dynamicCard"}
            className={`${styles.dynamicCard__container} ${
              bgVerticalAlign
                ? bgVerticalAlignStyles[bgVerticalAlign]
                : styles?.alignCenter
            } ${background ? styles?.background : ""}`}
          >
            <DynamicCard
              dynamicCards={dynamicCards}
              idItem={idItem}
              className={styles?.dynamicCard}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DynamicCardComponent
