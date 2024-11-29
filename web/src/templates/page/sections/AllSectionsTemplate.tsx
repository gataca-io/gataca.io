import * as React from "react"
import cx from "classnames"
import * as styles from "./allSectionsTemplate.module.scss"
import { PageModel } from "../../../interfaces/interfaces"
import CarrouselLogos from "./components/shared/carrouselLogos/CarrouselLogos"
import Table from "./components/shared/table/Table"
import PricingInfo from "./components/pricing/pricingInfo/PricingInfo"
import ContentHeadingContainer from "./components/generic/contentHeadingContainer/ContentHeadingContainer"
import ContentTable from "./components/shared/contentTable/ContentTable"
import Button from "./components/generic/button/Button"
import ButtonIcon from "./components/generic/buttonIcon/ButtonIcon"
import SegmentedButtonsContainer from "./components/generic/segmentedButtons/SegmentedButtonsContainer"
import ButtonGroup from "./components/generic/buttonGroup/ButtonGroup"
import ChipGroup from "./components/generic/chipGroup/ChipGroup"
import HeaderContainer from "./components/shared/headerContainer/HeaderContainer"
import FullWidthCard from "./components/shared/fullWidthCard/FullWidthCard"
import TextMedia from "./components/shared/textMedia/TextMedia"
import Video from "./components/shared/video/Video"
import DynamicCardComponent from "./components/shared/dynamicCardComponent/DynamicCardComponent"
import DynamicSelector from "./components/shared/dynamicSelector/DynamicSelector"
import GeneralCardsLayout from "./components/shared/GeneralCardsLayout/GeneralCardsLayout"
import LogosComponent from "./components/shared/LogosComponent/LogosComponent"
import BlogHighlightCard from "./components/shared/blogHighlightCard/BlogHighlightCard"
import MainBlogLayout from "./components/shared/mainBlogLayout/MainBlogLayout"
import SideCardsSlider from "./components/shared/sideCardsSlider/SideCardsSlider"
import SubHeadingsLayout from "./components/shared/SubHeadingsLayout/SubHeadingsLayout"
import MediaStepsSlider from "./components/shared/mediaStepsSlider/MediaStepsSlider"

