import * as React from "react"
import cx from "classnames"

import * as styles from "./centeredHeader.module.scss"
import { InsideSectionsModel } from "../../../../../../interfaces/interfaces"
import PurpleButton from "../../../../../../components/atoms/buttons/purple/PurpleButton"

const CenteredHeader: React.FC<InsideSectionsModel> = props => {
  const { id, title, description, cta } = props

  return (
    <section
      key={`header_` + id}
      className={`${styles?.centeredHeaderSection} ${cx("containerMaxWidth")}`}
    >
      <div className={styles?.centeredHeaderSection__container}>
        <h1 className={`${styles?.maxWidth} ${cx("heading1 marginBottom32")}`}>
          {title}
        </h1>
        <p className={`${styles?.maxWidth} ${cx("bodyRegularXL neutral700")}`}>
          {description}
        </p>
        {cta?.label && (
          <div className={styles?.buttonContainer}>
            <PurpleButton
              label={cta?.label}
              action={() => window.open(cta?.url, "_target")}
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default CenteredHeader
