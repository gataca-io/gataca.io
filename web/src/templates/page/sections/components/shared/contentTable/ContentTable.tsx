import * as React from "react"
import cx from "classnames"
import * as styles from "./contentTable.module.scss"
import TableOfContentContainer from "./elements/tableOfContentContainer/TableOfContentContainer"
import ContentHeadingList from "../../generic/contentHeadingContainer/component/ContentHeadingList"

export type ISectionProps = {
  listContent: {
    attributes: {
      id: any
      title?: string
      idContent?: string
      content?: string | any
      media?: any
      titleSize?: string
      table?: {
        content: any
      }
    }
  }[]
  tableOfContent: {
    attributes: {
      title: string
      idContent: string
      contents: {
        data: {
          attributes: {
            idContent: string
            title: string
          }
        }[]
      }
    }
  }[]
}

const ContentTable: React.FC<ISectionProps> = props => {
  const { listContent, tableOfContent } = props

  const [tableOfContentOpenedID, setTableOfContentOpened] = React.useState("")

  return (
    <section className={`${styles?.contentTable} ${cx("containerMaxWidth")}`}>
      {tableOfContent?.map((item, index) => {
        return (
          <TableOfContentContainer
            open={tableOfContentOpenedID === item?.attributes?.idContent}
            contents={item?.attributes?.contents}
            item={item?.attributes}
            setOptionOpened={setTableOfContentOpened}
            className={styles?.showMobile}
            key={"tableOfContent__" + index}
          />
        )
      })}
      <div className={`${styles?.contentTableContainer}`}>
        {listContent && (
          <div className={`${styles?.contentHeadingContainer}`}>
            <ContentHeadingList
              tableClassName={styles.tableContainer}
              listContent={listContent}
            />
          </div>
        )}
        {tableOfContent?.map((item, index) => {
          return (
            <TableOfContentContainer
              open={tableOfContentOpenedID === item?.attributes?.idContent}
              contents={item?.attributes?.contents}
              item={item?.attributes}
              setOptionOpened={setTableOfContentOpened}
              className={styles?.showDesktop}
              key={"tableOfContent__" + index}
            />
          )
        })}
      </div>
    </section>
  )
}

export default ContentTable
