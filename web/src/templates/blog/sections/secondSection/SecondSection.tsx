import * as React from "react"
import cx from "classnames"
import StrapiAuthor from "../../../../components/atoms/strapi/StrapiAuthor"
import MarkDownContent from "../../../../components/elements/markDownContent/MarkDownContent"
import * as styles from "./secondSection.module.scss"

export type IContentProps = {
  content?: any
  className?: string
  author: string
}
const SecondSection: React.FC<IContentProps> = props => {
  const { content, author } = props

  return (
    <section
      className={`${styles.secondSection__container} ${cx(
        "containerMaxWidth"
      )}`}
    >
      <div className={`${styles.secondSection}`}>
        <div className={styles.secondSection__leftSide}>
          {content?.length && <MarkDownContent content={content} />}
        </div>
        <div className={styles.secondSection__rightSide}>
          <StrapiAuthor author={author} />
        </div>
      </div>
    </section>
  )
}

export default SecondSection
