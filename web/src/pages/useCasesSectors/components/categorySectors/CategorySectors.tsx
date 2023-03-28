import * as React from "react"
import * as styles from "./categorySectors.module.scss"
import cx from "classnames"
import { images } from "../../../../images/images"
import { Link } from "gatsby"
import ListSectors from "../listSectors/ListSectors"

export type ICategorySectorsProps = {
  id: string
  index: number
  title: string
  description: string
  list: {
    title: string
    description: string
    icon: string
    link: string
    link_route: string
  }[]
}
const CategorySectors: React.FC<ICategorySectorsProps> = props => {
  const { id, index, title, description, list } = props
  return (
    <div id={id} className={cx(styles.categorySectors)}>
      <div className={cx(styles.listSectors__description)}>
        <h4 className={cx("heading4 marginBottom12")}>{title}</h4>
        <p
          className={`${styles.description} ${cx(
            "bodyRegularXL marginBottom16"
          )}`}
        >
          {description}
        </p>
      </div>
      <div className={cx(styles.listSectors__items)}>
        {list?.map((subItem, index) => {
          const { title, description, link_route, link, icon } = subItem
          return (
            <ListSectors
              id={"listItem__" + index}
              key={"listItem__" + index}
              index={index + 1}
              icon={images.iconBank}
              title={title}
              description={description}
              link={link}
              link_route={link_route}
            />
          )
        })}
      </div>
    </div>
  )
}

export default CategorySectors
