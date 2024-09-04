import React from "react"
import cx from "classnames"
import PurpleButton from "../../../../../../../../components/atoms/buttons/purple/PurpleButton"
import Tag from "../../../../../../../../components/atoms/tags/Tag"
import QuantityDataCell from "./elements/cells/quantityDataCell/QuantityDataCell"
import ListDataCell from "./elements/cells/listDataCell/ListDataCell"
import SubcategoryCell from "./elements/cells/subcategoryCell/SubcategoryCell"
import IconDataCell from "./elements/cells/iconDataCell/IconDataCell"
import CategoryCell from "./elements/cells/category/CategoryCell"
import {
  IProductModel,
  InfoTogglesPricingModel,
} from "../../../../../../../../interfaces/interfaces"
import * as styles from "./licensesTable.module.scss"
import { images } from "../../../../../../../../images/images"

type ILicensesTableProps = {
  products: IProductModel[]
  switchPeriodValue: string
  infoToggles: any
}

const LicensesTable: React.FC<ILicensesTableProps> = props => {
  const { products, switchPeriodValue, infoToggles } = props

  const getPrice = (item: any) => {
    if (switchPeriodValue === "year") {
      return item?.yearlyPrice == undefined || item?.yearlyPrice < 0
        ? "Custom pricing"
        : new Intl.NumberFormat("en-DE").format(item?.yearlyPrice)
    } else {
      return item?.monthlyPrice == undefined || item?.monthlyPrice < 0
        ? "Custom pricing"
        : new Intl.NumberFormat("en-DE").format(item?.monthlyPrice)
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
                              license?.attributes.button?.outsideWeb
                                ? "_blank"
                                : "_self"
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
              <CategoryCell category={"Verification Features"} rowsPan={9} />
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
            <tr key={3} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={"Active Users"}
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
            <tr key={4} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={"Issued Credentials"}
                information={infoToggles?.issuedCredential}
              />
              {products?.map(license => {
                return (
                  <QuantityDataCell
                    key={"IC__" + license?.attributes.type}
                    data={license?.attributes.features?.issuedCredentials}
                  />
                )
              })}
            </tr>
            <tr key={5} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={"Data agreements"}
                information={infoToggles?.dataAgreements}
              />
              <td className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.checkIcon}
                ></img>
              </td>
              <td className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.checkIcon}
                ></img>
              </td>
            </tr>
            <tr key={6} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={"Verifiable IDs"}
                information={infoToggles?.verifiableIds}
              />
              <td className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.checkIcon}
                ></img>
              </td>
              <td className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.checkIcon}
                ></img>
              </td>
            </tr>
            <tr key={7} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={"Custom schemas"}
                information={infoToggles?.customSchemas}
              />
              <td className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.checkIcon}
                ></img>
              </td>
              <td className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.checkIcon}
                ></img>
              </td>
            </tr>
            <tr key={8} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={"Sandbox testing"}
                information={infoToggles?.sandboxEnvironment}
              />
              <td className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.checkIcon}
                ></img>
              </td>
              <td className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.checkIcon}
                ></img>
              </td>
            </tr>
            <tr key={9} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={"Extra credentials"}
                information={
                  "Purchase additional pools of credentials for issuance"
                }
              />
              <td className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.closeIcon}
                ></img>
              </td>
              <td className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.checkIcon}
                ></img>
              </td>
            </tr>
            <tr key={10} className={styles?.table__body__row}>
              <CategoryCell category={"Single Sing On"} rowsPan={2} />
              <SubcategoryCell
                subcategory={"Age Verification"}
                information={infoToggles?.ageVerification}
              />
              <td key={"Age Verification__"} className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.closeIcon}
                ></img>
              </td>
              <td className={`${cx("bodyBoldSM")}`}>Add-on</td>
            </tr>
            <tr key={11} className={styles?.table__body__row}>
              <SubcategoryCell subcategory={"App integrations"} />

              <td key={"Appintegrations__"} className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.closeIcon}
                ></img>
              </td>
              <td className={`${cx("bodyBoldSM")}`}>Add-on</td>
            </tr>
            <tr key={12} className={styles?.table__body__row}>
              <CategoryCell category={"Enterprise"} rowsPan={4} />
              <SubcategoryCell subcategory={"DID methods"} />
              <td className={`${cx("bodyBoldSM")}`}>did:gatc</td>
              <td className={`${cx("bodyBoldSM")}`}>
                did:gatc, did:ebsi, did:web
              </td>
            </tr>
            <tr key={13} className={styles?.table__body__row}>
              <SubcategoryCell subcategory={"Trust registries"} />
              <td className={`${cx("bodyBoldSM")}`}>Gataca, EBSI</td>
              <td className={`${cx("bodyBoldSM")}`}>Gataca, EBSI, custom</td>
            </tr>
            <tr key={14} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={"Qualified certificates"}
                information={infoToggles?.qualifiedCertificates}
              />

              <td className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.closeIcon}
                ></img>
              </td>
              <td className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.checkIcon}
                ></img>
              </td>
            </tr>
            <tr key={15} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={"Enterprise wallet"}
                information={infoToggles?.enterpriseWallet}
              />

              <td className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.closeIcon}
                ></img>
              </td>
              <td className={`${cx("bodyBoldSM")}`}>Add-on</td>
            </tr>
            <tr key={16} className={styles?.table__body__row}>
              <CategoryCell category={"Administration"} rowsPan={3} />
              <SubcategoryCell subcategory={"Statistics"} />
              <td className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.checkIcon}
                ></img>
              </td>
              <td className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.checkIcon}
                ></img>
              </td>
            </tr>
            <tr key={17} className={styles?.table__body__row}>
              <SubcategoryCell subcategory={"Role based access control"} />
              <td className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.checkIcon}
                ></img>
              </td>
              <td className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.checkIcon}
                ></img>
              </td>
            </tr>
            <tr key={18} className={styles?.table__body__row}>
              <SubcategoryCell subcategory={"Custom roles"} />

              <td className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.closeIcon}
                ></img>
              </td>
              <td className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.checkIcon}
                ></img>
              </td>
            </tr>
            <tr key={19} className={styles?.table__body__row}>
              <CategoryCell category={"Support Services"} rowsPan={6} />
              <SubcategoryCell subcategory={"Email support"} />
              <td className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.checkIcon}
                ></img>
              </td>
              <td className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.checkIcon}
                ></img>
              </td>
            </tr>
            <tr key={20} className={styles?.table__body__row}>
              <SubcategoryCell subcategory={"Slack support"} />
              <td className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.closeIcon}
                ></img>
              </td>
              <td className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.checkIcon}
                ></img>
              </td>
            </tr>
            <tr key={21} className={styles?.table__body__row}>
              <SubcategoryCell subcategory={"Account team"} />

              <td className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.closeIcon}
                ></img>
              </td>
              <td className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.checkIcon}
                ></img>
              </td>
            </tr>
            <tr key={22} className={styles?.table__body__row}>
              <SubcategoryCell subcategory={"24x7"} />
              <td className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.closeIcon}
                ></img>
              </td>
              <td className={`${cx("bodyBoldSM")}`}>Add-on</td>
            </tr>
            <tr key={23} className={styles?.table__body__row}>
              <SubcategoryCell subcategory={"SLAs"} />
              <td className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.closeIcon}
                ></img>
              </td>
              <td className={`${cx("bodyBoldSM")}`}>Add-on</td>
            </tr>
            <tr key={24} className={styles?.table__body__row}>
              <SubcategoryCell subcategory={"Onboarding and training"} />
              <td className={`${cx("bodyBoldSM")}`}>
                <img
                  className={styles?.table__body__row__cell__icon}
                  src={images.closeIcon}
                ></img>
              </td>
              <td className={`${cx("bodyBoldSM")}`}>Add-on</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default LicensesTable
