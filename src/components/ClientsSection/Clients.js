import React from "react"
import clientStyles from "./client.module.scss"
import { graphql, StaticQuery } from "gatsby"
import aboutData from "./../../../content/data/aboutData.json"

export default function Clients({ data, info }) {
  // filter Query to get to data
  const clientsData = aboutData.clientsDataSection
  // console.log(partnersData)
  return (
    <section className={`${clientStyles.base}`}>
      <div className={`bx--grid ${clientStyles.container}`}>
        <div className={`bx--row ${clientStyles.row}`}>
          <div className={`bx--col-lg-16 bx--col-md-16 ${clientStyles.introText}`}>
            <h2>{clientsData.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: clientsData.description }}/>
          </div>
          <div className={`${clientStyles.pressContainer}`}>
            {clientsData.clients.map((el) => {
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
