import * as React from "react"
import cx from "classnames"
import * as styles from "./dynamicCard.module.scss"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"
import Button from "../../generic/button/Button"
import Chip from "../../generic/chip/Chip"

export type ISectionProps = {
  idItem?: string
  className?: string
  dynamicCards?: any
}

const DynamicCard: React.FC<ISectionProps> = props => {
  const { className, dynamicCards, idItem } = props

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

  const [openedCard, setOpenedCard] = React.useState(0)

  let dynamicCardContainer: HTMLElement | null | undefined

  React.useEffect(() => {
    dynamicCardContainer = document
      ? document?.getElementById(idItem || "dynamicCard")
      : undefined
  })

  const scrollIntoView = (el: HTMLElement) => {
    dynamicCardContainer
      ? dynamicCardContainer.scroll({
          behavior: "smooth",
          left: el.offsetLeft - 5,
        })
      : null
  }

  return dynamicCards?.map((item: any, index: any) => {
    const {
      upperIconOpened,
      upperIconClosed,
      numberIconText,
      mainIcon,
      title,
      content,
      size,
      contentAlign,
      button,
      chip,
      logoSlot,
    } = item

    return (
      <div
        id={`dynamicCard__` + index}
        key={`dynamicCard__` + index}
        className={`${styles?.dynamicCard} ${
          size ? cardSizeStyles[size] : ""
        } ${className && className}`}
        onMouseEnter={() => {
          window?.innerWidth > 1066 && setOpenedCard(index)
        }}
        onClick={() => {
          const element = document.getElementById("dynamicCard__" + index)
          window?.innerWidth < 1067 &&
            (setOpenedCard(index), element && scrollIntoView(element))
        }}
      >
        {openedCard === index ? (
          <>
            {upperIconClosed && (
              <div
                className={styles?.upperIcon}
                onClick={() => {
                  setOpenedCard(index)
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
                  setOpenedCard(index)
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
              contentAlign ? contentAlignStyles[contentAlign] : ""
            }`}
          >
            {numberIconText ? (
              <h1 className={`${cx("heading1")} ${styles?.numberIconText} `}>
                {numberIconText}
              </h1>
            ) : null}
            {logoSlot ? (
              <StrapiImage
                image={logoSlot ? logoSlot : null}
                className={styles?.logoSlot}
              />
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
            {openedCard === index ? (
              <>
                {content?.length && (
                  <p
                    className={cx(
                      size
                        ? contentSizeStyles[size]
                        : "bodyRegularLG neutral700"
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
        </div>
      </div>
    )
  })
}

export default DynamicCard
