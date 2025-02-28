import * as React from "react"
import cx from "classnames"
import { SubHeadingContainerModel } from "../../../../../../interfaces/interfaces"
import * as styles from "./subHeadingContainer.module.scss"
import SubHeading from "../subHeading/SubHeading"

const SubHeadingContainer: React.FC<SubHeadingContainerModel> = props => {
  const { className, idItem, columns, subHeading, darkTheme } = props

  const columnStyles: Record<string, string> = {
    one: styles?.oneColumn,
    two: styles?.twoColumns,
    three: styles?.threeColumns,
    four: styles?.fourColumns,
  }

  return (
    <div
      id={idItem}
      className={`${styles.subHeading__container} ${cx(
        columns ? columnStyles[columns] : ""
      )} ${className && className}`}
    >
      {subHeading?.map((item: any, index: number) => {
        return (
          <SubHeading
            key={`subHeading__` + index}
            {...item}
            darkTheme={darkTheme}
          />
        )
      })}
    </div>
  )
}

export default SubHeadingContainer
