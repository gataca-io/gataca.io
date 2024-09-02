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
    <>
      <td className={`${cx("bodyBoldSM")}`}>
        {data?.length ? (
          data?.map((el: string, index: number) => (
            <p key={"dataC__" + index} className={`${cx("bodyBoldSM")}`}>
              {el}
              {!isLastItem(data, el) ? "," : ""}
            </p>
          ))
        ) : (
          <p className={`${cx("bodyBoldSM")}`}>None</p>
        )}
      </td>
    </>
  )
}

export default ListDataCell
