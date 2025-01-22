import * as React from "react"
import cx from "classnames"
import * as styles from "./allSectionsTemplate.module.scss"
import { PageModel } from "../../../interfaces/interfaces"
import CarrouselLogos from "./components/shared/carrouselLogos/CarrouselLogos"
import Table from "./components/shared/table/Table"
import PricingInfo from "./components/pricing/pricingInfo/PricingInfo"
import ContentTable from "./components/shared/contentTable/ContentTable"
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
import StepsContent from "./components/shared/stepsContent/StepsContent"
import TeamLayout from "./components/shared/TeamLayout/TeamLayout"
import HighlightSubHeadingCard from "./components/shared/HighlightSubHeadingCard/HighlightSubHeadingCard"
import FormLayout from "./components/shared/FormLayout/FormLayout"

const AllSectionsTemplate: React.FC<PageModel> = props => {
  const { sections, location } = props

  return sections?.map(item => {
    const {
      switchLabel,
      __component,
      logos,
      content,
      headingOnPremise,
      infoToggles,
      tier_tables,
      contents,
      card_table_contents,
      color,
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
      button_icons,
      pricing,
      titleFeaturesTableMobile,
      showAllFeaturesText,
      hideAllFeaturesText,
      headings,
      buttonIcon,
      employees,
      centerText,
      columns,
      card,
      fullWidthCard,
      headingSlot,
      formId,
      formRegion,
      showForm,
      action_cards,
      marginBottom,
      headingRight,
      imageOutsideFrame,
    } = item

    return (
      <section key={`sectionContainer_` + Math.random()}>
        {__component === "shared.header-container" && (
          <HeaderContainer
            idItem={idItem}
            heading={heading?.data?.attributes}
            image={image}
            centerText={centerText}
            showForm={showForm}
            formRegion={formRegion}
            formId={formId}
            headingRight={headingRight}
            imageOutsideFrame={imageOutsideFrame}
          />
        )}
        {__component === "shared.carrousel-logos" && (
          <CarrouselLogos
            list={logos?.data}
            color={color}
            loop={loop}
            marginBottom={marginBottom}
          />
        )}

        {__component === "shared.dynamic-card-component" && (
          <DynamicCardComponent
            idItem={idItem}
            heading={heading?.data?.attributes}
            dynamicCards={dynamic_cards?.data[0]?.attributes?.dynamicCards}
            background={background}
            bgVerticalAlign={bgVerticalAlign}
          />
        )}
        {__component === "shared.blog-highlight-card" && (
          <BlogHighlightCard
            idItem={idItem}
            heading={heading?.data?.attributes}
            button={button}
            blogHighlightCardContainer={blogHighlightCardContainer}
          />
        )}
        {__component === "generic.table" && <Table content={content} />}

        {__component === "pricing.cloud" && (
          <PricingInfo
            idItem={idItem}
            headingOnPremise={headingOnPremise?.data?.attributes}
            segmentedButtons={buttons?.data}
            index={0}
            switchLabel={switchLabel}
            infoToggles={infoToggles}
            tier_tables={tier_tables?.data}
            tiersDetail={
              tier_tables?.data[0]?.attributes?.feature_details?.data[0]
                ?.attributes?.tiers?.data
            }
            licenses={
              tier_tables?.data[0]?.attributes?.feature_details?.data[0]
                ?.attributes?.tiers?.data
            }
            subOptionClickedID={props?.location?.hash?.substring(1)}
            showSwitch={showSwitch}
            pricing={pricing}
            titleFeaturesTableMobile={titleFeaturesTableMobile}
            showAllFeaturesText={showAllFeaturesText}
            hideAllFeaturesText={hideAllFeaturesText}
          />
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
        {__component === "shared.button-options" && (
          <SegmentedButtonsContainer
            idItem={idItem}
            heading={heading?.data?.attributes}
            segmentedOptions={buttons?.data}
            subOptionClickedID={location?.substring(1)}
          />
        )}
        {__component === "shared.button-group" && (
          <div className={`${styles?.container} ${cx("containerMaxWidth")}`}>
            <ButtonGroup
              buttonGroup={buttons?.data}
              brandButtonGroup={brand_buttons?.data}
              buttonIconGroup={button_icons?.data}
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
            heading={heading?.data?.attributes}
            button={button}
            columns={columns}
            card={card}
            pricing={pricing}
          />
        )}
        {__component === "shared.dynamic-selector" && (
          <DynamicSelector
            idItem={idItem}
            selector_list={selector_list?.data?.attributes?.selector}
            background={background}
            heading={heading?.data?.attributes}
            heading_selector={headingSelector?.data?.attributes}
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
            heading={heading?.data?.attributes}
            subHeadingContainer={sub_heading?.data?.attributes}
            image={image}
            blockAlign={blockAlign}
            slotAlign={slotAlign}
            headingSlot={headingSlot?.data?.attributes}
          />
        )}
        {__component === "shared.full-width-card" && (
          <FullWidthCard
            idItem={idItem}
            heading={heading?.data?.attributes}
            image={image}
            color={color}
            layout={layout}
            sizeSlot={sizeSlot}
          />
        )}
        {__component === "shared.text-media" && (
          <TextMedia
            idItem={idItem}
            heading={heading?.data?.attributes}
            image={image}
            textAlign={textAlign}
          />
        )}
        {__component === "shared.video" && (
          <Video
            idItem={idItem}
            heading={heading?.data?.attributes}
            image={image}
            video={video}
            color={color}
          />
        )}
        {__component === "shared.logos-component" && (
          <LogosComponent
            idItem={idItem}
            heading={heading?.data?.attributes}
            logoContainer={logoContainer}
            background={background}
          />
        )}
        {__component === "shared.main-blog-layout" && (
          <MainBlogLayout
            idItem={idItem}
            heading={heading?.data?.attributes}
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
            heading={heading?.data?.attributes}
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
            heading={heading?.data?.attributes}
            buttonLeft={buttonLeft}
            buttonRight={buttonRight}
            mediaSteps={media_steps?.data}
          />
        )}
        {__component === "shared.steps-content" && (
          <StepsContent idItem={idItem} headings={headings?.data} />
        )}
        {__component === "shared.team-layout" && (
          <TeamLayout
            idItem={idItem}
            employees={employees}
            heading={heading?.data?.attributes}
            buttonIcon={buttonIcon}
          />
        )}
        {__component === "shared.high-sub-head-card" && (
          <HighlightSubHeadingCard
            idItem={idItem}
            heading={heading?.data?.attributes}
            subHeadingContainer={sub_heading?.data?.attributes}
            fullWidthCard={fullWidthCard}
          />
        )}
        {__component === "shared.form-layout" && (
          <FormLayout
            idItem={idItem}
            heading={heading?.data?.attributes}
            headingSlot={headingSlot?.data?.attributes}
            background={background}
            image={image}
            color={color}
            formId={formId}
            formRegion={formRegion}
            showForm={showForm}
            action_cards={action_cards?.data}
            subOptionClickedID={location?.substring(1)}
          />
        )}
      </section>
    )
  })
}

export default AllSectionsTemplate
