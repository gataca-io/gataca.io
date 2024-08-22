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
          data,
        } = item

        return (
          <>
            {__component === "generic.header" && (
              <div key={`section_` + id + index}>
                <Header
                  id={id}
                  title={title}
                  description={description}
                  cta={cta}
                  hero={hero}
                />
              </div>
            )}
            {__component === "shared.double-col-text-image" && (
              <DoubleColTextImage
                id={id}
                title={title}
                description={description}
                cta={cta}
                hero={hero}
              />
            )}
            {__component === "shared.double-col-image-text-bg" && (
              <DoubleColImageTextBg
                id={id}
                title={title}
                description={description}
                cta={cta}
                subtitle={subtitle}
              />
            )}
            {__component === "wallet.benefit-section" && (
              <Benefits
                id={id}
                title={title}
                list={data}
                setBenefitsLoaded={setBenefitsLoaded}
              />
            )}
          </>
        )
      })}
    </div>
  )
}

export default AllSectionsTemplate
