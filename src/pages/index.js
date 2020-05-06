import React from "react"
import Layout from "../components/Layout/Layout"
import BlogList from "../components/BlogList/BlogList"
import homeStyles from "./../styles/pages/home.module.scss"
import iphoneImg from "./../../content/images/iphone.svg"
import homeData  from "./../../content/data/homeData.json"

export default function IndexPage() {
  return (
    <Layout page="home" bgColor="inherit" className={homeStyles.base}>
      <article className={homeStyles.home}>
        <div className={homeStyles.introSection}>
          <div className={homeStyles.introSection__container}>
          
            <img src={iphoneImg}/>
            <section className={homeStyles.introSection__info}>
              <h1>{homeData.mainTitle} <span>platform</span></h1>
              <h3>{homeData.mainSubtitle} </h3>
              <p>{homeData.mainParagraph} </p>
              <button>{homeData.ctaText}</button>
            </section>
            
          </div>
        </div>
      </article>
    </Layout>
  )
}
