import * as React from "react"
import cx from "classnames"
import moment from "moment"
import StrapiImage from "../../atoms/images/StrapiImage"
import { BlogPreviewModel } from "../../../interfaces/interfaces"
import Tag from "../../atoms/tags/Tag"
import * as styles from "./blogPreview.module.scss"

const BlogPreview: React.FC<BlogPreviewModel> = props => {
  const { date, previewImage, timeReading, title, category, slugURL, id } =
    props
  const blogCategory = category?.data?.attributes?.name

  const readingTimeDisplay = () => {
    if (timeReading) {
      return timeReading < 60 ? timeReading + " min read" : "+1 hour read"
    }
  }

  return (
    <div className={styles?.blogPreview}>
      <div className={styles?.header}>
        {blogCategory && <Tag label={blogCategory} />}
        {timeReading && timeReading > 0 && (
          <p className={`${styles?.readTime} ${cx("bodyRegularSM")}`}>
            {readingTimeDisplay()}
          </p>
        )}
      </div>
      <div className={styles?.imageContainer}>
        <StrapiImage image={previewImage} />
      </div>
      <div className={`${styles?.bottomContainer}`}>
        <p className={`${styles?.title} ${cx("heading6 marginBottom8")}`}>
          {title}
        </p>
        <p className={`${cx("bodyRegularSM")}`}>{moment(date).format("LL")}</p>
      </div>
    </div>
    // </Link>
  )
}

export default BlogPreview
