import * as React from "react"
import cx from "classnames"
import * as styles from "./textMedia.module.scss"
import { HeadingModel } from "../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"
import Heading from "../Heading/Heading"

export type ISectionProps = {
  className?: string
  idItem?: string
  heading: HeadingModel
  image?: any
  textAlign?: string
}

const TextMedia: React.FC<ISectionProps> = props => {
  const { className, idItem, heading, image, textAlign } = props

  const textAlignStyles: Record<string, string> = {
    right: styles?.textAlignRight,
    left: styles?.textAlignLeft,
  }

  return (
    <div
      id={idItem}
      className={`${styles.textMedia} ${cx("containerMaxWidth")} ${
        className && className
      }`}
    >
      <div
        className={`${styles.textMedia__container} ${
          textAlign ? textAlignStyles[textAlign] : styles?.textAlignLeft
        } `}
      >
        {image?.data?.attributes?.url && (
          <div className={`${styles.textMedia__imageContainer} `}>
            <StrapiImage
              className={styles.textMedia__image}
              image={image ? image : null}
            />
          </div>
        )}
        <div className={`${styles.textMedia__heading} `}>
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
      </div>
    </div>
  )
}

export default TextMedia
