import * as React from "react"
import cx from "classnames"
import * as styles from "./credential.module.scss"
import { CredentialModel } from "../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"
import Chip from "../../generic/chip/Chip"
import HeadingCredential from "./components/HeadingCredential"

const CredentialComponent: React.FC<CredentialModel> = props => {
  const {
    className,
    idItem,
    chip,
    headingCredential,
    iconSize,
    logoSize,
    color,
    logo,
    icon,
    actionItemText,
    actionItemIcon,
    headingCredentialHeader,
  } = props

  const iconSizeStyles: Record<string, string> = {
    small: styles?.iconSmall,
    medium: styles?.iconMedium,
    large: styles?.iconLarge,
    xlarge: styles?.iconXLarge,
  }

  const logoSizeStyles: Record<string, string> = {
    small: styles?.logoSmall,
    large: styles?.logoLarge,
  }

  const colorStyles: Record<string, string> = {
    white: styles?.white,
    purpleGradient: styles?.purpleGradient,
    tealGradient: styles?.tealGradient,
    pinkGradient: styles?.pinkGradient,
    teal: styles?.teal,
    blue: styles?.blue,
    yellow: styles?.yellow,
    grey: styles?.grey,
    green: styles?.green,
    darkBlue: styles?.darkBlue,
    orange: styles?.orange,
    pink: styles?.pink,
  }

  return (
    <div
      id={idItem}
      className={`${styles?.credential__container} ${
        color ? colorStyles[color] : styles?.white
      } ${className && className}`}
    >
      <div className={styles?.header__container}>
        {headingCredentialHeader && headingCredential && (
          <HeadingCredential
            idItem={headingCredential?.idItem}
            chip={{ ...headingCredential?.chip }}
            type={headingCredential?.type}
            align={headingCredential?.align}
            typeText={headingCredential?.typeText}
            valueText={headingCredential?.valueText}
            image={headingCredential?.image}
          />
        )}

        {logo?.data?.attributes?.url && (
          <div
            className={`${
              logoSize ? logoSizeStyles[logoSize] : styles?.logoLarge
            } ${styles.logo}`}
          >
            <StrapiImage image={logo ? logo : null} />
          </div>
        )}

        {(actionItemIcon?.data?.attributes?.url || actionItemText?.length) && (
          <div className={styles?.actionItems__container}>
            {actionItemIcon?.data?.attributes?.url && (
              <StrapiImage image={actionItemIcon ? actionItemIcon : null} />
            )}
            <span className={`${cx("bodyRegularSM")} `}>{actionItemText}</span>
          </div>
        )}

        {icon?.data?.attributes?.url && (
          <div
            className={`${
              iconSize ? iconSizeStyles[iconSize] : styles?.iconLarge
            } ${styles.icon}`}
          >
            <StrapiImage image={icon ? icon : null} />
          </div>
        )}
      </div>

      <div className={styles.content__container}>
        {!headingCredentialHeader && headingCredential && (
          <HeadingCredential
            idItem={headingCredential?.idItem}
            chip={{ ...headingCredential?.chip }}
            type={headingCredential?.type}
            align={headingCredential?.align}
            typeText={headingCredential?.typeText}
            valueText={headingCredential?.valueText}
            image={headingCredential?.image}
          />
        )}
        {(chip?.text?.length ||
          chip?.leadingIcon?.data?.attributes?.url?.length ||
          chip?.trailingIcon?.data?.attributes?.url?.length) && (
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
        )}
      </div>
    </div>
  )
}

export default CredentialComponent
