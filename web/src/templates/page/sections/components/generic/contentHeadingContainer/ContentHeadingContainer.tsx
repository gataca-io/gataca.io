import * as React from "react"
import cx from "classnames"
import * as styles from "./contentHeadingContainer.module.scss"
import ContentHeadingList from "./component/ContentHeadingList"

export type ISectionProps = {
  listContent: {
    attributes: {
      id: any
      title?: string
      idContent?: string
      content?: string | any
      media?: any
      titleSize?: string
    }
  }[]
}

const ContentHeadingContainer: React.FC<ISectionProps> = props => {
  const { listContent } = props

  return (
    <div
      className={`${styles?.contentHeadingContainer} ${cx(
        "containerMaxWidth"
      )}`}
    >
      <ContentHeadingList listContent={listContent} />
    </div>
  )
}

export default ContentHeadingContainer
