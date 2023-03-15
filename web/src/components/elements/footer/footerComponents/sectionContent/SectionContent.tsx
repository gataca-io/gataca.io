import { Link } from "gatsby"
import * as React from "react"
import * as styles from "./sectionContent.module.scss"
import cx from "classnames"
import { LinkModel } from "../../../../interfaces/interfaces"
import classNames from "classnames"

export type ISectionContentProps = {
  navigationObject?: LinkModel
  className?: string
}
const SectionContent: React.FC<ISectionContentProps> = props => {
  return props.navigationObject ? (
    <div
      className={`${styles?.footerNavigation} ${
        props.className && props.className
      }`}
    >
      <p className={`${cx("marginBottom32")} ${cx("buttonMD")}`}>
        {props.navigationObject?.label}
      </p>
      <ul>
        {props.navigationObject?.subRoutes?.map(item => {
          return (
            <li>
              <Link className={cx("bodyRegularMD")} to={item.route || ""}>
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  ) : null
}

export default SectionContent
