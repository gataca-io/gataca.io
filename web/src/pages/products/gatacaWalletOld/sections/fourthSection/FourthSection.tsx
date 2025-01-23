import * as React from "react"
import cx from "classnames"
import { images } from "../../../../../images/images"
import * as styles from "./fourthSection.module.scss"
import { useOnScreenAgain } from "../../../../../utils/viewport"

export type ISectionProps = {
  title: string
  list: {
    id: string
    attributes: {
      title: string
      description?: string
    }
  }[]
}

const FourthSection: React.FC<ISectionProps> = props => {
  const { title, list } = props

  return (
    <div
      className={`${styles.fourthSection__container} ${cx(
        "containerMaxWidth"
      )}`}
    >
      <section className={styles.fourthSection}>
        <div className={styles.fourthSection__leftSide}>
          <img src={images.rocket} />
        </div>
        <div className={`${cx("heading3")} ${styles.fourthSection__rightSide}`}>
          <p className={`${cx("heading3 marginBottom12")}`}>{title}</p>

          <div className={styles.fourthSection__rightSide__bullets}>
            {list?.map((item, index) => {
              const { title, description } = item.attributes

              return (
                <div
                  key={`${"feature_" + index}`}
                  className={`${styles.fourthSection__rightSide__bullets__container}`}
                >
                  <img src={images.checkIcon} />
                  <div>
                    <p className={`${cx("heading6")}`}>{title}</p>
                    <p
                      className={`${cx("bodyRegularMD marginTop8")} ${
                        styles.bullet__description
                      }`}
                    >
                      {description}
                    </p>
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

export default FourthSection
