import * as React from "react"
import TableOfContentHeader from "./tableOfContentComponents/tableOfContentHeader/TableOfContentHeader"
import { tableOfContent } from "../../../pages/privacyPolicy/data/data"
import { LinkModel } from "../../../interfaces/interfaces"

export type ITableOfContentProps = {
  navigationObject?: LinkModel
  className?: string
}

const TableOfContent: React.FC<ITableOfContentProps> = props => {
  const [subMenuOpenedID, setSubMenuOpened] = React.useState("")
  return props.navigationObject ? (
    <>
      {tableOfContent?.map(item => {
        return (
          <TableOfContentHeader
            open={subMenuOpenedID === item?.id}
            item={item}
            setOptionOpened={setSubMenuOpened}
            className={props.className}
          />
        )
      })}
    </>
  ) : null
}

export default TableOfContent
