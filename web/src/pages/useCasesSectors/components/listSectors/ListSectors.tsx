import * as React from "react"
import * as styles from "./listSectors.module.scss"
import cx from "classnames"
import { images } from "../../../../images/images"
import { Link } from "gatsby"

export type IListItemsProps = {
  id: string
  index: number
  title: string
  description: string
  icon: string
  link: string
  link_route: string
  className?: any
}

const pioneerIcons = [
  images.iconBank,
  images.iconGraduationCap,
  images.iconWallet,
  images.globeEarthIcon,
]
const otherIndustriesIcons = [
  images.iconSend,
  images.iconBriefcase,
  images.iconHeartPulse,
  images.iconCalendarEmpty,
  images.iconEthereum,
  images.iconGameController,
]

const ListSectors: React.FC<IListItemsProps> = props => {
  const { id, index, title, description, icon, link, link_route, className } =
    props
  return (
    <div id={id} className={cx(styles.itemsContainer)}>
      <div>
        <img
          className={cx("marginBottom16")}
          src={pioneerIcons ? pioneerIcons[index - 1] : otherIndustriesIcons[index - 1]}
        ></img>
        <h5 className={cx("heading5 marginBottom16")}>{title}</h5>

        <p
          className={`${styles.description} ${cx(
            "bodyRegularMD marginBottom16"
          )}`}
        >
          {description}
        </p>
        <Link
          className={`${cx("buttonMD")} ${styles.linkMore}`}
          to={link_route || ""}
        >
          {link}
          <img className={cx("marginLeft10")} src={images.chevronRight}></img>
        </Link>
      </div>
    </div>
  )
}

export default ListSectors
