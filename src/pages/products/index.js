import React from "react"
// import useSiteMetaData from "../static_queries/useSiteMetadata"
import { BuildHelmet } from "../../components/auxiliary/HelmetBuilder"
import productsPage from "../../../content/data/productsPage.json"
import configMetaData from "../../../content/data/configMetaData.json"
import faqData from "../../../content/data/faqData.json"
import styles from "./products.module.scss"
import FaqSection from "../../components/faqSection/FaqSection"
import Layout from "../../layouts/Layout"
import HeadLineSection from "../../components/HeadLineSection/HeadLineSection"
import BulletCenter from "../../components/BulletCenter/BulletCenter"
import homeData from "../../../content/data/homeData.json"
import CtaSection from "../../components/CtaSection/CtaSection"
import { Button } from "carbon-components-react"
import ctaStyles from "../../components/CtaSection/cta.module.scss"
import { Link } from "gatsby"
import { SizeMe } from "react-sizeme"

export default function Products(props) {
  // const [productsList, setProductsList] = useState(productsData.products.slice(1))
  // const { infoData } = useSiteMetaData()
  // console.log("PRODUCTS PAGE DATA => ", props.data)
  return (
    <Layout>
      {productsPage && <article>
        
        <BuildHelmet
          title={productsPage.metas.title}
          description={productsPage.metas.description}
          twitterImg={productsPage.metas.twitterImage}
          facebookImg={productsPage.metas.facebookImage}
          linkedInImg={productsPage.metas.facebookImage}
        />
        
        <section className={styles.headlineContainer}>
          <HeadLineSection
            big
            title={productsPage.introProductsSection.title}
            subtitle={productsPage.introProductsSection.description}
          />
        </section>
        
        {/*PRODUCT IMAGES*/}
        <section className={styles.imagesRowContainer}>
          <div>
            {productsPage.productsImages.map(p => {
              return <img src={p.link} alt={p.title}/>
            })}
          </div>
        </section>
        
        {/*THE ECOSYSTEM*/}
        {/*        <section className={styles.sectionStyleWraps}>
          <h2>{productsPage.theEcosystem.title}</h2>
          <div>
            {
              productsPage.theEcosystem.bullets.map(bullet => {
                return <BulletCenter
                  key={bullet.title}
                  data={bullet}/>
              })
            }
          </div>
        </section>*/}
        
        {/*OUR PRODUCTS*/}
        {/*        <section className={styles.sectionStyle}>
          <div>
            <h2>{productsData.title}</h2>
            {
              productsList.map((bullet, i) => {
                return <BigBullet
                  right={i % 2 !== 0}
                  key={bullet.title}
                  imgSize={"m"}
                  title={bullet.title}
                  ctaText={bullet.ctaText}
                  ctaUrl={bullet.link}
                  description={bullet.description}
                  image={bullet.image}/>
              })
            }
          </div>
        </section>*/}
        
        {/*TODO: use sizeMe*/}
        <SizeMe>
          {({ size }) => {
            return <section className={styles.sectionStyle}>
              {/*       <div
                style={{
                  height: size.height,
                  width: size.width,
                }}
                className={styles.gradient}/>*/}
              
              {/*<div className={styles.header}>*/}
              <h2>{productsPage.findYourSolution.mainTitle}</h2>
              <div className={styles.line}/>
              {/*</div>*/}
              
              {/*CERTIFY*/}
              <div className={styles.productFlow}>
                <div className={styles.productImageContainer}>
                  <img src={productsPage.findYourSolution.certify.image}/>
                </div>
                <div className={styles.productTextContainer}>
                  <h3>{productsPage.findYourSolution.certify.product}</h3>
                  <h2>{productsPage.findYourSolution.certify.title}</h2>
                  <p dangerouslySetInnerHTML={{ __html: productsPage.findYourSolution.certify.description }}/>
                  <Link to={productsPage.findYourSolution.certify.ctaLink}
                  >
                    <Button
                      className={ctaStyles.ctaButton}
                      disabled={false}
                      iconDescription="Button icon"
                      kind="primary"
                      renderIcon={undefined}
                      size="default"
                      tabIndex={0}
                      type="button"
                    > {productsPage.findYourSolution.certify.ctaText}</Button>
                  </Link>
                </div>
                {size.width > 672 && (
                  <div className={styles.credentialFloating}>
                    <img className={styles.arrow} src={"/images/longArrowDown.svg"}/>
                    <img className={styles.mainImg} src={productsPage.findYourSolution.certifyToWallet.image}/>
                    <img className={styles.arrow} src={"/images/longArrowDown.svg"}/>
                  </div>
                )}
              </div>
              
              {/*WALLET*/}
              
              <div className={styles.productFlow}>
                <div className={styles.productWalletImageContainer}>
                  <div>
                    <img src={productsPage.findYourSolution.wallet.image}/>
                  </div>
                </div>
                <div className={styles.productTextContainer}>
                  <h3>{productsPage.findYourSolution.wallet.product}</h3>
                  <h2>{productsPage.findYourSolution.wallet.title}</h2>
                  <p dangerouslySetInnerHTML={{ __html: productsPage.findYourSolution.wallet.description }}/>
                  <Link to={productsPage.findYourSolution.wallet.ctaLink}
                  >
                    <Button
                      className={ctaStyles.ctaButton}
                      disabled={false}
                      iconDescription="Button icon"
                      kind="primary"
                      renderIcon={undefined}
                      size="default"
                      tabIndex={0}
                      type="button"
                    > {productsPage.findYourSolution.wallet.ctaText}</Button>
                  </Link>
                </div>
                
                {size.width > 672 && (
                  <div className={styles.qrFloating}>
                    {/*<img className={styles.arrow} src={"/images/longArrowDown.svg"}/>*/}
                    <img className={styles.qr} src={productsPage.findYourSolution.walletToConnect.image}/>
                    <img className={styles.arrow} src={"/images/longArrowDown.svg"}/>
                    <img className={styles.arrowCurved} src={"/images/curvedArrow.svg"}/>
                    <img className={styles.arrowCurvedTwo} src={"/images/curvedArrowTwo.svg"}/>
                  </div>
                )}
              </div>
              
              {/*CONNECT*/}
              <div className={styles.productFlow}>
                <div className={styles.productImageContainer}>
                  <img src={productsPage.findYourSolution.connect.image}/>
                </div>
                <div className={styles.productTextContainer}>
                  <h3>{productsPage.findYourSolution.connect.product}</h3>
                  <h2>{productsPage.findYourSolution.connect.title}</h2>
                  <p dangerouslySetInnerHTML={{ __html: productsPage.findYourSolution.connect.description }}/>
                  <Link to={productsPage.findYourSolution.connect.ctaLink}
                  >
                    <Button
                      className={ctaStyles.ctaButton}
                      disabled={false}
                      iconDescription="Button icon"
                      kind="primary"
                      renderIcon={undefined}
                      size="default"
                      tabIndex={0}
                      type="button"
                    > {productsPage.findYourSolution.connect.ctaText}</Button>
                  </Link>
                </div>
              </div>
            
            </section>
          }}
        </SizeMe>
        
        <section className={styles.sectionStyleWraps}>
          <h2>{productsPage.why.title}</h2>
          <div>
            {
              productsPage.why.bullets.map(bullet => {
                return <BulletCenter
                  bulletContainerStyles={styles.bulletStyle}
                  key={bullet.title}
                  data={bullet}/>
              })
            }
          </div>
        </section>
        
        <section className={styles.faqSectionContainer}>
          <FaqSection data={faqData.faqSection}/>
        </section>
        
        <CtaSection
          ctaText={homeData.ctaSection.ctaText}
          ctaUrl={configMetaData.bookACallUrl}
          title={homeData.ctaSection.title}
          description={homeData.ctaSection.description}
        />
      </article>
      }
    </Layout>
  )
}
