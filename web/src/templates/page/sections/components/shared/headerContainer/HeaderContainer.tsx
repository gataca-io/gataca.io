import * as React from "react"
import cx from "classnames"
import { HeaderContainerModel } from "../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"
import * as styles from "./headerContainer.module.scss"
import Heading from "../Heading/Heading"

const HeaderContainer: React.FC<HeaderContainerModel> = props => {
  const { idHeader, heading, image } = props

  return (
    <div
      id={idHeader}
      className={`${styles.header}`}
      style={{ position: "relative" }}
    >
      <div className={`${styles.header__container} ${cx("containerMaxWidth")}`}>
        <div className={`${styles.header__heading}`}>
          <Heading
            idHeading={heading?.idHeading}
            titleSize={heading?.titleSize}
            align={heading?.align}
            extraText={heading?.extraText}
            title={heading?.title}
            sectionName={heading?.sectionName}
            content={heading?.content}
            buttonGroup={heading?.buttonGroup?.buttons?.data}
            list={heading?.list?.list_options?.data}
            segmentedButton={heading?.segmentedButton?.buttons?.data}
            table={heading?.table?.content}
            chip={{ ...heading?.chip }}
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
