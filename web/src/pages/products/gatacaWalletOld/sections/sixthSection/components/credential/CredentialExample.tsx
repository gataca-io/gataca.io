import * as React from "react"
import * as styles from "./credentialExample.module.scss"
import cx from "classnames"
import { images } from "../../../../../../../images/images"

export type ICredentialExampleProps = {
  icon: string
  category: string
  issuer: string
  mainData: string
  issuanceDate: string
  expirationDate: string
  validated: boolean
  className?: any
}

const CredentialExample: React.FC<ICredentialExampleProps> = props => {
  const {
    icon,
    category,
    issuer,
    mainData,
    issuanceDate,
    expirationDate,
    validated,
    className,
  } = props
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.header}`}>
        <div>
          <img src={icon} />
          <div>
            <p className={`${cx("buttonMD")}`}>{category}</p>
            <p className={`${cx("bodyRegularSM")}`}>{issuer}</p>
          </div>
        </div>
        {validated && <img src={images.shieldIcon} />}
      </div>
      <p className={`${styles.mainData} ${cx("bodyBoldXL")}`}>{mainData}</p>
      <div className={`${styles.datesContainer}`}>
        <div>
          <p className={`${cx("buttonSM marginBottom2")}`}>Issuance date</p>
          <p className={`${cx("bodyRegularSM")}`}>{issuanceDate}</p>
        </div>
        {expirationDate && (
          <div>
            <p className={`${cx("buttonSM marginBottom2")}`}>Expiration date</p>
            <p className={`${cx("bodyRegularSM")}`}>{expirationDate}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CredentialExample
