import * as React from "react"
import cx from "classnames"
import * as styles from "./listGroup.module.scss"
import List from "../components/List"

export type IListGroupProps = {
  listOptions: any
  className?: string
}

const ListGroup: React.FC<IListGroupProps> = props => {
  const { listOptions, className } = props

  const spacingStyles: Record<string, string> = {
    small: styles?.spacingSmall,
    large: styles?.spacingLarge,
  }

  const titleSizeStyles: Record<string, string | string[]> = {
    small: ["bodyRegularMD", styles?.smallTitle],
    large: "bodyRegularLG",
  }

  const titleFontWeightStyles: Record<string, string> = {
    bold: styles?.boldFontWeight,
    medium: styles?.mediumFontWeight,
  }

  return (
    <div
      className={`${styles?.listGroup__container} ${className && className}`}
    >
      {listOptions?.map((item: any, index: number) => {
        const { list, title, spacing, titleFontSize, titleFontWeight } =
          item?.attributes

        return (
          <div
            key={"listOption__" + index}
            className={`${styles?.listGroup} ${cx(
              spacing ? spacingStyles[spacing] : styles?.spacingSmall
            )}`}
          >
            {title?.length && (
              <p
                className={`${styles.titleHeader} ${cx(
                  titleFontSize
                    ? titleSizeStyles[titleFontSize]
                    : "bodyRegularLG"
                )} ${cx(
                  titleFontWeight ? titleFontWeightStyles[titleFontWeight] : ""
                )}`}
              >
                {title}
              </p>
            )}
            <div
              key={"listOptions__" + Math.random()}
              className={styles?.listOptions}
            >
              {list?.map((el: any, index: number) => {
                return <List key={"list__" + index} {...el} />
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ListGroup
