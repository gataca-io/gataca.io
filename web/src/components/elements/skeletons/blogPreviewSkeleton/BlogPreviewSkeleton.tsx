import React from "react"
import * as styles from "./blogPreviewSkeleton.module.scss"

type BlogPreviewSkeletonProps = {
  cardsNumber: number
  className?: string
}

const BlogPreviewSkeleton: React.FC<BlogPreviewSkeletonProps> = props => {
  const { cardsNumber, className } = props

  const cardRepeat = cardsNumber - 1
  const cards = Array.from(Array(cardRepeat), (_, x) => x)

  return (
    <>
      {cards?.map((i, index) => (
        <div
          key={"card-skeleton" + index.toString()}
          className={`${styles.blogPreviewSkeleton} ${styles.skeleton} ${
            className ? className : ""
          }`}
        >
          <br />
        </div>
      ))}
    </>
  )
}

export default BlogPreviewSkeleton
