import * as React from "react"
import cx from "classnames"
import * as styles from "./strapiAuthor.module.scss"
import Avatar from "../../../avatar/Avatar"
import { EmployeeInfoModel } from "../../../../../../../../interfaces/interfaces"

export interface IStrapiAuthorProps {
  className?: string
  avatarSize?: string
  employee: {
    attributes: EmployeeInfoModel
  }
}

const StrapiAuthor: React.FC<IStrapiAuthorProps> = props => {
  const { className, employee, avatarSize } = props

  return (
    <div
      className={`${styles?.strapiAuthor__container} ${className && className}`}
    >
      <Avatar
        portrait={employee?.attributes?.portrait}
        mediaSize={avatarSize}
      />
      <div>
        <a target="_blank" href={employee?.attributes?.linkedinRoute}>
          <h6 className={cx("heading6 neutral1000")}>
            {employee?.attributes?.name}
          </h6>
        </a>
        <p className={cx("bodyRegularSM neutral700")}>
          {employee?.attributes?.role}
        </p>
      </div>
    </div>
  )
}

export default StrapiAuthor
