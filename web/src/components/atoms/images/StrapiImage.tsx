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
  // TODO : Change "http://127.0.0.1:1337" by env variable for stripe API when Admin is deployed
  return imageURL ? (
    <img
      className={className}
      src={"http://127.0.0.1:1337" + imageAtt?.url}
      alt={imageAtt?.alternativeText}
    />
  ) : null
}

export default StrapiImage
