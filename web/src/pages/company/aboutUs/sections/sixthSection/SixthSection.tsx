import * as React from "react"
import cx from "classnames"
import * as styles from "./sixthSection.module.scss"
import { images } from "../../../../../images/images"

export type ISectionProps = {
  description: string
}

const SitxtSection: React.FC<ISectionProps> = props => {
  const { description } = props

  return (
    <section className={`${styles.sixthSection}`}>
      <div className={styles.sixthSection__container}>
        <div className={styles.elements__container}>
          <div className={styles.europeanUnionLogo__container}>
            <img src={images.europeanUnionLogo}></img>
            <div
              className={`${cx("bodyRegularSM")}`}
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </div>
          <div>
            <img src={images.mtdfpLogo}></img>
          </div>
          <div>
            <img src={images.nextGenerationLogo}></img>
          </div>
          <div>
            <img src={images.prtrLogo}></img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SitxtSection
