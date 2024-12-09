import * as React from "react"
import cx from "classnames"
import * as styles from "./fullWidthCard.module.scss"
import { HeadingModel } from "../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"
import Heading from "../Heading/Heading"

export type ISectionProps = {
  className?: string
  idItem?: string
  heading: HeadingModel
  image?: any
  color?: string
  layout?: string
  sizeSlot?: string
}

const FullWidthCard: React.FC<ISectionProps> = props => {
  const { className, idItem, heading, image, color, layout, sizeSlot } = props

  const colorStyles: Record<string, string> = {
    white: styles?.whiteBackground,
    grey: styles?.greyBackground,
    lightPurple: styles?.lightPurpleBackground,
  }

  const layoutStyles: Record<string, string> = {
    fiftyFifty: styles?.fiftyFifty,
    twentyFiveSeventyFive: styles?.twentyFiveSeventyFive,
  }

  const sizeSlotStyles: Record<string, string> = {
    padding: styles?.padding,
  }

  return (
    <div
      id={idItem}
      className={`${styles.fullWidthCard} ${cx("containerMaxWidth")} ${
        className && className
      }`}
    >
      <div
        className={`${styles.fullWidthCard__container} ${
          color ? colorStyles[color] : styles?.whiteBackground
        } ${sizeSlot ? sizeSlotStyles[sizeSlot] : styles?.padding}`}
      >
        {image?.data?.attributes?.url && (
          <div
            className={`${styles.fullWidthCard__imageContainer} ${
              sizeSlot ? sizeSlotStyles[sizeSlot] : styles?.padding
            } ${layout ? layoutStyles[layout] : styles?.twentyFiveSeventyFive}`}
          >
            <StrapiImage
              className={styles.fullWidthCard__image}
              image={image ? image : null}
            />
          </div>
        )}
        <div
          className={`${styles.fullWidthCard__heading} ${
            layout ? layoutStyles[layout] : styles?.twentyFiveSeventyFive
          }`}
        >
          <Heading
            {...heading}
            buttonGroup={heading?.buttonGroup?.buttons?.data}
            list={heading?.list?.list_options?.data}
            table={heading?.table?.content}
            button={{
              ...heading?.button,
              action: () => window.open(heading?.button?.url, "_blank"),
            }}
            key={`heading_` + Math.random()}
          />
        </div>
      </div>
    </div>
  )
}

export default FullWidthCard
