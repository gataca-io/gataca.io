import * as React from "react"
import cx from "classnames"
import { images } from "../../../../../images/images"
import * as styles from "./thirdSection.module.scss"
import SingleFeature from "../../components/singleFeature/SingleFeature"

export type ISectionProps = {
  title: string
  description: string
  list: {
    title: string
    description: string
    image: string
  }[]
}

const featureImages = [
  images.phoneVC1,
  images.phoneConsent,
  images.phoneCreateCredential,
  images.phoneServices,
]
const ThirdSection: React.FC<ISectionProps> = props => {
  const { title, description, list } = props
  const [openItem, setOpenItem] = React.useState<number>(1)

  return (
    <div style={{ position: "relative" }}>
      <section className={styles.thirdSection}>
        <div className={`${cx("heading3")} ${styles.thirdSection__leftSide}`}>
          <p className={`${cx("heading3 marginBottom12")}`}>{title}</p>
          <p
            className={`${cx("bodyRegularXL")} ${
              styles.thirdSection__leftSide__description
            }`}
          >
            {description}
          </p>
          <div className={styles.thirdSection__leftSide__bullets}>
            {list?.map((item, index) => {
              const { title, description } = item

              return (
                <SingleFeature
                  index={index + 1}
                  title={title}
                  description={description}
                  selected={openItem === index + 1}
                  showFeature={setOpenItem}
                />
              )
            })}
          </div>
        </div>
        <div className={styles.thirdSection__rightSide}>
          {list && openItem && list[openItem - 1] && (
            <img src={featureImages[openItem - 1]} />
            // TODO: Change img by the commented code when data comes from BE
            // <img src={require(list[openItem - 1]?.image)} />
          )}
        </div>
      </section>
    </div>
  )
}

export default ThirdSection