import * as React from "react"
import * as styles from "./listInfoItems.module.scss"
import cx from "classnames"
import { images } from "../../../images/images"

export type IListItemsProps = {
  id: string
  index: number
  title: string
  description: string
  selected: undefined | number
  showItem: (x: undefined | number) => void
}

const ListItems: React.FC<IListItemsProps> = props => {
  const { id, index, title, description, selected, showItem } = props
  // const [openItem, setOpenItem] = React.useState<number | undefined>(undefined)
  // const selected = (index: number) => openItem === index

  return (
    <>
      <div
        onClick={() => showItem(!selected ? index : undefined)}
        id={id}
        className={`${cx(styles.container)} ${cx("marginBottom16")}`}
      >
        <div className={styles.titleContainer}>
          <h5 className={cx("heading5")}>{title}</h5>
          <span>
            <img src={selected ? images.iconMinus : images.iconPlus} />
          </span>
        </div>

        {selected && (
          <p
            className={`${styles.description} ${cx(
              "bodyRegularMD marginTop20"
            )}`}
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        )}
      </div>
    </>
  )
}

export default ListItems
