import React from "react"
import styles from "./description.module.scss"

type DescriptionProps = {
  text: string
  className?: string
}

const Description: React.FC<DescriptionProps> = React.memo((props) => {
  const { text, className } = props

  return <p className={`${styles.description} ${className}`}>{text}</p>
})

export default Description
