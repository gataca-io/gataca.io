import introStyles from "./intro.module.scss"
import iphoneImg from "@images/iphone.svg"
import React from "react"
import { Button } from "carbon-components-react"
import Credential from "../Credential/Credential"
import Walletctas from "../WalletCtas/WalletCtas"
import configData from "../../../content/data/configMetaData.json"

function Credentials ({credentials}) {
  return (
    <div className={introStyles.credentialsContainer}>
      {credentials.map(cred=>{
      return (
          <Credential key={cred.credential_name} cred={cred}/>
        )
      })}
    </div>
  )
}

/*function AppFooter () {
  return (
    <div className={introStyles.appFooter}>
      <div className={introStyles.tabs}/>
      <div className={introStyles.tabs}>
        <div className={introStyles.circle}>
          <img  alt={''}/>
        </div>
      </div>
      <div className={introStyles.tabs}/>
  </div>
  )
}*/


export default function ImagesPlusCta({ data, link }) {
  return (
      <section className={introStyles.introSection}>
        <div className={` ${ introStyles.container }`}>
      
          <div className={` ${ introStyles.rowContainer }`}>
          
            <div className={` ${ introStyles.phoneDesktopContainer }`}>
              <div className={introStyles.phoneContainer}>
                <img className={introStyles.imageContainer} src={iphoneImg} alt={data.mainSubtitle}/>
                <Credentials credentials={data.credentials}/>
              </div>
            </div>
            
            <section className={introStyles.info}>
              <h1 dangerouslySetInnerHTML={{__html: data.mainTitle}}>
              </h1>
              <h3>{data.mainSubtitle}</h3>
              <p dangerouslySetInnerHTML={{ __html: data.mainParagraph }}/>
              <Walletctas
                ctaAndroidLink={configData.ctaAndroidLink}
                ctaIosLink={configData.iosLink}
              />
            </section>
    
            <div className={ introStyles.phoneMobileContainer}>
              <div className={ introStyles.phoneMobileSubContainer }>
                <div className={introStyles.imageContainer}>
                  <div className={introStyles.backgroundMobileContainer}>
                  
                  </div>
                  <Credentials credentials={data.credentials}/>
                  <img src={iphoneImg} alt={data.mainSubtitle}/>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </section>
  )
}
