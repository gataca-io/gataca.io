import * as React from "react"
import cx from "classnames"
import * as styles from "./chosenBlogsSection.module.scss"
import { BlogPreviewModel } from "../../../../../../interfaces/interfaces"
import BlogDetailedPreview from "../../../../../../components/elements/blogPreview/blogDetailedPreview/BlogDetailedPreview"
import BlogPreviewSkeleton from "../../../../../../components/elements/skeletons/blogPreviewSkeleton/BlogPreviewSkeleton"

export type ISectionProps = {
  title: string
  subtitle?: string
  blogs: BlogPreviewModel[]
}

const ChosenBlogsSection: React.FC<ISectionProps> = props => {
  const { title, subtitle, blogs } = props
  return (
    <div
      className={styles.chosenBlogsSection__container}
      style={{ position: "relative" }}
    >
      <section
        className={`${styles.chosenBlogsSection} ${cx("containerMaxWidth")}`}
      >
        <div className={styles.chosenBlogsSection__leftSide}>
          <div className={styles.chosenBlogsSection__leftSide__header}>
            <div>
              <p className={`${cx("heading6 neutral700 marginBottom12")}`}>
                {subtitle}
              </p>

              <h3 className={`${cx("heading3")}`}>{title}</h3>
            </div>
          </div>

          <div className={styles.blogs__container}>
            {blogs ? (
              blogs?.map((el, index) => {
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
                cardsNumber={3}
                className={styles.blogSkeleton}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChosenBlogsSection
