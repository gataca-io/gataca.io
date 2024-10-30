import * as React from "react"
import cx from "classnames"
import * as styles from "./card.module.scss"
import { CardModel } from "../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"
import Button from "../../generic/button/Button"
import Chip from "../../generic/chip/Chip"

const CardComponent: React.FC<CardModel> = props => {
  const {
    className,
    idCard,
    size,
    contentAlign,
    upperIconOpened,
    upperIconClosed,
    numberIconText,
    chip,
    mainIcon,
    title,
    content,
    button,
    dynamicCard,
    moreContent,
  } = props

  const iconSizeStyles: Record<string, string> = {
    small: "iconMD",
    medium: "iconLG",
    large: "iconXL",
  }
  const cardSizeStyles: Record<string, string> = {
    small: styles?.smallSize,
  }

  const titleSizeStyles: Record<string, string> = {
    small: "heading6",
    medium: "heading5",
    large: "heading4",
  }

  const contentSizeStyles: Record<string, string> = {
    small: "bodyRegularMD neutral700",
    medium: "bodyRegularLG neutral700",
    large: "bodyRegularLG neutral700",
  }

  const contentAlignStyles: Record<string, string> = {
    center: styles?.contentAlignCenter,
  }

  const [openedCard, setOpenedCard] = React.useState(true)
  const [showContent, setShowContent] = React.useState(false)

  return (
    <div
      id={idCard}
      className={`${styles?.card__container} ${
        size ? cardSizeStyles[size] : ""
      } ${dynamicCard ? styles.dynamicCard : ""} ${
        showContent ? styles.showMoreContent : ""
      } ${className && className}`}
      onMouseEnter={() => {
        dynamicCard && window?.innerWidth > 1066 && setOpenedCard(!openedCard)
      }}
      onClick={() => {
        dynamicCard && window?.innerWidth < 1067 && setOpenedCard(!openedCard)
      }}
    >
      {!showContent ? (
        <>
          {upperIconClosed && (
            <div
              className={styles?.upperIcon}
              onClick={() => {
                setShowContent(!showContent)
              }}
            >
              <StrapiImage image={upperIconClosed ? upperIconClosed : null} />
            </div>
          )}
        </>
      ) : (
        <>
          {upperIconOpened && (
            <div
              className={styles?.upperIcon}
              onClick={() => {
                setShowContent(!showContent)
              }}
            >
              <StrapiImage image={upperIconOpened ? upperIconOpened : null} />
            </div>
          )}
        </>
      )}
      <div className={styles.contentContainer}>
        <div
          className={`${
            showContent ? styles.contentHide : styles.contentShow
          } ${contentAlign ? contentAlignStyles[contentAlign] : ""}`}
        >
          {numberIconText ? (
            <h1 className={`${cx("heading1")} ${styles?.numberIconText} `}>
              {numberIconText}
            </h1>
          ) : null}
          {mainIcon ? (
            <StrapiImage
              image={mainIcon ? mainIcon : null}
              className={cx(size ? iconSizeStyles[size] : "iconLG")}
            />
          ) : null}
          {title?.length && (
            <h4 className={cx(size ? titleSizeStyles[size] : "heading4")}>
              {title}
            </h4>
          )}
          {openedCard ? (
            <>
              {content?.length && (
                <p
                  className={cx(
                    size ? contentSizeStyles[size] : "bodyRegularLG neutral700"
                  )}
                >
                  {content}
                </p>
              )}

              {(chip?.text?.length ||
                chip?.leadingIcon?.data?.attributes?.url?.length ||
                chip?.trailingIcon?.data?.attributes?.url?.length) && (
                <Chip
                  idChip={chip?.idChip}
                  text={chip?.text}
                  type={chip?.type}
                  form={chip?.form}
                  disabled={chip?.disabled}
                  color={chip?.color}
                  chipSize={chip?.chipSize}
                  leadingIcon={chip?.leadingIcon}
                  trailingIcon={chip?.trailingIcon}
                />
              )}

              {(button?.label?.length ||
                button?.icon?.data?.attributes?.url?.length) && (
                <Button
                  idButton={button?.idButton}
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
            </>
          ) : null}
        </div>
        {showContent && (
          <div
            className={`${styles.transitionContainer} ${
              !showContent ? styles.contentHide : styles.contentShow
            }`}
          >
            <p
              className={cx(
                size ? contentSizeStyles[size] : "bodyRegularLG neutral1000"
              )}
            >
              {moreContent}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CardComponent
