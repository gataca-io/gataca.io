import { Link } from "gatsby"
import * as React from "react"
import * as styles from "./sectionContent.module.scss"
import cx from "classnames"
import { LinkModel } from "../../../../interfaces/interfaces"

export type ISectionContentProps = {
  navigationObject?: LinkModel
}
const SectionContent: React.FC<ISectionContentProps> = props => {
  return props.navigationObject ? (
    <div className={styles?.footerNavigation}>
      <p className={`${cx("marginBottom32")} ${cx("buttonMD")}`}>
        {props.navigationObject?.label}
      </p>
      <ul>
        {props.navigationObject?.subRoutes?.map(item => {
          return (
            <li className={cx("marginBottom16")}>
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
