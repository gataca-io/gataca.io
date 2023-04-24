import * as React from "react"
import cx from "classnames"
import * as styles from "./onPremisePanel.module.scss"
import { navigate } from "gatsby"
import { ButtonModel } from "../../../../interfaces/interfaces"
import PurpleButton from "../../../../components/atoms/buttons/purple/PurpleButton"

export type IOnPremisePanelProps = {
  panelTitle: string
  paragraphs: string[]
  button: ButtonModel
}

const OnPremisePanel: React.FC<IOnPremisePanelProps> = props => {
  const { panelTitle, paragraphs, button } = props
  return (
    <div className={`${styles?.card__list}`}>
      <h5 className={`${cx("heading3")}`}>
        <span>{panelTitle.slice(0, 10)}</span>
        {panelTitle.slice(10, 21)}
      </h5>
      {paragraphs?.map(el => (
        <p className={`${cx("bodyRegularXL marginBottom24")}`}>{el}</p>
      ))}
      <PurpleButton
        label={button?.label}
        action={() => button?.url && navigate(button?.url)}
      />
    </div>
  )
}

export default OnPremisePanel
