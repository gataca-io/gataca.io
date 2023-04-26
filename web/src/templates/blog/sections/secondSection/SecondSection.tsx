import * as React from "react"
import cx from "classnames"
import * as styles from "./secondSection.module.scss"
import FormSkeleton from "../../../../pages/company/careers/sections/thirdSection/components/FormSkeleton"
import { images } from "../../../../images/images"
import Tag from "../../../../components/atoms/tags/Tag"
import { BlogModel } from "../../../../interfaces/interfaces"
import moment from "moment"
import StrapiImage from "../../../../components/atoms/images/StrapiImage"
import { readingMarkdownTime } from "../../../../utils/time"
import ReactMarkdown from "react-markdown"
import MarkDownContent from "../../../../components/elements/markDownContent/MarkDownContent"

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
