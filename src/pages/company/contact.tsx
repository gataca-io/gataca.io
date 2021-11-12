import React, { useState, useEffect } from "react"
import Layout from "../../layouts/Layout"
import contactData from "../../../content/data/contact.json"
import { BuildHelmet } from "../../components/auxiliary/HelmetBuilder"
import styles from "./contact.module.scss"
// @ts-ignore
import HubspotForm from "react-hubspot-form"
import HeadLineSection from "../../components/HeadLineSection/HeadLineSection"
import useCasesPageData from "../../../content/data/useCasesPage.json"

type IContactProps = {}

const Contact: React.FC<IContactProps> = ({}) => {

  const portalID = "4728390"
  const formGuid = "eb3f851c-b45f-4732-8763-867cd330850d"

  useEffect(() => {

  })

  return (
    <Layout>
      <BuildHelmet
        title={contactData.metas.title}
        description={contactData.metas.description}>
      </BuildHelmet>
      <div className={styles.mainContainer}>
        <div className={styles.contactHeader}>
          <HeadLineSection
            big
            title={contactData.title}
            description={contactData.description}
          />
        </div>
        <div className={styles.formContainer}>
          <p>{contactData.formCta}</p>
          <div>
            <HubspotForm
              portalId={portalID}
              formId={formGuid}
              onSubmit={() => console.log("Submit!")}
              onReady={(form: any) => console.log("Form ready!", form)}
              loading={<div>Loading...</div>}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

Contact.defaultProps = {}

export default Contact
