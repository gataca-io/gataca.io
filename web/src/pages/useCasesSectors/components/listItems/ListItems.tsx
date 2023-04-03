import * as React from "react"
import * as styles from "./listItems.module.scss"
import cx from "classnames"
import { images } from "../../../../images/images"

export type IListItemsProps = {
  id: string
  index: number
  title: string
  description: string
  selected: boolean
  showItem: (x: number) => void
  className?: any
}

const ListItems: React.FC<IListItemsProps> = props => {
  const { id, index, title, description, selected, showItem, className } = props
  return (
    <div
      onClick={() => !selected && showItem(index)}
      id={id}
      className={`${cx(styles.container)} ${cx(
        selected ? "" : styles.unselectedItem
      )}`}
    >
      <div className={styles.titleContainer}>
        <h5 className={cx("heading5")}>{title}</h5>
        <span>
          <img src={selected ? images.iconMinus : images.iconPlus} />
        </span>
      </div>

      {selected && (
        <p
          className={`${styles.description} ${cx("bodyRegularMD marginTop20")}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default ListItems
