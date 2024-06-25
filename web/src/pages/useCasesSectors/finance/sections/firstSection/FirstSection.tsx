import * as React from "react"
import cx from "classnames"
import { ButtonModel } from "../../../../../interfaces/interfaces"
import PurpleButton from "../../../../../components/atoms/buttons/purple/PurpleButton"
import * as styles from "./firstSection.module.scss"
import { gatacaStudioURL } from "../../../../../data/globalData"

export type ISectionProps = {
  title: string
  description: string
  contactButton: ButtonModel
}

const FirstSection: React.FC<ISectionProps> = props => {
  const { title, description, contactButton } = props

  return (
    <section className={`${styles?.headerSection} ${cx("containerMaxWidth")}`}>
      <div className={styles?.headerSection__container}>
        <h1 className={cx("heading1 marginBottom32")}>{title}</h1>
        <p className={`${styles?.maxWidth} ${cx("bodyRegularXL neutral700")}`}>
          {description}
        </p>
        <div className={styles?.buttonContainer}>
          <PurpleButton
            label={contactButton?.label}
            action={() => window.open(contactButton?.url, "_target")}
          />
        </div>
      </div>
    </section>
  )
}

export default FirstSection
