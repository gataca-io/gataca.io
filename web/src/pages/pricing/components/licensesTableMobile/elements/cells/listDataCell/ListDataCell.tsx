import * as React from "react"
import cx from "classnames"

export type IListDataCellProps = {
  data: any
}

const ListDataCell: React.FC<IListDataCellProps> = props => {
  const { data } = props

  const isLastItem = (itemsArray: any[], item: any) => {
    const arrLength = itemsArray?.length
    const itemPosition = itemsArray?.indexOf(item)
    return itemPosition === arrLength - 1
  }

  return (
    <div className={`${cx("bodyBoldSM")}`}>
      {data?.length ? (
        data?.map((el: string, index: number) => (
          <p
            key={"dataList__" + el + index + Math.random()}
            className={`${cx("bodyBoldSM")}`}
          >
            {el}
            {!isLastItem(data, el) ? "," : ""}
          </p>
        ))
      ) : (
        <p className={`${cx("bodyBoldSM")}`}>None</p>
      )}
    </div>
  )
}

export default ListDataCell
