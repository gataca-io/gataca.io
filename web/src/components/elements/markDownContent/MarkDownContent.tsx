import * as React from "react"
import * as styles from "./markDownContent.module.scss"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export type IMarkDownContentProps = {
  content?: any
  className?: any
}

const MarkDownContent: React.FC<IMarkDownContentProps> = props => {
  const { content, className } = props

  return (
    <div className={styles.markDownContent}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  )
}

export default MarkDownContent
