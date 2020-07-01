import partnersStyles  from "./partners.module.scss"
import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"

function renderPartners({ data, info }) {
  // filter Query to get to data
  data = data.allDataJson.nodes.filter(node => {
    return node ? !!node.partnersSection : null
  })
  const partnersData = data[0].partnersSection;
  
  return (
    <section className={`${partnersStyles.base}`}>
      <div className={`bx--grid ${partnersStyles.container}`}>
        <div className={`bx--row ${partnersStyles.row}`} >
          <div className={`bx--col-lg-16 bx--col-md-16 ${partnersStyles.introText}`} >
            <p>{partnersData.title}</p>
          </div>
          {partnersData.partners.map(el=>{
            return (
              <a className={`bx--col-lg-3 bx--col-md-3 bx--col-sm-2 ${partnersStyles.partnerContainer}`} href={el.url} target="_blank">
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

export default function Partners({ info }) {
    return (
      <StaticQuery
        query={
          graphql`
              query PartnersQuery {
                  allDataJson {
                        nodes {
                            partnersSection {
                                title
                                partners {
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
