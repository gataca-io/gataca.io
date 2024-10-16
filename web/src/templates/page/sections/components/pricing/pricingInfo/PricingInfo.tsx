import * as React from "react"
import cx from "classnames"
import LicenseCard from "./components/licenseCard/LicenseCard"
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
import SegmentedButtonsContainer from "../../generic/segmentedButtons/SegmentedButtonsContainer"
import SegmentedButtons from "../../generic/segmentedButtons/components/SegmentedButtons"

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
      <section
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
              <div className={styles?.switchButtonContainer}>
                <SwitchButton
                  rightLabel={switchLabel}
                  checkedValue={switchPeriodValue}
                  options={switchButton.options}
                  onChangeSwitchSelect={switchButton.function}
                />
              </div>
              <div
                className={styles?.pricingInfo__sectors__cardsContainer}
                id={"allLicensesFeatures"}
              >
                {licenses?.map((item: any, index) => {
                  return (
                    <LicenseCard
                      key={"licenseP__" + item?.attributes.type + index}
                      license={item?.attributes}
                      period={switchPeriodValue}
                      isCurrentLicense={false}
                    />
                  )
                })}
              </div>
              <div id={"allFeatures"}></div>
              {showAllFeatures && licenses && (
                <div>
                  <LicensesTable
                    tier_tables={tier_tables}
                    products={licenses}
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
                  />
                </div>
              )}
              <Button
                label={
                  showAllFeatures ? "Hide all features" : "See all features"
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
                      ?.scrollIntoView(true)
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
      </section>
    </>
  )
}

export default PricingInfo
