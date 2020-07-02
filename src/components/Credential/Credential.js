import React from "react"
import CredentialStyles from "./credential.module.scss"

function level(level) {
  return level > 0 ? <p className={CredentialStyles.level}><span>LEVEL </span> {level}</p> : null
}

export default function Credential(props) {
  const {cred} = props
  return (
    <div className={CredentialStyles.credential}>
      <div className={CredentialStyles.leftContainer}>
        <img src={cred.icon} alt={cred.credential_name}/>
      </div>
      <div className={CredentialStyles.content}>
        <p className={CredentialStyles.category}>{cred.category}</p>
        <p className={CredentialStyles.subcategory}>{cred.subcategory}</p>
        <h3 className={CredentialStyles.credentialName}>{cred.credential_name}</h3>
      </div>
      <div className={CredentialStyles.rightContainer}>
        {level(cred.level)}
        <p className={CredentialStyles.status}>{cred.status}</p>
        <p className={CredentialStyles.openStatus}>{cred.openStatus}</p>
      </div>
      <svg className={CredentialStyles.decoration} width="12" height="12" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 0V13C18 15.7614 15.7614 18 13 18H0" stroke="#181B5E"/>
      </svg>
    </div>
  )
}
