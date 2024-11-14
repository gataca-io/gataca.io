import * as React from "react"
import cx from "classnames"
import * as styles from "./selectorList.module.scss"
import Selector from "./component/Selector"

export type ISelectorListProps = {
  list?: any
  className?: string
  openItem: number
  setOpenItem: (x: number) => void
  setShowItem: (x: number) => void
}
const SelectorList: React.FC<ISelectorListProps> = props => {
  const { list, className, openItem, setOpenItem, setShowItem } = props

  let bullets: HTMLElement | null | undefined

  React.useEffect(() => {
    bullets = document ? document?.getElementById("bullets") : undefined
  })

  const scrollIntoView = (el: HTMLElement) => {
    bullets
      ? bullets.scroll({
          behavior: "smooth",
          left: el.offsetLeft,
        })
      : null
  }

  return (
    <div
      className={`${styles?.selectorList__container} ${className && className}`}
    >
      <div id="bullets" className={styles?.selectorList__bullets}>
        {list?.map((item: any, index: number) => {
          const { title, content, showSelector } = item

          return (
            <Selector
              idSelector={"selector__" + index}
              key={"selector__" + index}
              index={index}
              title={title}
              content={content}
              showSelector={showSelector}
              selected={openItem === index}
              showItem={index => {
                const element =
                  document && document.getElementById("selector__" + index)
                setOpenItem(index),
                  setShowItem(0),
                  element && scrollIntoView(element)
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default SelectorList
