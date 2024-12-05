import * as React from "react"
import cx from "classnames"
import {
  ButtonModel,
  EmployeeInfoModel,
  HeadingModel,
} from "../../../../../../interfaces/interfaces"
import * as styles from "./teamLayout.module.scss"
import Heading from "../Heading/Heading"
import PhotoCardContainer from "../PhotoCardContainer/PhotoCardContainer"

export type ITeamLayoutProps = {
  idItem?: string
  heading?: HeadingModel
  employees?: {
    data: EmployeeInfoModel[]
  }
  className?: string
  buttonIcon?: ButtonModel
}

const TeamLayout: React.FC<ITeamLayoutProps> = props => {
  const { idItem, heading, employees, className, buttonIcon } = props

  return (
    <div
      id={idItem}
      className={`${styles?.teamLayout__container} ${cx("containerMaxWidth")} ${
        className && className
      }`}
    >
      {heading && (
        <div className={styles.mainTitle__container}>
          {heading && (
            <Heading
              {...heading}
              buttonGroup={heading?.buttonGroup?.buttons?.data}
              list={heading?.list?.list_options?.data}
              table={heading?.table?.content}
              className={styles?.headingCards}
              button={{
                ...heading?.button,
                action: () => window.open(heading?.button?.url, "_blank"),
              }}
            />
          )}
        </div>
      )}
      {employees?.data && (
        <PhotoCardContainer
          photoCard={employees?.data}
          buttonIcon={buttonIcon}
        />
      )}
    </div>
  )
}

export default TeamLayout
