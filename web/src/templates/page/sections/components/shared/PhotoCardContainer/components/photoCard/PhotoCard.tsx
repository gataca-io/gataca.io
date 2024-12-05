import * as React from "react"
import cx from "classnames"
import * as styles from "./photoCard.module.scss"
import { PhotoCardModel } from "../../../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../../../components/atoms/images/StrapiImage"
import ButtonIcon from "../../../../generic/buttonIcon/ButtonIcon"

const PhotoCard: React.FC<PhotoCardModel> = props => {
  const { className, idCard, image, name, jobTitle, buttonIcon } = props

  return (
    <div
      id={idCard}
      className={`${styles?.photoCard__container} ${className && className}`}
    >
      {image ? <StrapiImage image={image ? image : null} /> : null}
      <div className={`${styles?.photoCard__content}`}>
        <div className={`${styles.photoCard__content__leftCol}`}>
          {name?.length && (
            <h6 className={cx("heading6 primary700")}>{name}</h6>
          )}

          {jobTitle?.length && (
            <p className={cx("bodyRegularMD neutral1000")}>{jobTitle}</p>
          )}
        </div>

        <div className={`${styles.photoCard__content__leftCol}`}>
          {buttonIcon?.icon?.data?.attributes?.url?.length && (
            <ButtonIcon
              {...buttonIcon}
              action={() =>
                window?.open(
                  buttonIcon?.url,
                  buttonIcon?.outsideWeb ? "_blank" : "_self"
                )
              }
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default PhotoCard
