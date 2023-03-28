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
const TableOfContentHeader: React.FC<ITableOfContentProps> = props => {
  const { item, className, open, setOptionOpened } = props
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth ||
    Math.min(window.innerWidth, document.documentElement.clientWidth)
  const mobile = width < 640
  const desktop = width > 640
  if (desktop) {
    setOptionOpened(item?.id)
  }
  return item?.route ? null : (
    <div
      className={`${styles?.sectionMain__tableContentCol} ${
        className && className
      } ${mobile ? "dropdownOption" : "noDropdownOption"}`}
      onClick={mobile ? () => setOptionOpened(!open ? item?.id : "") : null}
    >
      <div id={item?.id} className={styles?.title}>
        <div className={styles?.title}>
          <div>
            <span>{item?.label}</span>
            {mobile ? (
              <img src={open ? images.chevronDownBig : images.chevronUp} />
            ) : null}
          </div>
        </div>
        <TableOfContentOptions item={item} open={open} />
      </div>
    </div>
  )
}

export default TableOfContentHeader
