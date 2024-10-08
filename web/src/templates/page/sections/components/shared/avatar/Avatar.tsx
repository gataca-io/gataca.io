import * as React from "react"
import * as styles from "./avatar.module.scss"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"

export type ISectionProps = {
  className?: string
  mediaSize?: string
  portrait?: any
  icon?: any
}
const Avatar: React.FC<ISectionProps> = props => {
  const { className, mediaSize, portrait, icon } = props

  const sizeStyle = {
    XXL: styles?.mediaSizeXXL,
    XL: styles?.mediaSizeXL,
    LG: styles?.mediaSizeLG,
    MD: styles?.mediaSizeMD,
    SM: styles?.mediaSizeSM,
    XS: styles?.mediaSizeXS,
  }

  return (
    <>
      <div
        className={`${styles?.avatarContainer} ${
          mediaSize ? sizeStyle[mediaSize] : sizeStyle.XXL
        }`}
      >
        <StrapiImage
          className={className && className}
          image={portrait ? portrait : icon}
        />
      </div>
    </>
  )
}

export default Avatar
