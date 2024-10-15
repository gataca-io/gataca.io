import React from "react"
import cx from "classnames"
import Tag from "../../../../../../../../components/atoms/tags/Tag"
import QuantityDataCell from "./elements/cells/quantityDataCell/QuantityDataCell"
import SubcategoryCell from "./elements/cells/subcategoryCell/SubcategoryCell"
import CategoryCell from "./elements/cells/category/CategoryCell"
import { IProductModel } from "../../../../../../../../interfaces/interfaces"
import * as styles from "./licensesTable.module.scss"
import { images } from "../../../../../../../../images/images"
import MarkDownContent from "../../../../../../../../components/elements/markDownContent/MarkDownContent"
import Button from "../../../../shared/button/Button"

type ILicensesTableProps = {
  products: IProductModel[]
  switchPeriodValue: string
  tier_tables: any
  tiers: IProductModel[]
}

const LicensesTable: React.FC<ILicensesTableProps> = props => {
  const { products, switchPeriodValue, tier_tables, tiers } = props

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
                        {license?.attributes.popular === true && (
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
                        <Button
                          idButton={license?.attributes.button?.idButton}
                          className={styles?.license__button}
                          label={license?.attributes.button?.label}
                          icon={license?.attributes.button?.icon}
                          style={license?.attributes.button?.style}
                          fillColor={license?.attributes.button?.fillColor}
                          size={license?.attributes.button?.size}
                          noPaddingText={
                            license?.attributes.button?.noPaddingText
                          }
                          disabled={license?.attributes.button?.disabled}
                          link={license?.attributes.button?.link}
                          url={license?.attributes.button?.url}
                          outsideWeb={license?.attributes.button?.outsideWeb}
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
                      key={"VT__" + item?.id}
                      data={item?.attributes.features?.verificationTemplates}
                    />
                  )
                })}
              </>
            </tr>

            <tr key={2} className={styles?.table__body__row}>
              <>
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
                      key={"VT__" + item?.id}
                      data={item?.attributes.features?.issuanceTemplates}
                    />
                  )
                })}
              </>
            </tr>
            <tr key={3} className={styles?.table__body__row}>
              <>
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
                      key={"VT__" + item?.id}
                      data={item?.attributes.features?.activeUsers}
                    />
                  )
                })}
              </>
            </tr>
            <tr key={4} className={styles?.table__body__row}>
              <>
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
                      key={"VT__" + item?.id}
                      data={item?.attributes.features?.issuedCredentials}
                    />
                  )
                })}
              </>
            </tr>
            <tr key={5} className={styles?.table__body__row}>
              <>
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
                        <td className={`${cx("bodyBoldSM")}`}>
                          <img src={images.checkIcon}></img>
                        </td>
                      ) : (
                        <td className={`${cx("bodyBoldSM")}`}>
                          <img src={images.closeIcon}></img>
                        </td>
                      )}
                    </>
                  )
                })}
              </>
            </tr>
            <tr key={6} className={styles?.table__body__row}>
              <>
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
                  return (
                    <>
                      {item?.attributes.features?.verifiableIds === true ? (
                        <td className={`${cx("bodyBoldSM")}`}>
                          <img src={images.checkIcon}></img>
                        </td>
                      ) : (
                        <td className={`${cx("bodyBoldSM")}`}>
                          <img src={images.closeIcon}></img>
                        </td>
                      )}
                    </>
                  )
                })}
              </>
            </tr>
            <tr key={7} className={styles?.table__body__row}>
              <>
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
                  return (
                    <>
                      {item?.attributes.features?.customSchemas === true ? (
                        <td className={`${cx("bodyBoldSM")}`}>
                          <img src={images.checkIcon}></img>
                        </td>
                      ) : (
                        <td className={`${cx("bodyBoldSM")}`}>
                          <img src={images.closeIcon}></img>
                        </td>
                      )}
                    </>
                  )
                })}
              </>
            </tr>
            <tr key={8} className={styles?.table__body__row}>
              <>
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
                  return (
                    <>
                      {item?.attributes.features?.sandBoxEnvironment ===
                      true ? (
                        <td className={`${cx("bodyBoldSM")}`}>
                          <img src={images.checkIcon}></img>
                        </td>
                      ) : (
                        <td className={`${cx("bodyBoldSM")}`}>
                          <img src={images.closeIcon}></img>
                        </td>
                      )}
                    </>
                  )
                })}
              </>
            </tr>
            <tr key={9} className={styles?.table__body__row}>
              <>
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
                  return (
                    <>
                      {item?.attributes.features?.extraCredentials === true ? (
                        <td className={`${cx("bodyBoldSM")}`}>
                          <img src={images.checkIcon}></img>
                        </td>
                      ) : (
                        <td className={`${cx("bodyBoldSM")}`}>
                          <img src={images.closeIcon}></img>
                        </td>
                      )}
                    </>
                  )
                })}
              </>
            </tr>

            <tr key={10} className={styles?.table__body__row}>
              <CategoryCell
                category={tier_tables[1]?.attributes?.title}
                rowsPan={tier_tables[1]?.attributes?.rows}
              />

              <>
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
                    <td className={styles.markdown}>
                      {item?.attributes.features?.ageVerification?.length && (
                        <MarkDownContent
                          content={item?.attributes.features?.ageVerification}
                        />
                      )}
                    </td>
                  )
                })}
              </>
            </tr>

            <tr key={11} className={styles?.table__body__row}>
              <>
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
                    <td className={styles.markdown}>
                      {item?.attributes.features?.appIntegrations?.length && (
                        <MarkDownContent
                          content={item?.attributes.features?.appIntegrations}
                        />
                      )}
                    </td>
                  )
                })}
              </>
            </tr>
            <tr key={12} className={styles?.table__body__row}>
              <CategoryCell
                category={tier_tables[2]?.attributes?.title}
                rowsPan={tier_tables[2]?.attributes?.rows}
              />

              <>
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
                    <td className={styles.markdown}>
                      {item?.attributes.features?.didMethods?.length && (
                        <MarkDownContent
                          content={item?.attributes.features?.didMethods}
                        />
                      )}
                    </td>
                  )
                })}
              </>
            </tr>
            <tr key={13} className={styles?.table__body__row}>
              <>
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
                    <td className={styles.markdown}>
                      {item?.attributes.features?.trustRegistries?.length && (
                        <MarkDownContent
                          content={item?.attributes.features?.trustRegistries}
                        />
                      )}
                    </td>
                  )
                })}
              </>
            </tr>
            <tr key={14} className={styles?.table__body__row}>
              <>
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
              </>
              {tiers?.map(item => {
                return (
                  <>
                    {item?.attributes.features?.qualifiedCertificates ===
                    true ? (
                      <td className={`${cx("bodyBoldSM")}`}>
                        <img src={images.checkIcon}></img>
                      </td>
                    ) : (
                      <td className={`${cx("bodyBoldSM")}`}>
                        <img src={images.closeIcon}></img>
                      </td>
                    )}
                  </>
                )
              })}
            </tr>
            <tr key={15} className={styles?.table__body__row}>
              <>
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
                    <td className={styles.markdown}>
                      {item?.attributes.features?.enterpriseWallet?.length && (
                        <MarkDownContent
                          content={item?.attributes.features?.enterpriseWallet}
                        />
                      )}
                    </td>
                  )
                })}
              </>
            </tr>
            <tr key={16} className={styles?.table__body__row}>
              <CategoryCell
                category={tier_tables[3]?.attributes?.title}
                rowsPan={tier_tables[3]?.attributes?.rows}
              />

              <>
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
                  return (
                    <>
                      {item?.attributes.features?.statistics === true ? (
                        <td className={`${cx("bodyBoldSM")}`}>
                          <img src={images.checkIcon}></img>
                        </td>
                      ) : (
                        <td className={`${cx("bodyBoldSM")}`}>
                          <img src={images.closeIcon}></img>
                        </td>
                      )}
                    </>
                  )
                })}
              </>
            </tr>
            <tr key={17} className={styles?.table__body__row}>
              <>
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
                  return (
                    <>
                      {item?.attributes.features?.roleBasedAccessControl ===
                      true ? (
                        <td className={`${cx("bodyBoldSM")}`}>
                          <img src={images.checkIcon}></img>
                        </td>
                      ) : (
                        <td className={`${cx("bodyBoldSM")}`}>
                          <img src={images.closeIcon}></img>
                        </td>
                      )}
                    </>
                  )
                })}
              </>
            </tr>
            <tr key={18} className={styles?.table__body__row}>
              <>
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
                  return (
                    <>
                      {item?.attributes.features?.customRoles === true ? (
                        <td className={`${cx("bodyBoldSM")}`}>
                          <img src={images.checkIcon}></img>
                        </td>
                      ) : (
                        <td className={`${cx("bodyBoldSM")}`}>
                          <img src={images.closeIcon}></img>
                        </td>
                      )}
                    </>
                  )
                })}
              </>
            </tr>
            <tr key={19} className={styles?.table__body__row}>
              <CategoryCell
                category={tier_tables[4]?.attributes?.title}
                rowsPan={tier_tables[4]?.attributes?.rows}
              />

              <>
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
                  return (
                    <>
                      {item?.attributes.features?.ticketingSystem === true ? (
                        <td className={`${cx("bodyBoldSM")}`}>
                          <img src={images.checkIcon}></img>
                        </td>
                      ) : (
                        <td className={`${cx("bodyBoldSM")}`}>
                          <img src={images.closeIcon}></img>
                        </td>
                      )}
                    </>
                  )
                })}
              </>
            </tr>
            <tr key={20} className={styles?.table__body__row}>
              <>
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
                  return (
                    <>
                      {item?.attributes.features?.slackSupport === true ? (
                        <td className={`${cx("bodyBoldSM")}`}>
                          <img src={images.checkIcon}></img>
                        </td>
                      ) : (
                        <td className={`${cx("bodyBoldSM")}`}>
                          <img src={images.closeIcon}></img>
                        </td>
                      )}
                    </>
                  )
                })}
              </>
            </tr>
            <tr key={21} className={styles?.table__body__row}>
              <>
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
                  return (
                    <>
                      {item?.attributes.features?.accountTeam === true ? (
                        <td className={`${cx("bodyBoldSM")}`}>
                          <img src={images.checkIcon}></img>
                        </td>
                      ) : (
                        <td className={`${cx("bodyBoldSM")}`}>
                          <img src={images.closeIcon}></img>
                        </td>
                      )}
                    </>
                  )
                })}
              </>
            </tr>
            <tr key={22} className={styles?.table__body__row}>
              <>
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
                    <td className={styles.markdown}>
                      {item?.attributes.features?.twentyFourSeven?.length && (
                        <MarkDownContent
                          content={item?.attributes.features?.twentyFourSeven}
                        />
                      )}
                    </td>
                  )
                })}
              </>
            </tr>
            <tr key={23} className={styles?.table__body__row}>
              <>
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
                    <td className={styles.markdown}>
                      {item?.attributes.features?.slas?.length && (
                        <MarkDownContent
                          content={item?.attributes.features?.slas}
                        />
                      )}
                    </td>
                  )
                })}
              </>
            </tr>
            <tr key={24} className={styles?.table__body__row}>
              <>
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
                    <td className={styles.markdown}>
                      {item?.attributes.features?.onboardingTraining
                        ?.length && (
                        <MarkDownContent
                          content={
                            item?.attributes.features?.onboardingTraining
                          }
                        />
                      )}
                    </td>
                  )
                })}
              </>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default LicensesTable
