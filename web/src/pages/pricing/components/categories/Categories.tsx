import * as React from "react"
import cx from "classnames"
import * as styles from "./categories.module.scss"

export type ICategoriesProps = {
  id: string
  title: string
  index: number
  selected: boolean
  showItem: (x: number) => void
}
const Categories: React.FC<ICategoriesProps> = props => {
  const { id, title, index, selected, showItem } = props
  return (
    <>
      <span
        id={id}
        onClick={() => !selected && showItem(index)}
        className={`${cx(styles?.categories__item)} ${cx(
          selected ? styles?.selected : ""
        )}`}
      >
        {title}
      </span>
    </>
  )
}

export default Categories
