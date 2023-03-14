import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../../components/templates/mainLayout/MainLayout"
import PreFooterCTASection from "../../components/templates/sections/preFooterCTA/PreFooterCTA"
import { navigate } from "gatsby"
import { gatacaStudioURL } from "../../globalData/globalData"

const UseCasesPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <>
        <main>
          <h1>Uses Cases & Sectors</h1>
        </main>
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
      </>
    </Layout>
  )
}

export default UseCasesPage
