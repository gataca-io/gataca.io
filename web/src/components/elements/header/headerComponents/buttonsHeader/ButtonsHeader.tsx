import * as React from "react"
import { gatacaStudioURL } from "../../../../../data/globalData"
import PurpleButton from "../../../../atoms/buttons/purple/PurpleButton"
import cx from "classnames"
import { navigate } from "gatsby"

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
        label={"Contact Us"}
        action={() => navigate("/company/contact")}
      />
    </>
  )
}

export default ButtonsHeader
