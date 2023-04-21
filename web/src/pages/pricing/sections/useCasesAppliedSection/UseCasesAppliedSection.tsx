import * as React from "react"
import cx from "classnames"
import * as styles from "./useCasesAppliedSection.module.scss"
import CategorySectors from "../../components/categorySectors/CategorySectors"
import Categories from "./elements/Categories"
import LicenseCard from "../../../../components/templates/cards/licenseCard/LicenseCard"
import SwitchButton from "../../../../components/atoms/buttons/switchButton/SwicthButton"
import LicensesTable from "./elements/licensesTable/LicensesTable"
import PurpleButton from "../../../../components/atoms/buttons/purple/PurpleButton"
import OnPremisePanel from "./elements/onPremisePanel/OnPremisePanel"
import { ButtonModel, IProductModel } from "../../../../interfaces/interfaces"
import LicensesTableMobile from "./elements/licensesTableMobile/LicensesTableMobile"

export type ISectionProps = {
  title: string
  description: string
  index: number
  categories: {
    id: string
    title: string
  }[]
  onPremise: {
    panelTitle: string
    paragraphs: string[]
    button: ButtonModel
  }
  licenses: IProductModel[]
}

const useCasesAppliedSection: React.FC<ISectionProps> = props => {
  const { title, description, index, categories, licenses, onPremise } = props
  const [switchPeriodValue, setmonthlyChecked] = React.useState("month")
  const [showAllFeatures, setShowAllFeatures] = React.useState(false)
  const [selectedLicense, setSelectedLicense] = React.useState(0)

  const selectPeriod = (period: string) => {
    setmonthlyChecked(period)
  }

  const switchButton = {
    options: [
      { text: "", value: "month" },
      { text: "Pay Yearly (Save 10%)", value: "year" },
    ],
    function: selectPeriod,
  }
  const [openItem, setOpenItem] = React.useState<number>(1)
  let useCasesCategories: HTMLElement | null

  React.useEffect(() => {
    useCasesCategories =
      document && document?.getElementById("useCasesAppliedSectors")
  })

  const scrollIntoView = (el: any) => {
    useCasesCategories
      ? useCasesCategories.scroll({
          behavior: "smooth",
          left: el.offsetLeft,
        })
      : null
  }

  const licenseIsEnterprise = (license: IProductModel) =>
    license?.name?.toLowerCase()?.includes("enterprise")

  return (
    <>
      <section
        className={`${styles?.useCasesAppliedSection} ${cx(
          "containerMaxWidth"
        )}`}
      >
        <div className={styles?.useCasesAppliedSection__header}>
          <h1 className={cx("heading1 marginBottom32")}>{title}</h1>
          <p className={cx("bodyRegularXL marginBottom32")}>{description}</p>
          <div className={styles?.categories}>
            {categories?.map((item, index) => {
              const { title } = item
              return (
                <Categories
                  id={"categories__" + index}
                  key={"categories__" + index}
                  index={index + 1}
                  title={title}
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
        <div
          id="useCasesAppliedSectors"
          className={styles?.useCasesAppliedSection__sectors}
        >
          {openItem === 1 ? (
            <>
              <div className={styles.switchButtonContainer}>
                <SwitchButton
                  rightLabel={"Pay Yearly (Save 10%)"}
                  checkedValue={switchPeriodValue}
                  options={switchButton.options}
                  onChangeSwitchSelect={switchButton.function}
                />
              </div>
              <div
                className={
                  styles?.useCasesAppliedSection__sectors__cardsContainer
                }
              >
                {licenses?.map((item: any, index) => {
                  return (
                    <>
                      <LicenseCard
                        license={item}
                        firstButton={item?.button}
                        period={switchPeriodValue}
                        isCurrentLicense={false}
                        isNewLicense={false}
                        popularLicenseType={"Professional"}
                      />
                    </>
                  )
                })}
              </div>

              {showAllFeatures && (
                <div id={"allFeatures"}>
                  <LicensesTable
                    switchButtonOptios={switchButton?.options}
                    products={licenses}
                    switchPeriodValue={switchPeriodValue}
                    selectPeriod={selectPeriod}
                    licenseIsEnterprise={licenseIsEnterprise}
                  />
                  <LicensesTableMobile
                    licenseIndex={selectedLicense}
                    license={licenses[selectedLicense]}
                    switchPeriodValue={switchPeriodValue}
                    selectLicense={setSelectedLicense}
                    licenseIsEnterprise={licenseIsEnterprise}
                  />
                </div>
              )}
              <PurpleButton
                label={
                  showAllFeatures ? "Hide all features" : "See all features"
                }
                outlined
                className={`${cx("marginTop32")} ${styles.allFeaturesButton}`}
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
            <OnPremisePanel
              panelTitle={onPremise?.panelTitle}
              paragraphs={onPremise?.paragraphs}
              button={onPremise?.button}
            />
          )}
        </div>
      </section>
    </>
  )
}

export default useCasesAppliedSection
