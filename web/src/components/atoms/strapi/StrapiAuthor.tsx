import * as React from "react"
import cx from "classnames"
import Avatar from "../../../templates/page/sections/components/shared/avatar/Avatar"

export interface IStrapiAuthorProps {
  className?: string
  avatarSize: string
  employee: {
    attributes: {
      name: string
      role: string
      linkedinRoute: string
      portrait: {
        data: {
          attributes: {
            url: string
          }
        }
      }
    }
  }
}

const StrapiAuthor: React.FC<IStrapiAuthorProps> = props => {
  const { className, employee, avatarSize } = props

  return (
    <div className={className}>
      <Avatar
        portrait={employee?.attributes?.portrait}
        mediaSize={avatarSize}
      />
      <div>
        <a target="_blank" href={employee?.attributes?.linkedinRoute}>
          <h6 className={cx("heading6")}>{employee?.attributes?.name}</h6>
        </a>
        <p className={cx("bodyRegularSM")}>{employee?.attributes?.role}</p>
      </div>
    </div>
  )
}

export default StrapiAuthor
