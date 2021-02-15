import { graphql, StaticQuery } from "gatsby"
import React  from "react"
import teamSectionStyles from "./teamSection.module.scss"
import Img from "gatsby-image"

function RenderTeamSection({ data }) {
  data = data.allDataJson.edges.filter(edge => {
    return edge ? !! edge.node.teamDataSection : null
  })
  const teamData = data[0].node.teamDataSection;
  console.log(teamData);
  
  return(
    <section className={`bx--grid ${ teamSectionStyles.teamContainer }`}>
      
      <h2>{teamData.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: teamData.description }}/>
      
      <div className={`bx--row ${ teamSectionStyles.teamSection }`}>
        {teamData.team.map(gato => {
          return (
            <div className={`bx--col-sm-16 ${ teamSectionStyles.personContainer }`}>
              <Img
                className={teamSectionStyles.imgStyles}
                fluid={gato.photo}
                title={gato.title}
                alt={gato.title}
                fadeIn={true}
                durationFadeIn={500}
                // objectFit="cover"
              />
              <div className={teamSectionStyles.infoPerson}>
                <h3>{gato.name}</h3>
                <div dangerouslySetInnerHTML={{ __html: gato.bio }}/>
                <div className={teamSectionStyles.rrssSection}>
                  {gato.links.map(link=>{
                    return <a href={link.url} target="_blank" rel="noreferrer" >
                      <img src={link.icon} alt={link.url}/>
                    </a>
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    
    </section>
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
                          icon
                        }
                        photo
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
