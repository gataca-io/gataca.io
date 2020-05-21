import introStyles from "./intro.module.scss"
import iphoneImg from "@images/iphone.svg"
import React from "react"
import { Button } from "carbon-components-react"

function Credentials ({credentials}) {
  return (
    <div className={introStyles.credentialsContainer}>
      {credentials.map(cred=>{
      return (
        <div className={introStyles.credential}>
        <p>{cred.title}</p>
      </div>
      )
      })}
    </div>
  )
}

export default function IntroSection(props) {
  return (
      <section className={introStyles.introSection}>
        <div className={` ${ introStyles.container }`}>
      
          <div className={` ${ introStyles.rowContainer }`}>
          
            <div className={` ${ introStyles.phoneDesktopContainer }`}>
              <div className={introStyles.imageContainer}>
                <img src={iphoneImg}/>
                <div className={introStyles.appContainer}>
                  <Credentials credentials={props.data.credentials}/>
                </div>
              </div>
            </div>
            
            <section className={introStyles.info}>
              <h1>{props.data.mainTitle} <span>platform</span></h1>
              <h3>{props.data.mainSubtitle} </h3>
              <p>{props.data.mainParagraph} </p>
              <a href={props.link} target="_blank">
                <Button
                  className={introStyles.ctaButton}
                  disabled={false}
                  iconDescription="Button icon"
                  kind="primary"
                  renderIcon={undefined}
                  size="default"
                  tabIndex={0}
                  type="button"
                > {props.data.ctaText}</Button>
              </a>
              <img src={props.data.superImagen}/>
            </section>
    
            <div className={ introStyles.phoneMobileContainer}>
              <div className={ introStyles.phoneContainer }>
                <div className={introStyles.imageContainer}>
                  <img src={iphoneImg}/>
                  <div className={introStyles.appContainer}>
                    <Credentials credentials={props.data.credentials}/>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </section>
  )
}
