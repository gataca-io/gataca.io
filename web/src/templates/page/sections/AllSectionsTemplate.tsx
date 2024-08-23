import * as React from "react"
import { PageModel } from "../../../interfaces/interfaces"
import Header from "./components/generic/header/Header"
import DoubleColTextImage from "./components/shared/doubleColTextImage/DoubleColTextImage"
import Benefits from "./components/products/benefits/benefits"
import DoubleColImageTextBg from "./components/shared/doubleColImageTextBg/DoubleColImageTextBg"

const AllSectionsTemplate: React.FC<PageModel> = props => {
  const [benefitsLoaded, setBenefitsLoaded] = React.useState<boolean>(false)
  const { sections } = props

  return (
    <div>
      {sections?.map((item, index) => {
        const {
          id,
          title,
          subtitle,
          description,
          cta,
          hero,
          __component,
          benefits,
        } = item

        return (
          <>
            {__component === "generic.header" && (
              <Header
                id={id}
                title={title}
                description={description}
                cta={cta}
                hero={hero}
                key={`header_` + id + index}
              />
            )}
            {__component === "shared.double-col-text-image" && (
              <DoubleColTextImage
                id={id}
                title={title}
                description={description}
                cta={cta}
                hero={hero}
                key={`double_col_text_image_` + id + index}
              />
            )}
            {__component === "shared.double-col-image-text-bg" && (
              <DoubleColImageTextBg
                id={id}
                title={title}
                description={description}
                hero={hero}
                subtitle={subtitle}
                key={`double_col_image_text_bg_` + id + index}
              />
            )}
            {__component === "wallet.benefit-section" && (
              <Benefits
                id={id}
                title={title}
                list={benefits?.data}
                hero={hero}
                setBenefitsLoaded={setBenefitsLoaded}
                key={`benefit_section_` + id + index}
              />
            )}
          </>
        )
      })}
    </div>
  )
}

export default AllSectionsTemplate
