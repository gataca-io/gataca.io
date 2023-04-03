import * as React from "react"
import * as styles from "./header.module.scss"
import {
  gatacaStudioURL,
  headerMenuOptions,
} from "../../../globalData/globalData"
import MenuDropdown from "./headerComponents/menuDropdown/MenuDropdown"
import { images } from "../../../images/images"
import { Link } from "gatsby"
import PurpleButton from "../../atoms/buttons/purple/PurpleButton"
import cx from "classnames"

export type IHeaderProps = {
  setLastRoute: (x: string) => void
}

const Header: React.FC<IHeaderProps> = props => {
  const [subMenuOpenedID, setSubMenuOpened] = React.useState("")

  return (
    <>
      {subMenuOpenedID && (
        <div
          onClick={() => setSubMenuOpened("")}
          className={styles.headerLayout}
        ></div>
      )}
      <header className={styles?.header}>
        <Link to="/">
          <img src={images.gatacIconAndText} />
        </Link>
        <div>
          {headerMenuOptions?.map((item, index) => {
            return (
              <MenuDropdown
                key={"menuDropdown__" + index}
                open={subMenuOpenedID === item?.id}
                item={item}
                setOptionOpened={setSubMenuOpened}
                setLastRoute={props.setLastRoute}
              />
            )
          })}
        </div>
        <div>
          <PurpleButton
            label={"Log In"}
            outlined
            className={cx("marginRight14")}
            action={() => window.open(gatacaStudioURL, "_blank")}
          />
          <PurpleButton
            label={"Try for free"}
            action={() => window.open(gatacaStudioURL, "_blank")}
          />
        </div>
      </header>
    </>
  )
}

export default Header
