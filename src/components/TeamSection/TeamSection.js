import { graphql, StaticQuery } from "gatsby"
import React, { Fragment } from "react"
import aboutStyles from "../../styles/pages/about.module.scss"
import Img from "gatsby-image"

function RenderTeamSection({ data }) {
  data = data.allDataJson.edges.filter(edge => {
    return edge ? !! edge.node.teamDataSection : null
  })
  const teamData = data;
  console.log(teamData);
  
  return( <Fragment/>
/*    <section className={`bx--grid ${ aboutStyles.teamContainer }`}>
      
      <h2>{data.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: data.description }}/>
      
      <div className={`bx--row ${ aboutStyles.teamSection }`}>
        {teamData.team.map(gato => {
          return (
            <div className={`bx--col-sm-16 ${ aboutStyles.personContainer }`}>
              <Img
                fluid={teamData.hero_image.childImageSharp.fluid}
                alt={teamData.title}
              />
              <div className={aboutStyles.infoPerson}>
                <h3>{gato.name}</h3>
                <p>{gato.bio}</p>
                <div className={aboutStyles.rrssSection}>
                  {gato.links.map(link=>{
                    return <a href={link.url}>
                      <img src={link.icon}/>
                    </a>
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    
    </section>*/
  )
}

export default function TeamSection( ) {
  return (
    <StaticQuery
      query={
        graphql`
            query TeamQuery {
              allDataJson {
                edges {
                  node {
                    teamDataSection {
                      description
                      title
                      team {
                        bio
                        name
                        links {
                          name
                          url
                        }
                        photo {
                          childImageSharp {
                            fluid(maxWidth: 400) {
                                ...GatsbyImageSharpFluid
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
      `}
      render={data => RenderTeamSection({ data })}/>
  )
}
