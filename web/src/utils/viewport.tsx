export const isBrowser = typeof window !== "undefined"

export function elementInViewport(el: any) {
  var top = el.offsetTop
  var left = el.offsetLeft
  var width = el.offsetWidth
  var height = el.offsetHeight

  while (el.offsetParent) {
    el = el.offsetParent
    top += el.offsetTop
    left += el.offsetLeft
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    top + height <= window.pageYOffset + (isBrowser ? window.innerHeight : 0) &&
    left + width <= window.pageXOffset + (isBrowser ? window.innerHeight : 0)
  )
}

export function actionInViewport(el: any) {
  const observer = new window.IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        return
      }
    },
    {
      root: null,
      threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
    }
  )

  observer.observe(el)
}

import { useEffect, useState, useRef, RefObject } from "react"
import { scrollDirections } from "../data/globalData"

export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [isOnScreen, setIsOnScreen] = useState(false)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) =>
      setIsOnScreen(entry.isIntersecting)
    )
  }, [])

  useEffect(() => {
    observerRef?.current &&
      ref?.current &&
      observerRef?.current?.observe(ref?.current)

    return () => {
      observerRef?.current?.disconnect()
    }
  }, [ref])

  return isOnScreen
}

export function useOnScreenAgain(
  ref: RefObject<HTMLElement>,
  actionOnView: Function | (() => void)
) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          //do your actions here
          actionOnView()
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
  }, [ref])
}

export function checkScrollDirection(
  event: any,
  y: number
  // x: number,
  // // setNewYcord: any,
  // actionDown: () => void,
  // actionUp: () => void
) {
  const window = event?.scrollTop
  if (y > event?.scrollTop) {
    return scrollDirections.up
  } else if (y < event?.scrollTop) {
    return scrollDirections.down
  }
}

// function checkScrollDirectionIsUp(event) {
//   if (event.wheelDelta) {
//     return event.wheelDelta > 0
//   }
//   return event.deltaY < 0
// }

export function passScrollingFunction(
  actionUp: () => void,
  actionDown: () => void
  // setNewYcord: any
  // y: number
) {
  var x = window.scrollX
  var y = window.scrollY
  window.onscroll = function (e) {
    window.scrollTo(x, y)
    checkScrollDirection(e, y)
  }
  // window.onscroll = function () {
  //   window.addEventListener("scroll", e =>
  //     checkScrollDirection(e, y, x, actionDown, actionUp, setNewYcord)
  //   )
  // }
}

export function enableScrolling() {
  window.onscroll = function () {}
}
