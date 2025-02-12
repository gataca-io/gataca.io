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
    backContent,
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
    small: "heading6 neutral1000",
    medium: "heading5 neutral1000",
    large: "heading4 neutral1000",
  }

  const contentSizeStyles: Record<string, string> = {
    small: "bodyRegularMD neutral700",
    medium: "bodyRegularLG neutral700",
    large: "bodyRegularLG neutral700",
  }

  const contentAlignStyles: Record<string, string> = {
    center: styles?.contentAlignCenter,
  }

  const [showContent, setShowContent] = React.useState(false)

  const backContentToShow = backContent?.length

  return (
    <div
      id={idCard}
      className={`${styles?.card__container} ${
        size ? cardSizeStyles[size] : ""
      } ${showContent ? styles.showBackContent : ""} ${
        backContentToShow ? styles?.backContentToShow : ""
      } ${className && className}`}
      onClick={() => {
        backContentToShow && setShowContent(!showContent)
      }}
    >
      {!showContent ? (
        <>
          {upperIconClosed?.data?.attributes?.url && (
            <div className={styles?.upperIcon}>
              <StrapiImage image={upperIconClosed ? upperIconClosed : null} />
            </div>
          )}
        </>
      ) : (
        <>
          {upperIconOpened?.data?.attributes?.url && (
            <div className={styles?.upperIcon}>
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
            <h4
              className={cx(
                size ? titleSizeStyles[size] : "heading4 neutral1000"
              )}
            >
              {title}
            </h4>
          )}

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
              {backContent}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CardComponent
