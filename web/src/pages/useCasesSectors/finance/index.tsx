import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import BeforeFooterCTASection from "../../../components/templates/sections/beforeFooterCTA/BeforeFooterCTA"
import { navigate } from "gatsby"
import { gatacaStudioURL } from "../../../globalData/globalData"

const FinancePage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <>
        <main>
          <h1>Finance</h1>
        </main>
        <BeforeFooterCTASection
          title={"Ready to start?"}
          description={
            "Create an account in Gataca Studio and start experiencing decentralized identity today. Fast & seamless integration"
          }
          leftButton={{
            label: "Contact us",
            action: () => navigate("/company/contactUs"),
          }}
          rightButton={{
            label: "Try for free",
            action: () => window.open(gatacaStudioURL, "_blank"),
          }}
        />
      </>
    </Layout>
  )
}

export default FinancePage
