import * as React from "react"
import * as styles from "./list.module.scss"
import cx from "classnames"
import { InsideSectionsModel } from "../../../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../../../components/atoms/images/StrapiImage"

export type IListProps = {
  number: string
  title: string
  description: string
  icon: any
}

const List: React.FC<IListProps> = props => {
  const { title, number, description, icon } = props
  return (
    <div className={`${cx(styles.container)}`}>
      <div
        className={`${cx("heading5 marginBottom16")} ${cx(
          styles.imageContainer
        )}`}
      >
        {icon ? (
          <StrapiImage image={icon ? icon : null} />
        ) : (
          <p className={`${cx("heading1 primary200")}`}>{number}</p>
        )}
      </div>
      <p className={`${cx("heading5 marginBottom16")} ${cx(styles.title)}`}>
        {title}
      </p>
      <p className={`${cx("bodyRegularMD neutral700")} ${styles.description}`}>
        {description}
      </p>
    </div>
  )
}

export default List
