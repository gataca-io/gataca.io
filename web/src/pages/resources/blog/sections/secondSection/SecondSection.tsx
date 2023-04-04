import * as React from "react"
import cx from "classnames"
import * as styles from "./secondSection.module.scss"
import PurpleButton from "../../../../../components/atoms/buttons/purple/PurpleButton"
import BlogPreview from "../../../../../components/elements/blogPreview/BlogPreview"
import { readingMarkdownTime } from "../../../../../utils/time"
import { BlogModel } from "../../../../../interfaces/interfaces"
import BlogPreviewSkeleton from "../../../../../components/elements/skeletons/blogPreviewSkeleton/BlogPreviewSkeleton"

export type ISectionProps = {
  categories: any[]
  blogsCategorySelected: {
    attributes: BlogModel
  }[]
  loadMoreButton: string
  selectedCategoryIndex: number
  setSelectedCategoryIndex: (x: number) => void
}

const SecondSection: React.FC<ISectionProps> = props => {
  const {
    categories,
    blogsCategorySelected,
    loadMoreButton,
    selectedCategoryIndex,
    setSelectedCategoryIndex,
  } = props

  const [loadMoreCounter, setLoadMoreCounter] = React.useState(1)
  const categoriesContainer = document.getElementById("categoriesContainer")

  const scrollIntoView = (el: any) => {
    setTimeout(() => {
      categoriesContainer
        ? categoriesContainer.scroll({
            behavior: "smooth",
            left: el.offsetLeft,
          })
        : null
    }, 0)
  }

  return (
    <div
      className={styles.secondSection__container}
      style={{ position: "relative" }}
    >
      <section className={`${styles.secondSection} ${cx("containerMaxWidth")}`}>
        <div
          id="categoriesContainer"
          className={`${cx("heading3")} ${styles.categoriesContainer}`}
        >
          {categories?.map((el, index) => {
            return selectedCategoryIndex === index ? (
              <div
                id={"category__" + index}
                className={`${styles.categorySelectedOption} ${cx(
                  "bodyBoldLG"
                )}`}
                key={"categoryButton__" + index}
              >
                <p>{el?.attributes?.name}</p>
              </div>
            ) : (
              <div
                id={"category__" + index}
                onClick={() => {
                  const element = document.getElementById("category__" + index)
                  setSelectedCategoryIndex(index),
                    element && scrollIntoView(element)
                }}
                key={"categoryButton__" + index}
                className={`${styles.categoryOption} ${cx("buttonMD")}`}
              >
                <p className={`${cx("buttonMD")}`}>{el?.attributes?.name}</p>
              </div>
            )
          })}
        </div>
        <div className={styles.secondSection__blogsContainer}>
          {blogsCategorySelected ? (
            blogsCategorySelected
              ?.slice(0, 6 * loadMoreCounter)
              ?.map((el, index) => {
                const { date, previewImage, title, category, content } =
                  el?.attributes

                return (
                  <BlogPreview
                    key={"blogPreview_" + index}
                    date={date}
                    previewImage={previewImage}
                    timeReading={readingMarkdownTime(content)}
                    title={title}
                    category={category}
                  />
                )
              })
          ) : (
            <BlogPreviewSkeleton cardsNumber={4} />
          )}
        </div>
        {blogsCategorySelected?.length &&
        loadMoreCounter * 6 < blogsCategorySelected?.length ? (
          <PurpleButton
            label={loadMoreButton}
            outlined
            className={`${styles.loadMoreButton}`}
            action={() => setLoadMoreCounter(loadMoreCounter + 1)}
          />
        ) : null}
      </section>
    </div>
  )
}

export default SecondSection
