import React from "react"
import cx from "classnames"
import QuantityDataCell from "./elements/cells/quantityDataCell/QuantityDataCell"
import SubcategoryCell from "./elements/cells/subcategoryCell/SubcategoryCell"
import CategoryCell from "./elements/cells/category/CategoryCell"
import { IProductModel } from "../../../../../../../../interfaces/interfaces"
import * as styles from "./licensesTable.module.scss"
import { images } from "../../../../../../../../images/images"
import MarkDownContent from "../../../../../../../../components/elements/markDownContent/MarkDownContent"
import Button from "../../../../generic/button/Button"

type ILicensesTableProps = {
  switchPeriodValue: string
  tier_tables: any
  tiers: IProductModel[]
  pricing: any
}

const LicensesTable: React.FC<ILicensesTableProps> = props => {
  const { switchPeriodValue, tier_tables, tiers, pricing } = props

  const periodYear = switchPeriodValue === "year"

  return (
    <>
      <div className={styles?.tableContainer}>
        <table>
          <thead className={styles?.table__header__container}>
            <tr className={styles?.table__header} id={"featuresTableDesk"}>
              <th colSpan={2}></th>

              {pricing?.map((item: any) => {
                const getPrice = () => {
                  if (periodYear) {
                    return item?.amountYearly == undefined ||
                      item?.amountYearly < 0
                      ? item?.customPrice
                      : new Intl.NumberFormat("en-DE").format(
                          item?.amountYearly
                        )
                  } else {
                    return item?.amountMonthly == undefined ||
                      item?.amountMonthly < 0
                      ? item?.customPrice
                      : new Intl.NumberFormat("en-DE").format(
                          item?.amountMonthly
                        )
                  }
                }
                return (
                  <th
                    key={"headerT__" + item?.name}
                    className={styles?.table__header__cell}
                  >
                    <div className={styles?.table__header__cell__content}>
                      <div>
                        <p className={`${cx("bodyBoldXL neutral1000")}`}>
                          {item?.name}
                        </p>

                        <div>
                          <p>
                            <span className={cx("heading4 neutral1000")}>
                              {getPrice()}
                            </span>
                            <span className={cx("heading4 neutral1000")}>
                              {(item?.amountYearly || item?.amountMonthly) && (
                                <span>€</span>
                              )}
                            </span>

                            <span
                              className={`${cx(
                                "neutral700 bodyRegularMD marginLeft8"
                              )}`}
                            >
                              {periodYear
                                ? item?.frecuencyYearly
                                : item?.frecuencyMonthly}
                            </span>
                          </p>
                          {periodYear && (
                            <p className={`${cx("neutral700 bodyRegularSM")}`}>
                              {item?.extraInfo}
                            </p>
                          )}
                        </div>
                      </div>
                      {(item?.button?.label?.length ||
                        item?.button?.icon?.data?.attributes?.url?.length) && (
                        <div>
                          <Button
                            {...item?.button}
                            action={() =>
                              window?.open(
                                item?.button?.url,
                                item?.button?.outsideWeb ? "_blank" : "_self"
                              )
                            }
                          />
                        </div>
                      )}
                    </div>
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody className={styles?.table__body}>
            <tr key={0} className={styles?.table__body__row}></tr>

            <tr key={1} className={styles?.table__body__row}>
              <CategoryCell
                category={tier_tables[0]?.attributes?.title}
                rowsPan={tier_tables[0]?.attributes?.rows}
              />

              <>
                <SubcategoryCell
                  subcategory={
                    tier_tables[0]?.attributes?.feature_details?.data[0]
                      ?.attributes?.title
                  }
                  information={
                    tier_tables[0]?.attributes?.feature_details?.data[0]
                      ?.attributes?.infoToggle
                  }
                />
                {tiers?.map(item => {
                  return (
                    <QuantityDataCell
                      key={"VT__" + Math.random()}
                      data={item?.attributes.features?.verificationTemplates}
                    />
                  )
                })}
              </>
            </tr>

            <tr key={2} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={
                  tier_tables[0]?.attributes?.feature_details?.data[1]
                    ?.attributes?.title
                }
                information={
                  tier_tables[0]?.attributes?.feature_details?.data[1]
                    ?.attributes?.infoToggle
                }
              />
              {tiers?.map(item => {
                return (
                  <QuantityDataCell
                    key={"VT__" + Math.random()}
                    data={item?.attributes.features?.issuanceTemplates}
                  />
                )
              })}
            </tr>
            <tr key={3} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={
                  tier_tables[0]?.attributes?.feature_details?.data[2]
                    ?.attributes?.title
                }
                information={
                  tier_tables[0]?.attributes?.feature_details?.data[2]
                    ?.attributes?.infoToggle
                }
              />
              {tiers?.map(item => {
                return (
                  <QuantityDataCell
                    key={"VT__" + Math.random()}
                    data={item?.attributes.features?.activeUsers}
                  />
                )
              })}
            </tr>
            <tr key={4} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={
                  tier_tables[0]?.attributes?.feature_details?.data[3]
                    ?.attributes?.title
                }
                information={
                  tier_tables[0]?.attributes?.feature_details?.data[3]
                    ?.attributes?.infoToggle
                }
              />
              {tiers?.map(item => {
                return (
                  <QuantityDataCell
                    key={"VT__" + Math.random()}
                    data={item?.attributes.features?.issuedCredentials}
                  />
                )
              })}
            </tr>
            <tr key={5} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={
                  tier_tables[0]?.attributes?.feature_details?.data[4]
                    ?.attributes?.title
                }
                information={
                  tier_tables[0]?.attributes?.feature_details?.data[4]
                    ?.attributes?.infoToggle
                }
              />
              {tiers?.map(item => {
                return (
                  <>
                    {item?.attributes.features?.dataAgreements === true ? (
                      <td
                        key={"DA__" + Math.random()}
                        className={`${cx("bodyBoldSM neutral1000")}`}
                      >
                        <img src={images.checkIcon}></img>
                      </td>
                    ) : (
                      <td
                        key={"DA__" + Math.random()}
                        className={`${cx("bodyBoldSM neutral1000")}`}
                      >
                        <img src={images.closeIcon}></img>
                      </td>
                    )}
                  </>
                )
              })}
            </tr>
            <tr key={6} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={
                  tier_tables[0]?.attributes?.feature_details?.data[5]
                    ?.attributes?.title
                }
                information={
                  tier_tables[0]?.attributes?.feature_details?.data[5]
                    ?.attributes?.infoToggle
                }
              />
              {tiers?.map(item => {
                return item?.attributes.features?.verifiableIds === true ? (
                  <td
                    key={"Vids__" + Math.random()}
                    className={`${cx("bodyBoldSM neutral1000")}`}
                  >
                    <img src={images.checkIcon}></img>
                  </td>
                ) : (
                  <td
                    key={"Vids__" + Math.random()}
                    className={`${cx("bodyBoldSM neutral1000")}`}
                  >
                    <img src={images.closeIcon}></img>
                  </td>
                )
              })}
            </tr>
            <tr key={7} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={
                  tier_tables[0]?.attributes?.feature_details?.data[6]
                    ?.attributes?.title
                }
                information={
                  tier_tables[0]?.attributes?.feature_details?.data[6]
                    ?.attributes?.infoToggle
                }
              />
              {tiers?.map(item => {
                return item?.attributes.features?.customSchemas === true ? (
                  <td
                    key={"CS__" + Math.random()}
                    className={`${cx("bodyBoldSM neutral1000")}`}
                  >
                    <img src={images.checkIcon}></img>
                  </td>
                ) : (
                  <td
                    key={"CS__" + Math.random()}
                    className={`${cx("bodyBoldSM neutral1000")}`}
                  >
                    <img src={images.closeIcon}></img>
                  </td>
                )
              })}
            </tr>
            <tr key={8} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={
                  tier_tables[0]?.attributes?.feature_details?.data[7]
                    ?.attributes?.title
                }
                information={
                  tier_tables[0]?.attributes?.feature_details?.data[7]
                    ?.attributes?.infoToggle
                }
              />
              {tiers?.map(item => {
                return item?.attributes.features?.sandBoxEnvironment ===
                  true ? (
                  <td
                    key={"SE__" + Math.random()}
                    className={`${cx("bodyBoldSM neutral1000")}`}
                  >
                    <img src={images.checkIcon}></img>
                  </td>
                ) : (
                  <td
                    key={"SE__" + Math.random()}
                    className={`${cx("bodyBoldSM neutral1000")}`}
                  >
                    <img src={images.closeIcon}></img>
                  </td>
                )
              })}
            </tr>
            <tr key={9} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={
                  tier_tables[0]?.attributes?.feature_details?.data[8]
                    ?.attributes?.title
                }
                information={
                  tier_tables[0]?.attributes?.feature_details?.data[8]
                    ?.attributes?.infoToggle
                }
              />
              {tiers?.map(item => {
                return item?.attributes.features?.extraCredentials === true ? (
                  <td
                    key={"EC__" + Math.random()}
                    className={`${cx("bodyBoldSM neutral1000")}`}
                  >
                    <img src={images.checkIcon}></img>
                  </td>
                ) : (
                  <td
                    key={"EC__" + Math.random()}
                    className={`${cx("bodyBoldSM neutral1000")}`}
                  >
                    <img src={images.closeIcon}></img>
                  </td>
                )
              })}
            </tr>

            <tr key={10} className={styles?.table__body__row}>
              <CategoryCell
                category={tier_tables[1]?.attributes?.title}
                rowsPan={tier_tables[1]?.attributes?.rows}
              />

              <SubcategoryCell
                subcategory={
                  tier_tables[1]?.attributes?.feature_details?.data[0]
                    ?.attributes?.title
                }
                information={
                  tier_tables[1]?.attributes?.feature_details?.data[0]
                    ?.attributes?.infoToggle
                }
              />
              {tiers?.map(item => {
                return (
                  <td key={"AV__" + Math.random()} className={styles.markdown}>
                    {item?.attributes.features?.ageVerification?.length && (
                      <MarkDownContent
                        content={item?.attributes.features?.ageVerification}
                      />
                    )}
                  </td>
                )
              })}
            </tr>

            <tr key={11} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={
                  tier_tables[1]?.attributes?.feature_details?.data[1]
                    ?.attributes?.title
                }
                information={
                  tier_tables[1]?.attributes?.feature_details?.data[1]
                    ?.attributes?.infoToggle
                }
              />
              {tiers?.map(item => {
                return (
                  <td key={"AI__" + Math.random()} className={styles.markdown}>
                    {item?.attributes.features?.appIntegrations?.length && (
                      <MarkDownContent
                        content={item?.attributes.features?.appIntegrations}
                      />
                    )}
                  </td>
                )
              })}
            </tr>
            <tr key={12} className={styles?.table__body__row}>
              <CategoryCell
                category={tier_tables[2]?.attributes?.title}
                rowsPan={tier_tables[2]?.attributes?.rows}
              />

              <SubcategoryCell
                subcategory={
                  tier_tables[2]?.attributes?.feature_details?.data[0]
                    ?.attributes?.title
                }
                information={
                  tier_tables[2]?.attributes?.feature_details?.data[0]
                    ?.attributes?.infoToggle
                }
              />

              {tiers?.map(item => {
                return (
                  <td key={"DID__" + Math.random()} className={styles.markdown}>
                    {item?.attributes.features?.didMethods?.length && (
                      <MarkDownContent
                        content={item?.attributes.features?.didMethods}
                      />
                    )}
                  </td>
                )
              })}
            </tr>
            <tr key={13} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={
                  tier_tables[2]?.attributes?.feature_details?.data[1]
                    ?.attributes?.title
                }
                information={
                  tier_tables[2]?.attributes?.feature_details?.data[1]
                    ?.attributes?.infoToggle
                }
              />
              {tiers?.map(item => {
                return (
                  <td key={"TR__" + Math.random()} className={styles.markdown}>
                    {item?.attributes.features?.trustRegistries?.length && (
                      <MarkDownContent
                        content={item?.attributes.features?.trustRegistries}
                      />
                    )}
                  </td>
                )
              })}
            </tr>
            <tr key={14} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={
                  tier_tables[2]?.attributes?.feature_details?.data[2]
                    ?.attributes?.title
                }
                information={
                  tier_tables[2]?.attributes?.feature_details?.data[2]
                    ?.attributes?.infoToggle
                }
              />

              {tiers?.map(item => {
                return item?.attributes.features?.qualifiedCertificates ===
                  true ? (
                  <td
                    key={"QC__" + Math.random()}
                    className={`${cx("bodyBoldSM neutral1000")}`}
                  >
                    <img src={images.checkIcon}></img>
                  </td>
                ) : (
                  <td
                    key={"QC__" + Math.random()}
                    className={`${cx("bodyBoldSM neutral1000")}`}
                  >
                    <img src={images.closeIcon}></img>
                  </td>
                )
              })}
            </tr>
            <tr key={15} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={
                  tier_tables[2]?.attributes?.feature_details?.data[3]
                    ?.attributes?.title
                }
                information={
                  tier_tables[2]?.attributes?.feature_details?.data[3]
                    ?.attributes?.infoToggle
                }
              />

              {tiers?.map(item => {
                return (
                  <td key={"EW__" + Math.random()} className={styles.markdown}>
                    {item?.attributes.features?.enterpriseWallet?.length && (
                      <MarkDownContent
                        content={item?.attributes.features?.enterpriseWallet}
                      />
                    )}
                  </td>
                )
              })}
            </tr>
            <tr key={16} className={styles?.table__body__row}>
              <CategoryCell
                category={tier_tables[3]?.attributes?.title}
                rowsPan={tier_tables[3]?.attributes?.rows}
              />

              <SubcategoryCell
                subcategory={
                  tier_tables[3]?.attributes?.feature_details?.data[0]
                    ?.attributes?.title
                }
                information={
                  tier_tables[3]?.attributes?.feature_details?.data[0]
                    ?.attributes?.infoToggle
                }
              />
              {tiers?.map(item => {
                return item?.attributes.features?.statistics === true ? (
                  <td
                    key={"ST__" + Math.random()}
                    className={`${cx("bodyBoldSM neutral1000")}`}
                  >
                    <img src={images.checkIcon}></img>
                  </td>
                ) : (
                  <td
                    key={"ST__" + Math.random()}
                    className={`${cx("bodyBoldSM neutral1000")}`}
                  >
                    <img src={images.closeIcon}></img>
                  </td>
                )
              })}
            </tr>
            <tr key={17} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={
                  tier_tables[3]?.attributes?.feature_details?.data[1]
                    ?.attributes?.title
                }
                information={
                  tier_tables[3]?.attributes?.feature_details?.data[1]
                    ?.attributes?.infoToggle
                }
              />
              {tiers?.map(item => {
                return item?.attributes.features?.roleBasedAccessControl ===
                  true ? (
                  <td
                    key={"Role__" + Math.random()}
                    className={`${cx("bodyBoldSM neutral1000")}`}
                  >
                    <img src={images.checkIcon}></img>
                  </td>
                ) : (
                  <td
                    key={"Role__" + Math.random()}
                    className={`${cx("bodyBoldSM neutral1000")}`}
                  >
                    <img src={images.closeIcon}></img>
                  </td>
                )
              })}
            </tr>
            <tr key={18} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={
                  tier_tables[3]?.attributes?.feature_details?.data[2]
                    ?.attributes?.title
                }
                information={
                  tier_tables[3]?.attributes?.feature_details?.data[2]
                    ?.attributes?.infoToggle
                }
              />
              {tiers?.map(item => {
                return item?.attributes.features?.customRoles === true ? (
                  <td
                    key={"CR__" + Math.random()}
                    className={`${cx("bodyBoldSM neutral1000")}`}
                  >
                    <img src={images.checkIcon}></img>
                  </td>
                ) : (
                  <td
                    key={"CR__" + Math.random()}
                    className={`${cx("bodyBoldSM neutral1000")}`}
                  >
                    <img src={images.closeIcon}></img>
                  </td>
                )
              })}
            </tr>
            <tr key={19} className={styles?.table__body__row}>
              <CategoryCell
                category={tier_tables[4]?.attributes?.title}
                rowsPan={tier_tables[4]?.attributes?.rows}
              />

              <SubcategoryCell
                subcategory={
                  tier_tables[4]?.attributes?.feature_details?.data[0]
                    ?.attributes?.title
                }
                information={
                  tier_tables[4]?.attributes?.feature_details?.data[0]
                    ?.attributes?.infoToggle
                }
              />
              {tiers?.map(item => {
                return item?.attributes.features?.ticketingSystem === true ? (
                  <td
                    key={"TS__" + Math.random()}
                    className={`${cx("bodyBoldSM neutral1000")}`}
                  >
                    <img src={images.checkIcon}></img>
                  </td>
                ) : (
                  <td
                    key={"TS__" + Math.random()}
                    className={`${cx("bodyBoldSM neutral1000")}`}
                  >
                    <img src={images.closeIcon}></img>
                  </td>
                )
              })}
            </tr>
            <tr key={20} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={
                  tier_tables[4]?.attributes?.feature_details?.data[1]
                    ?.attributes?.title
                }
                information={
                  tier_tables[4]?.attributes?.feature_details?.data[1]
                    ?.attributes?.infoToggle
                }
              />
              {tiers?.map(item => {
                return item?.attributes.features?.slackSupport === true ? (
                  <td
                    key={"SS__" + Math.random()}
                    className={`${cx("bodyBoldSM neutral1000")}`}
                  >
                    <img src={images.checkIcon}></img>
                  </td>
                ) : (
                  <td
                    key={"SS__" + Math.random()}
                    className={`${cx("bodyBoldSM neutral1000")}`}
                  >
                    <img src={images.closeIcon}></img>
                  </td>
                )
              })}
            </tr>
            <tr key={21} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={
                  tier_tables[4]?.attributes?.feature_details?.data[2]
                    ?.attributes?.title
                }
                information={
                  tier_tables[4]?.attributes?.feature_details?.data[2]
                    ?.attributes?.infoToggle
                }
              />
              {tiers?.map(item => {
                return item?.attributes.features?.accountTeam === true ? (
                  <td
                    key={"AT__" + Math.random()}
                    className={`${cx("bodyBoldSM neutral1000")}`}
                  >
                    <img src={images.checkIcon}></img>
                  </td>
                ) : (
                  <td
                    key={"AT" + Math.random()}
                    className={`${cx("bodyBoldSM neutral1000")}`}
                  >
                    <img src={images.closeIcon}></img>
                  </td>
                )
              })}
            </tr>
            <tr key={22} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={
                  tier_tables[4]?.attributes?.feature_details?.data[3]
                    ?.attributes?.title
                }
                information={
                  tier_tables[4]?.attributes?.feature_details?.data[3]
                    ?.attributes?.infoToggle
                }
              />
              {tiers?.map(item => {
                return (
                  <td key={"24__" + Math.random()} className={styles.markdown}>
                    {item?.attributes.features?.twentyFourSeven?.length && (
                      <MarkDownContent
                        content={item?.attributes.features?.twentyFourSeven}
                      />
                    )}
                  </td>
                )
              })}
            </tr>
            <tr key={23} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={
                  tier_tables[4]?.attributes?.feature_details?.data[4]
                    ?.attributes?.title
                }
                information={
                  tier_tables[4]?.attributes?.feature_details?.data[4]
                    ?.attributes?.infoToggle
                }
              />
              {tiers?.map(item => {
                return (
                  <td
                    key={"Slas__" + Math.random()}
                    className={styles.markdown}
                  >
                    {item?.attributes.features?.slas?.length && (
                      <MarkDownContent
                        content={item?.attributes.features?.slas}
                      />
                    )}
                  </td>
                )
              })}
            </tr>
            <tr key={24} className={styles?.table__body__row}>
              <SubcategoryCell
                subcategory={
                  tier_tables[4]?.attributes?.feature_details?.data[5]
                    ?.attributes?.title
                }
                information={
                  tier_tables[4]?.attributes?.feature_details?.data[5]
                    ?.attributes?.infoToggle
                }
              />
              {tiers?.map(item => {
                return (
                  <td key={"OT__" + Math.random()} className={styles.markdown}>
                    {item?.attributes.features?.onboardingTraining?.length && (
                      <MarkDownContent
                        content={item?.attributes.features?.onboardingTraining}
                      />
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
