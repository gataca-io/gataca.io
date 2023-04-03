import * as React from "react"
import cx from "classnames"
import { images } from "../../../../../images/images"
import * as styles from "./firstSection.module.scss"
import HubspotForm from "react-hubspot-form"

export type ISectionProps = {
  title: string
  description: string
  form: {
    label: string
    button: string
    placeholder: string
  }
}

const FirstSection: React.FC<ISectionProps> = props => {
  const { title, description, form } = props
  const [formSubmitted, setFormSubmitted] = React.useState(false)
  React.useEffect(() => {
    // const formContainer = document.getElementById("formContainer")
    // const formLabel = document.getElementById("formLabel")
    // formContainer ? (formContainer.style.paddingBottom = "4px") : null
    // formLabel ? (formLabel.style.display = "block") : null
  }, [])

  return (
    <div
      className={styles.firstSection__container}
      style={{ position: "relative" }}
    >
      <section className={`${styles.firstSection} ${cx("containerMaxWidth")}`}>
        <div className={styles.firstSection__leftSide}>
          <h1 className={`${cx("heading1 marginBottom32")}`}>{title}</h1>
          <p className={`${cx("bodyRegularXL")}`}>{description}</p>
          <div id="formContainer" className={styles.form__container}>
            <label
              id={"formLabel"}
              className={`${cx("bodyRegularMD")} ${styles.form__label}`}
              htmlFor="email"
            >
              {form?.label}
            </label>
            <HubspotForm
              region="na1"
              portalId="4728390"
              formId="1bf27d65-2e72-4db1-8ec8-8b8a83fb388d"
              onSubmit={() => {
                setFormSubmitted(true)
                console.log("Submit!")
                const formContainer = document.getElementById("formContainer")
                const formLabel = document.getElementById("formLabel")

                formContainer
                  ? (formContainer.style.paddingBottom = "20px")
                  : null

                formLabel ? (formLabel.style.display = "none") : null
              }}
              onReady={() => {
                console.log("ready")
                // if (formSubmitted) {
                //   console.log("formSubmitted")
                //   const formContainer = document.getElementById("formContainer")
                //   const formLabel = document.getElementById("formLabel")

                //   formContainer
                //     ? (formContainer.style.paddingBottom = "20px")
                //     : null

                //   formLabel ? (formLabel.style.display = "none") : null
                // } else {
                //   const formContainer = document.getElementById("formContainer")
                //   const formLabel = document.getElementById("formLabel")
                //   formContainer
                //     ? (formContainer.style.paddingBottom = "4px")
                //     : null
                //   formLabel ? (formLabel.style.display = "block") : null
                // }
              }}
              loading={<div>Loading...</div>}
            />
            <p style={{ height: 10 }}></p>
            {/* <input
              className={`${cx("bodyRegularMD")} ${styles.form__input}`}
              type="text"
              id="name"
              name="email"
              required
              minLength={4}
              placeholder={form?.placeholder}
            />
            <PurpleButton
              label={form?.button}
              className={`${cx("buttonMD")} ${styles.form__button}`}
              action={() => ""}
            /> */}
            {/* <a
              className={`${cx(
                "bodyRegularXL margin10 marginTop12 marginBottom8"
              )}`}
              href={marketIosURI}
              target="_blank"
            >
              <img src={images.brandAppleButton} />
            </a>
            <a
              href={marketAndroidURI}
              target="_blank"
              className={`${cx("margin10 marginTop12 marginBottom10")}`}
            >
              <img src={images.brandGoogleButton} />
            </a> */}
          </div>
        </div>
        <div className={styles.firstSection__rightSide}>
          <img
            className={styles.firstSection__imageContainer}
            src={images.blogHeaderImage}
          />
        </div>
      </section>
    </div>
  )
}

export default FirstSection
