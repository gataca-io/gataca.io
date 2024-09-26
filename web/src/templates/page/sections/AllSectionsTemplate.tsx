import * as React from "react"
import { useState } from "react"
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
                key={`header_` + id + index}
              />
            )}
            {__component === "generic.centered-header" && (
              <CenteredHeader
                id={id}
                title={title}
                description={description}
                cta={cta}
                key={`centered_header_` + id + index}
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
                key={`double_col_text_image_` + id + index}
              />
            )}
            {__component === "shared.double-col-image-text-bg" && (
              <DoubleColImageTextBg
                id={id}
                title={title}
                description={description}
                hero={hero}
                subtitle={subtitle}
                key={`double_col_image_text_bg_` + id + index}
              />
            )}
            {__component === "wallet.benefit-section" && (
              <Benefits
                id={id}
                title={title}
                list={benefits?.data}
                hero={hero}
                setBenefitsLoaded={setBenefitsLoaded}
                key={`benefit_section_` + id + index}
              />
            )}
            {__component === "studio.why-studio-section" && (
              <ListOpensHover
                id={id}
                title={title}
                list={advantages?.data}
                key={`why_section_` + id + index}
              />
            )}
            {__component === "wallet.how-section" && (
              <ListMedia
                title={title}
                media={media}
                list={operations?.data}
                key={`list_media_` + id + index}
              />
            )}
            {__component === "shared.faqs-section" && (
              <FaqsSection
                title={title}
                subtitle={subtitle}
                hero={hero}
                info={faqs?.data}
                key={`faqs_section_` + id + index}
              />
            )}
            {__component === "shared.blog-section" && (
              <ChosenBlogsSection
                title={title}
                subtitle={subtitle}
                blogs={blogs?.data}
                key={`blogs_section_` + id + index}
              />
            )}
            {__component === "generic.table" && <Table content={content} />}

            {__component === "pricing.cloud" && (
              <PricingInfo
                categories={pricing_categories?.data}
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
              <ContentHeadingContainer
                listContent={contents?.data}
                key={`content-heading-container_` + index}
              />
            )}
          </>
        )
      })}
    </div>
  )
}

export default AllSectionsTemplate
