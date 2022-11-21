import React, { useState } from "react"
import Layout from "../layouts/Layout"
import styles from "../styles/pages/pricing.module.scss"
import data from "./../../content/data/pricing.json"
import { BuildHelmet } from "../components/auxiliary/HelmetBuilder"
import LicenseCard from "../components/LicenseCard/LicenseCard"
import SwitchButton from "../components/buttons/SwitchButton/SwicthButton"
import LicensesTable from "../components/LicensesTable/LicensesTable"
import HeadLineSection from "../components/HeadLineSection/HeadLineSection"
import { Button } from "carbon-components-react"
import { Link } from "gatsby"
import LightPanel from "../components/panels/LightPanel/LightPanel"

export default function Pricing() {
  const timesToRepeatCarrouselImages = 2
  const [currentCategory, setCurrentCategory] = useState(
    data.fourthSection.list[0]
  )
  const [currentQuestion, setCurrentQuestion] = useState("")
  const [switchPeriodValue, setmonthlyChecked] = useState("month")
  const selectPeriod = (period) => {
    console.log("switchPeriodValue", period)
    setmonthlyChecked(period)
  }
  const switchButton = {
    options: [
      { text: "Pay Monthly", value: "month" },
      { text: "Pay Yearly", value: "year" },
    ],
    function: selectPeriod,
  }

  const licenseIsEnterprise = (license) =>
    license?.name?.toLowerCase()?.includes("enterprise")

  return (
    <Layout>
      <BuildHelmet
        title={data.metas.title}
        description={data.metas.description}
        twitterImg={data.metas.twitterImage}
        facebookImg={data.metas.facebookImage}
        linkedInImg={data.metas.facebookImage}
      />

      <section className={styles.headlineContainer}>
        <div className={styles.circle1} />
        <div className={styles.circle3} />
        <div className={styles.circle4} />
        <HeadLineSection
          big
          title={data.headline.title}
          subtitle={data.headline.subtitle}
          ctaText={data.headline.buttonText}
          ctaLinkTargetBlank
          ctaLink={data.headline.buttonLink}
        />
      </section>

      <section className={styles.firstSection}>
        <div className={styles.firstSection__header}>
          <LightPanel className={styles.firstSection__header__title}>
            <p>{data.firstSection.title}</p>
          </LightPanel>
          <SwitchButton
            checkedValue={switchPeriodValue}
            options={switchButton.options}
            onChangeSwitchSelect={switchButton.function}
          />
        </div>
        <div className={styles.subContainer}>
          {data.firstSection?.products.map((product) => {
            return (
              <LicenseCard
                license={product}
                firstButton={{
                  label: "Get started",
                  // function: () => selectNewLicense(product),
                }}
                secondButton={{
                  label: "See all features",
                  // function: showAllFeaturesModal,
                }}
                period={switchPeriodValue}
                isCurrentLicense={false}
                isNewLicense={false}
                popularLicenseType={"Professional"}
              />
            )
          })}
        </div>
      </section>

      <section className={styles.secondSection}>
        <img
          className={styles.chip__image}
          src={data.secondSection.image}
          alt={data.secondSection.text}
        />
        <div className={styles.secondSection__content}>
          <h2 className={styles.secondSection__content__title}>
            {data.secondSection.title}
          </h2>
          <p className={styles.secondSection__content__text}>
            {data.secondSection.text}
          </p>
          <Link rel="noreferrer" to={data.secondSection.buttonLink}>
            <Button className={styles.secondSection__content__button}>
              {" "}
              {data.secondSection.buttonText}
            </Button>
          </Link>
        </div>
      </section>
      <section className={styles.thirdSection}>
        <h2>{data.thirdSection?.topItems?.title}</h2>
        <div className={styles.thirdSection__bulletsContainer}>
          <div className={styles.logosHomePageMobile}>
            {data.thirdSection?.topItems?.items.map((item) => {
              return (
                <div>
                  <img
                    class="alignnone size-full wp-image-13024"
                    src={item?.image}
                    alt={item?.alt}
                    width="155"
                    height="64"
                  />
                </div>
              )
            })}
          </div>
          <div id={styles.logosHomePage}>
            <div className={styles.slider}>
              <div className={styles.slideTrack}>
                {[...Array(timesToRepeatCarrouselImages)].map((e, i) => {
                  return data.thirdSection?.topItems?.items.map((item) => {
                    return (
                      <div className={styles.slide}>
                        <img
                          src={item?.image}
                          class="alignnone size-full wp-image-13024"
                          alt={item?.alt}
                          width="250"
                          height="100"
                        />
                      </div>
                    )
                  })
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.fourthSection}>
        <h2>{data.fourthSection.title}</h2>
        <div className={styles.fourthSection__content}>
          <div className={styles.list}>
            {data.fourthSection.list.map((el) => {
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

      <section className={styles.fifthSection}>
        <h2 id="topOfAllFeatures">{data.fifthSection.title}</h2>
        <LicensesTable
          switchButtonOptios={switchButton?.options}
          products={data.firstSection.products}
          switchPeriodValue={switchPeriodValue}
          selectPeriod={selectPeriod}
          licenseIsEnterprise={licenseIsEnterprise}
        />
      </section>
    </Layout>
  )
}
