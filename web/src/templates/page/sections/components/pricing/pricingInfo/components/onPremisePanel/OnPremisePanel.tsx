import * as React from "react"
import { navigate } from "gatsby"
import cx from "classnames"
import { ButtonModel } from "../../../../../../../../interfaces/interfaces"
import * as styles from "./onPremisePanel.module.scss"
import PurpleButton from "../../../../../../../../components/atoms/buttons/purple/PurpleButton"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import Button from "../../../../shared/button/Button"

export type IOnPremisePanelProps = {
  panelTitle: string
  description: string
  button: ButtonModel
}

const OnPremisePanel: React.FC<IOnPremisePanelProps> = props => {
  const { panelTitle, description, button } = props
  return (
    <div className={`${styles?.card__list}`}>
      <h5 className={`${cx("heading3")}`}>
        <span>{panelTitle?.slice(0, 10)}</span>
        {panelTitle?.slice(10, 21)}
      </h5>

      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {description}
      </ReactMarkdown>

      <Button
        idButton={button?.idButton}
        label={button?.label}
        icon={button?.icon}
        style={button?.style}
        fillColor={button?.fillColor}
        size={button?.size}
        noPaddingText={button?.noPaddingText}
        disabled={button?.disabled}
        link={button?.link}
        url={button?.url}
        outsideWeb={button?.outsideWeb}
        action={() =>
          window?.open(button?.url, button?.outsideWeb ? "_blank" : "_self")
        }
      />
    </div>
  )
}

export default OnPremisePanel
