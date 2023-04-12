import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import FirstSection from "./sections/firstSection/FirstSection"
import SecondSection from "./sections/secondSection/SecondSection"

const GatacaStudioPage: React.FC<PageProps> = () => {
  const [homeData, setHomeData] = React.useState<any | undefined>()
  const {
    firstSection,
    secondSection,
    thirdSection,
    fourthSection,
    fifthSection,
    sixthSection,
    eighthSection,
  } = homeData ? homeData : []

  React.useEffect(() => {
    getHomeData()
  }, [])

  const getHomeData = async () => {
    const json_data = await require("./data/gatacaStudioData.json")
    setHomeData(json_data?.data && json_data?.data)
  }

  return (
    <Layout>
      <>
        <FirstSection
          title={firstSection?.title}
          description={firstSection?.description}
          button={firstSection?.button}
        />
        <SecondSection
          title={secondSection?.title}
          list={secondSection?.list}
          description={secondSection?.description}
        />
      </>
    </Layout>
  )
}

export default GatacaStudioPage
