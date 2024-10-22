import * as React from "react"
import cx from "classnames"
import * as styles from "./listGroup.module.scss"
import List from "../components/List"

export type IListGroupProps = {
  listOptions: any
}

const ListGroup: React.FC<IListGroupProps> = props => {
  const { listOptions } = props

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
    <div className={`${styles?.listGroup__container} `}>
      {listOptions?.map((item: any) => {
        const { list, title, spacing, titleFontSize, titleFontWeight } =
          item?.attributes

        return (
          <>
            <div
              className={`${styles?.listGroup} ${cx(
                spacing ? spacingStyles[spacing] : styles?.spacingSmall
              )}`}
            >
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
              <div className={styles?.listOptions}>
                {list?.map((el: any, index: number) => {
                  const { idList, size, title, leadingIcon, extraInfo, color } =
                    el

                  return (
                    <List
                      idList={idList}
                      key={"list__" + index}
                      size={size}
                      title={title}
                      leadingIcon={leadingIcon}
                      extraInfo={extraInfo}
                      color={color}
                    />
                  )
                })}
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default ListGroup
