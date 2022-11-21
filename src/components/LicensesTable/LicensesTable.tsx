import React from "react" // we need this to make JSX compile
import { IPriceModel } from "../../interfaces/interfactes"
import DarkButton from "../buttons/DarkButton/DarkButton"
import SwitchButton from "../buttons/SwitchButton/SwicthButton"
import LicenseCard from "../LicenseCard/LicenseCard"
import styles from "./licensesTable.module.scss"

type ILicensesTableProps = {
  products: any[]
  switchPeriodValue: string
  switchButtonOptios: any
  licenseIsEnterprise: (x: any) => boolean
  selectPeriod: (x: any) => void
}

const LicensesTable: React.FC<ILicensesTableProps> = (props) => {
  const {
    products,
    switchPeriodValue,
    switchButtonOptios,
    selectPeriod,
    licenseIsEnterprise,
  } = props

  const getPrice = (prices: IPriceModel[]) => {
    const selectedPeriodPrice = prices?.filter((el) => {
      return el.recurringInterval === switchPeriodValue
    })[0]

    return selectedPeriodPrice?.amount ? selectedPeriodPrice?.amount / 100 : 0
  }

  return (
    <>
      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr className={styles.table__header}>
              <th colSpan={2}>
                <div className={styles.periodToggle}>
                  <input
                    checked={switchPeriodValue === "year"}
                    className={styles.periodCheckbox}
                    type="checkbox"
                    id="switch"
                  />
                  <label
                    onClick={(e) =>
                      selectPeriod(
                        switchPeriodValue === "month" ? "year" : "month"
                      )
                    }
                    className={styles.periodCheckboxLabel}
                  ></label>
                  <span>Pay Yearly</span>
                </div>
              </th>
              {products.map((license) => {
                return (
                  <th className={styles.table__header__cell}>
                    <div className={styles.table__header__cell__content}>
                      <div className={styles.license__header}>
                        <p className={styles.licenseName}>{license?.type}</p>
                        {license?.type === "Professional" && (
                          <div className={styles.license__header__popularTag}>
                            <p>Popular</p>
                          </div>
                        )}
                      </div>
                      <div>
                        {!licenseIsEnterprise(license) ? (
                          <>
                            <p
                              className={`${styles.licensePrice} ${
                                switchPeriodValue !== "year"
                                  ? styles.licensePriceLarge
                                  : ""
                              }`}
                            >
                              <span>{getPrice(license?.prices)}€</span>
                              {" /"}
                              &nbsp;
                              {switchPeriodValue}
                            </p>
                            {switchPeriodValue === "year" && (
                              <p className={styles.licenseSave}>Save 10%</p>
                            )}
                          </>
                        ) : (
                          <>
                            <p
                              className={`${styles.licenseCustomPrice} ${
                                switchPeriodValue === "year"
                                  ? styles.licenseCustomPriceLarge
                                  : ""
                              }`}
                            >
                              Custom Pricing
                            </p>
                            <p className={styles.licenseAdapted}>
                              A plan that adapts to your company's needs
                            </p>
                          </>
                        )}

                        <DarkButton
                          className={styles.billSummary__continue}
                          text={
                            licenseIsEnterprise(license)
                              ? "Contact Us"
                              : "Get Started"
                          }
                          functionality={() =>
                            !licenseIsEnterprise(license)
                              ? window?.open(
                                  "https://studio.gataca.io/login",
                                  "_blank"
                                )
                              : window?.open(
                                  "https://gataca.io/company/contact",
                                  "_blank"
                                )
                          }
                          disabled={false}
                        />
                      </div>
                    </div>
                  </th>
                )
              })}
            </tr>
          </thead>

          <tbody className={styles.table__body}>
            <tr key={1} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${styles.table__body__row__category}`}
                rowSpan={2}
              >
                Verification Features
              </td>
              <td
                className={`${styles.table__body__row__cell} ${styles.table__body__row__subcategory}`}
              >
                Verification Templates
              </td>
              {products?.map((license) => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${styles.table__body__row__data}`}
                    >
                      {license.features?.verificationTemplates === "∞"
                        ? "Unlimited"
                        : license.features?.verificationTemplates}
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={2} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${styles.table__body__row__subcategory}`}
              >
                Active Users p/m
              </td>
              {products?.map((license) => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${styles.table__body__row__data}`}
                    >
                      {license.features?.activeUsers === "∞"
                        ? "Unlimited"
                        : license.features?.activeUsers}
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={3} className={styles.table__body__row}>
              <td
                rowSpan={2}
                className={`${styles.table__body__row__cell} ${styles.table__body__row__category}`}
              >
                Issuance Features
              </td>
              <td
                className={`${styles.table__body__row__cell} ${styles.table__body__row__subcategory}`}
              >
                Issuance Templates
              </td>
              {products?.map((license) => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${styles.table__body__row__data}`}
                    >
                      {license.features?.issuanceTemplates === "∞"
                        ? "Unlimited"
                        : license.features?.issuanceTemplates}
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={4} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${styles.table__body__row__subcategory}`}
              >
                Issued Credentials p/m
              </td>
              {products?.map((license) => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${styles.table__body__row__data}`}
                    >
                      {license.features?.issuedCredentials === "∞"
                        ? "Unlimited"
                        : license.features?.issuedCredentials}
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={5} className={styles.table__body__row}>
              <td
                rowSpan={12}
                className={`${styles.table__body__row__cell} ${styles.table__body__row__category}`}
              >
                Other Features
              </td>
            </tr>
            <tr key={6} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${styles.table__body__row__subcategory}`}
              >
                DIDs
              </td>
              {products?.map((license) => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${styles.table__body__row__data}`}
                    >
                      {license.features?.dids === "∞"
                        ? "Unlimited"
                        : license.features?.dids}
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={7} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${styles.table__body__row__subcategory}`}
              >
                API Keys
              </td>
              {products?.map((license) => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${styles.table__body__row__data}`}
                    >
                      {license.features?.apiKeys === "∞"
                        ? "Unlimited"
                        : license.features?.apiKeys}
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={8} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${styles.table__body__row__subcategory}`}
              >
                N-factor mechanisms
              </td>
              {products?.map((license) => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${styles.table__body__row__data}`}
                    >
                      {license.features?.nFactor?.join(", ")}
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={9} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${styles.table__body__row__subcategory}`}
              >
                Notifications
              </td>
              {products?.map((license) => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${styles.table__body__row__data}`}
                    >
                      {license.features?.notifications?.join(", ")}
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={10} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${styles.table__body__row__subcategory}`}
              >
                Stadistics
              </td>
              {products?.map((license) => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${styles.table__body__row__data}`}
                    >
                      {license.features?.stadistics ? "✓" : ""}
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={11} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${styles.table__body__row__subcategory}`}
              >
                DID in Public Catalogue
              </td>
              {products?.map((license) => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${styles.table__body__row__data}`}
                    >
                      {license.features?.didPublicCatalogue
                        ? "✓"
                        : "✗ " + "Only Private Catalogue"}
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={12} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${styles.table__body__row__subcategory}`}
              >
                New Schemas in Public Catalogue
              </td>
              {products?.map((license) => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${styles.table__body__row__data}`}
                    >
                      {license.features?.newSchemaPublicCatalogue}
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={13} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${styles.table__body__row__subcategory}`}
              >
                Custom QR
              </td>
              {products?.map((license) => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${styles.table__body__row__data}`}
                    >
                      {license.features?.customQR}
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={14} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${styles.table__body__row__subcategory}`}
              >
                Support
              </td>
              {products?.map((license) => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${styles.table__body__row__data}`}
                    >
                      {license.features?.support}
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={15} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${styles.table__body__row__subcategory}`}
              >
                SLAs
              </td>
              {products?.map((license) => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${styles.table__body__row__data}`}
                    >
                      {license.features?.slas ? "✓" : ""}
                    </td>
                  </>
                )
              })}
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.mobileCardsContainer}>
        <SwitchButton
          checkedValue={switchPeriodValue}
          options={switchButtonOptios}
          onChangeSwitchSelect={selectPeriod}
        />
        {products?.map((product) => {
          return (
            <LicenseCard
              license={product}
              firstButton={{
                label: "Get Started",
              }}
              period={switchPeriodValue}
              popularLicenseType={"Professional"}
              isNewLicense={false}
              showAllDetails
            />
          )
        })}
      </div>
    </>
  )
}

export default LicensesTable
