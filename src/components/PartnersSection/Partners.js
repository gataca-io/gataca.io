import partnersStyles  from "./partners.module.scss"
import React from "react"

export default function Partners(props) {
  return (
    <section className={partnersStyles.partnersStyles}>
      <section className={partnersStyles}>
        {props.data.partners.map(el=>{
          return <div>
            <h5>{el.title}</h5>
            <img src={el.partnerImage}/>
          </div>
        })}
      </section>
    </section>
  )
}

export const query = graphql`
    query partners {
        allDataJson(filter: {}) {
            nodes {
                partnerSection {
                    title
                    partners {
                        title
                        partnerImage
                    }
                }
            }
        }
    }
`
