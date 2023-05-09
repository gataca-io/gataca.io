import * as React from "react"
import cx from "classnames"
import { images } from "../../../../../images/images"
import * as styles from "./fifthSection.module.scss"
import HubspotForm from "react-hubspot-form"
import FormSkeleton from "./components/FormSkeleton"

export type ISectionProps = {
  title: string
  description: string
}

const FifthSection: React.FC<ISectionProps> = props => {
  const { title, description } = props
  const [formSubmitted, setFormSubmitted] = React.useState(false)

  return (
    <section
      id={"applyFormSection"}
      className={`${styles.fifthSection} ${cx("containerMaxWidth")}`}
    >
      <div className={styles.fifthSection__container}>
        <div className={styles.fifthSection__leftSide}>
          <h3 className={`${cx("heading3 marginBottom10")}`}>{title}</h3>
          <p className={`${cx("bodyRegularXL neutral700")} `}>{description}</p>
        </div>
        <div className={styles.fifthSection__rightSide}>
          <div id="formContainer" className={styles.form_container}>
            <HubspotForm
              region="na1"
              portalId="4728390"
              formId="c6fd13b1-258e-471a-83a1-e0501c9d64d2"
              onSubmit={() => {
                setFormSubmitted(true)
                console.log("Submit!")
              }}
              onReady={() => {
                console.log("ready")
              }}
              loading={<FormSkeleton />}
            />
          </div>
          <div className={styles?.image__container}>
            <img src={images.thumbsUp}></img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FifthSection
