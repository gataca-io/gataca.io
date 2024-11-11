import * as React from "react"
import cx from "classnames"
import * as styles from "./dynamicSelector.module.scss"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"
import { HeadingModel } from "../../../../../../interfaces/interfaces"
import Heading from "../Heading/Heading"
import SelectorList from "../../generic/selectorList/SelectorList"
import ActionCardList from "../actionCard/ActionCardList"

export type ISectionProps = {
  idItem?: string
  heading?: HeadingModel
  heading_selector?: HeadingModel
  background?: boolean
  layout?: string
  mainTitleIllustration?: any
  selectorIllustration?: any
  selectorAlign?: string
  selector_list?: any
}

const DynamicSelector: React.FC<ISectionProps> = props => {
  const {
    idItem,
    heading,
    heading_selector,
    background,
    layout,
    mainTitleIllustration,
    selectorIllustration,
    selectorAlign,
    selector_list,
  } = props

  const layoutStyles: Record<string, string> = {
    fiftyFifty: styles?.fiftyFifty,
    twentyFiveSeventyFive: styles?.twentyFiveSeventyFive,
  }

  const selectorAlignStyles: Record<string, string> = {
    top: styles?.selectorAlignTop,
    center: styles?.selectorAlignCenter,
  }

  const mainIllustrationImage =
    mainTitleIllustration?.data?.attributes?.url?.length
  const selectorIllustrationImage =
    selectorIllustration?.data?.attributes?.url?.length

  const [openItem, setOpenItem] = React.useState<number>(0)
  const [showItem, setShowItem] = React.useState<number>()

  const getmediaExt = () => {
    let divContent = null
    const mediaExt = selector_list[openItem]?.media?.data?.attributes?.ext
    const videoContent = (
      <div className={cx("marginBottom32")}>
        <video
          src={selector_list[openItem]?.media?.data?.attributes?.url}
          autoPlay
          playsInline
          muted
          loop
        ></video>
      </div>
    )
    const imageContent = (
      <div className={cx("marginBottom32")}>
        <StrapiImage
          image={
            selector_list[openItem]?.media
              ? selector_list[openItem]?.media
              : null
          }
        />
      </div>
    )
    if (mediaExt) {
      switch (mediaExt) {
        case ".png":
          divContent = imageContent
          break
        case ".jpeg":
          divContent = imageContent
          break
        case ".gif":
          divContent = imageContent
          break
        case ".scg":
          divContent = imageContent
          break
        case ".tiff":
          divContent = imageContent
          break
        case ".ico":
          divContent = imageContent
          break
        case ".dvu":
          divContent = imageContent
          break
        case ".mp4":
          divContent = videoContent
          break
        case ".mpeg":
          divContent = videoContent
          break
        case ".mov":
          divContent = videoContent
          break
        case ".wmv":
          divContent = videoContent
          break
        case ".avi":
          divContent = videoContent
          break
        case ".flv":
          divContent = videoContent
          break
        default:
          divContent = null
      }
    }

    return divContent
  }

  return (
    <div
      id={idItem}
      className={`${styles?.dynamicSelector} ${cx("containerMaxWidth")}`}
    >
      <div
        className={`${styles?.dynamicSelector__container} ${
          background ? styles?.background : ""
        }`}
      >
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
            className={`${styles?.headingContainer} ${
              mainIllustrationImage ? styles?.maxWidth : ""
            }`}
            chip={{
              idChip: heading?.chip?.idChip,
              text: heading?.chip?.text,
              type: heading?.chip?.type,
              form: heading?.chip?.form,
              disabled: heading?.chip?.disabled,
              color: heading?.chip?.color,
              chipSize: heading?.chip?.chipSize,
              leadingIcon: heading?.chip?.leadingIcon,
              trailingIcon: heading?.chip?.trailingIcon,
            }}
            button={{
              idButton: heading?.button?.idButton,
              label: heading?.button?.label,
              icon: heading?.button?.icon,
              style: heading?.button?.style,
              color: heading?.button?.color,
              size: heading?.button?.size,
              noPaddingText: heading?.button?.noPaddingText,
              disabled: heading?.button?.disabled,
              link: heading?.button?.link,
              url: heading?.button?.url,
              outsideWeb: heading?.button?.outsideWeb,
              action: () => window.open(heading?.button?.url, "_blank"),
            }}
          />
        )}

        <div style={{ position: "relative" }}>
          <div
            className={`${styles?.dynamicSelector__options} ${
              selectorAlign
                ? selectorAlignStyles[selectorAlign]
                : styles?.selectorAlignTop
            }`}
          >
            <div className={styles?.dynamicSelector__leftSide}>
              {heading_selector && (
                <Heading
                  idHeading={heading_selector?.idHeading}
                  titleSize={heading_selector?.titleSize}
                  align={heading_selector?.align}
                  extraText={heading_selector?.extraText}
                  title={heading_selector?.title}
                  sectionName={heading_selector?.sectionName}
                  content={heading_selector?.content}
                  buttonGroup={heading_selector?.buttonGroup?.buttons?.data}
                  list={heading_selector?.list?.list_options?.data}
                  segmentedButton={
                    heading_selector?.segmentedButton?.buttons?.data
                  }
                  table={heading_selector?.table?.content}
                  className={styles?.heading_selector_container}
                  chip={{
                    idChip: heading_selector?.chip?.idChip,
                    text: heading_selector?.chip?.text,
                    type: heading_selector?.chip?.type,
                    form: heading_selector?.chip?.form,
                    disabled: heading_selector?.chip?.disabled,
                    color: heading_selector?.chip?.color,
                    chipSize: heading_selector?.chip?.chipSize,
                    leadingIcon: heading_selector?.chip?.leadingIcon,
                    trailingIcon: heading_selector?.chip?.trailingIcon,
                  }}
                  button={{
                    idButton: heading_selector?.button?.idButton,
                    label: heading_selector?.button?.label,
                    icon: heading_selector?.button?.icon,
                    style: heading_selector?.button?.style,
                    color: heading_selector?.button?.color,
                    size: heading_selector?.button?.size,
                    noPaddingText: heading_selector?.button?.noPaddingText,
                    disabled: heading_selector?.button?.disabled,
                    link: heading_selector?.button?.link,
                    url: heading_selector?.button?.url,
                    outsideWeb: heading_selector?.button?.outsideWeb,
                    action: () =>
                      window.open(heading_selector?.button?.url, "_blank"),
                  }}
                />
              )}
              {selector_list[0]?.title && (
                <SelectorList
                  openItem={openItem}
                  setOpenItem={setOpenItem}
                  setShowItem={setShowItem}
                  list={selector_list}
                />
              )}
              {selectorIllustrationImage && (
                <div className={styles?.selectorImage__desktop}>
                  <StrapiImage
                    image={selectorIllustration ? selectorIllustration : null}
                  />
                </div>
              )}
            </div>
            <div
              className={`${styles?.dynamicSelector__rightSide} ${
                layout ? layoutStyles[layout] : styles?.twentyFiveSeventyFive
              }`}
            >
              {selector_list[openItem]?.action_card?.data?.attributes
                ?.actionCard?.length && (
                <ActionCardList
                  showItem={showItem}
                  setShowItem={setShowItem}
                  list={selector_list[openItem]}
                />
              )}
              {selector_list[openItem]?.media && (
                <div
                  className={styles?.media__container}
                  key={`media__` + Math.random()}
                >
                  {selector_list[openItem]?.media && getmediaExt()}
                </div>
              )}
            </div>
          </div>
        </div>
        {mainIllustrationImage && (
          <div className={styles?.image__container}>
            <StrapiImage
              image={mainTitleIllustration ? mainTitleIllustration : null}
            />
          </div>
        )}
        {selectorIllustrationImage && (
          <div className={styles?.selectorImage__mobile}>
            <StrapiImage
              image={selectorIllustration ? selectorIllustration : null}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default DynamicSelector
