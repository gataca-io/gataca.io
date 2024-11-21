import * as React from "react"
import { StrapiImageModel } from "../../../interfaces/interfaces"

export interface IStrapiImageProps {
  image?: StrapiImageModel
  url?: string
  className?: string
}

const StrapiImage: React.FC<IStrapiImageProps> = props => {
  const { image, className, url } = props
  const imageAtt = image?.data?.attributes
  const imageURL = image?.data?.attributes?.url || url?.length

  return imageURL ? (
    <img
      className={className}
      src={imageAtt?.url || url}
      alt={imageAtt?.alternativeText}
    />
  ) : null
}

export default StrapiImage
