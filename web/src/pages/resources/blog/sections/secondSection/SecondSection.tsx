import * as React from "react"
import cx from "classnames"
import PurpleButton from "../../../../../components/atoms/buttons/purple/PurpleButton"
import { readingMarkdownTime } from "../../../../../utils/time"
import {
  BlogModel,
  BlogPreviewModel,
} from "../../../../../interfaces/interfaces"
import BlogPreviewSkeleton from "../../../../../components/elements/skeletons/blogPreviewSkeleton/BlogPreviewSkeleton"
import BlogPreview from "../../../../../components/elements/blogPreview/BlogPreview"
import * as styles from "./secondSection.module.scss"

export type ISectionProps = {
  categories: any[]
  blogsCategorySelected: {
    id: string
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

  let categoriesContainer: HTMLElement | null | undefined
  React.useEffect(() => {
    categoriesContainer = document
      ? document?.getElementById("categoriesContainer")
      : undefined
  })

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
                  const element =
                    document && document?.getElementById("category__" + index)
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
                el.attributes.timeReading = readingMarkdownTime(
                  el?.attributes?.content
                )

                return (
                  <BlogPreview
                    id={el?.id}
                    key={"blogPreview_" + index}
                    attributes={el?.attributes}
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
