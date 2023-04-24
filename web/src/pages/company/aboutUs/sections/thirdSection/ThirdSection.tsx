import * as React from "react"
import cx from "classnames"
import { images } from "../../../../../images/images"
import * as styles from "./thirdSection.module.scss"

export type ISectionProps = {
  title: string
  list: {
    number: string
    title: string
    description: string
  }[]
}

const ThirdSection: React.FC<ISectionProps> = props => {
  const { title, list } = props

  return (
    <section className={`${styles.thirdSection} ${cx("containerMaxWidth")}`}>
      <div className={styles.thirdSection__content}>
        <div className={styles.leftColumn}>
          <img src={images.heart}></img>
        </div>
        <div className={styles.rightColumn}>
          <h3 className={`${cx("heading3 marginBottom12")}`}>{title}</h3>
          <div className={styles.listContainer}>
            {list?.map((item, index) => {
              return (
                <div key={"list__" + index} className={styles.list}>
                  <p
                    className={`${cx("heading1 marginBottom24")} ${
                      styles.number
                    }`}
                  >
                    {item.number}
                  </p>
                  <h5 className={cx("heading5 marginBottom8")}>{item.title}</h5>
                  <p className={cx("bodyRegularMD neutral700")}>
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThirdSection
