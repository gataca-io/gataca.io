import * as React from "react"
import cx from "classnames"
import * as styles from "./stepsContent.module.scss"
import Heading from "../Heading/Heading"
import { HeadingModel } from "../../../../../../interfaces/interfaces"

export type IStepsContentProps = {
  idItem?: string
  headings?: HeadingModel[]
}

const StepsContent: React.FC<IStepsContentProps> = props => {
  const { idItem, headings } = props

  return (
    <div
      id={idItem}
      className={`${styles?.stepsContent} ${cx("containerMaxWidth")}`}
    >
      {headings?.map((item: any, index: number) => {
        return (
          <div
            key={"stepsContent__container__" + index}
            className={styles?.stepsContent__container}
          >
            <div className={styles?.numberContainer}>
              <div className={styles?.number}>{index + 1}</div>
            </div>
            <div className={styles?.textContainer}>
              {item?.attributes && (
                <Heading
                  {...item?.attributes}
                  buttonGroup={item?.attributes?.buttonGroup?.buttons?.data}
                  table={item?.attributes?.table?.content}
                  button={{
                    ...item?.attributes?.button,
                    action: () =>
                      window.open(item?.attributes?.button?.url, "_blank"),
                  }}
                />
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default StepsContent
