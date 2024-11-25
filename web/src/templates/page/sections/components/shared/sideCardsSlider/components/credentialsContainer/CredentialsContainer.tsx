import * as React from "react"
import { CredentialModel } from "../../../../../../../../interfaces/interfaces"
import * as styles from "./credentialsContainer.module.scss"
import CredentialComponent from "../../../credential/Credential"

export type ICredentialsContainerProps = {
  idItem?: string
  credential?: CredentialModel[]
  cardWidth?: number
  cardHeight?: number
}

const CredentialsContainer: React.FC<ICredentialsContainerProps> = props => {
  const { idItem, credential, cardWidth, cardHeight } = props

  return (
    <div id={idItem} className={`${styles.credentials__container}`}>
      {credential?.map((el: any, index: number) => {
        const {
          idItem,
          chip,
          heading_credential,
          iconSize,
          logoSize,
          color,
          logo,
          icon,
          actionItemText,
          actionItemIcon,
          headingCredentialHeader,
        } = el

        return (
          <div
            key={`credential__` + index}
            style={{ width: cardWidth, height: cardHeight }}
          >
            <CredentialComponent
              idItem={idItem}
              headingCredential={
                heading_credential?.data?.attributes?.headingCredential
              }
              iconSize={iconSize}
              logoSize={logoSize}
              color={color}
              logo={logo}
              icon={icon}
              actionItemIcon={actionItemIcon}
              actionItemText={actionItemText}
              headingCredentialHeader={headingCredentialHeader}
              chip={{
                idChip: chip?.idChip,
                text: chip?.text,
                type: chip?.type,
                form: chip?.form,
                disabled: chip?.disabled,
                color: chip?.color,
                chipSize: chip?.chipSize,
                leadingIcon: chip?.leadingIcon,
                trailingIcon: chip?.trailingIcon,
              }}
            />
          </div>
        )
      })}
    </div>
  )
}

export default CredentialsContainer
