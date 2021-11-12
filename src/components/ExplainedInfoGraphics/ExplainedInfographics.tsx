import React, { useState, useEffect } from "react" // we need this to make JSX compile

import styles from "./explainedInfographics.module.scss"

type IExplainedInfographicsProps = {
  title: string;
  bullets: Array<{
    title: string,
    description: string,
  }>
  infographic: string;
  imgFirst?: boolean;
}

const defaultProps = {
  title: "Explained Infographics Section",
  bullets: [
    {
      title: "First important point to explain",
      description: "Felis quis ac tortor pharetra consectetur. Egestas cursus amet elementum ac facilisis nunc mauris.",
    },
    {
      title: "Second important point to explain",
      description: "Sit mattis vel interdum massa. Duis malesuada amet ut quis ipsum purus mauris vel quam..",
    },
    {
      title: "THird important point to explain",
      description: "Felis quis ac tortor pharetra consectetur. Egestas cursus amet elementum ac facilisis nunc mauris.",
    },
  ],
  infographic: "",
  imgFirst: false
}

const ExplainedInfographics: React.FC<IExplainedInfographicsProps> = (props) => {
  const { title, bullets, infographic, imgFirst } = props

  useEffect(() => {

  }, [])

  return (
    <React.Fragment>
      <section className={styles.mainContainer}>
        <div className={styles.mainSubContainer}>
          {imgFirst && <div className={styles.imageSection}>
            <img src={infographic} alt={title}/>
          </div> }

          <div className={styles.textSection}
          style={{
            marginLeft: imgFirst ? "var(--baseSpacing)" : "0px",
            marginRight: !imgFirst ? "var(--baseSpacing)" : "0px",
          }}>
            <h2>{title}</h2>
            {bullets.map(bullet => {
              return <>
                {bullet.title && <h4>{bullet.title}</h4>}
                {bullet.description && <p>{bullet.description}</p>}
              </>
            })}
          </div>
          {!imgFirst && <div className={styles.imageSection}>
            <img src={infographic} alt={title}/>
          </div> }
        </div>
      </section>
    </React.Fragment>
  )
}

ExplainedInfographics.defaultProps = defaultProps

export default ExplainedInfographics
