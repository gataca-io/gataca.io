import * as React from "react"
import cx from "classnames"
import {
  BlogPreviewModel,
  ButtonModel,
} from "../../../../../interfaces/interfaces"
import PurpleButton from "../../../../../components/atoms/buttons/purple/PurpleButton"
import BlogDetailedPreview from "../../../../../components/elements/blogPreview/blogDetailedPreview/BlogDetailedPreview"
import BlogPreviewSkeleton from "../../../../../components/elements/skeletons/blogPreviewSkeleton/BlogPreviewSkeleton"
import * as styles from "./eighthSection.module.scss"
import { readingMarkdownTime } from "../../../../../utils/time"

export type ISectionProps = {
  title: string
  description: string
  blogs: BlogPreviewModel[]
  moreButton: ButtonModel
}

const EighthSection: React.FC<ISectionProps> = props => {
  const { title, description, blogs, moreButton } = props
  return (
    <div
      className={styles.eighthSection__container}
      style={{ position: "relative" }}
    >
      <section className={`${styles.eighthSection} ${cx("containerMaxWidth")}`}>
        <div className={styles.eighthSection__leftSide}>
          <div className={styles.eighthSection__leftSide__header}>
            <div>
              <p className={`${cx("heading6 neutral700 marginBottom12")}`}>
                {description}
              </p>

              <h1 className={`${cx("heading3")}`}>{title}</h1>
            </div>
            <PurpleButton
              label={moreButton?.label}
              action={() => window.open("/resources/blog/", "_self")}
            />
          </div>

          <div className={styles.blogs__container}>
            {blogs ? (
              blogs?.slice(0, 2)?.map((el, index) => {
                el.attributes.timeReading = readingMarkdownTime(
                  el?.attributes?.content
                )

                return (
                  <BlogDetailedPreview
                    id={el?.id}
                    key={"blogPreview_" + index}
                    attributes={el?.attributes}
                  />
                )
              })
            ) : (
              <BlogPreviewSkeleton
                cardsNumber={4}
                className={styles.blogSkeleton}
              />
            )}
          </div>
        </div>
        <div className={styles.eighthSection__rightSide}></div>
      </section>
    </div>
  )
}

export default EighthSection
