import * as React from "react"
import * as styles from "./categorySectors.module.scss"
import cx from "classnames"
import { images } from "../../../../images/images"
import ListSectors from "../listSectors/ListSectors"

export type ICategorySectorsProps = {
  id: string
  index: number
  title: string
  description: string
  selected: boolean
  className?: any
  list: {
    title: string
    description: string
    icon: string
    link?: string
    link_route?: string
    inside_description?: string
  }[]
}

const CategorySectors: React.FC<ICategorySectorsProps> = props => {
  const { id, index, title, description, selected, className, list } = props
  const secondCategory = list.length > 5
  const [openItem, setOpenItem] = React.useState<number>(1)
  return (
    <div id={id} className={`${cx(styles.categorySectors)} ${className}`}>
      {selected && (
        <>
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
              const {
                title,
                description,
                link_route,
                link,
                icon,
                inside_description,
              } = subItem
              return (
                <ListSectors
                  id={"listItem__" + index}
                  key={"listItem__" + index}
                  index={index + 1}
                  icon={icon}
                  title={title}
                  description={description}
                  link={link}
                  link_route={link_route}
                  secondCategory={secondCategory}
                  inside_description={inside_description}
                  opened={openItem === index + 1}
                  showItem={index => {
                    const element = document.getElementById(
                      "listItem__" + (index - 1)
                    )
                    setOpenItem(index)
                  }}
                />
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default CategorySectors
