import * as React from "react"
import cx from "classnames"
import MarkDownContent from "../../../../components/elements/markDownContent/MarkDownContent"
import * as styles from "./secondSection.module.scss"

export type IContentProps = {
  content?: any
  className?: string
}
const SecondSection: React.FC<IContentProps> = props => {
  const { content } = props

  return (
    <div
      className={styles.secondSection__container}
      style={{ position: "relative" }}
    >
      <section className={`${styles.secondSection} ${cx("containerMaxWidth")}`}>
        <div className={styles.secondSection__leftSide}>
          {content?.length && <MarkDownContent content={content} />}
        </div>
      </section>
    </div>
  )
}

export default SecondSection
