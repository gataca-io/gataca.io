import * as React from "react"
import cx from "classnames"
import * as styles from "./iconDataCell.module.scss"
import { images } from "../../../../../../../images/images"

export type IIconDataCellProps = {
  data: any
}

const IconDataCell: React.FC<IIconDataCellProps> = props => {
  const { data } = props
  return (
    <>
      <div className={`${cx("bodyBoldSM")}`}>
        <img
          className={styles?.icon}
          src={data ? images?.checkIcon : images?.closeIcon}
        ></img>
      </div>
    </>
  )
}

export default IconDataCell
