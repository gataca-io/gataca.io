import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../../components/templates/mainLayout/MainLayout"
import PreFooterCTASection from "../../components/templates/sections/preFooterCTA/PreFooterCTA"
import { navigate } from "gatsby"
import { gatacaStudioURL } from "../../globalData/globalData"
import * as styles from "./index.module.scss"
import HeaderSection from "./sections/headerSection/HeaderSection"
import UseCasesSection from "./sections/useCasesSection/UseCasesSection"
import { useState } from "react"

const UseCasesPage: React.FC<PageProps> = () => {
  const [useCasesSectorsData, setUseCasesSectors] = useState<any | undefined>()
  const [headerSectionLoaded, setHeaderSectionLoaded] = useState<boolean>(false)
  const { headerSection, useCasesSection } = useCasesSectorsData
    ? useCasesSectorsData
    : []

  React.useEffect(() => {
    getUseCasesSectors()
  }, [])

  const getUseCasesSectors = async () => {
    const json_data = require("./data/UseCasesSectorsData.json")
    setUseCasesSectors(json_data?.data && json_data?.data)
  }
  return (
    <Layout>
      <div className={styles?.useCasesSectors}>
        <HeaderSection
          title={headerSection?.title}
          description={headerSection?.description}
          setHeaderSectionLoaded={setHeaderSectionLoaded}
        />
        <UseCasesSection
          title={useCasesSection?.title}
          description={useCasesSection?.description}
          list={useCasesSection?.list}
        />
      </div>
      <PreFooterCTASection
        title={"Ready To Start?"}
        description={
          "Create an account in Gataca Studio and start experiencing user-centric identity solutions today. Fast & seamless integration."
        }
        leftButton={{
          label: "Contact Us",
          outlined: true,
          action: () => navigate("/company/contactUs"),
        }}
        rightButton={{
          label: "Try for free",
          action: () => window.open(gatacaStudioURL, "_blank"),
        }}
      />
    </Layout>
  )
}

export default UseCasesPage
