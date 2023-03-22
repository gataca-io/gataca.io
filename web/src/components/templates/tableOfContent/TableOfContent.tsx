import * as React from "react"
import TableOfContentContainer from "./tableOfContentComponents/tableOfContentContainer/TableOfContentContainer"
import { tableOfContent } from "../../../globalData/globalData"
import { LinkModel } from "../../../interfaces/interfaces"

export type ITableOfContentProps = {
  navigationObject?: LinkModel
  className?: string
}

const TableOfContent: React.FC<ITableOfContentProps> = props => {
  const [tableOfContentOpenedID, setTableOfContentOpened] = React.useState("")
  return props.navigationObject ? (
    <>
      {tableOfContent?.map(item => {
        return (
          <TableOfContentContainer
            open={tableOfContentOpenedID === item?.id}
            item={item}
            setOptionOpened={setTableOfContentOpened}
            className={props.className}
            navigationObject={props.navigationObject}
          />
        )
      })}
    </>
  ) : null
}

export default TableOfContent
