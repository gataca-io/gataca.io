import * as React from "react"
import cx from "classnames"
import moment from "moment"
import { Link } from "gatsby"
import StrapiImage from "../../../atoms/images/StrapiImage"
import { BlogPreviewModel } from "../../../../interfaces/interfaces"
import * as styles from "./blogDetailedPreview.module.scss"
import { images } from "../../../../images/images"

const BlogDetailedPreview: React.FC<BlogPreviewModel> = props => {
  const { date, previewImage, timeReading, title, category, content, slugURL } =
    props?.attributes

  return (
    <div className={styles?.blogDetailedPreview}>
      <div className={styles?.imageContainer}>
        <StrapiImage image={previewImage} />
      </div>
      <div className={`${styles?.bottomContainer}`}>
        <p className={`${styles?.title} ${cx("heading6 marginBottom8")}`}>
          {title}
        </p>
        <p className={`${styles?.date} ${cx("bodyRegularSM marginBottom20")}`}>
          {moment(date).format("LL")}
        </p>
        <p className={`${styles?.description} ${cx("bodyRegularSM")}`}>
          {content}
        </p>
        {/* TODO: Add complete route when single blog view is ready */}
        <Link
          to={`/blog/${slugURL}`}
          className={`${styles.link} ${cx("buttonMD")}`}
        >
          Read more <img src={images.chevronRight} />
        </Link>
      </div>
    </div>
  )
}

export default BlogDetailedPreview
