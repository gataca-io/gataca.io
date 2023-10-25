import * as React from "react"
import cx from "classnames"
import { images } from "../../../images/images"

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
        <img src={images.marketingTeam}></img>
      </div>
      <div>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/esther-sauri-carbonell/"
        >
          <h6 className={cx("heading6")}>{authorAtt} Saurí</h6>
        </a>
        <p className={cx("bodyRegularSM")}>Digital Marketing Specialist</p>
      </div>
    </div>
  )
}

export default StrapiAuthor
