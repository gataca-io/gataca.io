import * as React from "react"
import cx from "classnames"

export type IListDataCellProps = {
  data: any
}

const ListDataCell: React.FC<IListDataCellProps> = props => {
  let { data } = props

  if(typeof data === 'string') {
    data = data.split(',');
  }

  const isLastItem = (itemsArray: any[], item: any) => {
    const arrLength = itemsArray?.length
    const itemPosition = itemsArray?.indexOf(item)
    return itemPosition === arrLength - 1
  }

  return (
    <div className={`${cx("bodyBoldSM neutral1000")}`}>
      {data?.length ? (
        data?.map((el: string, index: number) => (
          <p
            key={"dataCM__" + index}
            className={`${cx("bodyBoldSM neutral1000")}`}
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
