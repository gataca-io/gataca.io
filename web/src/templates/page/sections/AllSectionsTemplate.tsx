import * as React from "react"
import cx from "classnames"
import * as styles from "./allSectionsTemplate.module.scss"
import { PageModel } from "../../../interfaces/interfaces"
import Header from "./components/generic/header/Header"
import DoubleColTextImage from "./components/shared/doubleColTextImage/DoubleColTextImage"
import Benefits from "./components/products/benefits/benefits"
import DoubleColImageTextBg from "./components/shared/doubleColImageTextBg/DoubleColImageTextBg"
import ListOpensHover from "./components/products/listOpensHover/ListOpensHover"
import ListMedia from "./components/products/listMedia/ListMedia"
import FaqsSection from "./components/shared/faqsSection/FaqsSection"
import ChosenBlogsSection from "./components/shared/chosenBlogsSection/ChosenBlogsSection"
import LogosSlider from "./components/shared/logosSlider/LogosSlider"
import Table from "./components/shared/table/Table"
import CenteredHeader from "./components/generic/centeredHeader/CenteredHeader"
import PricingInfo from "./components/pricing/pricingInfo/PricingInfo"
import ContentHeadingContainer from "./components/generic/contentHeadingContainer/ContentHeadingContainer"
import ContentTable from "./components/shared/contentTable/ContentTable"
import Button from "./components/generic/button/Button"
import ButtonIcon from "./components/generic/buttonIcon/ButtonIcon"
import SegmentedButtonsContainer from "./components/generic/segmentedButtons/SegmentedButtonsContainer"
import ButtonGroup from "./components/generic/buttonGroup/ButtonGroup"
import ChipGroup from "./components/generic/chipGroup/ChipGroup"
import CardComponent from "./components/shared/card/Card"
import ActionCard from "./components/shared/actionCard/ActionCard"
import ListGroup from "./components/shared/list/listGroup/ListGroup"
import SubHeading from "./components/shared/subHeading/SubHeading"
import Heading from "./components/shared/Heading/Heading"
import SelectorList from "./components/generic/selectorList/SelectorList"

