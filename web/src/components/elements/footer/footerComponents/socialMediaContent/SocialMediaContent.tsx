import { Link } from "gatsby"
import * as React from "react"
import * as styles from "./socialMediaContent.module.scss"
import { socialMedia } from "../../../../../globalData/globalData"

const SocialMediaContent: React.FC = () => {
  return (
    <ul className={styles?.socialMediaList}>
      {socialMedia.map(item => {
        return (
          <li>
            <Link to={item.route || ""}>
              <img src={item.icon} id={item.id} alt={item.alt} />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialMediaContent
