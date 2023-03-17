import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./tableOfContent.module.scss"
import cx from "classnames"
import { LinkModel } from "../../../../../interfaces/interfaces"
import { images } from "../../../../../images/images"
import TableOfContentHeader from "./tableOfContentComponents/tableOfContentHeader/TableOfContentHeader"
import { tableOfContent } from "../../../pages/privacyPolicy/data/data"

const TableOfContent: React.FC = () => {
  const [subMenuOpenedID, setSubMenuOpened] = React.useState("")
  return (
    <>
      {subMenuOpenedID && (
        <div
          onClick={() => setSubMenuOpened("")}
        ></div>
      )}
      <div>
        {tableOfContent?.map(item => {
          return (
            <TableOfContentHeader
              open={subMenuOpenedID === item?.id}
              item={item}
              setOptionOpened={setSubMenuOpened}
            />
          )
        })}
      </div>
    </>
  )
}

export default TableOfContent
