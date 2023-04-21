import * as React from "react"
import * as styles from "./listInfoItems.module.scss"
import cx from "classnames"
import { images } from "../../../images/images"

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
      {!selected && (
        <div
          onClick={() => !selected && showItem(index)}
          id={id}
          className={`${cx(styles.container)} ${cx("marginBottom16")}`}
        >
          <div className={styles.titleContainer}>
            <h5 className={cx("bodyBoldLG")}>{title}</h5>
            <span>
              <img src={selected ? images.iconMinus : images.iconPlus} />
            </span>
          </div>
        </div>
      )}
      {selected && (
        <div
          onClick={() => showItem(!selected ? index : 0)}
          id={id}
          className={`${cx(styles.container)} ${cx("marginBottom16")}`}
        >
          <div className={styles.titleContainer}>
            <h5 className={cx("bodyBoldLG")}>{title}</h5>
            <span>
              <img src={selected ? images.iconMinus : images.iconPlus} />
            </span>
          </div>
          <p
            className={`${styles.description} ${cx(
              "bodyRegularMD marginTop20"
            )}`}
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
      )}
    </>
  )
}

export default ListItems
