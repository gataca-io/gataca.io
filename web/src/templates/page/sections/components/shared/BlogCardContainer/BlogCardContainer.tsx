import * as React from "react"
import cx from "classnames"
import * as styles from "./blogCardContainer.module.scss"
import BlogCard from "../blogCard/BlogCard"
import BlogPreviewSkeleton from "../../../../../../components/elements/skeletons/blogPreviewSkeleton/BlogPreviewSkeleton"

export type BlogCardContainerModel = {
  idItem?: string
  blog_card: any
  columns: string
}

const BlogCardContainer: React.FC<BlogCardContainerModel> = props => {
  const { idItem, columns, blog_card } = props

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
          const { idItem, button, showChip, chip, blog } = el

          return (
            <BlogCard
              id={el?.id}
              idItem={idItem}
              key={"blogPreview_" + index}
              attributes={blog?.data?.attributes}
              showChip={showChip}
              button={{
                idButton: button?.idButton,
                label: button?.label,
                icon: button?.icon,
                style: button?.style,
                color: button?.color,
                size: button?.size,
                noPaddingText: button?.noPaddingText,
                disabled: button?.disabled,
                link: button?.link,
                url: button?.url,
                outsideWeb: button?.outsideWeb,
                action: () => window.open(button?.url, "_blank"),
              }}
              chip={{
                idChip: chip?.idChip,
                text: chip?.text,
                type: chip?.type,
                form: chip?.form,
                disabled: chip?.disabled,
                color: chip?.color,
                chipSize: chip?.chipSize,
                leadingIcon: chip?.leadingIcon,
                trailingIcon: chip?.trailingIcon,
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
