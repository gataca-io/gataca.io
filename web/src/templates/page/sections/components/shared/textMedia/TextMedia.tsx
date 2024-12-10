import * as React from "react"
import cx from "classnames"
import * as styles from "./textMedia.module.scss"
import { HeadingModel } from "../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"
import Heading from "../Heading/Heading"

export type ISectionProps = {
  className?: string
  idItem?: string
  heading: HeadingModel
  image?: any
  textAlign?: string
}

const TextMedia: React.FC<ISectionProps> = props => {
  const { className, idItem, heading, image, textAlign } = props

  const textAlignStyles: Record<string, string> = {
    right: styles?.textAlignRight,
    left: styles?.textAlignLeft,
  }

  return (
    <div
      id={idItem}
      className={`${styles.textMedia} ${cx("containerMaxWidth")} ${
        className && className
      }`}
    >
      <div
        className={`${styles.textMedia__container} ${
          textAlign ? textAlignStyles[textAlign] : styles?.textAlignLeft
        } `}
      >
        {image?.data?.attributes?.url && (
          <div className={`${styles.textMedia__imageContainer} `}>
            <StrapiImage
              className={styles.textMedia__image}
              image={image ? image : null}
            />
          </div>
        )}
        <div className={`${styles.textMedia__heading} `}>
          <Heading
            {...heading}
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

export default TextMedia
