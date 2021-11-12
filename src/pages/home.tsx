import React, { useState, useEffect } from "react"

type IHomeProps = {}

const Home: React.FC<IHomeProps> = ({}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {

  }, [])

  return (
    <React.Fragment>
      Home
    </React.Fragment>
  )
}

Home.defaultProps = {}

export default Home
