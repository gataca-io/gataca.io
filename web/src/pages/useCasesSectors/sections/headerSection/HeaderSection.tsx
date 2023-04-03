import * as React from "react"
import cx from "classnames"
import * as styles from "./headerSection.module.scss"
import PurpleButton from "../../../../components/atoms/buttons/purple/PurpleButton"
import { gatacaStudioURL } from "../../../../globalData/globalData"

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
            dangerouslySetInnerHTML={{ __html: title }}
            className={cx("heading1 marginBottom32")}
          ></h1>
          <p className={cx("bodyRegularXL marginBottom32")}>{description}</p>
          <PurpleButton
            label={"Try for free"}
            action={() => window.open(gatacaStudioURL, "_blank")}
          />
        </div>
      </section>
    </>
  )
}

export default UseCasesSection
