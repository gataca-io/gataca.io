import * as React from "react"
import cx from "classnames"
import * as styles from "./checksGreyPanel.module.scss"
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

const ChecksGreyPanel: React.FC<ISectionProps> = props => {
  const { title, description, list, image, leftSideClassName, imageClassName } =
    props

  return (
    <div className={styles.checksGreyPanel__container}>
      <section className={styles.checksGreyPanel}>
        <div
          className={`${styles.checksGreyPanel__leftSide} ${
            leftSideClassName && leftSideClassName
          }`}
        >
          <img className={`${imageClassName && imageClassName}`} src={image} />
        </div>
        <div
          className={`${cx("heading3")} ${styles.checksGreyPanel__rightSide}`}
        >
          <h3 className={`${cx("heading3 marginBottom12")}`}>{title}</h3>
          {description && (
            <p
              className={`${cx("bodyRegularXL")} ${styles.bullet__description}`}
            >
              {description}
            </p>
          )}

          <div className={styles.checksGreyPanel__rightSide__bullets}>
            {list?.map((item, index) => {
              const { title, description } = item

              return (
                <div
                  key={`${"feature_" + index}`}
                  className={`${styles.checksGreyPanel__rightSide__bullets__container}`}
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
      </section>
    </div>
  )
}

export default ChecksGreyPanel
