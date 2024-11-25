import * as React from "react"
import cx from "classnames"
import * as styles from "./blogCardContainer.module.scss"
import BlogCard from "../blogCard/BlogCard"
import BlogPreviewSkeleton from "../../../../../../components/elements/skeletons/blogPreviewSkeleton/BlogPreviewSkeleton"

export type BlogCardContainerModel = {
  idItem?: string
  blog_card: any
  blogs?: any
  columns: string
  loadMoreCounter?: any
}

const BlogCardContainer: React.FC<BlogCardContainerModel> = props => {
  const { idItem, columns, blog_card, blogs, loadMoreCounter } = props

  const columnStyles: Record<string, string> = {
    two: styles?.twoColumns,
    three: styles?.threeColumns,
  }

  const columnsNumber = columns === "two" ? 2 : 3

  return (
    <div
      id={idItem}
      className={`${styles.card__container} ${cx(
        columns ? columnStyles[columns] : styles?.twoColumns
      )}`}
    >
      {blog_card ? (
        blog_card?.map((el: any, index: number) => {
          const { idItem, showChip, blog } = el

          return (
            <BlogCard
              id={el?.id}
              idItem={idItem || "blogCard__" + index}
              key={"blogCard__" + index}
              attributes={blog?.data?.attributes}
              showChip={showChip}
              chip={{ ...el?.chip }}
              button={{
                ...el?.button,
                action: () => window.open(el?.button?.url, "_blank"),
              }}
            />
          )
        })
      ) : blogs ? (
        blogs?.slice(0, 6 * loadMoreCounter)?.map((el: any, index: number) => {
          return (
            <BlogCard
              id={el?.id}
              idItem={"blog__" + index}
              key={"blog__" + index}
              attributes={el?.attributes}
              showChip={true}
              chip={{ ...el?.chip }}
              button={{
                ...el?.button,
                action: () => window.open(el?.button?.url, "_blank"),
              }}
            />
          )
        })
      ) : (
        <BlogPreviewSkeleton
          cardsNumber={columnsNumber + 1}
          className={styles.blogSkeleton}
        />
      )}
    </div>
  )
}

export default BlogCardContainer
