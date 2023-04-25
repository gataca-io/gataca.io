import * as React from "react"
import cx from "classnames"
import * as styles from "./thirdSection.module.scss"

export type ISectionProps = {
  title: string
  description: string
  list: {
    number: string
    title: string
    description: string
  }[]
}

const ThirdSection: React.FC<ISectionProps> = props => {
  const { title, description, list } = props

  return (
    <section className={`${styles.thirdSection} ${cx("containerMaxWidth")}`}>
      <div className={styles.thirdSection__content}>
        <div className={styles.leftColumn}>
          <h3 className={`${cx("heading3 marginBottom24")}`}>{title}</h3>
          <p className={`${cx("bodyRegularXL neutral700")}`}>{description}</p>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.listContainer}>
            {list?.map((item, index) => {
              return (
                <div key={"list__" + index} className={styles.list}>
                  <p
                    className={`${cx("heading1 marginBottom12")} ${
                      styles.number
                    }`}
                  >
                    {item.number}
                  </p>
                  <h5 className={cx("heading5 marginBottom12")}>
                    {item.title}
                  </h5>
                  <p className={cx("bodyRegularXL neutral700")}>
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
