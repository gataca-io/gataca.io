import type { PageProps } from "gatsby"
import * as React from "react"
import { useState } from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import FirstSection from "./sections/firstSection/FirstSection"
import SecondSection from "./sections/secondSection/SecondSection"
import ThirdSection from "./sections/thirdSection/ThirdSection"

const GatacaWalletPage: React.FC<PageProps> = () => {
  const [gatacaWalletData, setGatacaWallet] = useState<any | undefined>()
  const { firstSection, secondSection, thirdSection, fiveSection } =
    gatacaWalletData ? gatacaWalletData : []

  React.useEffect(() => {
    getGatacaWallet()
  }, [])

  const getGatacaWallet = async () => {
    const json_data = require("./data/gatacaWalletData.json")
    setGatacaWallet(json_data?.data && json_data?.data)
  }

  return (
    <Layout>
      <>
        <FirstSection
          title={firstSection?.title}
          description={firstSection?.description}
        />
        <SecondSection
          title={secondSection?.title}
          list={secondSection?.list}
        />
        <ThirdSection
          title={thirdSection?.title}
          description={thirdSection?.description}
          list={thirdSection?.list}
        />
        {/* <PreFooterCTASection
          title={"Ready To Start?"}
          description={
            "Protect your privacy and take control of your digital identity"
          }
          storeButtons={true}
        /> */}
      </>
    </Layout>
  )
}

export default GatacaWalletPage
