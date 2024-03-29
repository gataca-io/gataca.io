import * as React from "react"
import * as styles from "./tableOfContentContainer.module.scss"
import { LinkModel } from "../../../../../interfaces/interfaces"
import { images } from "../../../../../images/images"
import TableOfContentOptions from "../tableOfContentOptions/TableOfContentOptions"

export type ITableOfContentProps = {
  item: LinkModel
  className?: string
  open: boolean
  setOptionOpened: (x: string) => void
}
const TableOfContentContainer: React.FC<ITableOfContentProps> = props => {
  const { item, className, open, setOptionOpened } = props
  const isBrowser = typeof window !== "undefined"
  const width = isBrowser ? window.innerWidth || Math.min(window.innerWidth) : 0
  const mobile = width < 768
  const desktop = width > 768
  if (desktop) {
    setOptionOpened(item?.id)
  }

  return item?.route ? null : (
    <div
      className={`${styles?.sectionMain__tableContentCol} ${
        className && className
      }`}
      onClick={() =>
        mobile && isBrowser ? setOptionOpened(!open ? item?.id : "") : {}
      }
    >
      <div id={item?.id} className={styles?.title}>
        <div className={styles?.title}>
          <div>
            <span>{item?.label}</span>

            <img
              className={styles.tableImage}
              src={open ? images.chevronDownBig : images.chevronUp}
            />
          </div>
        </div>
        <TableOfContentOptions item={item} open={open} />
      </div>
    </div>
  )
}

export default TableOfContentContainer
