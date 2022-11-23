import React from "react"
import { ImageModel } from "../../interfaces/interfaces"

type GaImageProps = {
  className?: string
  image: ImageModel
}

const GaImage: React.FC<GaImageProps> = React.memo((props) => {
  const { image, className } = props

  return (
    <img
      className={className}
      src={image.src}
      alt={image.alt ? image.src : ""}
    />
  )
})

export default GaImage
