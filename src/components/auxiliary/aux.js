import React from "react"

export const DangerSetH2Html = ({ data }) => {
  return <h2 dangerouslySetInnerHTML={{ __html: data }}/>
}
export const DangerSetH3Html = ({ data }) => {
  return <h3 dangerouslySetInnerHTML={{ __html: data }}/>
}
export const DangerSetPHtml = ({ data }) => {
  return <p dangerouslySetInnerHTML={{ __html: data }}/>
}