const AllSectionsTemplate: React.FC<PageModel> = props => {
  const { sections, location } = props

  return sections?.map(item => {
    const {
      switchLabel,
      __component,
      logos,
      content,
      tiers,
      pricing_categories,
      infoToggles,
      tier_tables,
      contents,
      card_table_contents,
      idButton,
      label,
      icon,
      url,
      link,
      style,
      color,
      size,
      disabled,
      outsideWeb,
      noPaddingText,
      buttons,
      chip_options,
      selector_list,
      brand_buttons,
      heading,
      image,
      idItem,
      loop,
      lightLogos,
      layout,
      sizeSlot,
      textAlign,
      video,
      employee,
      avatarSize,
      sub_heading,
      highlight_card,
      dynamic_cards,
      background,
      bgVerticalAlign,
      mainTitleIllustration,
      selectorIllustration,
      headingSelector,
      selectorAlign,
      button,
      mainCardContainer,
      logoContainer,
      blogHighlightCardContainer,
      blogsAll,
      allCategory,
      buttonLeft,
      buttonRight,
      cards,
      cardHeight,
      cardWidth,
      credentials,
      testimonial_card,
      blockAlign,
      slotAlign,
      media_steps,
      showSwitch,
    } = item

    return (
      <section key={`sectionContainer_` + Math.random()}>
        {__component === "shared.header-container" && (
          <HeaderContainer
            heading={heading?.data?.attributes?.heading}
            image={image}
          />
        )}
        {__component === "shared.carrousel-logos" && (
          <CarrouselLogos
            list={logos?.data}
            lightLogos={lightLogos}
            loop={loop}
          />
        )}

        {__component === "shared.dynamic-card-component" && (
          <DynamicCardComponent
            idItem={idItem}
            heading={heading?.data?.attributes?.heading}
            dynamicCards={dynamic_cards?.data[0]?.attributes?.dynamicCards}
            background={background}
            bgVerticalAlign={bgVerticalAlign}
          />
        )}
        {__component === "shared.blog-highlight-card" && (
          <BlogHighlightCard
            idItem={idItem}
            heading={heading?.data?.attributes?.heading}
            button={button}
            blogHighlightCardContainer={blogHighlightCardContainer}
          />
        )}
        {__component === "generic.table" && <Table content={content} />}

        {__component === "pricing.cloud" && (
          <PricingInfo
            categories={pricing_categories?.data}
            segmentedButtons={buttons?.data}
            index={0}
            switchLabel={switchLabel}
            infoToggles={infoToggles}
            tier_tables={tier_tables?.data}
            tiersDetail={
              tier_tables?.data[0]?.attributes?.feature_details?.data[0]
                ?.attributes?.tiers?.data
            }
            licenses={tiers?.data}
            subOptionClickedID={props?.location?.hash?.substring(1)}
            showSwitch={showSwitch}
          />
        )}
        {__component === "generic.content-heading-container" && (
          <ContentHeadingContainer listContent={contents?.data} />
        )}
        {__component === "shared.content-table" && (
          <ContentTable
            employee={employee}
            listContent={contents?.data}
            tableOfContent={card_table_contents?.data}
            avatarSize={avatarSize}
            sub_heading={sub_heading}
            highlightCard={highlight_card?.data?.attributes}
          />
        )}
        {__component === "generic.button" && (
          <div className={`${styles?.container} ${cx("containerMaxWidth")}`}>
            <Button
              idButton={idButton}
              label={label}
              icon={icon}
              style={style}
              color={color}
              size={size}
              noPaddingText={noPaddingText}
              disabled={disabled}
              link={link}
              url={url}
              action={() => window?.open(url, outsideWeb ? "_blank" : "_self")}
            />
          </div>
        )}
        {__component === "generic.button-icon" && (
          <div className={`${styles?.container} ${cx("containerMaxWidth")}`}>
            <ButtonIcon
              idButton={idButton}
              icon={icon}
              style={style}
              color={color}
              size={size}
              disabled={disabled}
              action={() => window?.open(url, outsideWeb ? "_blank" : "_self")}
            />
          </div>
        )}
        {__component === "generic.button-options" && (
          <div className={`${styles?.container} ${cx("containerMaxWidth")}`}>
            <SegmentedButtonsContainer segmentedOptions={buttons?.data} />
          </div>
        )}
        {__component === "generic.button-group" && (
          <div className={`${styles?.container} ${cx("containerMaxWidth")}`}>
            <ButtonGroup
              buttonGroup={buttons?.data}
              brandButtonGroup={brand_buttons?.data}
            />
          </div>
        )}
        {__component === "generic.chip-group" && (
          <div className={`${styles?.container} ${cx("containerMaxWidth")}`}>
            <ChipGroup chipOptions={chip_options?.data} />
          </div>
        )}
        {__component === "shared.general-cards-layout" && (
          <GeneralCardsLayout
            idItem={idItem}
            heading={heading?.data?.attributes?.heading}
            button={button}
            mainCardContainer={mainCardContainer}
          />
        )}
        {__component === "shared.dynamic-selector" && (
          <DynamicSelector
            idItem={idItem}
            selector_list={selector_list?.data?.attributes?.selector}
            background={background}
            heading={heading?.data?.attributes?.heading}
            heading_selector={headingSelector?.data?.attributes?.heading}
            mainTitleIllustration={mainTitleIllustration}
            selectorIllustration={selectorIllustration}
            selectorAlign={selectorAlign}
            layout={layout}
            subOptionClickedID={location?.substring(1)}
          />
        )}
        {__component === "shared.sub-headings-layout" && (
          <SubHeadingsLayout
            idItem={idItem}
            heading={heading?.data?.attributes?.heading}
            subHeadingContainer={sub_heading?.data?.attributes}
            image={image}
            blockAlign={blockAlign}
            slotAlign={slotAlign}
          />
        )}
        {__component === "shared.full-width-card" && (
          <FullWidthCard
            idItem={idItem}
            heading={heading?.data?.attributes?.heading}
            image={image}
            color={color}
            layout={layout}
            sizeSlot={sizeSlot}
          />
        )}
        {__component === "shared.text-media" && (
          <TextMedia
            idItem={idItem}
            heading={heading?.data?.attributes?.heading}
            image={image}
            textAlign={textAlign}
          />
        )}
        {__component === "shared.video" && (
          <Video
            idItem={idItem}
            heading={heading?.data?.attributes?.heading}
            image={image}
            video={video}
            color={color}
          />
        )}
        {__component === "shared.logos-component" && (
          <LogosComponent
            idItem={idItem}
            heading={heading?.data?.attributes?.heading}
            logoContainer={logoContainer}
            background={background}
          />
        )}
        {__component === "shared.main-blog-layout" && (
          <MainBlogLayout
            idItem={idItem}
            heading={heading?.data?.attributes?.heading}
            button={button}
            chip_options={chip_options?.chip_options?.data}
            category_options={chip_options?.categories?.data}
            blogHighlightCardContainer={blogHighlightCardContainer}
            blogsAll={blogsAll?.data}
            allCategory={allCategory}
          />
        )}
        {__component === "shared.side-cards-slider" && (
          <SideCardsSlider
            idItem={idItem}
            heading={heading?.data?.attributes?.heading}
            buttonLeft={buttonLeft}
            buttonRight={buttonRight}
            background={background}
            textAlign={textAlign}
            cards={cards?.data[0]?.attributes}
            cardWidth={cardWidth || 343}
            cardHeight={cardHeight || 212}
            credentials={credentials?.data?.attributes}
            testimonialCards={testimonial_card?.data?.attributes}
          />
        )}
        {__component === "shared.media-steps-slider" && (
          <MediaStepsSlider
            idItem={idItem}
            heading={heading?.data?.attributes?.heading}
            buttonLeft={buttonLeft}
            buttonRight={buttonRight}
            mediaSteps={media_steps?.data}
          />
        )}
      </section>
    )
  })
}

export default AllSectionsTemplate
