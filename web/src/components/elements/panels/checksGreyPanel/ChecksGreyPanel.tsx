import * as React from "react"
import cx from "classnames"
import * as styles from "./checksGreyPanel.module.scss"
import { images } from "../../../../images/images"

export type ISectionProps = {
  title: string
  description?: string
  list: {
    id: number
    attributes: {
      title: string
      description?: string
    }
  }[]
  image: string
  leftSideClassName?: string
  imageClassName?: string
  rightSideClassName?: string
  haslistDescription?: boolean
}

const ChecksGreyPanel: React.FC<ISectionProps> = props => {
  const {
    title,
    description,
    list,
    image,
    leftSideClassName,
    imageClassName,
    rightSideClassName,
    haslistDescription,
  } = props

  return (
    <div className={styles.checksGreyPanel__container}>
      <div
        className={`${
          leftSideClassName
            ? leftSideClassName
            : styles.checksGreyPanel__leftSide
        }`}
      >
        <img
          className={`${
            imageClassName ? imageClassName : styles.leftSide__image
          }`}
          src={image}
        />
      </div>
      <div
        className={`${
          rightSideClassName
            ? rightSideClassName
            : styles.checksGreyPanel__rightSide
        }`}
      >
        <h3 className={`${cx("heading3 marginBottom12")}`}>{title}</h3>
        {description && (
          <p className={`${cx("bodyRegularXL")} ${styles.bullet__description}`}>
            {description}
          </p>
        )}

        <div>
          {list?.map((item, index) => {
            const { title, description } = item.attributes

            return (
              <div
                key={`${"feature_" + index}`}
                className={`${styles.checksGreyPanel__rightSide__bullets__container}`}
              >
                <img src={images.checkIcon} />
                <div>
                  <p className={`${cx("heading6")}`}>{title}</p>
                  {description && haslistDescription && (
                    <p
                      className={`${cx("bodyRegularMD marginTop8")} ${
                        styles.bullets__container__description
                      }`}
                    >
                      {description}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ChecksGreyPanel
