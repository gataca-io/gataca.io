import * as React from "react"
import * as styles from "./markDownContent.module.scss"
import ReactMarkdown from "react-markdown"

export type IMarkDownContentProps = {
  content?: any
  className?: any
}

const MarkDownContent: React.FC<IMarkDownContentProps> = props => {
  const { content, className } = props
  let formattedContent =
    content?.replaceAll(
      "/uploads/",
      `${process.env.STRAPI_API_URL}/uploads/`
    ) || ""

  return (
    <div className={styles.markDownContent}>
      <ReactMarkdown>{formattedContent}</ReactMarkdown>
    </div>
  )
}

export default MarkDownContent
