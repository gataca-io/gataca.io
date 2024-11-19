import * as React from "react"
import cx from "classnames"
import * as styles from "./headingCredential.module.scss"
import { ChipModel } from "../../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../../components/atoms/images/StrapiImage"
import Chip from "../../../generic/chip/Chip"

export type IHeadingCredential = {
  idItem?: string
  className?: string
  chip?: ChipModel
  type?: string
  align?: string
  typeText?: string
  valueText?: string
  image?: any
}
const HeadingCredential: React.FC<IHeadingCredential> = props => {
  const { className, idItem, align, type, chip, typeText, valueText, image } =
    props

  const headingTypeStyles: Record<string, string> = {
    content: "buttonMD",
    main: "heading6",
  }
  const alignStyles: Record<string, string> = {
    right: styles?.alignStylesRight,
  }

  return (
    <div
      id={idItem}
      className={`${styles?.headingCredential__container} ${
        className && className
      } ${align ? alignStyles[align] : ""}`}
    >
      {typeText && (
        <p className={`${cx("bodyRegularSM neutral700")}`}>{typeText}</p>
      )}
      {!!valueText && (
        <p className={`${cx(type ? headingTypeStyles[type] : "heading6")}`}>
          {valueText}
        </p>
      )}
      {image?.data?.attributes?.url && (
        <div className={styles.imageContainer}>
          <StrapiImage image={image ? image : null} />
        </div>
      )}
      {(chip?.text?.length ||
        chip?.leadingIcon?.data?.attributes?.url?.length ||
        chip?.trailingIcon?.data?.attributes?.url?.length) && (
        <Chip
          idChip={chip?.idChip}
          text={chip?.text}
          type={chip?.type}
          form={chip?.form}
          disabled={chip?.disabled}
          color={chip?.color}
          chipSize={chip?.chipSize}
          leadingIcon={chip?.leadingIcon}
          trailingIcon={chip?.trailingIcon}
        />
      )}
    </div>
  )
}

export default HeadingCredential
