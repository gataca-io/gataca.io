import * as React from "react"
import cx from "classnames"
import { marketAndroidURI, marketIosURI } from "../../../../../data/globalData"
import { images } from "../../../../../images/images"
import * as styles from "./firstSection.module.scss"

export type ISectionProps = {
  title: string
  description: string
  setFistSectionLoaded: (x: boolean) => void
}

const FirstSection: React.FC<ISectionProps> = props => {
  const { title, description, setFistSectionLoaded } = props

  React.useLayoutEffect(() => {
    setFistSectionLoaded(true)
  }, [])

  return (
    <div style={{ position: "relative" }}>
      <section className={`${styles.firstSection} ${cx("containerMaxWidth")}`}>
        <div className={styles.firstSection__leftSide}>
          <h1 className={`${cx("heading1 marginBottom32")}`}>{title}</h1>
          <p className={`${cx("bodyRegularXL marginBottom20")}`}>
            {description}
          </p>
          <div>
            <a
              className={`${cx(
                "bodyRegularXL marginRight20 marginTop12 marginBottom20"
              )}`}
              href={marketIosURI}
              target="_blank"
            >
              <img src={images.brandAppleButton} />
            </a>
            <a
              href={marketAndroidURI}
              target="_blank"
              className={`${cx("marginBottom20")}`}
            >
              <img src={images.brandGoogleButton} />
            </a>
          </div>
        </div>
        <div className={styles.firstSection__rightSide}>
          <img
            className={styles.firstSection__image__desktop}
            src={images.MockupPhoneNoShadowRIGHT}
          />
          <div className={styles.firstSection__image__desktop_container}></div>
          <div
            className={styles.firstSection__image__desktop__shadow_cont}
          ></div>
          <img
            className={styles.firstSection__image__mobile}
            src={images.mockupPhoneMainMobile}
          />
        </div>
      </section>
    </div>
  )
}

export default FirstSection
