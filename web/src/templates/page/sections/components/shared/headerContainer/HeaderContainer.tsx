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
  const {
    idItem,
    heading,
    image,
    centerText,
    showForm,
    formRegion,
    formId,
    headingRight,
    imageOutsideFrame,
  } = props

  const [formSubmitted, setFormSubmitted] = React.useState(false)

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
            centerText ? styles?.centeredText : ""
          } ${headingRight ? styles?.headingRight : ""} ${
            imageOutsideFrame ? styles?.imageOutsideFrame : ""
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
              headingRight ? styles?.headingRight : ""
            } ${imageOutsideFrame ? styles?.imageOutsideFrame : ""}`}
          >
            <StrapiImage
              className={`${styles.header__image} ${
                imageOutsideFrame ? styles?.imageOutsideFrame : ""
              }`}
              image={image ? image : null}
            />
          </div>
        )}
        {showForm && formRegion && formId ? (
          <div
            id="formContainer"
            className={`${styles.form__container} ${
              headingRight ? styles?.headingRight : ""
            } ${imageOutsideFrame ? styles?.imageOutsideFrame : ""}`}
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
