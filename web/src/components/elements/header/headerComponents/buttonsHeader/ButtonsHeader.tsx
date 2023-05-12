import * as React from "react"
import { gatacaStudioURL } from "../../../../../data/globalData"
import PurpleButton from "../../../../atoms/buttons/purple/PurpleButton"
import cx from "classnames"

const ButtonsHeader: React.FC = () => {
  return (
    <>
      <PurpleButton
        label={"Log In"}
        outlined
        className={cx("marginRight20")}
        action={() => window.open(gatacaStudioURL, "_blank")}
      />
      <PurpleButton
        label={"Try for free"}
        action={() => window.open(gatacaStudioURL, "_blank")}
      />
    </>
  )
}

export default ButtonsHeader
