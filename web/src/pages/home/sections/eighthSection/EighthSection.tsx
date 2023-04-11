import * as React from "react"
import cx from "classnames"
import * as styles from "./eighthSection.module.scss"
import { BlogModel, ButtonModel } from "../../../../interfaces/interfaces"
import { readingMarkdownTime } from "../../../../utils/time"
import BlogPreviewSkeleton from "../../../../components/elements/skeletons/blogPreviewSkeleton/BlogPreviewSkeleton"
import BlogDetailedPreview from "../../../../components/elements/blogPreview/blogDetailedPreview/BlogDetailedPreview"
import PurpleButton from "../../../../components/atoms/buttons/purple/PurpleButton"

export type ISectionProps = {
  title: string
  description: string
  blogs: {
    attributes: BlogModel
  }[]
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
            {/* TODO: Add action to navigate to blogs route when web is deployed */}
            <PurpleButton
              label={moreButton?.label}
              action={() => window.open("/resources/blog/", "_self")}
            />
          </div>

          <div className={styles.blogs__container}>
            {blogs ? (
              blogs?.slice(0, 3)?.map((el, index) => {
                const {
                  date,
                  previewImage,
                  title,
                  category,
                  content,
                  slugURL,
                } = el?.attributes

                return (
                  <BlogDetailedPreview
                    key={"blogPreview_" + index}
                    date={date}
                    previewImage={previewImage}
                    timeReading={readingMarkdownTime(content)}
                    title={title}
                    category={category}
                    content={content}
                    slugURL={slugURL}
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