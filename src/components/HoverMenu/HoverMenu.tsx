import React, {useEffect} from "react";
import styled from "styled-components";

import cx from "classnames";
import {navigate} from "gatsby";
import styles from "./hovermenu.module.scss";

type IHoverMenuProps = {
  isVisible: boolean,
  isBlog?: boolean,
  isOpaque?: boolean,
  changeVisibility: any,
  hoverElement: string,
  list: Array<{
    icon: string,
    title: string,
    link?: string,
    shortDescription: string
  }>;
}

const ArrowUp = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid var(--white);
  position: absolute;
  left: 38%;
  z-index: 101;
  top: calc(var(--topbar-height));
`

const HoverMenu: React.FC<IHoverMenuProps> = (
  props,
) => {

  let { list, isBlog, isOpaque, isVisible, changeVisibility, hoverElement } = props

  useEffect(() => {

  }, [])

  const linkClick = (url: string | undefined) => {
    // console.log(hoverElement)
    const nav = navigate(url ? url : "")
    changeVisibility(hoverElement)
  }

  return isVisible ? (
    <React.Fragment>
      <div className={cx(
        styles.hoverMenu,
        isBlog && styles.menuSolid,
        isOpaque && styles.menuDownPage,
        )}
        onMouseLeave={() => changeVisibility(hoverElement)}
      >
        <div  className={styles.hoverMenuContainer} >
          {list.map(el => {
            const content = (
              <div className={cx(
                styles.menuElement
              )}>
                {el.icon && <div className={styles.imageContainer}>
                  <img src={el.icon} alt={el.title}/>
                </div>}
                <div className={styles.textContainer}>
                  <h4>{el.title}</h4>
                  <p dangerouslySetInnerHTML={{ __html: el.shortDescription }}/>
                </div>
              </div>
            )

            return (
              <>
                {
                  el.link && el.link.includes("http") ?
                    <a href={el.link} target="_blank">
                      {content}
                    </a>
                    :
                    <div onClick={() => linkClick(el.link)}>
                      {content}
                    </div>
                }
              </>
            )
          })
          } 
        </div>
      </div>
    </React.Fragment>
  ) : <></>
}

HoverMenu.defaultProps = {
  isVisible: true,
  list: [
    {
      icon: "",
      title: "Menu title",
      link: "",
      shortDescription: "Menu description",
    },
  ],
}

export default HoverMenu
