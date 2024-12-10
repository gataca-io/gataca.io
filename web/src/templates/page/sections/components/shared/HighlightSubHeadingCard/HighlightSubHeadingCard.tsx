import * as React from "react"
import cx from "classnames"
import { HeadingModel } from "../../../../../../interfaces/interfaces"
import * as styles from "./highlightSubHeadingCard.module.scss"
import Heading from "../Heading/Heading"
import SubHeadingContainer from "../subHeadingContainer/SubHeadingContainer"
import FullWidthCard from "../fullWidthCard/FullWidthCard"

export type IHighlightSubHeadingCardProps = {
  idItem?: string
  heading?: HeadingModel
  subHeadingContainer?: any
  fullWidthCard?: any
}

const HighlightSubHeadingCard: React.FC<
  IHighlightSubHeadingCardProps
> = props => {
  const { idItem, heading, subHeadingContainer, fullWidthCard } = props

  return (
    <div
      id={idItem}
      className={`${styles?.highlightSubHeadingCard__container} ${cx(
        "containerMaxWidth"
      )}`}
    >
      <div className={`${styles?.highlightSubHeadingCard__mainContent}`}>
        {heading && (
          <Heading
            {...heading}
            button={{
              ...heading?.button,
              action: () => window.open(heading?.button?.url, "_blank"),
            }}
          />
        )}

        {subHeadingContainer && (
          <SubHeadingContainer
            idItem={subHeadingContainer?.idItem}
            columns={subHeadingContainer?.columns}
            subHeading={subHeadingContainer?.subHeading}
            className={styles?.highlightSubHeadingCard__subHeading}
          />
        )}
      </div>

      <FullWidthCard
        idItem={fullWidthCard?.idItem}
        heading={fullWidthCard?.heading?.data?.attributes}
        image={fullWidthCard?.image}
        color={fullWidthCard?.color}
        layout={fullWidthCard?.layout}
        sizeSlot={fullWidthCard?.sizeSlot}
        className={styles?.highlightSubHeadingCard__fullWidthCard}
      />
    </div>
  )
}

export default HighlightSubHeadingCard
