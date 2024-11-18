import * as React from "react"
import cx from "classnames"
import { HeadingModel } from "../../../../../../interfaces/interfaces"
import * as styles from "./logosComponent.module.scss"
import Heading from "../Heading/Heading"
import LogoContainer from "../LogoContainer/LogoContainer"

export type ILogosComponentProps = {
  idItem?: string
  heading?: HeadingModel
  logoContainer?: any
  background?: boolean
}

const LogosComponent: React.FC<ILogosComponentProps> = props => {
  const { idItem, heading, logoContainer, background } = props

  return (
    <div
      id={idItem}
      className={`${styles?.generalCardsLayout__container} ${
        background ? styles?.backgroundDark : ""
      } `}
    >
      {heading && (
        <Heading
          idHeading={heading?.idHeading}
          titleSize={heading?.titleSize}
          align={heading?.align}
          extraText={heading?.extraText}
          title={heading?.title}
          sectionName={heading?.sectionName}
          content={heading?.content}
          buttonGroup={heading?.buttonGroup?.buttons?.data}
          list={heading?.list?.list_options?.data}
          segmentedButton={heading?.segmentedButton?.buttons?.data}
          table={heading?.table?.content}
          className={cx("containerMaxWidth")}
          chip={{ ...heading?.chip }}
          button={{
            ...heading?.button,
            action: () => window.open(heading?.button?.url, "_blank"),
          }}
        />
      )}

      {logoContainer && (
        <LogoContainer
          idItem={logoContainer?.idItem}
          columns={logoContainer?.columns}
          logo={logoContainer?.logo_info?.data?.attributes?.logoInfo}
        />
      )}
    </div>
  )
}

export default LogosComponent
