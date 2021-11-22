import React from "react"
import clientStyles from "./client.module.scss"
import { graphql, StaticQuery } from "gatsby"

function renderClients({ data, info }) {
  // filter Query to get to data
  data = data.allDataJson.nodes.filter((node) => {
    return node ? !!node.clientsDataSection : null
  })
  const partnersData = data[0].clientsDataSection
  // console.log(partnersData)
  return (
    <section className={`${clientStyles.base}`}>
      <div className={`bx--grid ${clientStyles.container}`}>
        <div className={`bx--row ${clientStyles.row}`}>
          <div className={`bx--col-lg-16 bx--col-md-16 ${clientStyles.introText}`}>
            <h2>{partnersData.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: partnersData.description }}/>
          </div>
          <div className={`${clientStyles.pressContainer}`}>
            {partnersData.clients.map((el) => {
              return (
                <a
                  className={`bx--col-lg-3 bx--col-md-3 bx--col-sm-2 ${clientStyles.partnerContainer}`}
                  href={el.url}
                  target="_blank"
                  rel="noreferrer"
                  key={el.title}
                >
                  <div>
                    <img src={el.photo} alt={el.title}/>
                  </div>
                  <p>{el.title}</p>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Clients({ info, pointer }) {
  return (
    <StaticQuery
      query={graphql`
        query ClientsQuery {
          allDataJson {
            nodes {
              clientsDataSection {
                title
                description
                clients {
                  title
                  link
                  photo {
                    publicURL
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => renderClients({ data, info })}
    />
  )
}

