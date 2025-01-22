import * as React from "react"
import cx from "classnames"
import * as styles from "./heading.module.scss"
import { HeadingModel } from "../../../../../../interfaces/interfaces"
import Chip from "../../generic/chip/Chip"
import ButtonGroup from "../../generic/buttonGroup/ButtonGroup"
import ListGroup from "../list/listGroup/ListGroup"
import Button from "../../generic/button/Button"
import Table from "../table/Table"
import MarkDownContent from "../../../../../../components/elements/markDownContent/MarkDownContent"
import HubspotForm from "react-hubspot-form"
import FormSkeleton from "./components/FormSkeleton"
import { hubspotFormPortalId } from "../../../../../../data/globalData"

const Heading: React.FC<HeadingModel> = props => {
  const {
    className,
    idItem,
    titleSize,
    align,
    chip,
    extraText,
    sectionName,
    title,
    content,
    button,
    buttonGroup,
    lists,
    listRow,
    table,
    showForm,
    formRegion,
    formId,
  } = props

  const spacingStyles: Record<string, string> = {
    small: styles?.smallSpacing,
    medium: styles?.smallSpacing,
  }

  const alignStyles: Record<string, string> = {
    left: styles?.alignLeft,
    center: styles?.alignCenter,
    right: styles?.alignRight,
  }

  const [formSubmitted, setFormSubmitted] = React.useState(false)

  return (
    <div
      id={idItem}
      className={`${styles?.heading__container} ${className && className} ${
        align ? alignStyles[align] : styles?.alignLeft
      }`}
    >
      <div
        className={`${align ? alignStyles[align] : styles?.alignLeft} ${
          titleSize ? spacingStyles[titleSize] : ""
        }`}
      >
        {(chip?.text?.length ||
          chip?.leadingIcon?.data?.attributes?.url?.length ||
          chip?.trailingIcon?.data?.attributes?.url?.length) && (
          <div className={styles?.chip_extraText__container}>
            <Chip
              idChip={chip?.idChip}
              text={chip?.text}
              type={chip?.type}
              form={chip?.form}
              disabled={chip?.disabled}
              color={chip?.color}
              chipSize={chip?.chipSize}
              leadingIcon={chip?.leadingIcon}
              trailingIcon={chip?.trailingIcon}
            />
            {extraText?.length && (
              <span className={cx("bodyRegularSM neutral700")}>
                {extraText}
              </span>
            )}
          </div>
        )}
        {sectionName?.length && (
          <h6 className={cx("heading6 neutral700")}>{sectionName}</h6>
        )}
        {title?.length && (
          <>
            {titleSize === "large" ? (
              <h1>
                <MarkDownContent content={title} />
              </h1>
            ) : titleSize === "medium" ? (
              <h3>
                <MarkDownContent content={title} />
              </h3>
            ) : (
              <h4>
                <MarkDownContent content={title} />
              </h4>
            )}
          </>
        )}
        {content?.length && (
          <div className={styles?.heading__content}>
            <MarkDownContent content={content} />
          </div>
        )}
        {(button?.label?.length ||
          button?.icon?.data?.attributes?.url?.length) && (
          <>
            {(button?.label?.length ||
              button?.icon?.data?.attributes?.url?.length) && (
              <Button
                idButton={button?.idButton}
                className={cx("marginTop20")}
                label={button?.label}
                icon={button?.icon}
                style={button?.style}
                color={button?.color}
                size={button?.size}
                noPaddingText={button?.noPaddingText}
                disabled={button?.disabled}
                link={button?.link}
                url={button?.url}
                action={() =>
                  window?.open(
                    button?.url,
                    button?.outsideWeb ? "_blank" : "_self"
                  )
                }
              />
            )}
          </>
        )}
        {(buttonGroup?.buttons?.data?.length > 0 ||
          buttonGroup?.brand_buttons?.data?.length > 0 ||
          buttonGroup?.button_icons?.data?.length > 0) && (
          <ButtonGroup
            buttonGroup={buttonGroup?.buttons?.data}
            brandButtonGroup={buttonGroup?.brand_buttons?.data}
            buttonIconGroup={buttonGroup?.button_icons?.data}
            className={cx("marginTop20")}
          />
        )}
        {lists?.data?.length > 0 && (
          <ListGroup listOptions={lists?.data} className={cx("marginTop20")} />
        )}
        {listRow?.data?.length > 0 && (
          <ListGroup
            listOptions={listRow?.data}
            listRow
            className={cx("marginTop20")}
          />
        )}
        {table?.content && (
          <Table
            content={table?.content}
            className={`${cx("marginTop20")} ${styles?.tableContainer}`}
          />
        )}
        {showForm && formRegion && formId ? (
          <div id="formContainer" className={styles?.form__container}>
            <HubspotForm
              region={formRegion}
              portalId={hubspotFormPortalId}
              formId={formId}
              onSubmit={() => {
                setFormSubmitted(true)
              }}
              onReady={() => {}}
              loading={<FormSkeleton />}
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Heading
