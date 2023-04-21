import * as React from "react"
import * as styles from "./listInfo.module.scss"
import cx from "classnames"
import { images } from "../../../images/images"

export type IlistInfoProps = {
  id: string
  index: number
  title: string
  selected: boolean
  showItem: (x: number) => void
}

const ListInfo: React.FC<IlistInfoProps> = props => {
  const { id, index, title, selected, showItem } = props

  return (
    <>
      <div
        onClick={() => !selected && showItem(index)}
        id={id}
        className={cx(styles.listInfo__container)}
      >
        <div className={styles.listInfo__titleContainer}>
          {selected && <img src={images.singleFeatureMark} />}
          <p
            className={`${styles.listTitle} ${
              selected ? styles.selected : styles.notSelected
            } ${cx(selected ? "bodyBoldLG" : "buttonMD neutral1000")}`}
          >
            {title}
          </p>
        </div>
      </div>
    </>
  )
}

export default ListInfo
