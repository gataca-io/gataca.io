import * as React from "react"
import * as styles from "./listItems.module.scss"
import cx from "classnames"
import { videos } from "../../../../videos/videos"

export type IListItemsProps = {
  id: string
  index: number
  title: string
  description: string
  selected: boolean
  showItem: (x: number) => void
  className?: any
}

const videosGatacaStudio = [
  videos.issuance,
  videos.verification,
  videos.credentialActivity,
  videos.verifiedUsers,
  videos.wallet,
]

const ListItems: React.FC<IListItemsProps> = props => {
  const { id, index, title, description, selected, showItem, className } = props
  return (
    <>
      <div
        onClick={() => showItem(!selected ? index : 0)}
        id={id}
        className={cx(styles.container)}
      >
        <div className={styles.titleContainer}>
          <h6
            className={`${selected ? styles.selected : styles.notSelected} ${cx(
              "heading6 marginBottom12"
            )}`}
          >
            {title}
          </h6>
        </div>
        {selected && (
          <div>
            <p className={cx("bodyRegularSM neutral700")}>{description}</p>
            <video autoPlay muted>
              <source src={videosGatacaStudio} type="video/mp4" />
            </video>
          </div>
        )}
      </div>
    </>
  )
}

export default ListItems
