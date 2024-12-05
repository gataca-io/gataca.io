import * as React from "react"
import cx from "classnames"
import {
  ButtonModel,
  HeadingModel,
} from "../../../../../../interfaces/interfaces"
import * as styles from "./teamLayout.module.scss"
import MainCardContainer from "../MainCardContainer/MainCardContainer"
import Heading from "../Heading/Heading"
import Button from "../../generic/button/Button"

export type ITeamLayoutProps = {
  idItem?: string
  heading?: HeadingModel
  mainCardContainer?: any
  className?: string
}

const TeamLayout: React.FC<ITeamLayoutProps> = props => {
  const { idItem, heading, mainCardContainer, className } = props

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
      {(mainCardContainer?.card?.data?.attributes?.card ||
        mainCardContainer?.pricing?.data?.attributes?.pricingInfo) && (
        <MainCardContainer
          idItem={mainCardContainer?.idItem}
          columns={mainCardContainer?.columns}
          card={mainCardContainer?.card?.data?.attributes?.card}
          pricing={mainCardContainer?.pricing?.data?.attributes?.pricingInfo}
        />
      )}
    </div>
  )
}

export default TeamLayout
