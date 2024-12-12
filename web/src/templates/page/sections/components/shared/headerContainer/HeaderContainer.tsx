import * as React from "react"
import cx from "classnames"
import { HeaderContainerModel } from "../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"
import * as styles from "./headerContainer.module.scss"
import Heading from "../Heading/Heading"
import HubspotForm from "react-hubspot-form"
import FormSkeleton from "./components/FormSkeleton"

const HeaderContainer: React.FC<HeaderContainerModel> = props => {
  const {
    idItem,
    heading,
    image,
    centerText,
    showForm,
    formRegion,
    formPortalId,
    formId,
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
          <div className={styles.header__imageContainer}>
            <StrapiImage
              className={styles.header__image}
              image={image ? image : null}
            />
          </div>
        )}
        {showForm && formRegion && formPortalId && formId ? (
          <div id="formContainer" className={styles?.form__container}>
            <HubspotForm
              region={formRegion}
              portalId={formPortalId}
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
