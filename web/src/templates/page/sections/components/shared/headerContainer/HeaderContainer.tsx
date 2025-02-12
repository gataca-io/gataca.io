import * as React from "react"
import cx from "classnames"
import { HeaderContainerModel } from "../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"
import * as styles from "./headerContainer.module.scss"
import Heading from "../Heading/Heading"
import HubspotForm from "react-hubspot-form"
import FormSkeleton from "./components/FormSkeleton"
import { hubspotFormPortalId } from "../../../../../../data/globalData"

const HeaderContainer: React.FC<HeaderContainerModel> = props => {
  const { idItem, heading, image, showForm, formRegion, formId, type } = props

  const [formSubmitted, setFormSubmitted] = React.useState(false)

  const typeStyles: Record<string, string> = {
    centerText: styles?.centeredText,
    imageThreeQuarters: styles?.imageOutsideFrame,
  }
  return (
    <div
      id={idItem}
      className={`${styles.header}`}
      style={{ position: "relative" }}
    >
      <div
        className={`${styles.header__container} ${cx("containerMaxWidth")} ${
          showForm ? styles?.formActive : ""
        }`}
      >
        <div
          className={`${styles.header__heading} ${
            type ? typeStyles[type] : ""
          }`}
        >
          <Heading
            {...heading}
            button={{
              ...heading?.button,
              action: () => window.open(heading?.button?.url, "_blank"),
            }}
            key={`heading_` + Math.random()}
          />
        </div>
        {image?.data?.attributes?.url && (
          <div
            className={`${styles.header__imageContainer} ${
              type ? typeStyles[type] : ""
            }`}
          >
            <StrapiImage
              className={`${styles.header__image} ${
                type ? typeStyles[type] : ""
              }`}
              image={image ? image : null}
            />
          </div>
        )}
        {showForm && formRegion && formId ? (
          <div
            id="formContainer"
            className={`${styles.form__container}  ${
              type ? typeStyles[type] : ""
            }`}
          >
            <HubspotForm
              region={formRegion}
              portalId={hubspotFormPortalId}
              formId={formId}
              onSubmit={() => {
                setFormSubmitted(true)
              }}
              onReady={() => {}}
              loading={<FormSkeleton />}
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default HeaderContainer
