import * as React from "react"
import cx from "classnames"
import * as styles from "./selectorList.module.scss"
import Selector from "./component/Selector"

export type ISelectorListProps = {
  list: any
  className?: string
}

const SelectorList: React.FC<ISelectorListProps> = props => {
  const { list, className } = props
  const [openItem, setOpenItem] = React.useState<number>(1)

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
    <div style={{ position: "relative" }}>
      <div
        className={`${styles?.selectorList__container} ${
          className && className
        }`}
      >
        <div className={styles?.selectorList__leftSide}>
          <div id="bullets" className={styles?.selectorList__leftSide__bullets}>
            {list?.map((item: any, index: number) => {
              const { selector } = item?.attributes

              return (
                <>
                  {selector?.map((el: any, index: number) => {
                    const { title, content, showSelector } = el

                    return (
                      <Selector
                        idSelector={"listItem__" + index}
                        key={"selector__" + index}
                        index={index + 1}
                        title={title}
                        content={content}
                        showSelector={showSelector}
                        selected={openItem === index + 1}
                        showItem={index => {
                          const element = document.getElementById(
                            "listItem__" + (index - 1)
                          )
                          setOpenItem(index), element && scrollIntoView(element)
                        }}
                      />
                    )
                  })}
                </>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectorList
