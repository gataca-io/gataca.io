import * as React from "react"
import cx from "classnames"
import * as styles from "./contentTable.module.scss"
import TableOfContentContainer from "./elements/tableOfContentContainer/TableOfContentContainer"
import ContentHeadingList from "../../generic/contentHeadingContainer/component/ContentHeadingList"
import SubHeadingContainer from "../subHeadingContainer/SubHeadingContainer"
import StrapiAuthor from "./elements/strapiAuthor/StrapiAuthor"
import HighlightCard from "./elements/highlightCard/HighlightCard"
import { dark__theme } from "../../../../pageTemplate.module.scss"

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
  employee: {
    data: {
      attributes: {
        name: string
        role: string
        linkedinRoute: string
        portrait: {
          data: {
            attributes: {
              url: string
            }
          }
        }
      }
    }
  }
  sub_heading: {
    data: {
      attributes: {
        idItem?: any
        subHeading?: any
        columns?: string
      }
    }
  }
  highlightCard?: {
    idItem?: string
    highlight_card_list: {
      title?: string
      listGroup?: {
        list_options?: any
      }
    }
  }
  avatarSize?: string
  darkTheme: boolean
}

const ContentTable: React.FC<ISectionProps> = props => {
  const {
    listContent,
    tableOfContent,
    employee,
    sub_heading,
    avatarSize,
    highlightCard,
    darkTheme,
  } = props

  const [tableOfContentOpenedID, setTableOfContentOpened] = React.useState("")

  return (
    <div className={`${styles?.contentTable} ${cx("containerMaxWidth")}`}>
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
        <div className={`${styles?.slotsContainer}`}>
          {listContent && (
            <ContentHeadingList
              tableClassName={styles.tableContainer}
              listContent={listContent}
            />
          )}
          {sub_heading?.data?.attributes?.subHeading && (
            <SubHeadingContainer
              darkTheme={darkTheme}
              idItem={sub_heading?.data?.attributes?.idItem}
              subHeading={sub_heading?.data?.attributes?.subHeading}
              columns={sub_heading?.data?.attributes?.columns}
              className={styles?.contentTable__subHeadingContainer}
            />
          )}
        </div>
        <div
          className={
            employee?.data
              ? styles?.rightColumnContainer__changeOrder
              : highlightCard
              ? styles?.rightColumnContainer
              : styles?.showDesktop
          }
        >
          {tableOfContent?.map((item, index) => {
            return (
              <TableOfContentContainer
                open={tableOfContentOpenedID === item?.attributes?.idContent}
                contents={item?.attributes?.contents}
                item={item?.attributes}
                setOptionOpened={setTableOfContentOpened}
                key={"tableOfContent__" + index}
              />
            )
          })}

          {employee?.data && (
            <StrapiAuthor employee={employee?.data} avatarSize={avatarSize} />
          )}
          {highlightCard && (
            <HighlightCard
              idItem={highlightCard?.idItem}
              title={highlightCard?.highlight_card_list?.title}
              list_options={
                highlightCard?.highlight_card_list?.listGroup?.list_options
              }
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ContentTable
