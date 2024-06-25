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
  products: IProductModel[]
  switchPeriodValue: string
  infoToggles: InfoTogglesPricingModel
}

const LicensesTable: React.FC<ILicensesTableProps> = props => {
  const { products, switchPeriodValue, infoToggles } = props

  const getPrice = (item: any) => {
    if(switchPeriodValue === "year") {
      return (item?.yearlyPrice == undefined || item?.yearlyPrice < 0) ? 'Custom pricing' : new Intl.NumberFormat('en-DE').format(item?.yearlyPrice);
    } else {
      return (item?.monthlyPrice == undefined || item?.monthlyPrice < 0) ? 'Custom pricing' : new Intl.NumberFormat('en-DE').format(item?.monthlyPrice);
    }
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
                    key={"headerT__" + license?.attributes.type}
                    className={styles?.table__header__cell}
                  >
                    <div className={styles?.table__header__cell__content}>
                      <div className={styles?.license__header}>
                        <p
                          className={`${styles?.licenseName} ${cx(
                            "bodyBoldMD"
                          )}`}
                        >
                          {license?.attributes.type}
                        </p>
                        {license?.attributes.type === "Professional" && (
                          <Tag
                            label={"Popular"}
                            className={styles?.license__header__popularTag}
                          />
                        )}
                      </div>
                      <div>
                        {!license?.attributes.name
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
                              <span>{getPrice(license?.attributes)}€</span>
                              {" /"}
                              &nbsp;
                              {switchPeriodValue}
                            </p>
                            {switchPeriodValue === "month"
                              ? license?.attributes.subPriceMonthLabel && (
                                  <span
                                    className={`${cx(
                                      "neutral700 bodyRegularXS marginTop2"
                                    )} ${styles?.licenseSave}`}
                                  >
                                    {license?.attributes.subPriceMonthLabel}
                                  </span>
                                )
                              : license?.attributes.subPriceYearLabel && (
                                  <span
                                    className={`${cx(
                                      "neutral700 bodyRegularXS marginTop2"
                                    )} ${styles?.licenseSave}`}
                                  >
                                    {license?.attributes.subPriceYearLabel}
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
                          label={license?.attributes.button?.label}
                          action={() =>
                            window?.open(
                              license?.attributes.button?.url,
                              license?.attributes.button?.outsideWeb ? "_blank" : "_self"
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
                    key={"VT__" + license?.attributes.type}
                    data={license?.attributes.features?.verificationTemplates}
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
                    key={"AU__" + license?.attributes.type}
                    data={license?.attributes.features?.activeUsers}
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
                    key={"IT__" + license?.attributes.type}
                    data={license?.attributes.features?.issuanceTemplates}
                  />
                )
              })}
            </tr>
            <tr key={4} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={"Issued Credentials p/m"}
                information={infoToggles?.issuedCredential}
              />
              {products?.map((license) => {
                return (
                  <QuantityDataCell
                    key={"IC__" + license?.attributes.type}
                    data={license?.attributes.features?.issuedCredentials}
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
                    key={"DIDS__" + license?.attributes.type}
                    data={license?.attributes.features?.dids}
                  />
                )
              })}
            </tr>
            <tr key={6} className={styles?.table__body__row}>
              <SubcategoryCell subcategory={"API Keys"} />
              {products?.map(license => {
                return (
                  <QuantityDataCell
                    key={"AK__" + license?.attributes.type}
                    data={license?.attributes.features?.apiKeys}
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
                    key={"2FM__" + license?.attributes.type}
                    data={license?.attributes.features?.nFactor}
                  />
                )
              })}
            </tr>
            <tr key={8} className={styles?.table__body__row}>
              <SubcategoryCell subcategory={"Notifications"} />
              {products?.map(license => {
                return (
                  <ListDataCell
                    key={"NOT__" + license?.attributes.type}
                    data={license?.attributes.features?.notifications}
                  />
                )
              })}
            </tr>
            <tr key={9} className={styles?.table__body__row}>
              <SubcategoryCell subcategory={"Usage Statistics"} />
              {products?.map(license => {
                return (
                  <IconDataCell
                    key={"US__" + license?.attributes.type}
                    data={license?.attributes.features?.stadistics}
                  />
                )
              })}
            </tr>
            <tr key={10} className={styles?.table__body__row}>
              <SubcategoryCell subcategory={"Credentials in W3C VC format"} />
              {products?.map(license => {
                return (
                  <IconDataCell
                    key={"CW3C__" + license?.attributes.type}
                    data={license?.attributes.features?.credentialsInW3CFormat}
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
                    key={"SE__" + license?.attributes.type}
                    data={license?.attributes.features?.sandBoxEnvironment}
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
                    key={"DPC__" + license?.attributes.type}
                    data={license?.attributes.features?.didPublicCatalogue}
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
                    key={"PSPC__" + license?.attributes.type}
                    data={license?.attributes.features?.newSchemaPublicCatalogue}
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
                    key={"EBSII__" + license?.attributes.type}
                    data={license?.attributes.features?.ebsiIntegration}
                  />
                )
              })}
            </tr>
            <tr key={15} className={styles?.table__body__row}>
              <SubcategoryCell subcategory={"Customization of GDPR purposes"} />

              {products?.map(license => {
                return (
                  <IconDataCell
                    key={"GDPRC__" + license?.attributes.type}
                    data={license?.attributes.features?.customGDPRPurposes}
                  />
                )
              })}
            </tr>
            <tr key={16} className={styles?.table__body__row}>
              <SubcategoryCell subcategory={"Custom QR"} />

              {products?.map(license => {
                return (
                  <IconDataCell
                    key={"CQR__" + license?.attributes.type}
                    data={license?.attributes.features?.customQR}
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
                    key={"CIF__" + license?.attributes.type}
                    data={license?.attributes.features?.credentialsInISO28013}
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
                    key={"ICF__" + license?.attributes.type}
                    data={license?.attributes.features?.integrationCustomTrustFrameworks}
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
                    key={"ICI__" + license?.attributes.type}
                    data={
                      license?.attributes.features?.integrationCustomTrustInfraestructure
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
                    key={"SSPT__" + license?.attributes.type}
                    className={`${cx("bodyBoldSM")}`}
                  >
                    {license?.attributes.features?.standardSupport === "true" &&
                        <img
                            className={styles?.table__body__row__cell__icon}
                            src={images.checkIcon}></img>}
                    {license?.attributes.features?.standardSupport === "false" &&
                        <img
                            className={styles?.table__body__row__cell__icon}
                            src={images.closeIcon} ></img>}
                    {license?.attributes.features?.standardSupport === "extra" &&
                        <p>
                          ${" "}
                          <span
                              className={`${cx("bodyRegularCap neutral700")}`}>
                              {"(Extra charges may apply)"}
                            </span>
                        </p>}
                  </td>
                )
              })}
            </tr>
            <tr key={22} className={styles?.table__body__row}>
              <SubcategoryCell subcategory={"Premier Support"} />
              {products?.map(license => {
                return (
                  <td
                    key={"PSPT__" + license?.attributes.type}
                    className={`${cx("bodyBoldSM")}`}
                  >
                    {license?.attributes.features?.premierSupport === "true" &&
                        <img
                        className={styles?.table__body__row__cell__icon}
                        src={images.checkIcon}></img>}
                    {license?.attributes.features?.premierSupport === "false" &&
                        <img
                        className={styles?.table__body__row__cell__icon}
                        src={images.closeIcon} ></img>}
                    {license?.attributes.features?.premierSupport === "extra" &&
                        <p>
                          ${" "}
                          <span
                            className={`${cx("bodyRegularCap neutral700")}`}>
                            {"(Extra charges may apply)"}
                          </span>
                        </p>}
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
