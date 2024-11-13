import * as React from "react"
import cx from "classnames"
import * as styles from "./allSectionsTemplate.module.scss"
import { PageModel } from "../../../interfaces/interfaces"
import Benefits from "./components/products/benefits/benefits"
import ChosenBlogsSection from "./components/shared/chosenBlogsSection/ChosenBlogsSection"
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
import ListGroup from "./components/shared/list/listGroup/ListGroup"
import HeaderContainer from "./components/shared/headerContainer/HeaderContainer"
import SubHeadingContainer from "./components/shared/subHeadingContainer/SubHeadingContainer"
import MainCardContainer from "./components/shared/MainCardContainer/MainCardContainer"
import FullWidthCard from "./components/shared/fullWidthCard/FullWidthCard"
import TextMedia from "./components/shared/textMedia/TextMedia"
import Video from "./components/shared/video/Video"
import DynamicCardComponent from "./components/shared/dynamicCardComponent/DynamicCardComponent"
import DynamicSelector from "./components/shared/dynamicSelector/DynamicSelector"
import GeneralCardsLayout from "./components/shared/GeneralCardsLayout/GeneralCardsLayout"

const AllSectionsTemplate: React.FC<PageModel> = props => {
  const [benefitsLoaded, setBenefitsLoaded] = React.useState<boolean>(false)
  const { sections } = props

  return sections?.map((item, index) => {
    const {
      id,
      title,
      subtitle,
      switchLabel,
      hero,
      __component,
      benefits,
      blogs,
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
      list_options,
      selector_list,
      brand_buttons,
      heading,
      image,
      subHeading,
      columns,
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
        {__component === "wallet.benefit-section" && (
          <Benefits
            id={id}
            title={title}
            list={benefits?.data}
            hero={hero}
            setBenefitsLoaded={setBenefitsLoaded}
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
        {__component === "shared.blog-section" && (
          <ChosenBlogsSection
            title={title}
            subtitle={subtitle}
            blogs={blogs?.data}
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
          />
        )}
        {__component === "shared.list-group" && (
          <div className={`${styles?.container} ${cx("containerMaxWidth")}`}>
            <ListGroup listOptions={list_options?.data} />
          </div>
        )}
        {__component === "shared.sub-heading-container" && (
          <SubHeadingContainer
            idItem={idItem}
            subHeading={subHeading}
            columns={columns}
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
      </section>
    )
  })
}

export default AllSectionsTemplate
