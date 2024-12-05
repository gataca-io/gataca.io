import * as React from "react"
import cx from "classnames"
import * as styles from "./photoCard.module.scss"
import { PhotoCardModel } from "../../../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../../../components/atoms/images/StrapiImage"
import ButtonIcon from "../../../../generic/buttonIcon/ButtonIcon"

const PhotoCard: React.FC<PhotoCardModel> = props => {
  const { className, employee, buttonIcon } = props

  const employeeInfo = employee?.attributes

  return (
    <div
      id={employeeInfo?.name}
      className={`${styles?.photoCard__container} ${className && className}`}
    >
      {employeeInfo?.portrait ? (
        <StrapiImage image={employeeInfo?.portrait} />
      ) : null}
      <div className={`${styles?.photoCard__content}`}>
        <div className={`${styles.photoCard__content__leftCol}`}>
          {employeeInfo?.name?.length && (
            <h6 className={cx("heading6 primary700")}>{employeeInfo?.name}</h6>
          )}

          {employeeInfo?.role?.length && (
            <p className={cx("bodyRegularMD neutral1000")}>
              {employeeInfo?.role}
            </p>
          )}
        </div>

        <div className={`${styles.photoCard__content__leftCol}`}>
          {employeeInfo?.linkedinRoute && (
            <ButtonIcon
              {...buttonIcon}
              action={() =>
                window?.open(
                  employeeInfo?.linkedinRoute,
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
