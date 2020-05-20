import introStyles from "./intro.module.scss"
import iphoneImg from "@images/iphone.svg"
import homeData  from "@data/homeData.json"
import React from "react"
import { Button } from "carbon-components-react"


export default function Intro(props) {
  return (
      <section className={introStyles.introSection}>
        <div className={introStyles.introSection__container}>
      
          <div className={introStyles.phoneContainer}>
            <img src={iphoneImg}/>
          </div>
          
          <section className={introStyles.introSection__info}>
            <h1>{props.data.mainTitle} <span>platform</span></h1>
            <h3>{props.data.mainSubtitle} </h3>
            <p>{props.data.mainParagraph} </p>
            <Button
              className={introStyles.ctaButton}
              disabled={false}
              iconDescription="Button icon"
              kind="primary"
              onClick={function noRefCheck(){}}
              onFocus={function noRefCheck(){}}
              renderIcon={undefined}
              size="default"
              tabIndex={0}
              type="button"
            > {props.data.ctaText}</Button>
            <img src={props.data.superImagen}/>
          </section>
    
        </div>
      </section>
  )
}
