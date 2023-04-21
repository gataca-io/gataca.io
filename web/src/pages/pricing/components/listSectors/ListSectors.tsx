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
  link?: string
  link_route?: string
  className?: any
  secondCategory: boolean
  inside_description?: string
  opened: boolean
  showResults: (x: number) => void
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
  const {
    id,
    index,
    title,
    description,
    icon,
    link,
    link_route,
    className,
    secondCategory,
    inside_description,
    opened,
    showResults,
  } = props

  return (
    <div
      id={id}
      className={`${cx(styles?.itemsContainer)} ${cx(
        secondCategory ? styles.threeCol : ""
      )}`}
    >
      <div
        className={`${cx(opened ? styles.noShadow : "")} ${cx(
          secondCategory ? styles.secondCategory : ""
        )}`}
      >
        {secondCategory ? (
          <div
            className={`${cx(styles.descriptionContainer)} ${cx(
              opened ? styles.opened : ""
            )}`}
            onClick={() => showResults(!opened ? index : 0)}
          >
            <div className={cx(styles.iconContainer)}>
              <img src={opened ? images.iconMinus : images.iconPlus}></img>
            </div>
            <div className={styles.transitionContainer}>
              {opened && (
                <p className={`${styles.description} ${cx("bodyRegularMD")}`}>
                  {inside_description}
                </p>
              )}
            </div>
          </div>
        ) : null}
        <div className={cx(secondCategory ? "marginTop32" : "")}>
          <img
            alt={title}
            className={`${cx("marginBottom16")} ${styles.iconSectors}`}
            src={
              secondCategory
                ? otherIndustriesIcons[index - 1]
                : pioneerIcons[index - 1]
            }
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
            {secondCategory ? null : (
              <img
                className={cx("marginLeft10")}
                src={images.chevronRight}
              ></img>
            )}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ListSectors
