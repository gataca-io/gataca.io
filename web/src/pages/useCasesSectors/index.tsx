import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../../components/templates/mainLayout/MainLayout"
import PreFooterCTASection from "../../components/templates/sections/preFooterCTA/PreFooterCTA"
import { navigate } from "gatsby"
import { gatacaStudioURL } from "../../globalData/globalData"
import cx from "classnames"
import * as styles from "./index.module.scss"
import PurpleButton from "../../components/atoms/buttons/purple/PurpleButton"
import UseCasesSection from "./components/useCasesSection/useCasesSection"

const UseCasesPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className={styles?.useCasesSectors}>
        <section
          className={`${styles?.sectionHeader} ${cx("containerMaxWidth")}`}
        >
          <div className={styles?.sectionHeader__container}>
            <h1 className={cx("heading1 marginBottom32")}>
              Unlocking the potential of <span>decentralized identity</span>{" "}
              technology
            </h1>
            <p className={cx("bodyRegularXL marginBottom32")}>
              Self-sovereign identity (SSI) has multiple practical applications
              across diverse industries, and new use cases are emerging every
              day.
            </p>
            <PurpleButton
              label={"Try for free"}
              action={() => window.open(gatacaStudioURL, "_blank")}
            />
          </div>
        </section>
        <UseCasesSection />
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
