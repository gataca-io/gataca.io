import * as React from "react"
import cx from "classnames"
import {
  ButtonModel,
  HeadingModel,
} from "../../../../../../interfaces/interfaces"
import * as styles from "./generalCardsLayout.module.scss"
import MainCardContainer from "../MainCardContainer/MainCardContainer"
import Heading from "../Heading/Heading"
import Button from "../../generic/button/Button"

export type IGeneralCardsLayoutProps = {
  idItem?: string
  heading?: HeadingModel
  button?: ButtonModel
  mainCardContainer?: any
  className?: string
}

const GeneralCardsLayout: React.FC<IGeneralCardsLayoutProps> = props => {
  const { idItem, heading, button, mainCardContainer, className } = props

  return (
    <div
      id={idItem}
      className={`${styles?.generalCardsLayout__container} ${cx(
        "containerMaxWidth"
      )} ${className && className}`}
    >
      {(heading ||
        button?.label?.length ||
        button?.icon?.data?.attributes?.url?.length) && (
        <div className={styles.mainTitle__container}>
          {heading && (
            <Heading
              idHeading={heading?.idHeading}
              titleSize={heading?.titleSize}
              align={heading?.align}
              extraText={heading?.extraText}
              title={heading?.title}
              sectionName={heading?.sectionName}
              content={heading?.content}
              buttonGroup={heading?.buttonGroup?.buttons?.data}
              list={heading?.list?.list_options?.data}
              segmentedButton={heading?.segmentedButton?.buttons?.data}
              table={heading?.table?.content}
              className={styles?.headingCards}
              chip={{ ...heading?.chip }}
              button={{
                ...heading?.button,
                action: () => window.open(heading?.button?.url, "_blank"),
              }}
            />
          )}
          {(button?.label?.length ||
            button?.icon?.data?.attributes?.url?.length) && (
            <Button
              idButton={button?.idButton}
              className={cx("marginTop20")}
              label={button?.label}
              icon={button?.icon}
              style={button?.style}
              color={button?.color}
              size={button?.size}
              noPaddingText={button?.noPaddingText}
              disabled={button?.disabled}
              link={button?.link}
              url={button?.url}
              action={() =>
                window?.open(
                  button?.url,
                  button?.outsideWeb ? "_blank" : "_self"
                )
              }
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

export default GeneralCardsLayout
