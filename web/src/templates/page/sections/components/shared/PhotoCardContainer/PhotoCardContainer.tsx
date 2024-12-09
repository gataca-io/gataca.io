import * as React from "react"
import { PhotoCardContainerModel } from "../../../../../../interfaces/interfaces"
import * as styles from "./photoCardContainer.module.scss"
import PhotoCard from "./components/photoCard/PhotoCard"

const PhotoCardContainer: React.FC<PhotoCardContainerModel> = props => {
  const { photoCard, buttonIcon } = props

  return (
    <div className={`${styles.photoCard__container} `}>
      {photoCard?.map((item: any, index: number) => {
        return (
          <PhotoCard
            key={`photoCard__` + index}
            employee={item}
            buttonIcon={buttonIcon}
          />
        )
      })}
    </div>
  )
}

export default PhotoCardContainer
