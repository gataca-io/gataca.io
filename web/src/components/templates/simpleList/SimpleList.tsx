import * as React from "react"
import { images } from "../../../images/images"

export type ISimpleListProps = {
  title: string
  description: string
}

const SimpleList: React.FC<ISimpleListProps> = props => {
  const { title, description } = props
  return (
    <>
      <h5>{title}</h5>
      <p>{description}</p>
    </>
  )
}

export default SimpleList
