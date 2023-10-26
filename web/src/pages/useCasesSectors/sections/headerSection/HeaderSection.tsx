import * as React from "react"
import cx from "classnames"
import PurpleButton from "../../../../components/atoms/buttons/purple/PurpleButton"
import * as styles from "./headerSection.module.scss"
import { gatacaStudioURL } from "../../../../data/globalData"
import { navigate } from "gatsby"

export type ISectionProps = {
  title: string
  description: string
  setHeaderSectionLoaded: (x: boolean) => void
}
const UseCasesSection: React.FC<ISectionProps> = props => {
  const { title, description, setHeaderSectionLoaded } = props

  React.useLayoutEffect(() => {
    setHeaderSectionLoaded(true)
  }, [])

  return (
    <>
      <section
        className={`${styles?.headerSection} ${cx("containerMaxWidth")}`}
      >
        <div className={styles?.headerSection__container}>
          <h1
            dangerouslySetInnerHTML={{
              __html:
                "Unlocking the potential of <span>decentralized identity</span> technology",
            }}
            className={cx("heading1 marginBottom32")}
          ></h1>
          <p className={cx("bodyRegularXL marginBottom32")}>{description}</p>
          <div className={styles?.buttonContainer}>
            <PurpleButton
              label={"Contact Us"}
              action={() => navigate("/company/contact")}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default UseCasesSection
