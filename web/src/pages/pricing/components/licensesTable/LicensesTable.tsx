import React from "react"
import cx from "classnames"
import PurpleButton from "../../../../components/atoms/buttons/purple/PurpleButton"
import Tag from "../../../../components/atoms/tags/Tag"
import QuantityDataCell from "./elements/cells/quantityDataCell/QuantityDataCell"
import ListDataCell from "./elements/cells/listDataCell/ListDataCell"
import SubcategoryCell from "./elements/cells/subcategoryCell/SubcategoryCell"
import IconDataCell from "./elements/cells/iconDataCell/IconDataCell"
import CategoryCell from "./elements/cells/category/CategoryCell"
import {
  IProductModel,
  InfoTogglesPricingModel,
} from "../../../../interfaces/interfaces"
import * as styles from "./licensesTable.module.scss"
import { images } from "../../../../images/images"

type ILicensesTableProps = {
  products: any[]
  switchPeriodValue: string
  infoToggles: InfoTogglesPricingModel
}

const LicensesTable: React.FC<ILicensesTableProps> = props => {
  const { products, switchPeriodValue, infoToggles } = props

  const getPrice = (item: any) => {
    return switchPeriodValue === "year" ? item?.yearlyPrice : item?.monthlyPrice
  }

  return (
    <>
      <div className={styles?.tableContainer}>
        <table>
          <thead className={styles?.table__header__container}>
            <tr className={styles?.table__header} id={"featuresTableDesk"}>
              <th colSpan={2}></th>

              {products?.map(license => {
                return (
                  <th
                    key={"headerT__" + license?.type}
                    className={styles?.table__header__cell}
                  >
                    <div className={styles?.table__header__cell__content}>
                      <div className={styles?.license__header}>
                        <p
                          className={`${styles?.licenseName} ${cx(
                            "bodyBoldMD"
                          )}`}
                        >
                          {license?.type}
                        </p>
                        {license?.type === "Professional" && (
                          <Tag
                            label={"Popular"}
                            className={styles?.license__header__popularTag}
                          />
                        )}
                      </div>
                      <div>
                        {!license?.name
                          ?.toLowerCase()
                          ?.includes("enterprise") ? (
                          <>
                            <p
                              className={`${styles?.licensePrice} ${
                                switchPeriodValue !== "year"
                                  ? styles?.licensePriceLarge
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
                                    )} ${styles?.licenseSave}`}
                                  >
                                    {license?.subPriceMonthLabel}
                                  </span>
                                )
                              : license?.subPriceYearLabel && (
                                  <span
                                    className={`${cx(
                                      "neutral700 bodyRegularXS marginTop2"
                                    )} ${styles?.licenseSave}`}
                                  >
                                    {license?.subPriceYearLabel}
                                  </span>
                                )}
                          </>
                        ) : (
                          <>
                            <p
                              className={`${styles?.licenseCustomPrice} ${cx(
                                "heading5"
                              )}`}
                            >
                              {getPrice(license)}
                            </p>
                          </>
                        )}
                        <PurpleButton
                          className={styles?.license__button}
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
          <tbody className={styles?.table__body}>
            <tr key={0} className={styles?.table__body__row}></tr>
            <tr key={1} className={styles?.table__body__row}>
              <CategoryCell category={"Verification Features"} rowsPan={2} />
              <SubcategoryCell
                subcategory={"Verification Templates"}
                information={infoToggles?.verificationTemplate}
              />
              {products?.map(license => {
                return (
                  <QuantityDataCell
                    key={"VT__" + license?.type}
                    data={license?.features?.verificationTemplates}
                  />
                )
              })}
            </tr>
            <tr key={2} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={"Active Users p/m"}
                information={infoToggles?.activeUser}
              />
              {products?.map(license => {
                return (
                  <QuantityDataCell
                    key={"AU__" + license?.type}
                    data={license?.features?.activeUsers}
                  />
                )
              })}
            </tr>
            <tr key={3} className={styles?.table__body__row}>
              <CategoryCell category={"Issuance Features"} rowsPan={2} />
              <SubcategoryCell
                subcategory={"Issuance Templates"}
                information={infoToggles?.issuanceTemplate}
              />
              {products?.map(license => {
                return (
                  <QuantityDataCell
                    key={"IT__" + license?.type}
                    data={license?.features?.issuanceTemplates}
                  />
                )
              })}
            </tr>
            <tr key={4} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={"Issued Credentials p/m"}
                information={infoToggles?.issuedCredential}
              />
              {products?.map((license: IProductModel) => {
                return (
                  <QuantityDataCell
                    key={"IC__" + license?.type}
                    data={license?.features?.issuedCredentials}
                  />
                )
              })}
            </tr>
            <tr key={5} className={styles?.table__body__row}>
              <CategoryCell category={"Other Features"} rowsPan={25} />
              <SubcategoryCell subcategory={"DIDs"} />
              {products?.map(license => {
                return (
                  <QuantityDataCell
                    key={"DIDS__" + license?.type}
                    data={license?.features?.dids}
                  />
                )
              })}
            </tr>
            <tr key={6} className={styles?.table__body__row}>
              <SubcategoryCell subcategory={"API Keys"} />
              {products?.map(license => {
                return (
                  <QuantityDataCell
                    key={"AK__" + license?.type}
                    data={license?.features?.apiKeys}
                  />
                )
              })}
            </tr>
            <tr key={7} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={"2FA Security Mechanism"}
                information={infoToggles?.securityFactorMechanism}
              />
              {products?.map(license => {
                return (
                  <ListDataCell
                    key={"2FM__" + license?.type}
                    data={license?.features?.nFactor}
                  />
                )
              })}
            </tr>
            <tr key={8} className={styles?.table__body__row}>
              <SubcategoryCell subcategory={"Notifications"} />
              {products?.map(license => {
                return (
                  <ListDataCell
                    key={"NOT__" + license?.type}
                    data={license?.features?.notifications}
                  />
                )
              })}
            </tr>
            <tr key={9} className={styles?.table__body__row}>
              <SubcategoryCell subcategory={"Usage Statistics"} />
              {products?.map(license => {
                return (
                  <IconDataCell
                    key={"US__" + license?.type}
                    data={license?.features?.stadistics}
                  />
                )
              })}
            </tr>
            <tr key={10} className={styles?.table__body__row}>
              <SubcategoryCell subcategory={"Credentials in W3C VC format"} />
              {products?.map(license => {
                return (
                  <IconDataCell
                    key={"CW3C__" + license?.type}
                    data={license?.features?.credentialsInW3CFormat}
                  />
                )
              })}
            </tr>
            <tr key={11} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={"Sandbox environment"}
                information={infoToggles?.sandboxEnvironment}
              />
              {products?.map(license => {
                return (
                  <IconDataCell
                    key={"SE__" + license?.type}
                    data={license?.features?.sandBoxEnvironment}
                  />
                )
              })}
            </tr>
            <tr key={12} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={"DID in Public Catalogue"}
                information={infoToggles?.didInPublicCatalogue}
              />
              {products?.map(license => {
                return (
                  <IconDataCell
                    key={"DPC__" + license?.type}
                    data={license?.features?.didPublicCatalogue}
                  />
                )
              })}
            </tr>
            <tr key={13} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={"Publish Schemas in Public Catalogue"}
                information={infoToggles?.schemaInPublicCatalogue}
              />
              {products?.map(license => {
                return (
                  <IconDataCell
                    key={"PSPC__" + license?.type}
                    data={license?.features?.newSchemaPublicCatalogue}
                  />
                )
              })}
            </tr>
            <tr key={14} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={"EBSI integration"}
                information={infoToggles?.ebsiIntegration}
              />
              {products?.map(license => {
                return (
                  <IconDataCell
                    key={"EBSII__" + license?.type}
                    data={license?.features?.ebsiIntegration}
                  />
                )
              })}
            </tr>
            <tr key={15} className={styles?.table__body__row}>
              <SubcategoryCell subcategory={"Customization of GDPR purposes"} />

              {products?.map(license => {
                return (
                  <IconDataCell
                    key={"GDPRC__" + license?.type}
                    data={license?.features?.customGDPRPurposes}
                  />
                )
              })}
            </tr>
            <tr key={16} className={styles?.table__body__row}>
              <SubcategoryCell subcategory={"Custom QR"} />

              {products?.map(license => {
                return (
                  <IconDataCell
                    key={"CQR__" + license?.type}
                    data={license?.features?.customQR}
                  />
                )
              })}
            </tr>
            <tr key={17} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={"Credentials in ISO 18013:5 format"}
              />
              {products?.map(license => {
                return (
                  <IconDataCell
                    key={"CIF__" + license?.type}
                    data={license?.features?.credentialsInISO28013}
                  />
                )
              })}
            </tr>
            <tr key={18} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={"Integration with custom trust Frameworks"}
                information={infoToggles?.integrationCustomFrameworks}
              />
              {products?.map(license => {
                return (
                  <IconDataCell
                    key={"ICF__" + license?.type}
                    data={license?.features?.integrationCustomTrustFrameworks}
                  />
                )
              })}
            </tr>
            <tr key={20} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={"Integration with custom infrastructure"}
                information={infoToggles?.integrationCustomInfraestructure}
              />
              {products?.map(license => {
                return (
                  <IconDataCell
                    key={"ICI__" + license?.type}
                    data={
                      license?.features?.integrationCustomTrustInfraestructure
                    }
                  />
                )
              })}
            </tr>
            <tr key={21} className={styles?.table__body__row}>
              <SubcategoryCell subcategory={"Standard Support"} />
              {products?.map(license => {
                return (
                  <td
                    key={"SSPT__" + license?.type}
                    className={`${cx("bodyBoldSM")}`}
                  >
                    {typeof license?.features?.standardSupport == "boolean" ? (
                      <img
                        className={styles?.table__body__row__cell__icon}
                        src={
                          license?.features?.standardSupport
                            ? images.checkIcon
                            : images.closeIcon
                        }
                      ></img>
                    ) : (
                      <p>
                        ${" "}
                        <span className={`${cx("bodyRegularCap neutral700")}`}>
                          {license?.features?.standardSupport}
                        </span>
                      </p>
                    )}
                  </td>
                )
              })}
            </tr>
            <tr key={22} className={styles?.table__body__row}>
              <SubcategoryCell subcategory={"Premier Support"} />
              {products?.map(license => {
                return (
                  <>
                    <td
                      key={"PSPT__" + license?.type}
                      className={`${cx("bodyBoldSM")}`}
                    >
                      {typeof license?.features?.premierSupport == "boolean" ? (
                        <img
                          className={styles?.table__body__row__cell__icon}
                          src={
                            license?.features?.premierSupport
                              ? images.checkIcon
                              : images.closeIcon
                          }
                        ></img>
                      ) : (
                        <p>
                          ${" "}
                          <span
                            className={`${cx("bodyRegularCap neutral700")}`}
                          >
                            {license?.features?.premierSupport}
                          </span>
                        </p>
                      )}
                    </td>
                  </>
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
