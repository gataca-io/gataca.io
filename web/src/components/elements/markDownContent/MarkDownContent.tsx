import * as React from "react"
import * as styles from "./markDownContent.module.scss"
import ReactMarkdown from "react-markdown"

export type IMarkDownContentProps = {
  content?: any
  className?: any
}

const MarkDownContent: React.FC<IMarkDownContentProps> = props => {
  const { content, className } = props

  return (
    <div className={styles.markDownContent}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}

export default MarkDownContent
