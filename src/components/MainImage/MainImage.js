import mainStyles from "./mainImage.module.scss"
import React from "react"

import graph from "@images/explainedPlatform.svg"
import graphMobile from "@images/explainedPlatform_mobile.svg"

export default function MainImage () {
  return (
    <div className={mainStyles.base}>
      <img className={mainStyles.mainImage} src={graph} alt={''}/>
      <img className={mainStyles.mainImageMobile} src={graphMobile} alt={''}/>
    </div>
  )
}
