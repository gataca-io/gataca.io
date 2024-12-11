import * as React from "react"
import cx from "classnames"
import * as styles from "./formLayout.module.scss"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"
import { HeadingModel } from "../../../../../../interfaces/interfaces"
import Heading from "../Heading/Heading"
import HubspotForm from "react-hubspot-form"
import FormSkeleton from "./components/FormSkeleton"
import ActionCard from "../actionCard/component/ActionCard"
import ActionCardList from "../actionCard/ActionCardList"

export type ISectionProps = {
  idItem?: string
  heading?: HeadingModel
  headingSlot?: HeadingModel
  background?: boolean
  image?: any
  color?: string
  formRegion?: string
  formPortalId?: string
  formId?: string
  action_cards?: any
  showForm?: boolean
}

const FormLayout: React.FC<ISectionProps> = props => {
  const {
    idItem,
    heading,
    headingSlot,
    background,
    image,
    color,
    formRegion,
    formPortalId,
    formId,
    action_cards,
    showForm,
  } = props

  const [formSubmitted, setFormSubmitted] = React.useState(false)

  const [showItem, setShowItem] = React.useState<string | number>(0)

  let useCasesBullets: HTMLElement | null

  const scrollIntoView = (el: any) => {
    useCasesBullets
      ? useCasesBullets?.scroll({
          behavior: "smooth",
          left: el.offsetLeft,
        })
      : null
  }

  const colorStyles: Record<string, string> = {
    grey: styles?.greyBackground,
    black: styles?.blackBackground,
  }

  return (
    <div
      id={idItem}
      className={`${styles?.formLayout} ${cx("containerMaxWidth")}`}
    >
      <div className={`${styles?.formLayout__container}`}>
        <div className={`${styles?.formLayout__header}`}>
          {heading && (
            <Heading
              {...heading}
              className={`${styles?.headingContainer}`}
              button={{
                ...heading?.button,
                action: () => window.open(heading?.button?.url, "_blank"),
              }}
            />
          )}

          <ActionCardList
            showItem={showItem}
            setShowItem={setShowItem}
            list={action_cards}
            scrollIntoView={scrollIntoView}
          />
        </div>

        <div className={`${styles?.formLayout__options}`}>
          <div className={styles?.formLayout__leftSide}>
            {headingSlot && (
              <Heading
                {...headingSlot}
                button={{
                  ...headingSlot?.button,
                  action: () => window.open(headingSlot?.button?.url, "_blank"),
                }}
              />
            )}
          </div>
          <div
            className={`${styles?.formLayout__rightSide} ${
              background ? styles?.background : ""
            } ${color ? colorStyles[color] : styles?.greyBackground}`}
          >
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
      </div>
      {image && (
        <div className={styles?.image__container}>
          <StrapiImage image={image ? image : null} />
        </div>
      )}
    </div>
  )
}

export default FormLayout
