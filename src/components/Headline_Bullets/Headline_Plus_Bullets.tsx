import React, { useState, useEffect } from "react" // we need this to make JSX compile

import styles from "./Headline_Plus_Bullets.module.scss"

type IExplainedInfographicsProps = {
  headline: string;
  bullets: Array<string>
}

const defaultProps = {
  headline: "Headline Plus BulletsSection",
  bullets: [
    "Felis quis ac tortor pharetra consectetur. Egestas cursus amet elementum ac facilisis nunc mauris.",
    "Sit mattis vel interdum massa. Duis malesuada amet ut quis ipsum purus mauris vel quam..",
    "Felis quis ac tortor pharetra consectetur. Egestas cursus amet elementum ac facilisis nunc mauris.",
  ],
}

const Headline_Plus_Bullets: React.FC<IExplainedInfographicsProps> = (props) => {
  const { headline, bullets } = props

  useEffect(() => {

  }, [])

  return (
    <React.Fragment>
      <section className={styles.mainContainer}>
        <div className={styles.mainSubContainer}>
          <div className={styles.headLine}>
            <h2>{headline}</h2>
          </div>
          <div className={styles.textSection}>
            {bullets.map(bullet => {
              return <>
                <p>{bullet}</p>
              </>
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

Headline_Plus_Bullets.defaultProps = defaultProps

export default Headline_Plus_Bullets
