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
    <>
      {!selected && (
        <div
          onClick={() => !selected && showItem(index)}
          id={id}
          className={cx(styles.container)}
        >
          <div className={styles.titleContainer}>
            <h5 className={cx("heading5")}>{title}</h5>
            <span>{!selected && <img src={images.iconPlus} />}</span>
          </div>
        </div>
      )}

      {selected && (
        <div
          onClick={() => showItem(!selected ? index : 0)}
          id={id}
          className={cx(styles.container)}
        >
          <div className={styles.titleContainer}>
            <h5 className={cx("heading5")}>{title}</h5>
            <span>{!selected && <img src={images.iconPlus} />}</span>
          </div>
          <p
            className={`${styles.description} ${cx(
              "bodyRegularMD marginTop20"
            )}`}
          >
            {description}
          </p>
        </div>
      )}
    </>
  )
}

export default ListItems