const AllSectionsTemplate: React.FC<PageModel> = props => {
  const [benefitsLoaded, setBenefitsLoaded] = React.useState<boolean>(false)
  const { sections } = props

  return (
    <div>
      {sections?.map((item, index) => {
        const {
          id,
          title,
          subtitle,
          description,
          switchLabel,
          cta,
          hero,
          media,
          __component,
          benefits,
          advantages,
          operations,
          faqs,
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
          numberIconText,
          mainIcon,
          button,
          chip,
          upperIconOpened,
          upperIconClosed,
          trailingIcon,
          titleCard,
          titleContent,
          contentAlign,
          dynamicCard,
          moreContent,
          list_options,
          align,
          idSubHeading,
          idCard,
          idActionCard,
          idHeading,
          titleSize,
          extraText,
          sectionName,
          buttonGroup,
          list,
          segmentedButton,
          table,
          selector_lists,
        } = item

        return (
          <>
            {__component === "generic.header" && (
              <Header
                id={id}
                title={title}
                description={description}
                cta={cta}
                hero={hero}
                key={`header_` + Math.random()}
              />
            )}
            {__component === "generic.centered-header" && (
              <CenteredHeader
                id={id}
                title={title}
                description={description}
                cta={cta}
                key={`centered_header_` + Math.random()}
              />
            )}
            {__component === "shared.slider" && (
              <LogosSlider list={logos?.data} lightLogos={logos?.data} />
            )}
            {__component === "shared.double-col-text-image" && (
              <DoubleColTextImage
                id={id}
                title={title}
                description={description}
                cta={cta}
                hero={hero}
                key={`double_col_text_image_` + Math.random()}
              />
            )}
            {__component === "shared.double-col-image-text-bg" && (
              <DoubleColImageTextBg
                id={id}
                title={title}
                description={description}
                hero={hero}
                subtitle={subtitle}
                key={`double_col_image_text_bg_` + Math.random()}
              />
            )}
            {__component === "wallet.benefit-section" && (
              <Benefits
                id={id}
                title={title}
                list={benefits?.data}
                hero={hero}
                setBenefitsLoaded={setBenefitsLoaded}
                key={`benefit_section_` + Math.random()}
              />
            )}
            {__component === "studio.why-studio-section" && (
              <ListOpensHover
                id={id}
                title={title}
                list={advantages?.data}
                key={`why_section_` + Math.random()}
              />
            )}
            {__component === "wallet.how-section" && (
              <ListMedia
                title={title}
                media={media}
                list={operations?.data}
                key={`list_media_` + Math.random()}
              />
            )}
            {__component === "shared.faqs-section" && (
              <FaqsSection
                title={title}
                subtitle={subtitle}
                hero={hero}
                info={faqs?.data}
                key={`faqs_section_` + Math.random()}
              />
            )}
            {__component === "shared.blog-section" && (
              <ChosenBlogsSection
                title={title}
                subtitle={subtitle}
                blogs={blogs?.data}
                key={`blogs_section_` + Math.random()}
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
                key={`pricing_info` + Math.random()}
              />
            )}
            {__component === "generic.content-heading-container" && (
              <ContentHeadingContainer
                listContent={contents?.data}
                key={`content-heading-container_` + index}
              />
            )}
            {__component === "shared.content-table" && (
              <ContentTable
                listContent={contents?.data}
                tableOfContent={card_table_contents?.data}
                key={`content-table_` + index}
              />
            )}
            {__component === "generic.button" && (
              <section
                className={`${styles?.container} ${cx("containerMaxWidth")}`}
              >
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
                  action={() =>
                    window?.open(url, outsideWeb ? "_blank" : "_self")
                  }
                  key={`button_` + Math.random()}
                />
              </section>
            )}
            {__component === "generic.button-icon" && (
              <section
                className={`${styles?.container} ${cx("containerMaxWidth")}`}
              >
                <ButtonIcon
                  idButton={idButton}
                  icon={icon}
                  style={style}
                  color={color}
                  size={size}
                  disabled={disabled}
                  action={() =>
                    window?.open(url, outsideWeb ? "_blank" : "_self")
                  }
                  key={`button_icon` + Math.random()}
                />
              </section>
            )}
            {__component === "generic.button-options" && (
              <section
                className={`${styles?.container} ${cx("containerMaxWidth")}`}
              >
                <SegmentedButtonsContainer
                  segmentedOptions={buttons?.data}
                  key={`segmented_buttons` + Math.random()}
                />
              </section>
            )}
            {__component === "generic.button-group" && (
              <section
                className={`${styles?.container} ${cx("containerMaxWidth")}`}
              >
                <ButtonGroup
                  buttonGroup={buttons?.data}
                  key={`button_group_` + Math.random()}
                />
              </section>
            )}
            {__component === "generic.chip-group" && (
              <section
                className={`${styles?.container} ${cx("containerMaxWidth")}`}
              >
                <ChipGroup
                  chipOptions={chip_options?.data}
                  key={`chip_group_` + Math.random()}
                />
              </section>
            )}
            {__component === "shared.card" && (
              <section
                className={`${styles?.container} ${cx("containerMaxWidth")}`}
              >
                <CardComponent
                  idCard={idCard}
                  dynamicCard={dynamicCard}
                  upperIconOpened={upperIconOpened}
                  upperIconClosed={upperIconClosed}
                  numberIconText={numberIconText}
                  mainIcon={mainIcon}
                  title={title}
                  content={content}
                  size={size}
                  contentAlign={contentAlign}
                  moreContent={moreContent}
                  button={{
                    idButton: button?.idButton,
                    label: button?.label,
                    icon: button?.icon,
                    style: button?.style,
                    color: button?.color,
                    size: button?.size,
                    noPaddingText: button?.noPaddingText,
                    disabled: button?.disabled,
                    link: button?.link,
                    url: button?.url,
                    outsideWeb: button?.outsideWeb,
                    action: () => window.open(button?.url, "_blank"),
                  }}
                  chip={{
                    idChip: chip?.idChip,
                    text: chip?.text,
                    type: chip?.type,
                    form: chip?.form,
                    disabled: chip?.disabled,
                    color: chip?.color,
                    chipSize: chip?.chipSize,
                    leadingIcon: chip?.leadingIcon,
                    trailingIcon: chip?.trailingIcon,
                  }}
                  key={`card_` + Math.random()}
                />
              </section>
            )}
            {__component === "shared.action-card" && (
              <section
                className={`${styles?.container} ${cx("containerMaxWidth")}`}
              >
                <ActionCard
                  idActionCard={idActionCard}
                  upperIconOpened={upperIconOpened}
                  upperIconClosed={upperIconClosed}
                  trailingIcon={trailingIcon}
                  titleCard={titleCard}
                  titleContent={titleContent}
                  content={content}
                  button={{
                    idButton: button?.idButton,
                    label: button?.label,
                    icon: button?.icon,
                    style: button?.style,
                    color: button?.color,
                    size: button?.size,
                    noPaddingText: button?.noPaddingText,
                    disabled: button?.disabled,
                    link: button?.link,
                    url: button?.url,
                    outsideWeb: button?.outsideWeb,
                    action: () => window.open(button?.url, "_blank"),
                  }}
                  chip={{
                    idChip: chip?.idChip,
                    text: chip?.text,
                    type: chip?.type,
                    form: chip?.form,
                    disabled: chip?.disabled,
                    color: chip?.color,
                    chipSize: chip?.chipSize,
                    leadingIcon: chip?.leadingIcon,
                    trailingIcon: chip?.trailingIcon,
                  }}
                  key={`action_card` + Math.random()}
                />
              </section>
            )}
            {__component === "shared.list-group" && (
              <section
                className={`${styles?.container} ${cx("containerMaxWidth")}`}
              >
                <ListGroup
                  listOptions={list_options?.data}
                  key={`list_group` + Math.random()}
                />
              </section>
            )}
            {__component === "shared.sub-heading" && (
              <section
                className={`${styles?.container} ${cx("containerMaxWidth")}`}
              >
                <SubHeading
                  idSubHeading={idSubHeading}
                  size={size}
                  align={align}
                  numberIconText={numberIconText}
                  icon={icon}
                  title={title}
                  content={content}
                  key={`subheading_` + Math.random()}
                />
              </section>
            )}
            {__component === "shared.heading" && (
              <section
                className={`${styles?.container} ${cx("containerMaxWidth")}`}
              >
                <Heading
                  idHeading={idHeading}
                  titleSize={titleSize}
                  align={align}
                  extraText={extraText}
                  title={title}
                  sectionName={sectionName}
                  content={content}
                  buttonGroup={buttonGroup?.buttons?.data}
                  list={list?.list_options?.data}
                  segmentedButton={segmentedButton?.buttons?.data}
                  table={table?.content}
                  chip={{
                    idChip: chip?.idChip,
                    text: chip?.text,
                    type: chip?.type,
                    form: chip?.form,
                    disabled: chip?.disabled,
                    color: chip?.color,
                    chipSize: chip?.chipSize,
                    leadingIcon: chip?.leadingIcon,
                    trailingIcon: chip?.trailingIcon,
                  }}
                  button={{
                    idButton: button?.idButton,
                    label: button?.label,
                    icon: button?.icon,
                    style: button?.style,
                    color: button?.color,
                    size: button?.size,
                    noPaddingText: button?.noPaddingText,
                    disabled: button?.disabled,
                    link: button?.link,
                    url: button?.url,
                    outsideWeb: button?.outsideWeb,
                    action: () => window.open(button?.url, "_blank"),
                  }}
                  key={`heading_` + Math.random()}
                />
              </section>
            )}
            {__component === "generic.selector-list" && (
              <section
                className={`${styles?.container} ${cx("containerMaxWidth")}`}
              >
                <SelectorList
                  list={selector_lists?.data}
                  key={`list_group` + Math.random()}
                />
              </section>
            )}
          </>
        )
      })}
    </div>
  )
}

export default AllSectionsTemplate
