import * as React from "react"
import cx from "classnames"
import * as styles from "./firstSection.module.scss"
import FormSkeleton from "../../../../pages/company/careers/sections/thirdSection/components/FormSkeleton"
import { images } from "../../../../images/images"
import Tag from "../../../../components/atoms/tags/Tag"
import { BlogModel } from "../../../../interfaces/interfaces"
import moment from "moment"
import StrapiImage from "../../../../components/atoms/images/StrapiImage"
import { readingMarkdownTime } from "../../../../utils/time"

const FirstSection: React.FC<BlogModel> = props => {
  const {
    title,
    category,
    timeReading,
    date,
    previewImage,
    content,
    heroImage,
    slugURL,
  } = props
  const [formSubmitted, setFormSubmitted] = React.useState(false)

  const readingTimeDisplay = () => {
    if (content) {
      const timeReading = readingMarkdownTime(content)
      return timeReading < 60 ? timeReading + " min read" : "+1 hour read"
    }
  }

  return (
    <div
      className={styles.firstSection__container}
      style={{ position: "relative" }}
    >
      <section className={`${styles.firstSection} ${cx("containerMaxWidth")}`}>
        <div className={styles.firstSection__leftSide}>
          <div className={styles.firstSection__leftSide__header}>
            {category && <Tag label={category?.data?.attributes?.name} />}
            {timeReading && timeReading > 0 && <p>{readingTimeDisplay()}</p>}
          </div>
          <h1 className={`${cx("heading1 marginBottom32")}`}>{title}</h1>
          <p className={`${cx("bodyRegularSM")}`}>
            {moment(date).format("LL")}
          </p>
        </div>
        <div className={styles.firstSection__rightSide}>
          <StrapiImage image={previewImage} />
        </div>
      </section>
    </div>
  )
}

export default FirstSection
