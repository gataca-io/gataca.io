import * as React from "react"
import { PhotoCardContainerModel } from "../../../../../../interfaces/interfaces"
import * as styles from "./photoCardContainer.module.scss"
import PhotoCard from "./components/photoCard/PhotoCard"

const PhotoCardContainer: React.FC<PhotoCardContainerModel> = props => {
  const { idItem, photoCard } = props

  return (
    <div id={idItem} className={`${styles.photoCard__container} `}>
      {photoCard?.map((item: any, index: number) => {
        const { buttonIcon } = item

        item.buttonIcon
          ? (item.buttonIcon.action = () =>
              window.open(buttonIcon?.url, "_blank"))
          : null

        return <PhotoCard key={`photoCard__` + index} {...item} />
      })}
    </div>
  )
}

export default PhotoCardContainer
