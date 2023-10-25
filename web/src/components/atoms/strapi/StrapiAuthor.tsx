import * as React from "react"
import cx from "classnames"
import { Link } from "gatsby"
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
        <Link to="https://www.linkedin.com/in/esther-sauri-carbonell/">
          <h6 className={cx("heading6")}>{authorAtt} Saurí</h6>
        </Link>
        <p className={cx("bodyRegularSM")}>Digital Marketing Specialist</p>
      </div>
    </div>
  )
}

export default StrapiAuthor
