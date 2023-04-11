import * as React from "react"
import cx from "classnames"
import * as styles from "./secondSection.module.scss"

export type ISectionProps = {
  steps: {
    title: string
    description: string
    number: string
  }[]
}

const SecondSection: React.FC<ISectionProps> = props => {
  const { steps } = props

  return (
    <section className={`${styles?.stepsSection} ${cx("containerMaxWidth")}`}>
      <div className={styles?.stepsSection__container}>
        {steps?.map((item, index) => {
          const { title, description, number } = item
          return (
            <div className={styles?.stepsSection__container}>
              <div className={styles?.number}>{number}</div>
              <h3 className={cx("marginBottom12 heading3")}>{title}</h3>
              <p className={cx("bodyRegularXL neutral700")}>{description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default SecondSection
