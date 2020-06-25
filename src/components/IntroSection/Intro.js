import introStyles from "./intro.module.scss"
import iphoneImg from "@images/iphone.svg"
import React from "react"
import { Button } from "carbon-components-react"
import Credential from "../Credential/Credential"

function Credentials ({credentials}) {
  return (
    <div className={introStyles.credentialsContainer}>
      {credentials.map(cred=>{
      return (
          <Credential cred={cred}/>
        )
      })}
    </div>
  )
}

function AppFooter () {
  return (
    <div className={introStyles.appFooter}>
      <div className={introStyles.tabs}></div>
      <div className={introStyles.tabs}>
        <div className={introStyles.circle}>
          <img />
        </div>
      </div>
      <div className={introStyles.tabs}></div>
  </div>
  )
}

export default function IntroSection({ data, link }) {
  return (
      <section className={introStyles.introSection}>
        <div className={` ${ introStyles.container }`}>
      
          <div className={` ${ introStyles.rowContainer }`}>
          
            <div className={` ${ introStyles.phoneDesktopContainer }`}>
              <div className={introStyles.phoneContainer}>
                <img className={introStyles.imageContainer} src={iphoneImg}/>
                <Credentials credentials={data.credentials}/>
              </div>
            </div>
            
            <section className={introStyles.info}>
              <h1>{data.mainTitle} <span>{data.mainTitleSubheading }</span></h1>
              <h3>{data.mainSubtitle}</h3>
              <p>{data.mainParagraph} </p>
              <a href={link} target="_blank">
                <Button
                  className={introStyles.ctaButton}
                  disabled={false}
                  iconDescription="Button icon"
                  kind="primary"
                  renderIcon={undefined}
                  size="default"
                  tabIndex={0}
                  type="button"
                > {data.ctaText}</Button>
              </a>
              <img src={data.superImagen}/>
            </section>
    
            <div className={ introStyles.phoneMobileContainer}>
              <div className={ introStyles.phoneMobileSubContainer }>
                <div className={introStyles.imageContainer}>
                  <div className={introStyles.backgroundMobileContainer}>
                  
                  </div>
                  <img src={iphoneImg}/>
                  <Credentials credentials={data.credentials}/>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </section>
  )
}
