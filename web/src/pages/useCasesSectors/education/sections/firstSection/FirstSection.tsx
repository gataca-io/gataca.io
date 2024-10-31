import * as React from "react"
import cx from "classnames"
import { ButtonModelOld } from "../../../../../interfaces/interfaces"
import PurpleButton from "../../../../../components/atoms/buttons/purple/PurpleButton"
import * as styles from "./firstSection.module.scss"
import { gatacaStudioURL } from "../../../../../data/globalData"

export type ISectionProps = {
  title: string
  description: string
  tryForFreeButton: ButtonModelOld
}

const FirstSection: React.FC<ISectionProps> = props => {
  const { title, description, tryForFreeButton } = props

  return (
    <section className={`${styles?.headerSection} ${cx("containerMaxWidth")}`}>
      <div className={styles?.headerSection__container}>
        <h1 className={cx("heading1 marginBottom32")}>Education</h1>
        <p className={`${styles?.maxWidth} ${cx("bodyRegularXL neutral700")}`}>
          {description}
        </p>
        <div className={styles?.buttonContainer}>
          <PurpleButton
            label={tryForFreeButton?.label}
            action={() => window.open(tryForFreeButton.url, "_target")}
          />
        </div>
      </div>
    </section>
  )
}

export default FirstSection
