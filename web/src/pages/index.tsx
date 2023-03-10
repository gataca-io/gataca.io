import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import Layout from "../components/templates/mainLayout/MainLayout"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}

interface homeDataModel {
  attributes: {
    Body: string
    Title: string
    HeroImage?: {
      data: {
        attributes: {
          url: string
        }
      }
    }
  }
}

const IndexPage: React.FC<PageProps> = () => {
  const [homeData, setHomeData] = useState<homeDataModel | undefined>()

  useEffect(() => {
    getHomeData()
  }, [])

  const getHomeData = async () => {
    await fetch("http://127.0.0.1:1337/api/entry?populate=*")
      .then(response => response.json())
      .then(jsonResponse => {
        setHomeData(jsonResponse?.data)
      })
      .catch((error: any) => {
        console.error(error)
      })
  }

  return (
    <Layout>
      <main style={pageStyles}>
        <h1 style={headingStyles}>{homeData?.attributes?.Title}</h1>
        <img
          style={{ width: 300 }}
          alt="Hero image"
          src={
            "http://127.0.0.1:1337" +
            homeData?.attributes?.HeroImage?.data?.attributes?.url
          }
        />
        <p>MarkDown text Example:</p>
        <ReactMarkdown>
          {homeData?.attributes?.Body?.replaceAll(
            "/uploads/",
            "http://localhost:1337/uploads/"
          ) || ""}
        </ReactMarkdown>
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
