import * as React from "react"
import cx from "classnames"
import * as styles from "./secondSection.module.scss"
import { images } from "../../../../../images/images"

export type ISectionProps = {
  title: string
  description: string
}

const SecondSection: React.FC<ISectionProps> = props => {
  const { title, description } = props

  return (
    <section
      className={`${styles.gatacaVouchSection} ${cx("containerMaxWidth")}`}
    >
      <div className={styles?.gatacaVouchSection__container}>
        <div className={styles?.gatacaVouchSection__leftSide}>
          <h3 className={cx("heading3 marginBottom24")}>{title}</h3>
          <p
            className={`${styles?.description} ${cx(
              "bodyRegularXL neutral700"
            )}`}
          >
            {description}
          </p>
        </div>
        <div className={styles?.gatacaVouchSection__rightSide}>
          <img src={images.impactedIndustries} />
        </div>
      </div>
    </section>
  )
}

export default SecondSection
