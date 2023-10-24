import * as React from "react"
import { StrapiAuthorModel } from "../../../interfaces/interfaces"
import { Link } from "gatsby"

export interface IStrapiAuthorProps {
  author: string
  className?: string
}

const StrapiAuthor: React.FC<IStrapiAuthorProps> = props => {
  const { author, className } = props
  const authorAtt = author

  return (
    <ul className={className}>
      <li>{authorAtt}</li>
    </ul>
  )
}

export default StrapiAuthor
