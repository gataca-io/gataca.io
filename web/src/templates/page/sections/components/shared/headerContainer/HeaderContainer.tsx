import * as React from "react"
import cx from "classnames"
import { HeaderContainerModel } from "../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"
import * as styles from "./headerContainer.module.scss"
import Heading from "../Heading/Heading"

const HeaderContainer: React.FC<HeaderContainerModel> = props => {
  const { idItem, heading, image, centerText } = props

  return (
    <div
      id={idItem}
      className={`${styles.header}`}
      style={{ position: "relative" }}
    >
      <div className={`${styles.header__container} ${cx("containerMaxWidth")}`}>
        <div
          className={`${styles.header__heading} ${
            centerText ? styles?.centeredText : ""
          }`}
        >
          <Heading
            {...heading}
            button={{
              ...heading?.button,
              action: () => window.open(heading?.button?.url, "_blank"),
            }}
            key={`heading_` + Math.random()}
          />
        </div>
        {image?.data?.attributes?.url && (
          <div className={styles.header__imageContainer}>
            <StrapiImage
              className={styles.header__image}
              image={image ? image : null}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default HeaderContainer
