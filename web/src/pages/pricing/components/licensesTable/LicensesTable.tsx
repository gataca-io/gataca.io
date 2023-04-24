import React from "react"
import cx from "classnames"
import PurpleButton from "../../../../components/atoms/buttons/purple/PurpleButton"
import Tag from "../../../../components/atoms/tags/Tag"
import CategoryCell from "./elements/cells/category/CategoryCell"
import SubcategoryCell from "./elements/cells/subcategoryCell/SubcategoryCell"
import IconDataCell from "./elements/cells/iconDataCell/IconDataCell"
import QuantityDataCell from "./elements/cells/quantityDataCell/QuantityDataCell"
import ListDataCell from "./elements/cells/listDataCell/ListDataCell"
import * as styles from "./licensesTable.module.scss"
import { images } from "../../../../images/images"
import { InfoTogglesPricingModel } from "../../../../interfaces/interfaces"

type ILicensesTableProps = {
  products: any[]
  switchPeriodValue: string
  infoToggles: InfoTogglesPricingModel
  licenseIsEnterprise: (x: any) => boolean
}

const LicensesTable: React.FC<ILicensesTableProps> = props => {
  const { products, switchPeriodValue, infoToggles, licenseIsEnterprise } =
    props

  const getPrice = (item: any) => {
    return switchPeriodValue === "year" ? item.yearlyPrice : item.monthlyPrice
  }

  return (
    <>
      <div className={styles.tableContainer}>
        <table>
          <thead className={styles.table__header__container}>
            <tr className={styles.table__header} id={"featuresTableDesk"}>
              <th colSpan={2}></th>

              {products?.map((license, index) => {
                return (
                  <th className={styles.table__header__cell}>
                    <div className={styles.table__header__cell__content}>
                      <div>
                        <p
                          className={`${styles.licenseName} ${cx(
                            "bodyBoldMD"
                          )}`}
                        >
                          {license?.type}
                        </p>
                        {license?.type === "Professional" && (
                          <Tag
                            label={"Popular"}
                            className={styles.license__header__popularTag}
                          />
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
                              } ${cx("heading4")}`}
                            >
                              <span>{getPrice(license)}€</span>
                              {" /"}
                              &nbsp;
                              {switchPeriodValue}
                            </p>
                            {switchPeriodValue === "month"
                              ? license?.subPriceMonthLabel && (
                                  <span
                                    className={`${cx(
                                      "neutral700 bodyRegularXS marginTop2"
                                    )} ${styles.licenseSave}`}
                                  >
                                    {license?.subPriceMonthLabel}
                                  </span>
                                )
                              : license?.subPriceYearLabel && (
                                  <span
                                    className={`${cx(
                                      "neutral700 bodyRegularXS marginTop2"
                                    )} ${styles.licenseSave}`}
                                  >
                                    {license?.subPriceYearLabel}
                                  </span>
                                )}
                          </>
                        ) : (
                          <>
                            <p
                              className={`${styles.licenseCustomPrice} ${cx(
                                "heading5"
                              )}`}
                            >
                              {getPrice(license)}
                            </p>
                          </>
                        )}
                        <PurpleButton
                          className={styles.license__button}
                          label={license?.button?.label}
                          action={() =>
                            window?.open(
                              license?.button?.url,
                              license?.button?.outsideWeb ? "_blank" : "_self"
                            )
                          }
                        />
                      </div>
                    </div>
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody className={styles.table__body}>
            <tr key={"row_0"} className={styles.table__body__row}>
              <td></td>
            </tr>
            <tr key={"row_1"} className={styles.table__body__row}>
              <CategoryCell category={"Verification Features"} rowsPan={2} />
              <SubcategoryCell
                subcategory={"Verification Templates"}
                information={infoToggles.verificationTemplate}
              />
              {products?.map((license, index) => {
                return (
                  <QuantityDataCell
                    key={"license1" + license + index}
                    data={license.features?.verificationTemplates}
                  />
                )
              })}
            </tr>
            <tr key={"row_2"} className={styles.table__body__row}>
              <SubcategoryCell
                subcategory={"Active Users p/m"}
                information={infoToggles.activeUser}
              />
              {products?.map((license, index) => {
                return (
                  <QuantityDataCell
                    key={"license2" + license + index}
                    data={license.features?.activeUsers}
                  />
                )
              })}
            </tr>
            <tr key={"row_3"} className={styles.table__body__row}>
              <CategoryCell category={"Issuance Features"} rowsPan={2} />
              <SubcategoryCell
                subcategory={"Issuance Templates"}
                information={infoToggles.issuanceTemplate}
              />
              {products?.map((license, index) => {
                return (
                  <QuantityDataCell
                    key={"license3" + license + index}
                    data={license.features?.issuanceTemplates}
                  />
                )
              })}
            </tr>
            <tr key={"row_4"} className={styles.table__body__row}>
              <SubcategoryCell
                subcategory={"Issued Credentials p/m"}
                information={infoToggles.issuedCredential}
              />
              {products?.map((license, index) => {
                return (
                  <QuantityDataCell
                    key={"license4" + license + index}
                    data={license.features?.issuedCredentials}
                  />
                )
              })}
            </tr>
            <tr key={"row_5"} className={styles.table__body__row}>
              <CategoryCell category={"Other Features"} rowsPan={25} />
              <SubcategoryCell subcategory={"DIDs"} />
              {products?.map((license, index) => {
                return (
                  <QuantityDataCell
                    key={"license5" + license + index}
                    data={license.features?.dids}
                  />
                )
              })}
            </tr>
            <tr key={"row_6"} className={styles.table__body__row}>
              <SubcategoryCell subcategory={"API Keys"} />
              {products?.map((license, index) => {
                return (
                  <QuantityDataCell
                    key={"license6" + license + index}
                    data={license.features?.apiKeys}
                  />
                )
              })}
            </tr>
            <tr key={"row_7"} className={styles.table__body__row}>
              <SubcategoryCell
                subcategory={"2FA Security Mechanism"}
                information={infoToggles.securityFactorMechanism}
              />
              {products?.map((license, index) => {
                return (
                  <ListDataCell
                    key={"license7" + license + index}
                    data={license.features?.nFactor}
                  />
                )
              })}
            </tr>
            <tr key={"row_8"} className={styles.table__body__row}>
              <SubcategoryCell subcategory={"Notifications"} />
              {products?.map((license, index) => {
                return (
                  <ListDataCell
                    key={"license8" + license + index}
                    data={license.features?.notifications}
                  />
                )
              })}
            </tr>
            <tr key={"row_9"} className={styles.table__body__row}>
              <SubcategoryCell subcategory={"Usage Statistics"} />
              {products?.map((license, index) => {
                return (
                  <IconDataCell
                    key={"license9" + license + index}
                    data={license.features?.stadistics}
                  />
                )
              })}
            </tr>
            <tr key={"row_10"} className={styles.table__body__row}>
              <SubcategoryCell subcategory={"Credentials in W3C VC format"} />
              {products?.map((license, index) => {
                return (
                  <IconDataCell
                    key={"license10" + license + index}
                    data={license?.credentialsInW3CFormat}
                  />
                )
              })}
            </tr>
            <tr key={"row_11"} className={styles.table__body__row}>
              <SubcategoryCell
                subcategory={"Sandbox environment"}
                information={infoToggles.sandboxEnvironment}
              />
              {products?.map((license, index) => {
                return (
                  <IconDataCell
                    key={"license11" + license + index}
                    data={license.features?.sandBoxEnvironment}
                  />
                )
              })}
            </tr>
            <tr key={"row_12"} className={styles.table__body__row}>
              <SubcategoryCell
                subcategory={"DID in Public Catalogue"}
                information={infoToggles.didInPublicCatalogue}
              />
              {products?.map((license, index) => {
                return (
                  <IconDataCell
                    key={"license12" + license + index}
                    data={license.features?.didPublicCatalogue}
                  />
                )
              })}
            </tr>
            <tr key={"row_13"} className={styles.table__body__row}>
              <SubcategoryCell
                subcategory={"Publish Schemas in Public Catalogue"}
                information={infoToggles.schemaInPublicCatalogue}
              />
              {products?.map((license, index) => {
                return (
                  <IconDataCell
                    key={"license13" + license + index}
                    data={license.features?.newSchemaPublicCatalogue}
                  />
                )
              })}
            </tr>
            <tr key={"row_14"} className={styles.table__body__row}>
              <SubcategoryCell
                subcategory={"EBSI integration"}
                information={infoToggles.ebsiIntegration}
              />
              {products?.map((license, index) => {
                return (
                  <IconDataCell
                    key={"license14" + license + index}
                    data={license.features?.ebsiIntegration}
                  />
                )
              })}
            </tr>
            <tr key={"row_15"} className={styles.table__body__row}>
              <SubcategoryCell subcategory={"Customization of GDPR purposes"} />

              {products?.map((license, index) => {
                return (
                  <IconDataCell
                    key={"license15" + license + index}
                    data={license.features?.customGDPRPurposes}
                  />
                )
              })}
            </tr>
            <tr key={"row_16"} className={styles.table__body__row}>
              <SubcategoryCell subcategory={"Custom QR"} />

              {products?.map((license, index) => {
                return (
                  <IconDataCell
                    key={"license16" + license + index}
                    data={license.features?.customQR}
                  />
                )
              })}
            </tr>
            <tr key={"row_17"} className={styles.table__body__row}>
              <SubcategoryCell
                subcategory={"Credentials in ISO 18013:5 format"}
              />
              {products?.map((license, index) => {
                return (
                  <IconDataCell
                    key={"license17" + license + index}
                    data={license.features?.credentialsInISO28013}
                  />
                )
              })}
            </tr>
            <tr key={"row_18"} className={styles.table__body__row}>
              <SubcategoryCell
                subcategory={"Integration with custom trust Frameworks"}
                information={infoToggles.integrationCustomFrameworks}
              />
              {products?.map((license, index) => {
                return (
                  <IconDataCell
                    key={"license18" + license + index}
                    data={license.features?.integrationCustomTrustFrameworks}
                  />
                )
              })}
            </tr>
            <tr key={"row_19"} className={styles.table__body__row}>
              <SubcategoryCell
                subcategory={"Integration with custom infrastructure"}
                information={infoToggles.integrationCustomInfraestructure}
              />
              {products?.map((license, index) => {
                return (
                  <IconDataCell
                    key={"license19" + license + index}
                    data={
                      license.features?.integrationCustomTrustInfraestructure
                    }
                  />
                )
              })}
            </tr>
            <tr key={"row_20"} className={styles.table__body__row}>
              <SubcategoryCell subcategory={"Stadard Support"} />
              {products?.map((license, index) => {
                return (
                  <td
                    key={"license20" + license + index}
                    className={`${cx("bodyBoldSM")}`}
                  >
                    {typeof license.features?.standardSupport == "boolean" ? (
                      <img
                        className={styles.table__body__row__cell__icon}
                        src={
                          license.features?.standardSupport
                            ? images.checkIcon
                            : images.closeIcon
                        }
                      ></img>
                    ) : (
                      <p>
                        ${" "}
                        <span className={`${cx("bodyRegularCap neutral700")}`}>
                          {license.features?.standardSupport}
                        </span>
                      </p>
                    )}
                  </td>
                )
              })}
            </tr>
            <tr key={"row_21"} className={styles.table__body__row}>
              <SubcategoryCell subcategory={"Premier Support"} />
              {products?.map((license, index) => {
                return (
                  <td
                    key={"license" + license + index}
                    className={`${cx("bodyBoldSM")}`}
                  >
                    {typeof license.features?.premierSupport == "boolean" ? (
                      <img
                        className={styles.table__body__row__cell__icon}
                        src={
                          license.features?.premierSupport
                            ? images.checkIcon
                            : images.closeIcon
                        }
                      ></img>
                    ) : (
                      <p>
                        ${" "}
                        <span className={`${cx("bodyRegularCap neutral700")}`}>
                          {license.features?.premierSupport}
                        </span>
                      </p>
                    )}
                  </td>
                )
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default LicensesTable
