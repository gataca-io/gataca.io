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

  const fullWidthCardHeadingData = fullWidthCard?.heading?.data?.attributes
  const fullWidthCardImageData = fullWidthCard?.image?.data?.attributes?.url
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
            {...subHeadingContainer}
            className={`${styles?.highlightSubHeadingCard__subHeading} ${
              fullWidthCardHeadingData || fullWidthCardImageData
                ? styles?.negativeMargin
                : ""
            }`}
          />
        )}
      </div>
      {(fullWidthCardHeadingData || fullWidthCardImageData) && (
        <FullWidthCard
          {...fullWidthCard}
          className={`${styles?.highlightSubHeadingCard__fullWidthCard} ${
            fullWidthCardHeadingData && !fullWidthCardImageData
              ? styles?.headingPadding
              : fullWidthCardImageData && !fullWidthCardHeadingData
              ? styles?.imagePadding
              : fullWidthCardHeadingData && fullWidthCardImageData
              ? styles?.fullWidthCardPadding
              : ""
          }`}
        />
      )}
    </div>
  )
}

export default HighlightSubHeadingCard
