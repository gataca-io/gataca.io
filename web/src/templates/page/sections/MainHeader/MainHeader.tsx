import * as React from "react"
import moment from "moment"
import { BlogModel, PageModel } from "../../../../interfaces/interfaces"
import cx from "classnames"
import Tag from "../../../../components/atoms/tags/Tag"
import StrapiImage from "../../../../components/atoms/images/StrapiImage"
import * as styles from "./mainHeader.module.scss"
import { images } from "../../../../images/images"
import PurpleButton from "../../../../components/atoms/buttons/purple/PurpleButton"
import { gatacaStudioURL } from "../../../../data/globalData"

const MainHeader: React.FC<PageModel> = props => {
  const { sections } = props

  return (
    <div>
      {sections?.map((item, index) => {
        const { title, description, cta, hero, rightImage } = item
        return (
          <div
            className={styles.firstSection__container}
            style={{ position: "relative" }}
            key={`section_` + index}
          >
            <section
              className={`${styles.firstSection} ${cx("containerMaxWidth")}`}
            >
              <div className={styles.firstSection__leftSide}>
                <h1 className={`${cx("heading1 marginBottom32")}`}>{title}</h1>
                <p className={`${cx("bodyRegularXL")}`}>{description}</p>

                <div className={styles.buttons_container}>
                  {cta && (
                    <PurpleButton
                      label={cta?.label}
                      action={() => window.open(cta?.url)}
                    />
                  )}
                </div>
              </div>
              <div className={styles.firstSection__rightSide}>
                <StrapiImage
                  className={styles.firstSection__imageContainer}
                  image={hero ? hero : rightImage}
                />
              </div>
            </section>
          </div>
        )
      })}
    </div>
  )
}

export default MainHeader
