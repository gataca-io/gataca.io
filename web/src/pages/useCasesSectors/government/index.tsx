import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import PreFooterCTASection from "../../../components/templates/sections/preFooterCTA/PreFooterCTA"
import { navigate } from "gatsby"
import { useState } from "react"

const GovernmentPage: React.FC<PageProps> = () => {
  const [governmentData, setGovernment] = useState<any | undefined>()
  const {} = governmentData ? governmentData : []

  React.useEffect(() => {
    getGovernment()
  }, [])
  const getGovernment = async () => {
    const json_data = require("./data/governmentData.json")
    setGovernment(json_data?.data && json_data?.data)
  }
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
