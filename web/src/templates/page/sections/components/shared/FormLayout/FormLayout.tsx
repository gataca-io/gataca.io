import * as React from "react"
import cx from "classnames"
import * as styles from "./formLayout.module.scss"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"
import { HeadingModel } from "../../../../../../interfaces/interfaces"
import Heading from "../Heading/Heading"
import HubspotForm from "react-hubspot-form"
import FormSkeleton from "./components/FormSkeleton"
import ActionCard from "../actionCard/component/ActionCard"
import { hubspotFormPortalId } from "../../../../../../data/globalData"

export type ISectionProps = {
  idItem?: string
  heading?: HeadingModel
  headingSlot?: HeadingModel
  background?: boolean
  image?: any
  color?: string
  formRegion?: string
  formId?: string
  action_cards?: any
  showForm?: boolean
  subOptionClickedID?: any
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
    formId,
    action_cards,
    showForm,
    subOptionClickedID,
  } = props

  const [formSubmitted, setFormSubmitted] = React.useState(false)

  const [showItem, setShowItem] = React.useState<string | number>(
    (subOptionClickedID && subOptionClickedID) || undefined
  )
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
      className={`${styles?.formLayout} ${cx("containerMaxWidth")} ${
        showForm && background ? styles?.background : ""
      }`}
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

          {action_cards &&
            action_cards?.map((item: any, index: number) => {
              const { actionCard } = item?.attributes

              return (
                <div
                  key={"actionCardList__" + index}
                  className={styles?.actionCards__container}
                >
                  {actionCard?.map((el: any, index: number) => {
                    const subOptionClickedIDComparison =
                      subOptionClickedID === el?.idActionCard
                    return (
                      <ActionCard
                        {...el}
                        key={"actionCard__" + index}
                        index={index + 1}
                        subOptionClickedID={subOptionClickedID}
                        selected={
                          showItem ===
                          (subOptionClickedIDComparison
                            ? el?.idActionCard
                            : index + 1)
                        }
                        showItem={index => {
                          subOptionClickedIDComparison
                            ? (setShowItem(el?.idActionCard),
                              el?.idActionCard &&
                                scrollIntoView(el?.idActionCard))
                            : setShowItem(index)
                        }}
                        button={{
                          ...el?.button,
                          action: () => window.open(el?.button?.url, "_blank"),
                        }}
                      />
                    )
                  })}
                </div>
              )
            })}
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
          {showForm && formRegion && formId ? (
            <div
              className={`${styles?.formLayout__rightSide} ${
                background ? styles?.background : ""
              } ${color ? colorStyles[color] : styles?.greyBackground}`}
            >
              <div id="formContainer" className={styles?.form__container}>
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

              {image && (
                <div className={styles?.image__container}>
                  <StrapiImage image={image ? image : null} />
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default FormLayout
