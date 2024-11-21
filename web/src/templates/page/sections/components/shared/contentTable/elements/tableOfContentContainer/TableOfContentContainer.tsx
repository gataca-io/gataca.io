import * as React from "react"
import * as styles from "./tableOfContentContainer.module.scss"
import { images } from "../../../../../../../../images/images"
import TableOfContentOptions from "../tableOfContentOptions/TableOfContentOptions"

export type ITableOfContentProps = {
  item: {
    title: string
    idContent: string
  }
  contents: {
    data: {
      attributes: {
        title: string
        idContent: string
      }
    }[]
  }
  className?: string
  open: boolean
  setOptionOpened: (x: string) => void
}
const TableOfContentContainer: React.FC<ITableOfContentProps> = props => {
  const { item, contents, className, open, setOptionOpened } = props
  const isBrowser = typeof window !== "undefined"
  const width = isBrowser ? window.innerWidth || Math.min(window.innerWidth) : 0
  const mobile = width < 768
  const desktop = width > 768
  if (desktop) {
    setOptionOpened(item?.idContent)
  }

  return (
    <div
      className={`${styles?.sectionMain__tableContentCol} ${
        className && className
      }`}
      onClick={() =>
        mobile && isBrowser ? setOptionOpened(!open ? item?.idContent : "") : {}
      }
    >
      <div id={item?.idContent} className={styles?.title}>
        <div className={styles?.title}>
          <div>
            <span>{item?.title}</span>

            <img
              className={styles.tableImage}
              src={open ? images.chevronDownBig : images.chevronUp}
            />
          </div>
        </div>
        <TableOfContentOptions list={contents} open={open} />
      </div>
    </div>
  )
}

export default TableOfContentContainer
