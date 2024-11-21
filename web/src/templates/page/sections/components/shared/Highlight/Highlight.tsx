import * as React from "react"
import cx from "classnames"
import * as styles from "./highlight.module.scss"
import { HeadingModel } from "../../../../../../interfaces/interfaces"
import Heading from "../Heading/Heading"

export type IHighlightProps = {
  idItem?: string
  heading: HeadingModel
  color?: string
  align?: string
  className?: string
}

const Highlight: React.FC<IHighlightProps> = props => {
  const { idItem, heading, color, align, className } = props

  const colorStyles: Record<string, string> = {
    black: styles?.blackBackground,
    grey: styles?.greyBackground,
  }

  const alignStyles: Record<string, string> = {
    center: styles?.alignCenter,
    bottom: styles?.alignBottom,
  }

  return (
    <section
      className={` ${styles?.highlight} ${
        color ? colorStyles[color] : styles?.blackBackground
      } ${className && className}`}
    >
      <div
        id={idItem}
        className={`${align ? alignStyles[align] : styles?.alignCenter} 
        ${cx("containerMaxWidth")}`}
      >
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
          chip={{ ...heading?.chip }}
          button={{
            ...heading?.button,
            action: () => window.open(heading?.button?.url, "_blank"),
          }}
        />
      </div>
    </section>
  )
}

export default Highlight
