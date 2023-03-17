import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./tableOfContentHeader.module.scss"
import cx from "classnames"
import { LinkModel } from "../../../../../interfaces/interfaces"
import { images } from "../../../../../images/images"
import TableOfContentOptions from "../tableOfContentOptions/TableOfContentOptions"
import { useRef } from "react"

export type ITableOfContentProps = {
  item: LinkModel
  className?: string
  open: boolean
  setOptionOpened: (x: string) => void
}
const TableOfContentHeader: React.FC<ITableOfContentProps> = props => {
  const { item, className, open, setOptionOpened } = props

  return item?.route ? (
    <div className={`${styles?.sectionMain__tableContentCol} ${
        className && className
      }`}>
      <div>
        <Link
        className={`${styles.dropdownLabel} ${cx("buttonMD")}`}
        to={item?.route}
      >
        {item?.label}
      </Link>
        
      <img
        onClick={() => setOptionOpened(!open ? item?.id : "")}
        src={images.chevronDown}
      />
      </div>
      <TableOfContentOptions item={item} open={open} />
    </div>
  ) : (
    <div className={`${styles?.sectionMain__tableContentCol} ${
        className && className
      }`} onClick={() => setOptionOpened(!open ? item?.id : "")}
    > 
      <div>
        <div id={item?.id} className={styles?.title}>{item?.label}
        <img src={images.chevronDown} /></div>
        <TableOfContentOptions item={item} open={open} />
      </div>
    </div>
  )
}

export default TableOfContentHeader
