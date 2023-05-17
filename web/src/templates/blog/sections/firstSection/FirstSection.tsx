import * as React from "react"
import moment from "moment"
import { BlogModel } from "../../../../interfaces/interfaces"
import cx from "classnames"
import Tag from "../../../../components/atoms/tags/Tag"
import StrapiImage from "../../../../components/atoms/images/StrapiImage"
import * as styles from "./firstSection.module.scss"
import { readingMarkdownTime } from "../../../../utils/time"

const FirstSection: React.FC<BlogModel> = props => {
  const { title, category, timeReading, date, heroImage, content } = props

  const readingTimeDisplay = () => {
    if (content) {
      const timeReading = readingMarkdownTime(content)
      return timeReading < 60 ? timeReading + " min read" : "+1 hour read"
    }
  }

  return (
    <section
      className={`${styles.firstSection__container} ${cx("containerMaxWidth")}`}
    >
      <div className={`${styles.firstSection}`}>
        <div className={styles.firstSection__leftSide}>
          <div className={styles.firstSection__leftSide__header}>
            {category && <Tag label={category?.data?.attributes?.name} />}
            {timeReading && timeReading > 0 && (
              <p className={`${cx("neutral700 bodyRegularSM")}`}>
                {readingTimeDisplay()}
              </p>
            )}
          </div>
          <h1 className={`${cx("heading1 marginBottom32")}`}>{title}</h1>
          <p className={`${cx("bodyRegularXL neutral700")}`}>
            {moment(date).format("LL")}
          </p>
        </div>
        <div className={styles.firstSection__rightSide}>
          <StrapiImage image={heroImage} />
        </div>
      </div>
    </section>
  )
}

export default FirstSection
