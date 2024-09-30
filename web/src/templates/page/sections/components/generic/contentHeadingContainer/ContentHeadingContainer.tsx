import * as React from "react"
import cx from "classnames"
import * as styles from "./contentHeadingContainer.module.scss"
import MarkDownContent from "../../../../../../components/elements/markDownContent/MarkDownContent"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"
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
    <section
      className={`${styles?.contentHeadingContainer} ${cx(
        "containerMaxWidth"
      )}`}
    >
      <ContentHeadingList listContent={listContent} />
    </section>
  )
}

export default ContentHeadingContainer
