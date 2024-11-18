import * as React from "react"
import cx from "classnames"
import * as styles from "./logoContainer.module.scss"
import LogoComponent from "./component/Logo"

export type ILogoContainerProps = {
  className?: string
  idItem?: string
  columns?: string
  logo?: any
}

const LogoContainer: React.FC<ILogoContainerProps> = props => {
  const { className, idItem, columns, logo } = props

  const columnStyles: Record<string, string> = {
    four: styles?.fourColumns,
    five: styles?.fiveColumns,
  }

  return (
    <div
      id={idItem}
      className={`${styles.logo__container} ${className && className} ${cx(
        columns ? columnStyles[columns] : ""
      )} ${cx("containerMaxWidth")}`}
    >
      {logo?.map((item: any, index: number) => {
        const { idItem, image, title } = item

        return (
          <LogoComponent
            key={`logo__` + index}
            idItem={idItem}
            image={image}
            title={title}
          />
        )
      })}
    </div>
  )
}

export default LogoContainer
