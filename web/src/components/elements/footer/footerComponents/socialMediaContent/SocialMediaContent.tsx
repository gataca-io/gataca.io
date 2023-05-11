import { Link } from "gatsby"
import * as React from "react"
import * as styles from "./socialMediaContent.module.scss"
import { socialMedia } from "../../../../../data/globalData"

const SocialMediaContent: React.FC = () => {
  return (
    <ul className={styles?.socialMediaList}>
      {socialMedia.map((item, index) => {
        return (
          <li key={"footer__" + item.id + index}>
            <a href={item.route || ""} target="_blank">
              <img src={item.icon} id={"footer__" + item.id} alt={item.alt} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialMediaContent
