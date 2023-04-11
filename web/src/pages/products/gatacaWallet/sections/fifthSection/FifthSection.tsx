import * as React from "react"
import cx from "classnames"
import { images } from "../../../../../images/images"
import * as styles from "./fifthSection.module.scss"
import { useRef } from "react"
import useOnScreen, {
  checkScrollDirection,
  enableScrolling,
  passScrollingFunction,
  useOnScreenAgain,
} from "../../../../../utils/viewport"
import { App1 } from "./scroll/scrollableView"
import { useMotionValue, motion, useTransform } from "framer-motion"
import { videos } from "../../../../../videos/videos"
export type ISectionProps = {
  title: string
  list: {
    title: string
    description?: string
    image: string
  }[]
}

const stepVideos = [
  videos.createCredentialVideo,
  videos.verifiableCredentialVideo,
  videos.SSIvideo,
  videos.servicesVideo,
]

const FifthSection: React.FC<ISectionProps> = props => {
  const { title, list } = props
  const elementRef = React.useRef<HTMLDivElement>(null)
  const [selectedStep, setSelectedStep] = React.useState(0)
  const ref = React.useRef<HTMLDivElement>(null)

  let divContainer: HTMLElement | null | undefined
  let contentContainer: HTMLElement | null | undefined
  let fourthStep1: HTMLElement | null | undefined

  React.useEffect(() => {
    divContainer = document
      ? document?.getElementById("fifthSection")
      : undefined
    contentContainer = document
      ? document?.getElementById("sectionContainer")
      : undefined
    fourthStep1 = document ? document?.getElementById("step3") : undefined
  })

  const disableBodyScroll = (entries, observer1) => {
    if (entries[0]?.isIntersecting) {
      console.log("Five Section Is Intersecting? YES")
      divContainer && contentContainer
        ? ((divContainer.style.position = "fixed"),
          (divContainer.style.top = "0"),
          (divContainer.style.left = "0"),
          (divContainer.style.height = "100%"),
          (divContainer.style.zIndex = "999999999"),
          (contentContainer.style.overflowY = "scroll"))
        : null
    } else if (!entries[0]?.isIntersecting) {
      console.log("Five Section Is Intersecting? NO")
      divContainer && contentContainer
        ? ((divContainer.style.position = "relative"),
          (divContainer.style.top = "0"),
          (divContainer.style.left = "0"),
          (divContainer.style.zIndex = "1"),
          (contentContainer.style.overflowY = "hidden"))
        : null
    }
  }

  // const containerObserver = new IntersectionObserver(disableBodyScroll, {
  //   root: null,
  //   rootMargin: "0px 0px 0px 0px",
  //   threshold: 0.9,
  // })

  // divContainer && containerObserver.observe(divContainer)

  const enableBodyScroll = (entries, observer1) => {
    if (!entries[0]?.isIntersecting) {
      console.log("step 4 Is Intersecting? NO")
      // divContainer && contentContainer
      //   ? ((divContainer.style.position = "relative"),
      //     (divContainer.style.top = "0"),
      //     (divContainer.style.left = "0"),
      //     (divContainer.style.zIndex = "1"),
      //     (contentContainer.style.overflowY = "hidden"))
      //   : null
    } else {
      console.log("step 4 Is  Intersecting? YES")
      divContainer && contentContainer
        ? ((divContainer.style.position = "relative"),
          (divContainer.style.top = "0"),
          (divContainer.style.left = "0"),
          (divContainer.style.zIndex = "1"),
          (contentContainer.style.overflowY = "scroll"))
        : null
    }
  }

  // const stepsObserver = new IntersectionObserver(enableBodyScroll, {
  //   root: null,
  //   rootMargin: "0px 0px 0px 0px",
  //   threshold: 0.9,
  // })

  // firstStep1 && stepsObserver.observe(firstStep1)
  // fourthStep1 && stepsObserver.observe(fourthStep1)

  return (
    <div id="fifthSection" className={styles.fifthSection__container}>
      <div id="sectionContainer" className={styles.section}>
        <div className={styles.img}>
          <video
            width="250"
            src={stepVideos[0]}
            // height="686.43"
            autoPlay
            playsInline
            muted
          ></video>
        </div>
        <div>
          {list?.map((item, index) => {
            const { title, description } = item

            return (
              <div
                id={"step" + index}
                className={`${styles.fifthSection__rightSide__bullets__container}`}
                ref={ref}
              >
                <img src={images.checkIcon} />
                <div>
                  <p className={`${cx("heading6")}`}>{title}</p>
                  <p className={`${cx("bodyRegularMD marginTop8")}`}>
                    {description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>

    // <div id="fifthSection" className={`${styles.fifthSection__container} `}>
    //   <div className={styles.header}>
    //     <p className={`${cx("heading3 marginBottom12")} ${styles.title}`}>
    //       {title}
    //     </p>
    //   </div>
    //   <section className={styles.fifthSection}>
    //     <div className={styles.fifthSection__leftSide}>
    //       <div
    //         style={{
    //           height: "100vh",
    //           display: "flex",
    //           alignItems: "center",
    //         }}
    //       >
    //         <img src={images.rocket} />
    //       </div>
    //       {/* {list?.map((item, index) => {
    //         const { title, description } = item

    //         return (
    //           <div
    //             style={{
    //               height: "100vh",
    //               display: "flex",
    //               alignItems: "center",
    //             }}
    //           >
    //             <img src={images.rocket} />
    //           </div>
    //         )
    //       })} */}
    //     </div>

    //     <div className={`${cx("heading3")} ${styles.fifthSection__rightSide}`}>
    //       {/* <p className={`${cx("heading3 marginBottom12")}`}>{title}</p> */}

    //       <div className={styles.fifthSection__rightSide__bullets}>
    //         {list?.map((item, index) => {
    //           const { title, description } = item

    //           return (
    //             // selectedStep === index && (
    //             <div
    //               className={`${styles.fifthSection__rightSide__bullets__container}`}
    //             >
    //               <img src={images.checkIcon} />
    //               <div>
    //                 <p className={`${cx("heading6")}`}>{title}</p>
    //                 <p className={`${cx("bodyRegularMD marginTop8")}`}>
    //                   {description}
    //                 </p>
    //               </div>
    //             </div>
    //             // )
    //           )
    //         })}
    //       </div>
    //       <div ref={elementRef}></div>
    //     </div>
    //   </section>
    //   <div className={styles.footer}></div>
    // </div>
  )
  // <App1 />
}

export default FifthSection
