import * as React from "react"
import cx from "classnames"
import MarkDownContent from "../../../../../../../components/elements/markDownContent/MarkDownContent"
import StrapiImage from "../../../../../../../components/atoms/images/StrapiImage"
import Table from "../../../shared/table/Table"

export type ISectionProps = {
  tableClassName?: string
  listContent: {
    attributes: {
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
        const { idContent, title, content, media, titleSize, table } =
          item.attributes

        const getmediaExt = () => {
          let divContent = null
          const mediaExt = media?.data?.attributes?.ext
          const videoContent = (
            <div className={cx("marginBottom32")}>
              <video src={media?.data?.attributes?.url} controls></video>
            </div>
          )
          const imageContent = (
            <div className={cx("marginBottom32")}>
              <StrapiImage image={media ? media : null} />
            </div>
          )

          if (mediaExt) {
            switch (mediaExt) {
              case ".png":
                divContent = imageContent
                break
              case ".jpeg":
                divContent = imageContent
                break
              case ".gif":
                divContent = imageContent
                break
              case ".scg":
                divContent = imageContent
                break
              case ".tiff":
                divContent = imageContent
                break
              case ".ico":
                divContent = imageContent
                break
              case ".dvu":
                divContent = imageContent
                break
              case ".mp4":
                divContent = videoContent
                break
              case ".mpeg":
                divContent = videoContent
                break
              case ".mov":
                divContent = videoContent
                break
              case ".wmv":
                divContent = videoContent
                break
              case ".avi":
                divContent = videoContent
                break
              case ".flv":
                divContent = videoContent
                break
              default:
                divContent = null
            }
          }

          return divContent
        }

        return (
          <div id={idContent} key={`content_` + idContent}>
            {titleSize === "small" && (
              <h4 className={`${cx("heading4 neutral1000 marginBottom32")}`}>
                {title}
              </h4>
            )}
            {titleSize === "medium" && (
              <h3 className={`${cx("heading3 neutral1000 marginBottom32")}`}>
                {title}
              </h3>
            )}
            {titleSize === "large" && (
              <h1 className={`${cx("heading1 neutral1000 marginBottom32")}`}>
                {title}
              </h1>
            )}

            {content && <MarkDownContent content={content} />}

            {media && getmediaExt()}
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
