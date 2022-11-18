import React, { useState } from "react"
import Layout from "../layouts/Layout"
import styles from "../styles/pages/pricing.module.scss"
import data from "./../../content/data/pricing.json"
import { BuildHelmet } from "../components/auxiliary/HelmetBuilder"

// import BigBullet from "../components/BigBullet/BigBullet"
import LicenseCard from "../components/LicenseCard/LicenseCard"
import SwitchButton from "../components/buttons/SwitchButton/SwicthButton"

import CtaSection from "../components/CtaSection/CtaSection"
import HeadLineSection from "../components/HeadLineSection/HeadLineSection"

import { Button } from "carbon-components-react"
import { Link } from "gatsby"
import LightPanel from "../components/panels/LightPanel/LightPanel"

export default function Pricing() {
  const [currentCategory, setCurrentCategory] = useState(
    data.fourthSection.list[0]
  )

  const [currentQuestion, setCurrentQuestion] = useState("")
  const [switchPeriodValue, setmonthlyChecked] = useState("month")
  const selectPeriod = (period) => {
    setmonthlyChecked(period)
    // dispatch(setSelectedPeriodAction(period))
  }
  const switchButton = {
    options: [
      { text: "Pay Monthly", value: "month" },
      { text: "Pay Yearly", value: "year" },
    ],
    function: selectPeriod,
  }
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
                  label: "Choose Free",
                  // function: () => selectNewLicense(product),
                }}
                secondButton={{
                  label: "See All features",
                  // function: showAllFeaturesModal,
                }}
                period={switchPeriodValue}
                isCurrentLicense={false}
                isNewLicense={false}
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
            <div>
              <img
                class="alignnone size-full wp-image-13024"
                src={data.thirdSection?.topItems?.items[0]?.image}
                alt=""
                width="155"
                height="64"
              />
            </div>
            <div>
              <img
                class="alignnone size-medium wp-image-13023"
                src={data.thirdSection?.topItems?.items[1]?.image}
                alt=""
                width="155"
                height="64"
              />
            </div>
            <div>
              <img
                class="alignnone size-medium wp-image-13022"
                src={data.thirdSection?.topItems?.items[2]?.image}
                alt=""
                width="155"
                height="64"
              />
            </div>
            <div>
              <img
                class="alignnone size-medium wp-image-13021"
                src={data.thirdSection?.topItems?.items[3]?.image}
                alt=""
                width="155"
                height="64"
              />
            </div>
            <div>
              <img
                class="alignnone size-full wp-image-13020"
                src={data.thirdSection?.topItems?.items[4]?.image}
                alt=""
                width="155"
                height="64"
              />
            </div>
            <div>
              <img
                class="alignnone size-medium wp-image-13019"
                src={data.thirdSection?.topItems?.items[5]?.image}
                alt=""
                width="155"
                height="64"
              />
            </div>
            <div>
              <img
                class="alignnone size-medium wp-image-13018"
                src={data.thirdSection?.topItems?.items[6]?.image}
                alt=""
                width="155"
                height="64"
              />
            </div>
          </div>
          <div id={styles.logosHomePage}>
            <div className={styles.slider}>
              <div className={styles.slideTrack}>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-full wp-image-13024"
                    src={data.thirdSection?.topItems?.items[0]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-medium wp-image-13023"
                    src={data.thirdSection?.topItems?.items[1]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-medium wp-image-13022"
                    src={data.thirdSection?.topItems?.items[2]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-medium wp-image-13021"
                    src={data.thirdSection?.topItems?.items[3]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-full wp-image-13020"
                    src={data.thirdSection?.topItems?.items[4]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-medium wp-image-13019"
                    src={data.thirdSection?.topItems?.items[5]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-medium wp-image-13018"
                    src={data.thirdSection?.topItems?.items[6]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-medium wp-image-13017"
                    src={data.thirdSection?.topItems?.items[0]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-full wp-image-13016"
                    src={data.thirdSection?.topItems?.items[1]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-full wp-image-13015"
                    src={data.thirdSection?.topItems?.items[2]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-medium wp-image-13014"
                    src={data.thirdSection?.topItems?.items[3]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-medium wp-image-13013"
                    src={data.thirdSection?.topItems?.items[4]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-medium wp-image-13012"
                    src={data.thirdSection?.topItems?.items[5]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-medium wp-image-13011"
                    src={data.thirdSection?.topItems?.items[6]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-medium wp-image-13010"
                    src={data.thirdSection?.topItems?.items[0]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-medium wp-image-13009"
                    src={data.thirdSection?.topItems?.items[1]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-medium wp-image-13008"
                    src={data.thirdSection?.topItems?.items[2]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-full wp-image-13007"
                    src={data.thirdSection?.topItems?.items[3]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-full wp-image-13006"
                    src={data.thirdSection?.topItems?.items[4]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-medium wp-image-13005"
                    src={data.thirdSection?.topItems?.items[5]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-medium wp-image-13004"
                    src={data.thirdSection?.topItems?.items[6]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-medium wp-image-13003"
                    src={data.thirdSection?.topItems?.items[0]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-medium wp-image-13002"
                    src={data.thirdSection?.topItems?.items[1]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-medium wp-image-13001"
                    src={data.thirdSection?.topItems?.items[2]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-medium wp-image-12999"
                    src={data.thirdSection?.topItems?.items[3]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-medium wp-image-13000"
                    src={data.thirdSection?.topItems?.items[4]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-full wp-image-12998"
                    src={data.thirdSection?.topItems?.items[5]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-full wp-image-12997"
                    src={data.thirdSection?.topItems?.items[6]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-medium wp-image-12995"
                    src={data.thirdSection?.topItems?.items[0]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-medium wp-image-12996"
                    src={data.thirdSection?.topItems?.items[1]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-medium wp-image-12994"
                    src={data.thirdSection?.topItems?.items[2]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-medium wp-image-12993"
                    src={data.thirdSection?.topItems?.items[3]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-medium wp-image-12992"
                    src={data.thirdSection?.topItems?.items[4]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-medium wp-image-12991"
                    src={data.thirdSection?.topItems?.items[5]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-medium wp-image-12990"
                    src={data.thirdSection?.topItems?.items[6]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-medium wp-image-12989"
                    src={data.thirdSection?.topItems?.items[0]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>
                <div className={styles.slide}>
                  <img
                    class="alignnone size-full wp-image-12988"
                    src={data.thirdSection?.topItems?.items[1]?.image}
                    alt=""
                    width="250"
                    height="100"
                  />
                </div>

                {/* <div className={styles.slide}>
                      <img
                        className={`${styles.alignnone} ${styles.sizeFull} ${styles.wpImage13024}`}
                        src={data.thirdSection?.topItems?.items[0]}
                        alt=""
                        width="250"
                        height="100"
                        width="60"
                        height="60"
                      />
                    </div>
                    <div className={styles.slide}>
                      <img
                        className={`${styles.alignnone} ${styles.sizeMedium} ${styles.wpImage13023}`}
                        src={data.thirdSection?.topItems?.items[0]}
                        alt=""
                        width="250"
                        height="100"
                        width="110"
                        height="60"
                      />
                    </div>
                    <div className={styles.slide}>
                      <img
                        className={`${styles.alignnone} ${styles.sizeMedium} ${styles.wpImage13022}`}
                        src={data.thirdSection?.topItems?.items[2]}
                        alt=""
                        width="250"
                        height="100"
                        width="188"
                        height="60"
                      />
                    </div>
                    <div className={styles.slide}>
                      <img
                        className={`${styles.alignnone} ${styles.sizeMedium} ${styles.wpImage13021}`}
                        src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-vf_circle_logo-290.jpg"
                        alt=""
                        width="250"
                        height="100"
                        width="60"
                        height="60"
                      />
                    </div>
                    <div className={styles.slide}>
                      <img
                        className={`${styles.alignnone} ${styles.sizeFull} ${styles.wpImage13020}`}
                        src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-unitedhealthcareprocycling_logo2017-trans.jpg"
                        alt=""
                        width="250"
                        height="100"
                        width="285"
                        height="60"
                      />*/}
              </div>
            </div>
          </div>
          {/* // </div>
              // <div className={styles.thirdSection__bulletsContainer__bullet}>
              //   <img 
              //     className={
              //       styles.thirdSection__bulletsContainer__bullet__image
              //     }
              //     src={item.image}
              //     alt={item.title}
              //   />
              //   <p
              //     className={
              //       styles.thirdSection__bulletsContainer__bullet__text
              //     }
              //   >
              //     {item.title}
              //   </p>
              // </div>
            
          // })}
       */}{" "}
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
                  {/* <img
                    className={styles.chip__image}
                    src="/icons/plus.svg"
                    alt={question.text}
                  /> */}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CtaSection
        ctaUrl={data.bottomSection.buttonLink}
        backgroundColor={"var(--bg-grey)"}
        ctaText={data.bottomSection.buttonText}
        title={data.bottomSection.title}
      />
    </Layout>
  )
}
