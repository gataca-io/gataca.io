import * as React from "react"
import * as styles from "./table.module.scss"
import cx from "classnames"
import MarkDownContent from "../../../../../../components/elements/markDownContent/MarkDownContent"

export type ISectionProps = {
  content?: string
  className?: string
}
const Table: React.FC<ISectionProps> = props => {
  const { content, className } = props

  return (
    <>
      <div
        className={`${styles?.tableContainer} ${cx("containerMaxWidth")} ${
          className && className
        }`}
      >
        {content?.length && <MarkDownContent content={content} />}
      </div>
    </>
  )
}

export default Table
