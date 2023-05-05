import * as React from "react"
import { StrapiImageModel } from "../../../interfaces/interfaces"

export interface IStrapiImageProps {
  image: StrapiImageModel
  className?: string
}

const StrapiImage: React.FC<IStrapiImageProps> = props => {
  const { image, className } = props
  const imageAtt = image?.data?.attributes
  const imageURL = image?.data?.attributes?.url

  return imageURL ? (
    <img
      className={className}
      src={imageAtt?.url}
      alt={imageAtt?.alternativeText}
    />
  ) : null
}

export default StrapiImage
