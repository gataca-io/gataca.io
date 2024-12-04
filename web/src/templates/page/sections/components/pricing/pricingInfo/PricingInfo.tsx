import * as React from "react"
import cx from "classnames"
import SwitchButton from "../../../../../../components/atoms/buttons/switchButton/SwicthButton"
import LicensesTableMobile from "./components/licensesTableMobile/LicensesTableMobile"
import LicensesTable from "./components/licensesTable/LicensesTable"
import {
  ButtonModel,
  IProductModel,
} from "../../../../../../interfaces/interfaces"
import OnPremisePanel from "./components/onPremisePanel/OnPremisePanel"
import CrevronDownSVG from "../../../../../../images/icons/ChevronDownSVG"
import ChevronUpSVG from "../../../../../../images/icons/ChevronUpSVG"
import * as styles from "./pricingInfo.module.scss"
import Button from "../../generic/button/Button"
import SegmentedButtons from "../../generic/segmentedButtons/components/SegmentedButtons"
import PricingCard from "../../shared/PricingCard/PricingCard"

export type ISectionProps = {
  switchLabel?: string
  index: number
  categories: {
    attributes: {
      id?: string
      label: string
      title: string
      description: string
      cta: ButtonModel
    }
  }[]
  segmentedButtons: {
    attributes: {
      button: ButtonModel
    }
  }[]

  licenses: IProductModel[]
  infoToggles?: any
  tier_tables?: any
  tiersDetail: IProductModel[]
  subOptionClickedID?: string
  showSwitch?: boolean
  pricing?: any
  titleFeaturesTableMobile?: string
  showAllFeaturesText?: string
  hideAllFeaturesText?: string
}

const PricingInfo: React.FC<ISectionProps> = props => {
  const {
    switchLabel,
    index,
    categories,
    segmentedButtons,
    licenses,
    infoToggles,
    tier_tables,
    tiersDetail,
    subOptionClickedID,
    showSwitch,
    pricing,
    titleFeaturesTableMobile,
    showAllFeaturesText,
    hideAllFeaturesText,
  } = props
  const [switchPeriodValue, setmonthlyChecked] = React.useState("month")
  const [showAllFeatures, setShowAllFeatures] = React.useState(false)
  const [selectedLicense, setSelectedLicense] = React.useState(0)

  const selectPeriod = (period: string) => {
    setmonthlyChecked(period)
  }

  const switchButton = {
    options: [
      { text: "", value: "month" },
      { text: "", value: "year" },
    ],
    function: selectPeriod,
  }

  const pricingData = pricing?.data?.attributes?.pricingInfo

  const [openItem, setOpenItem] = React.useState<number>(1)
  let typeCategories: HTMLElement | null
  let allFeatures: HTMLVideoElement | null | undefined

  React.useEffect(() => {
    typeCategories = document && document?.getElementById("cloud")
  })

  React.useEffect(() => {
    setAllfeaturesComponent()
    allFeatures &&
      subOptionClickedID === "gatacaStudioFeatures" &&
      (window?.setTimeout(() => {
        window?.scrollTo({ top: 0 })
        setShowAllFeatures(true)
      }, 10),
      setTimeout(() => {
        scrollToAllFeatures()
      }, 100))
  }, [subOptionClickedID])

  const setAllfeaturesComponent = () => {
    allFeatures = document
      ? (document?.getElementById("allFeatures") as HTMLVideoElement)
      : undefined
  }

  const scrollToAllFeatures = () => {
    allFeatures?.scrollIntoView()
  }

  const scrollIntoView = (el: any) => {
    typeCategories
      ? typeCategories.scroll({
          behavior: "smooth",
          left: el.offsetLeft,
        })
      : null
  }

  return (
    <>
      <div
        id={"gatacaStudioFeatures"}
        className={`${styles?.pricingInfo} ${cx("containerMaxWidth")}`}
      >
        <div className={styles?.pricingInfo__header}>
          <div className={styles?.categories}>
            {segmentedButtons?.map((item: any, index) => {
              const { button } = item.attributes
              return (
                <SegmentedButtons
                  id={"categories__" + index}
                  key={"categoriesP__" + index}
                  index={index + 1}
                  label={button?.label}
                  color={button?.color}
                  size={button?.size}
                  noPaddingText={button?.noPaddingText}
                  disabled={button?.disabled}
                  selected={openItem === index + 1}
                  showItem={index => {
                    const element =
                      document &&
                      document?.getElementById("listCategory__" + (index - 1))
                    setOpenItem(index), element && scrollIntoView(element)
                  }}
                />
              )
            })}
          </div>
        </div>
        <div id="cloud" className={styles?.pricingInfo__sectors}>
          {openItem === 1 ? (
            <>
              {showSwitch ? (
                <div className={styles?.switchButtonContainer}>
                  <SwitchButton
                    rightLabel={switchLabel}
                    checkedValue={switchPeriodValue}
                    options={switchButton.options}
                    onChangeSwitchSelect={switchButton.function}
                  />
                </div>
              ) : null}
              <div
                className={styles?.pricingInfo__sectors__cardsContainer}
                id={"allLicensesFeatures"}
              >
                {pricing?.data?.attributes?.pricingInfo?.map(
                  (el: any, index: number) => {
                    const { button } = el

                    el.button
                      ? (el.button.action = () =>
                          window.open(button?.url, "_blank"))
                      : null

                    return (
                      <PricingCard
                        key={`pricingCard__` + index}
                        {...el}
                        period={switchPeriodValue}
                      />
                    )
                  }
                )}
              </div>
              <div id={"allFeatures"}></div>
              {showAllFeatures && licenses && pricingData && (
                <div>
                  <LicensesTable
                    tier_tables={tier_tables}
                    pricing={pricingData}
                    switchPeriodValue={switchPeriodValue}
                    tiers={tiersDetail}
                  />
                  <LicensesTableMobile
                    licenseIndex={selectedLicense}
                    license={licenses[selectedLicense]}
                    switchPeriodValue={switchPeriodValue}
                    infoToggles={infoToggles}
                    selectLicense={setSelectedLicense}
                    tier_tables={tier_tables}
                    tiers={tiersDetail}
                    pricing={pricingData}
                    pricingSelected={pricingData[selectedLicense]}
                    titleFeaturesTableMobile={titleFeaturesTableMobile}
                  />
                </div>
              )}
              <Button
                label={
                  showAllFeatures ? hideAllFeaturesText : showAllFeaturesText
                }
                IconComponent={
                  showAllFeatures ? <ChevronUpSVG /> : <CrevronDownSVG />
                }
                style={"outline"}
                className={`${cx("marginTop32")} ${styles?.allFeaturesButton}`}
                action={() => {
                  setShowAllFeatures(!showAllFeatures),
                    setSelectedLicense(0),
                    document
                      ?.getElementById("allFeatures")
                      ?.scrollIntoView({ behavior: "smooth" })
                }}
              />
            </>
          ) : (
            <>
              <OnPremisePanel
                panelTitle={categories[1]?.attributes?.title}
                description={categories[1]?.attributes?.description}
                button={categories[1]?.attributes?.cta}
              />
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default PricingInfo
