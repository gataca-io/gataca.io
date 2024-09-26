import * as React from "react"
import cx from "classnames"
import MarkDownContent from "../../../../../../../components/elements/markDownContent/MarkDownContent"
import StrapiImage from "../../../../../../../components/atoms/images/StrapiImage"
import Table from "../../../shared/table/Table"

export type ISectionProps = {
  tableClassName?: string
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
        className?: string
      }
    }
  }[]
}

const ContentHeadingList: React.FC<ISectionProps> = props => {
  const { tableClassName, listContent } = props

  return (
    <>
      {listContent?.map(item => {
        const { id, idContent, title, content, media, titleSize, table } =
          item.attributes

        return (
          <div id={idContent} key={`content_` + id}>
            {titleSize === "small" && (
              <h4 className={`${cx("heading4 marginBottom32")}`}>{title}</h4>
            )}
            {titleSize === "medium" && (
              <h3 className={`${cx("heading3 marginBottom32")}`}>{title}</h3>
            )}
            {titleSize === "large" && (
              <h1 className={`${cx("heading1 marginBottom32")}`}>{title}</h1>
            )}

            {content && <MarkDownContent content={content} />}

            {media && (
              <>
                {media?.data?.attributes?.ext ===
                (".jpeg" ||
                  ".png" ||
                  ".gif" ||
                  ".scg" ||
                  ".tiff" ||
                  ".ico" ||
                  ".dvu") ? (
                  <div className={cx("marginBottom32")}>
                    <StrapiImage image={media ? media : null} />
                  </div>
                ) : null}

                {media?.data?.attributes?.ext ===
                (".mp4" || ".mpeg" || ".mov" || "wmv" || ".avi" || ".flv") ? (
                  <div className={cx("marginBottom32")}>
                    <video src={media?.data?.attributes?.url} controls></video>
                  </div>
                ) : null}
              </>
            )}
            {table?.content && (
              <Table className={tableClassName} content={table?.content} />
            )}
          </div>
        )
      })}
    </>
  )
}

export default ContentHeadingList
