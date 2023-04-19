import * as React from "react"
import cx from "classnames"
import * as styles from "./secondSection.module.scss"

export type ISectionProps = {
  description: string
}

const SecondSection: React.FC<ISectionProps> = props => {
  const { description } = props

  return (
    <section className={`${styles.secondSection}`}>
      <div className={styles.secondSection__container}>
        <h3
          className={`${styles.slogan} ${cx("heading3")}`}
          dangerouslySetInnerHTML={{ __html: description }}
        ></h3>
      </div>
    </section>
  )
}

export default SecondSection
