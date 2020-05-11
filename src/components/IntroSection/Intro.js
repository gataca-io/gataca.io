import introStyles from "./intro.module.scss"
import iphoneImg from "@images/iphone.svg"
import homeData  from "@data/homeData.json"
import React from "react"


export default function IntroSection(props) {
  return (
      <section className={introStyles.introSection}>
        <div className={introStyles.introSection__container}>
      
          <img src={iphoneImg}/>
          <section className={introStyles.introSection__info}>
            <h1>{props.data.mainTitle} <span>platform</span></h1>
            <h3>{props.data.mainSubtitle} </h3>
            <p>{props.data.mainParagraph} </p>
            <button>{props.data.ctaText}</button>
            <img src={props.data.superImagen}/>
          </section>
    
        </div>
      </section>
  )
}
