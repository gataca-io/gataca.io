import type { PageProps } from "gatsby"
import * as React from "react"
import { useState } from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import FirstSection from "./sections/firstSection/FirstSection"
import SecondSection from "./sections/secondSection/SecondSection"
import ThirdSection from "./sections/thirdSection/ThirdSection"
import FourthSection from "./sections/fourthSection/FourthSection"
import FifthSection from "./sections/fifthSection/FifthSection"

const BecomeAPartnerPage: React.FC<PageProps> = () => {
  const [strapiData, setStrapiData] = React.useState<any | undefined>()
  const {
    headerSection,
    typeSection,
    becomeSection,
    partnershipSection,
    applySection,
  } = strapiData ? strapiData : []

  React.useEffect(() => {
    if (!strapiData) {
      getStrapiData()
    }
  }, [])

  const getStrapiData = async () => {
    await fetch(
      `${process.env.STRAPI_API_URL}/api/company-partners?populate%5Bseo%5D=*&populate%5BheaderSection%5D%5Bpopulate%5D=*&populate%5BtypeSection%5D%5Bpopulate%5D%5Btypes%5D%5Bpopulate%5D=*&populate%5BtypeSection%5D%5Bpopulate%5D%5Blink%5D%5Bpopulate%5D=*&populate%5BbecomeSection%5D%5Bpopulate%5D=*&populate%5BpartnershipSection%5D%5Bpopulate%5D=*&populate%5BapplySection%5D=*`
    )
      .then(response => response.json())
      .then(jsonResponse => {
        const strapiData = jsonResponse?.data?.attributes
        setStrapiData(strapiData)
      })
  }

  return (
    <Layout seoData={strapiData?.seo}>
      <>
        <FirstSection
          title={headerSection?.title}
          descriptionParagraphs={headerSection?.description}
          button={headerSection?.cta}
        />
        <SecondSection
          title={typeSection?.title}
          subTitle={typeSection?.subtitle}
          linkLabel={typeSection?.link.label}
          linkRoute={typeSection?.link.route}
          description={typeSection?.description}
          list={typeSection?.types.data}
        />
        <ThirdSection
          title={becomeSection?.title}
          description={becomeSection?.description}
          list={becomeSection?.steps.data}
        />
        <FourthSection
          title={partnershipSection?.title}
          description={partnershipSection?.description}
          list={partnershipSection?.list.data}
        />
        <FifthSection
          title={applySection?.title}
          description={applySection?.description}
        />
      </>
    </Layout>
  )
}

export default BecomeAPartnerPage
