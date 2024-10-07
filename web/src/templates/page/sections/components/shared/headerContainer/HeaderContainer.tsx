import * as React from "react"
import cx from "classnames"
import { HeaderContainerModel } from "../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"
import * as styles from "./headerContainer.module.scss"
import Heading from "../Heading/Heading"

const HeaderContainer: React.FC<HeaderContainerModel> = props => {
  const { idHeader, heading, image } = props

  return (
    <section className={styles.header} style={{ position: "relative" }}>
      <div
        id={idHeader}
        className={`${styles.header__container} ${cx("containerMaxWidth")}`}
      >
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
            chip={{
              idChip: heading?.chip?.idChip,
              text: heading?.chip?.text,
              type: heading?.chip?.type,
              form: heading?.chip?.form,
              disabled: heading?.chip?.disabled,
              color: heading?.chip?.color,
              chipSize: heading?.chip?.chipSize,
              leadingIcon: heading?.chip?.leadingIcon,
              trailingIcon: heading?.chip?.trailingIcon,
            }}
            button={{
              idButton: heading?.button?.idButton,
              label: heading?.button?.label,
              icon: heading?.button?.icon,
              style: heading?.button?.style,
              color: heading?.button?.color,
              size: heading?.button?.size,
              noPaddingText: heading?.button?.noPaddingText,
              disabled: heading?.button?.disabled,
              link: heading?.button?.link,
              url: heading?.button?.url,
              outsideWeb: heading?.button?.outsideWeb,
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
    </section>
  )
}

export default HeaderContainer
