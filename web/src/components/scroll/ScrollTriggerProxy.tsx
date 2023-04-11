import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect } from "react"
import { useLocomotiveScroll } from "react-locomotive-scroll"
import { isBrowser } from "../../utils/viewport"

// Required to ScrollTrigger from gsap works in animations
const ScrollTriggerProxy = () => {
  const { scroll } = useLocomotiveScroll()
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    if (scroll) {
      const element = scroll?.el

      scroll.on("scroll", ScrollTrigger.update)
      ScrollTrigger.scrollerProxy(element, {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: isBrowser ? window.innerWidth : 0,
            height: isBrowser ? window.innerHeight : 0,
          }
        },
        pinType: element.style.transform ? "transform" : "fixed",
      })
    }

    return () => {
      ScrollTrigger.addEventListener("refresh", () => scroll?.update())
      ScrollTrigger.refresh()
    }
  }, [scroll])

  return null
}

export default ScrollTriggerProxy
