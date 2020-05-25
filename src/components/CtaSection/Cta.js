import ctaStyles  from "./cta.module.scss"
import React from "react"
import { Button } from "carbon-components-react"
import introStyles from "../IntroSection/intro.module.scss"

export default function Cta({ data }) {
  return (
    <section className={ctaStyles.base}>
      <div className={ctaStyles.container}>
        <h2>{data.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
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
        > {data.ctaText}</Button>
      </div>
    </section>
  )
}
