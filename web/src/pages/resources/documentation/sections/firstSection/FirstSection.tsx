import * as React from "react"
import cx from "classnames"
import { images } from "../../../../../images/images"
import * as styles from "./firstSection.module.scss"
import Tag from "../../../../../components/atoms/tags/Tag"
import { navigate } from "gatsby"

export type ISectionProps = {
  title: string
  description: string
  resources: {
    route: string
    title: string
    image: string
    description: string
    level: string
  }[]
}

const resourcesImages = [images.tool, images.papers, images.edit]

const FirstSection: React.FC<ISectionProps> = props => {
  const { title, description, resources } = props

  return (
    <div
      className={styles.firstSection__container}
      style={{ position: "relative" }}
    >
      <section className={`${styles.firstSection} ${cx("containerMaxWidth")}`}>
        <div className={styles.firstSection__leftSide}>
          <h1 className={`${cx("heading1 marginBottom32")}`}>{title}</h1>
          <p className={`${cx("bodyRegularXL neutral700")}`}>{description}</p>

          <div id="formContainer" className={styles.resources__container}>
            {resources?.map((el, index) => {
              const { title, image, description, level, route } = el
              return (
                <div
                  className={`${styles?.resource}`}
                  onClick={() => navigate(route)}
                >
                  <img
                    src={resourcesImages[index]}
                    className={`${styles?.resource__image}`}
                  />
                  <p className={`${cx("heading5 marginBottom8")}`}>{title}</p>
                  <p
                    className={`${styles?.resource__description} ${cx(
                      "bodyRegularMD"
                    )}`}
                  >
                    {description}
                  </p>
                  <Tag label={level} className={`${cx("marginTopAuto")}`} />
                </div>
              )
            })}
          </div>
        </div>
        <div className={styles.firstSection__rightSide}></div>
      </section>
    </div>
  )
}

export default FirstSection
