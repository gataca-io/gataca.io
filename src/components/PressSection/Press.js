import pressStyles from "./press.module.scss"
import React from "react"
import { graphql, StaticQuery } from "gatsby"

function renderPartners({ data, info }) {
  // filter Query to get to data
  data = data.allDataJson.nodes.filter(node => {
    return node ? !!node.pressSection : null
  })
  const partnersData = data[0].pressSection
  return (
    <section className={`${pressStyles.base}`}>
      <div className={`bx--grid ${pressStyles.container}`}>
        <div className={`bx--row ${pressStyles.row}`}>
          <div className={`bx--col-lg-16 bx--col-md-16 ${pressStyles.introText}`}>
            <p>{partnersData.title}</p>
          </div>
          {partnersData.pressReleases.map(el => {
            return (
              <a className={`bx--col-lg-3 bx--col-md-3 bx--col-sm-2 ${pressStyles.partnerContainer}`} href={el.url}
                 target="_blank" rel="noreferrer" key={el.title}>
                <div>
                  <img src={el.image.publicURL} alt={el.title}/>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function Press({ info }) {
  return (
    <StaticQuery
      query={
        graphql`
              query PressQuery {
                  allDataJson {
                        nodes {
                            pressSection {
                                title
                                pressReleases {
                                    title
                                    url
                                    image {
                                        publicURL
                                        relativePath
                                    }
                                }
                            }
                        }
                  }
              }
      `}
      render={data => renderPartners({ data, info })}/>
  )
}
