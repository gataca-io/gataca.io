import { Link } from "gatsby"
import * as React from "react"
import * as styles from "./sectionContent.module.scss"
import cx from "classnames"
import { LinkModel } from "../../../../../interfaces/interfaces"

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
      <p
        id={props.navigationObject?.id}
        className={`${cx("marginBottom32 buttonMD")}`}
      >
        {props.navigationObject?.label}
      </p>
      <ul>
        {props.navigationObject?.subRoutes?.map((item, index) => {
          return (
            <li key={"footer__" + item.id + index}>
              <Link
                id={"footer__" + item.id}
                className={cx("bodyRegularMD")}
                to={item.route || ""}
              >
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
