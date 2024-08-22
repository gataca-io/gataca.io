import * as React from "react"
import cx from "classnames"
import { InsideSectionsModel } from "../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"
import * as styles from "./header.module.scss"
import PurpleButton from "../../../../../../components/atoms/buttons/purple/PurpleButton"

const Header: React.FC<InsideSectionsModel> = props => {
  const { id, title, description, cta, hero } = props

  return (
    <div
      className={styles.header__container}
      style={{ position: "relative" }}
      key={`section_` + id}
    >
      <section className={`${styles.header} ${cx("containerMaxWidth")}`}>
        <div className={styles.header__leftSide}>
          <h1 className={`${cx("heading1 marginBottom32")}`}>{title}</h1>
          <p className={`${cx("bodyRegularXL")}`}>{description}</p>
          {cta && (
            <div className={styles.buttons_container}>
              <PurpleButton
                label={cta?.label}
                action={() => window.open(cta?.url)}
              />
            </div>
          )}
        </div>
        <div className={styles.header__rightSide}>
          <StrapiImage
            className={styles.header__imageContainer}
            image={hero ? hero : null}
          />
        </div>
      </section>
    </div>
  )
}

export default Header
