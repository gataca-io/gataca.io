import React, { useState } from "react"
// import useSiteMetaData from "../static_queries/useSiteMetadata"
import { BuildHelmet } from "../../components/auxiliary/HelmetBuilder"
import productsPage from "../../../content/data/productsPage.json"
import configMetaData from "../../../content/data/configMetaData.json"
// import faqData from "../../../content/data/faqData.json"
// import styles from "./products.module.scss"
// import FaqSection from "../../components/faqSection/FaqSection"
import Layout from "../../layouts/Layout"
// import HeadLineSection from "../../components/HeadLineSection/HeadLineSection"
// import BulletCenter from "../../components/BulletCenter/BulletCenter"
import homeData from "../../../content/data/homeData.json"
import pricingData from "../../../content/data/pricing.json"
import CtaSection from "../../components/CtaSection/CtaSection"
// import { Button } from "carbon-components-react"
import styles from "../../styles/pages/products.module.scss"
import { Link } from "gatsby"
import DarkButton from "../../components/buttons/DarkButton/DarkButton"
import LightButton from "../../components/buttons/LightButton/LightButton"
// import { SizeMe } from "react-sizeme"

export default function Products(props) {
  const [currentCategory, setCurrentCategory] = useState(
    pricingData.fourthSection.list[0]
  )
  const [currentQuestion, setCurrentQuestion] = useState("")
  // const [productsList, setProductsList] = useState(productsData.products.slice(1))
  // const { infoData } = useSiteMetaData()
  // console.log("PRODUCTS PAGE DATA => ", props.data)
  return (
    <Layout>
      {productsPage && (
        <article>
          <BuildHelmet
            title={productsPage.metas.title}
            description={productsPage.metas.description}
            twitterImg={productsPage.metas.twitterImage}
            facebookImg={productsPage.metas.facebookImage}
            linkedInImg={productsPage.metas.facebookImage}
          />

          <section className={styles.introSection}>
            <div className={styles.subContainer}>
              <div className={styles.textBox}>
                <Link to={productsPage.introSection.buttonLink}>
                  <button className={styles.ctaButton}>
                    {productsPage.introSection.buttonText}
                  </button>
                </Link>
                <h1>{productsPage.introSection.title}</h1>
                <h3>{productsPage.introSection.description}</h3>
              </div>

              <div className={styles.hero_container}>
                <img
                  src={productsPage.introSection.image}
                  alt={homeData.bigCtaSection.title}
                />
              </div>
            </div>

            <div className={styles.introSection__panel}>
              <p>{productsPage.introSection.panel}</p>
            </div>
          </section>

          <section className={styles.firstSection}>
            <div className={styles.firstSection__panelsContainer}>
              {productsPage.firstSection.studio.map((panel) => {
                return (
                  <div className={styles.panel}>
                    <div className={styles.panelContent}>
                      <p className={styles.title}>{panel.title}</p>
                      <p className={styles.description}>
                        {panel.textFirstParagraph}
                      </p>
                      <p className={styles.description}>
                        {panel.textSecondParagraph}
                      </p>
                      {panel.buttonLink ? (
                        <Link to={panel.buttonLink} target="_blank">
                          <DarkButton text={panel.buttonText} />
                        </Link>
                      ) : (
                        <div className={styles.downloadOptions}>
                          <Link to={panel.buttonAppleLink} target="_blank">
                            <img
                              src={panel.buttonAppleImage}
                              alt={panel.title}
                            />
                          </Link>
                          <Link to={panel.buttonGoogleLink} target="_blank">
                            <img
                              src={panel.buttonGoogleImage}
                              alt={panel.title}
                            />
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className={styles.panelImage}>
                      <img src={panel.image} alt={panel.title} />
                    </div>
                  </div>
                )
              })}
            </div>
            <div className={styles.advantages}>
              {productsPage.firstSection.panels.map((item) => {
                return (
                  <div className={styles.item}>
                    <img
                      className={styles.icon}
                      src={item.icon}
                      alt={item.title}
                    />
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.description}>{item.text}</p>
                  </div>
                )
              })}
            </div>
          </section>
          <section className={styles.secondSection}>
            <h2 className={styles.title}>{productsPage.secondSection.title}</h2>
            <p className={styles.description}>
              {productsPage.secondSection.description}
            </p>

            <div className={styles.fundamentals}>
              {productsPage.secondSection.panels.map((item) => {
                return (
                  <div className={styles.item}>
                    <div className={styles.tag}>{item.tag}</div>
                    <div className={styles.content}>
                      <div className={styles.role}>
                        <p className={styles.title}>{item.firstTitle}</p>
                        <p className={styles.description}>{item.firstText}</p>
                      </div>

                      {item.secondTitle && (
                        <div className={styles.role}>
                          <p className={styles.title}>{item.secondTitle}</p>
                          <p className={styles.description}>
                            {item.secondText}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
          <section className={styles.fourthSection}>
            <h2 className={styles.title}>{productsPage.fourthSection.title}</h2>
            <p className={styles.description}>
              {productsPage.fourthSection.description}
            </p>
            <p className={styles.subtitle}>
              {productsPage.fourthSection.subtitle}
            </p>

            <div className={styles.licenses}>
              {productsPage.fourthSection.panels.map((item) => {
                return (
                  <div className={styles.item}>
                    {item.popular && <div className={styles.tag}>Popular</div>}
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.description}>{item.text}</p>
                    {productsPage.fourthSection.panels[0] === item ? (
                      <Link
                        to={"https://studio.gataca.io/login"}
                        target="_blank"
                      >
                        <DarkButton
                          className={styles.button}
                          text={item.buttonText}
                        />
                      </Link>
                    ) : (
                      <Link to={"/pricing"} target="_blank">
                        <LightButton
                          className={styles.button}
                          text={item.buttonText}
                        />
                      </Link>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
          <section className={styles.fifthSection}>
            <h2>{pricingData.fourthSection.title}</h2>
            <div className={styles.fifthSection__content}>
              <div className={styles.list}>
                {pricingData.fourthSection.list.map((el) => {
                  return (
                    <div
                      onClick={() => {
                        setCurrentCategory(el)
                        currentCategory !== el && setCurrentQuestion("")
                      }}
                      className={`${styles.list__category} ${
                        currentCategory === el
                          ? styles.list__category__selected
                          : ""
                      }`}
                    >
                      <p>{el.category}</p>
                    </div>
                  )
                })}
              </div>
              <div className={styles.questions}>
                {currentCategory?.questions.map((question) => {
                  return (
                    <div className={styles.questions__item}>
                      <div className={styles.questions__item__header}>
                        <p className={styles.chip__text}>{question.title}</p>

                        <svg
                          onClick={() => {
                            console.log(
                              currentQuestion?.includes(question?.title),
                              currentQuestion?.split(question?.title)
                            )
                            setCurrentQuestion(
                              currentQuestion?.includes(question?.title)
                                ? currentQuestion?.split(question?.title)[0]
                                : currentQuestion + question?.title
                            )
                          }}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {!currentQuestion.includes(question?.title) && (
                            <path
                              d="M9 1.25V17.75"
                              stroke="#181B5E"
                              stroke-width="0.8"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          )}
                          <path
                            d="M17.25 9.5H0.75"
                            stroke="#181B5E"
                            stroke-width="0.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      {currentQuestion.includes(question?.title) && (
                        <p className={styles.chip__text}>{question.text}</p>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
          <CtaSection
            ctaText={productsPage.sixthSection.buttonText}
            ctaUrl={productsPage.sixthSection.buttonLink}
            title={productsPage.sixthSection.title}
          />
        </article>
      )}
    </Layout>
  )
}
