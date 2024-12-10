import * as React from "react"
import cx from "classnames"
import { HeadingModel } from "../../../../../../interfaces/interfaces"
import * as styles from "./subHeadingsLayout.module.scss"

import Heading from "../Heading/Heading"
import SubHeadingContainer from "../subHeadingContainer/SubHeadingContainer"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"

export type ISubHeadingsLayoutProps = {
  idItem?: string
  heading?: HeadingModel
  subHeadingContainer?: any
  image?: any
  blockAlign?: string
  slotAlign?: string
}

const SubHeadingsLayout: React.FC<ISubHeadingsLayoutProps> = props => {
  const { idItem, heading, subHeadingContainer, image, blockAlign, slotAlign } =
    props

  const blockAlignStyles: Record<string, string> = {
    left: styles?.blockAlignLeft,
    center: styles?.blockAlignCenter,
    right: styles?.blockAlignRight,
  }

  const slotAlignStyles: Record<string, string> = {
    left: styles?.slotAlignLeft,
    right: styles?.slotAlignRight,
  }

  const imageData = image?.data?.attributes?.url
  return (
    <div
      id={idItem}
      className={`${styles?.subHeadingsLayout__container} ${
        blockAlign === "center" ? cx("containerMaxWidth") : ""
      } ${blockAlign ? blockAlignStyles[blockAlign] : ""} ${
        slotAlign ? slotAlignStyles[slotAlign] : ""
      } `}
    >
      {imageData && (
        <div className={styles?.image__container}>
          <StrapiImage image={image ? image : null} />
        </div>
      )}
      <div
        className={`${styles?.subHeading__container} ${
          !imageData ? styles?.containerMaxWidth : ""
        }`}
      >
        {heading && (
          <Heading
            {...heading}
            button={{
              ...heading?.button,
              action: () => window.open(heading?.button?.url, "_blank"),
            }}
          />
        )}

        {subHeadingContainer && (
          <SubHeadingContainer
            idItem={subHeadingContainer?.subHeadingContainer?.idItem}
            columns={subHeadingContainer?.subHeadingContainer?.columns}
            subHeading={subHeadingContainer?.subHeadingContainer?.subHeading}
          />
        )}
      </div>
    </div>
  )
}

export default SubHeadingsLayout
