import * as React from "react"
import cx from "classnames"
import * as styles from "./checksGreyPanelTwoColumns.module.scss"
import { images } from "../../../../images/images"

export type ISectionProps = {
  title: string
  description?: string
  list: {
    title: string
    description?: string
  }[]
  image: string
  leftSideClassName?: string
  imageClassName?: string
}

const ChecksGreyPanelTwoColumns: React.FC<ISectionProps> = props => {
  const { title, description, list, image, leftSideClassName, imageClassName } =
    props

  return (
    <div className={styles.checksGreyPanelTwoColumns__container}>
      <section className={styles.checksGreyPanelTwoColumns}>
        <div
          className={`${styles.checksGreyPanelTwoColumns__leftSide} ${
            leftSideClassName && leftSideClassName
          }`}
        >
          <img className={`${imageClassName && imageClassName}`} src={image} />
        </div>
        <div
          className={`${cx("heading3")} ${
            styles.checksGreyPanelTwoColumns__rightSide
          }`}
        >
          <h3 className={`${cx("heading3 marginBottom12")}`}>{title}</h3>
          {description && (
            <p
              className={`${cx("bodyRegularXL")} ${styles.bullet__description}`}
            >
              {description}
            </p>
          )}

          <div className={styles.checksGreyPanelTwoColumns__rightSide__bullets}>
            <div>
              {list?.slice(0, 5)?.map((item, index) => {
                const { title, description } = item

                return (
                  <div
                    key={`${"feature_" + index}`}
                    className={`${styles.checksGreyPanelTwoColumns__rightSide__bullets__container}`}
                  >
                    <img src={images.checkIcon} />
                    <div>
                      <p className={`${cx("heading6")}`}>{title}</p>
                      {description && (
                        <p
                          className={`${cx("bodyRegularMD marginTop8")} ${
                            styles.bullet__description
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
            <div>
              {list?.slice(6, list?.length)?.map((item, index) => {
                const { title, description } = item

                return (
                  <div
                    key={`${"feature_" + index}`}
                    className={`${styles.checksGreyPanelTwoColumns__rightSide__bullets__container}`}
                  >
                    <img src={images.checkIcon} />
                    <div>
                      <p className={`${cx("heading6")}`}>{title}</p>
                      {description && (
                        <p
                          className={`${cx("bodyRegularMD marginTop8")} ${
                            styles.bullet__description
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
      </section>
    </div>
  )
}

export default ChecksGreyPanelTwoColumns
