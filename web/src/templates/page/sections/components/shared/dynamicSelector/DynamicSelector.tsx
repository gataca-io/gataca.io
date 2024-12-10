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
  subOptionClickedID?: any
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
    subOptionClickedID,
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
  const [showItem, setShowItem] = React.useState<string | number>(
    (subOptionClickedID && subOptionClickedID) || undefined
  )

  let useCasesBullets: HTMLElement | null
  let selectedUseCase: HTMLElement | null

  const idItemComponent =
    selector_list[openItem]?.action_card?.data?.attributes?.idItem

  React.useEffect(() => {
    useCasesBullets = document && document?.getElementById(idItemComponent)
  }, [subOptionClickedID])

  React.useEffect(() => {
    selectedUseCase =
      document && document?.getElementById(subOptionClickedID || 0)
    subOptionClickedID &&
      showItem &&
      subOptionClickedID === showItem &&
      selectedUseCase?.scrollIntoView({ behavior: "smooth" })
  })

  const scrollIntoView = (el: any) => {
    useCasesBullets
      ? useCasesBullets?.scroll({
          behavior: "smooth",
          left: el.offsetLeft,
        })
      : null
  }

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
            {...heading}
            className={`${styles?.headingContainer} ${
              mainIllustrationImage ? styles?.maxWidth : ""
            }`}
            button={{
              ...heading?.button,
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
                  {...heading_selector}
                  className={styles?.heading_selector_container}
                  button={{
                    ...heading_selector?.button,
                    action: () =>
                      window.open(heading_selector?.button?.url, "_blank"),
                  }}
                />
              )}
              {selector_list && selector_list[0]?.title && (
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
              {selector_list &&
                selector_list[openItem]?.action_card?.data?.attributes
                  ?.actionCard?.length && (
                  <ActionCardList
                    showItem={showItem}
                    setShowItem={setShowItem}
                    list={selector_list[openItem]}
                    subOptionClickedID={subOptionClickedID}
                    scrollIntoView={scrollIntoView}
                  />
                )}
              {selector_list && selector_list[openItem]?.media && (
                <div
                  className={styles?.media__container}
                  key={`media__` + Math.random()}
                >
                  {selector_list &&
                    selector_list[openItem]?.media &&
                    getmediaExt()}
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
