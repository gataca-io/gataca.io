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
}

const ListItems: React.FC<IListItemsProps> = props => {
  const { id, index, title, description, selected, showItem } = props
  return (
    <>
      <div
        onClick={() => !selected && showItem(index)}
        id={id}
        className={cx(styles.listItems__container)}
      >
        <div className={styles.listItems__titleContainer}>
          {selected && <img src={images.singleFeatureMark} />}
          <h6
            className={`${selected ? styles.selected : styles.notSelected} ${cx(
              selected ? "heading6 marginBottom12" : "buttonMD"
            )}`}
          >
            {title}
          </h6>
        </div>
        {selected && (
          <p
            className={`${styles.description} ${cx(
              "bodyRegularSM neutral700 marginBottom20"
            )}`}
          >
            {description}
          </p>
        )}
      </div>
    </>
  )
}

export default ListItems
