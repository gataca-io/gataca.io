import footerStyles  from "./footer.module.scss"
import React from "react"

export default function FooterSection({ data }) {
  return (
    <section className={footerStyles.base}>
      <div className={footerStyles.container}>
        
          <div className={footerStyles.findUs}>
            <h2>{data.title}</h2>
            <div className={footerStyles.email}>
              <a href={'mailto:' + data.contant_email}></a>
                <p>{data.contant_email}</p>
            </div>
            <div>
              {data.findUs.map(el=>{
                return (
                  <div>
                    <h3>{el.city}</h3>
                    <p>{el.street}</p>
                    <p>{el.street_code}</p>
                  </div>
                )
              })}
            </div>
          </div>
          
          <div className={footerStyles.followUs}>
            <h2>{data.title_2}</h2>
            <div>
            
            {data.rrss.map(el=>{
              return <div className={footerStyles.rrss_icon}>
                <a href={el.url} target="_blank">
                  <img src={el.icon} alt={el.name}/>
                </a>
              </div>
            })}
            </div>
          </div>
        </div>
        
          <div className={footerStyles.copyright}>
            <p>{data.copyright}</p>
          </div>
        
    </section>
  )
}
