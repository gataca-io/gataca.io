import React from "react"
import ReactDOM from "react-dom"
import { useMotionValue, motion, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import toolbox from "react-tiny-swiper"
import { images } from "../../../../../../images/images"
import { PageProps } from "gatsby"
// // import { LoremIpsum } from "lorem-ipsum"
// import * as styles from "../fifthSection.module.scss"

// // import "./styles.css"

// // const clamp = (min, max) => value => Math.min(max, Math.max(min, value))

// // // const lorem = new LoremIpsum({
// // //   sentencesPerParagraph: {
// // //     max: 8,
// // //     min: 4,
// // //   },
// // //   wordsPerSentence: {
// // //     max: 16,
// // //     min: 4,
// // //   },
// // // })

// // const SRC =
// //   "https://images.unsplash.com/photo-1574090524868-3aab11301e6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"
// // const SRC2 =
// //   "https://images.unsplash.com/photo-1574192773018-be32f27632d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"

// // const getTransform = visible => {
// //   switch (visible) {
// //     case "onEnter":
// //       return [0, 1, 1, 1]
// //     case "onExit":
// //       return [1, 1, 1, 0]
// //     default:
// //       return [0, 1, 1, 0]
// //   }
// // }

// // const Section = ({ src, visible, key }) => {
// //   const ref = React.useRef<HTMLDivElement>(null)
// //   const offsetValue = useMotionValue(0, {})
// //   const [height, setHeight] = React.useState(0)
// //   //   const para = React.useMemo(
// //   //     () => lorem.generateParagraphs(Math.round(Math.random() * 5) + 1),
// //   //     []
// //   //   )

// //   React.useEffect(() => {
// //     const onScroll = e => {
// //       const elementRect = ref?.current?.getBoundingClientRect()
// //       console.log(JSON.stringify(elementRect, null, 4))
// //       const elementTopOffset = elementRect?.top
// //       const elementCenterTopOffset =
// //         elementTopOffset && elementTopOffset + elementRect?.height / 2
// //       const screenRelativeTopOffset =
// //         elementCenterTopOffset && elementCenterTopOffset / window.innerHeight
// //       const normalizedScreenRelativeTopOffset = clamp(
// //         0,
// //         1
// //       )(screenRelativeTopOffset)

// //       elementRect?.height && setHeight(elementRect?.height)
// //       offsetValue.set(normalizedScreenRelativeTopOffset)
// //     }

// //     window.addEventListener("scroll", onScroll)

// //     return () => window.removeEventListener("scroll", onScroll)
// //   }, [offsetValue])
// //   const inputRange = [0.1, 0.5, 0.6, 1]
// //   const outputRange = getTransform(visible)
// //   const output = useTransform(offsetValue, inputRange, outputRange)

// //   return (
// //     <motion.section className={styles.section}>
// //       <motion.div
// //         className={styles.img}
// //         style={{
// //           position: "absolute",
// //           top: 0,
// //           left: 0,
// //           bottom: 0,
// //           right: "50%",
// //           opacity: output,
// //         }}
// //         opacity={output}
// //       >
// //         <div
// //           style={{
// //             width: "100%",
// //             position: "sticky",
// //             top: `calc((100% - ${height}px)/2)`,
// //             height: height | "",

// //             display: "flex",
// //             justifyContent: "center",
// //             alignItems: "center",
// //           }}
// //         >
// //           <img style={{ width: "100%" }} src={src} />
// //         </div>
// //       </motion.div>
// //       <motion.div
// //         style={{
// //           width: "50%",
// //           display: "flex",
// //           justifyContent: "center",
// //           flexDirection: "column",
// //           marginLeft: "55%",
// //           opacity: output,
// //         }}
// //         className={styles.text}
// //         opacity={output}
// //         ref={ref}
// //       >
// //         <h2>Section header</h2>
// //         <p>
// //           Duis amet incididunt veniam nisi qui eu laboris. Ullamco exercitation
// //           nulla aute eu magna consectetur voluptate tempor ut sunt velit ea
// //           ipsum id nostrud. Occaecat esse Lorem deserunt cillum excepteur est
// //           esse aliquip est irure sint est consectetur tempor irure. Occaecat
// //           cillum amet sit sit ipsum labore sint. Consequat duis labore mollit
// //           dolor proident sint elit amet tempor deserunt anim. Fugiat nostrud
// //           tempor nostrud qui amet proident do velit commodo dolor ut proident
// //           sint eiusmod eu. Ut duis fugiat esse labore ex cupidatat
// //           reprehenderit. Esse veniam occaecat est est enim nisi sunt qui anim
// //           deserunt velit Lorem mollit laboris. Sit aliquip dolor irure magna
// //           magna adipisicing non eu ea non excepteur. Tempor non nisi dolore non
// //           elit nulla voluptate eiusmod et dolore tempor id ea. Nisi dolor
// //           ullamco dolore officia incididunt aute esse irure officia velit esse
// //           cupidatat est. Incididunt veniam voluptate cupidatat consectetur
// //           laborum irure aliqua proident occaecat. Ipsum mollit ipsum adipisicing
// //           labore aliquip labore ad incididunt sint laborum Lorem laborum.
// //           Aliquip minim enim cupidatat et excepteur est. Lorem quis adipisicing
// //           reprehenderit sunt quis ad esse ut laborum qui adipisicing. Dolore
// //           incididunt minim velit et cupidatat labore non ea quis. Commodo do
// //           cillum commodo id cillum esse qui non.
// //         </p>
// //       </motion.div>
// //     </motion.section>
// //   )
// // }
// // var swiper = new Swiper(".swiper-container")
// export function App1() {
//   return (
//     // <div className={styles.swiper_container}>
//     //   <div className={styles.swiper_wrapper}>
//     //     <div className={styles.swiper_slide}>
//     //       <img src="https://user-images.githubusercontent.com/10026019/102327273-74284900-3fc0-11eb-913a-69661b73ab5d.png" />
//     //     </div>
//     //     <div className={styles.swiper_slide}>
//     //       <img src="https://user-images.githubusercontent.com/10026019/102327264-712d5880-3fc0-11eb-8f07-7d58264938c1.png" />
//     //     </div>
//     //     <div className={styles.swiper_slide}>
//     //       <img src="https://user-images.githubusercontent.com/10026019/102327267-72f71c00-3fc0-11eb-8550-8845f38935a4.png" />
//     //     </div>
//     //     <div className={styles.swiper_slide}>
//     //       <img src="https://user-images.githubusercontent.com/10026019/102327260-6f639500-3fc0-11eb-85fa-cfaa45ce054c.png" />
//     //     </div>
//     //     <div className={styles.swiper_slide}>
//     //       <img src="https://user-images.githubusercontent.com/10026019/102327267-72f71c00-3fc0-11eb-8550-8845f38935a4.png" />
//     //     </div>
//     //   </div>
//     // </div>
//   )
// }

export const App1: React.FC<PageProps> = () => {
  const expo = function (el, entries) {
    console.log("Hola")
    entries.forEach(entry => {
      if (entry.isIntersecting)
        el.style.transform = `translateX(-${100 * entry.target.dataset.expo}%)`
    })
  }

  document.querySelectorAll(".expo").forEach(el => {
    const els = el.querySelector(".expo_slides")
    const Obs = new IntersectionObserver(expo.bind(null, els), {
      threshold: 0.5,
    })
    el.querySelectorAll(".expo_article").forEach(el => Obs.observe(el))
  })
  const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  }
  // In Viewport
  // const styles = {
  const main = {
    backgroundColor: "#f1f1f1",
    width: "100%",
  }
  const inputText = {
    padding: "10px",
    color: "red",
  }
  const expoS = {
    position: "relative",
    display: "flex",
  }

  const expo_articles = {
    flex: 1,
  }
  const expo_article = {
    minHeight: "100vh",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "inset 0 0 0 1px #000",
  }

  const expo_slidesWrapper = {
    flex: 1,
    position: "sticky",
    top: "0px",
    height: "100vh",
    overflow: "hidden",
  }

  const expo_slides = {
    position: "relative",
    display: "flex",
    height: "inherit",
    flexDirection: "row",
    flexWrap: "nowrap",
    transition: "0.8s",
  }

  const expo_slide = {
    flex: "0 0 100%",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#0bf",
  }
  // }

  return (
    <>
      <header>
        <h1>HEADER</h1>
      </header>

      <div style={expoS} className="expo">
        <section style={expo_articles} className="expo_articles">
          <article data-expo="0" style={expo_article} className="expo_article">
            <h1>Article 1</h1>
            <p>Lorem ipsum article 1</p>
          </article>
          <article data-expo="1" style={expo_article} className="expo_article">
            <h1>Article 2</h1>
            <p>Lorem ipsum article 2</p>
          </article>
          <article data-expo="2" style={expo_article} className="expo_article">
            <h1>Article 3</h1>
            <p>Lorem ipsum article 3</p>
          </article>
        </section>
        <div style={expo_slidesWrapper}>
          <div style={expo_slides} className="expo_slides">
            <div style={expo_slide}>1</div>
            <div style={expo_slide}>2</div>
            <div style={expo_slide}>3</div>
          </div>
        </div>
      </div>

      <footer>
        <h2>FOOTER</h2>
      </footer>
    </>
  )
}
