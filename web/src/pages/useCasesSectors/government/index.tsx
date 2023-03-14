import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import PreFooterCTASection from "../../../components/templates/sections/preFooterCTA/PreFooterCTA"
import { navigate } from "gatsby"

const GovernmentPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <>
        <main>
          <h1>Government</h1>
          <PreFooterCTASection
            title={"Want to know more?"}
            description={
              "Get to know our expertise and case studies working with entities in the public sector"
            }
            rightButton={{
              label: "Contact us",
              action: () => navigate("/company/contactUs"),
            }}
          />
        </main>
      </>
    </Layout>
  )
}

export default GovernmentPage
