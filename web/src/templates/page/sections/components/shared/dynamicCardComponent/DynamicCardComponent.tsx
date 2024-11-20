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
              chip={{ ...heading?.chip }}
              button={{
                ...heading?.button,
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
