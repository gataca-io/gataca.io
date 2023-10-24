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
    <div className={className}>
      <div>
        <img src="authors image"></img>
      </div>
      <div>
        <h6>{authorAtt}</h6>
        <p>Authors role</p>
      </div>
    </div>
  )
}

export default StrapiAuthor
