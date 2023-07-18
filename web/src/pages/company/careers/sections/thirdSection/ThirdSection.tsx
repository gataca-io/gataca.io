import * as React from "react"
import cx from "classnames"
import { images } from "../../../../../images/images"
import * as styles from "./thirdSection.module.scss"
import HubspotForm from "react-hubspot-form"
import FormSkeleton from "./components/FormSkeleton"

export type ISectionProps = {
  title: string
  subTitle: string
  description: string
}

const ThirdSection: React.FC<ISectionProps> = props => {
  const { title, subTitle, description } = props
  const [formSubmitted, setFormSubmitted] = React.useState(false)

  return (
    <section className={`${styles.thirdSection} ${cx("containerMaxWidth")}`}>
      <h3 className={`${cx("heading3")}`}>{title}</h3>
      <div className={styles.thirdSection__container}>
        <div className={styles.thirdSection__leftSide}>
          <h4 className={`${cx("heading4 marginBottom10")}`}>{subTitle}</h4>
          <p
            className={`${cx("bodyRegularXL neutral700")} ${
              styles.description
            }`}
          >
            {description}
          </p>
        </div>
        <div className={styles.thirdSection__rightSide}>
          <div id="formContainer" className={styles.form_container}>
            <HubspotForm
              region="na1"
              portalId="4728390"
              formId="ac9e22c8-e8fb-46db-b28c-2be7c72bfe16"
              onSubmit={() => {
                setFormSubmitted(true)
                console.log("Submit!")
              }}
              onReady={() => {}}
              loading={<FormSkeleton />}
            />
          </div>
          <div className={styles?.image__container}>
            <img src={images.magnifyingGlass}></img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThirdSection
