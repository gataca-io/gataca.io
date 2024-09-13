import * as React from "react"
import * as styles from "./list.module.scss"
import cx from "classnames"
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
      <div className={`${cx("heading5 marginBottom16")} ${cx()}`}>
        {icon ? (
          <StrapiImage image={icon ? icon : null} />
        ) : (
          <p className={`${cx("heading1 primary200")}`}>{number}</p>
        )}
      </div>
      <p className={`${cx("heading5 marginBottom16")} `}>{title}</p>
      <p className={`${cx("bodyRegularMD neutral700")} `}>{description}</p>
    </div>
  )
}

export default List
