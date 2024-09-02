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

const AllSectionsTemplate: React.FC<PageModel> = props => {
  const [benefitsLoaded, setBenefitsLoaded] = React.useState<boolean>(false)
  const { sections } = props

  const [pricingData, setPricing] = useState<any | undefined>()
  const [pricingStrapiData, setStrapiData] = React.useState<any | undefined>()
  const { firstSection } = pricingData ? pricingData : []

  const { onPremiseSection } = pricingStrapiData ? pricingStrapiData : []

  React.useEffect(() => {
    if (!pricingStrapiData) {
      getStrapiData()
    }
    getPricing()
  }, [])

  const getPricing = async () => {
    const json_data = require("./components/pricing/pricingInfo/data/pricingData.json")
    setPricing(json_data?.data && json_data?.data)
  }

  const getStrapiData = async () => {
    await fetch(
      `${process.env.STRAPI_API_URL}/api/pricing?populate%5BfaqSection%5D%5Bpopulate%5D%5Binfo%5D%5Bpopulate%5D=*&populate%5BcloudSection%5D%5Bpopulate%5D%5Btiers%5D%5Bpopulate%5D=*&populate%5BonPremiseSection%5D%5Bpopulate%5D=*`
    )
      .then(response => response.json())
      .then(jsonResponse => {
        const pricingStrapiData = jsonResponse?.data?.attributes
        setStrapiData(pricingStrapiData)
      })
  }

  return (
    <div>
      {sections?.map((item, index) => {
        const {
          id,
          title,
          subtitle,
          description,
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
          panelTitle,
          paragraph_1,
          paragraph_2,
          button,
          infoToggles,
        } = item

        console.log("title ", panelTitle)
        console.log("paragraph ", paragraph_1)
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
                key={`.why_section_` + id + index}
              />
            )}
            {__component === "wallet.how-section" && (
              <ListMedia
                title={title}
                media={media}
                list={operations?.data}
                key={`.list_media_` + id + index}
              />
            )}
            {__component === "shared.faqs-section" && (
              <FaqsSection
                title={title}
                subtitle={subtitle}
                hero={hero}
                info={faqs?.data}
                key={`.faqs_section_` + id + index}
              />
            )}
            {__component === "shared.blog-section" && (
              <ChosenBlogsSection
                title={title}
                subtitle={subtitle}
                blogs={blogs?.data}
                key={`.blogs_section_` + id + index}
              />
            )}
            {__component === "generic.table" && <Table content={content} />}

            {__component === "pricing.cloud" && "pricing.on-premise" && (
              <PricingInfo
                title={title}
                description={description}
                categories={firstSection?.categories}
                index={0}
                infoToggles={infoToggles}
                licenses={tiers?.data}
                onPremise={onPremiseSection}
                // panelTitle={panelTitle}
                // paragraph_1={paragraph_1}
                // paragraph_2={paragraph_2}
                // button={button}
                subOptionClickedID={props?.location?.hash?.substring(1)}
              />
            )}
          </>
        )
      })}
    </div>
  )
}

export default AllSectionsTemplate
