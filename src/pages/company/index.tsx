import React, { useState, useEffect } from "react"

type ICompanyProps = {}

const Company: React.FC<ICompanyProps> = ({}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {

  }, [])

  return (
    <React.Fragment>
      Company
    </React.Fragment>
  )
}

Company.defaultProps = {}

export default Company
