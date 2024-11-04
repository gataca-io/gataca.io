import * as React from "react"
import cx from "classnames"
import { SubHeadingContainerModel } from "../../../../../../interfaces/interfaces"
import * as styles from "./subHeadingContainer.module.scss"
import SubHeading from "../subHeading/SubHeading"

const SubHeadingContainer: React.FC<SubHeadingContainerModel> = props => {
  const { idItem, columns, subHeading } = props

  const columnStyles: Record<string, string> = {
    one: styles?.oneColumn,
    two: styles?.twoColumns,
    three: styles?.threeColumns,
    four: styles?.fourColumns,
  }

  return (
    <div
      id={idItem}
      className={`${styles.subHeading} ${cx("containerMaxWidth")} `}
    >
      <div
        className={`${styles.subHeading__container} ${cx(
          columns ? columnStyles[columns] : ""
        )}`}
      >
        {subHeading?.map((item: any, index: number) => {
          const {
            idSubHeading,
            size,
            align,
            numberIconText,
            icon,
            title,
            content,
          } = item

          return (
            <SubHeading
              idSubHeading={idSubHeading}
              size={size}
              align={align}
              numberIconText={numberIconText}
              icon={icon}
              title={title}
              content={content}
              key={`subHeading__` + index}
            />
          )
        })}
      </div>
    </div>
  )
}

export default SubHeadingContainer
