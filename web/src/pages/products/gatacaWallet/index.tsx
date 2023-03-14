import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import BeforeFooterCTASection from "../../../components/templates/sections/beforeFooterCTA/BeforeFooterCTA"

const GatacaWalletPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <>
        <main>
          <h1>Gataca Wallet</h1>
        </main>
        <BeforeFooterCTASection
          title={"Ready To Start?"}
          description={
            "Protect your privacy and take control of your digital identity"
          }
          storeButtons={true}
        />
      </>
    </Layout>
  )
}

export default GatacaWalletPage
