import * as React from "react"
import ButtonGroup from "../../../../../templates/page/sections/components/generic/buttonGroup/ButtonGroup"

export type ISocialMediaContentProps = {
  socialMediaButtonIcon?: any
}

const SocialMediaContent: React.FC<ISocialMediaContentProps> = props => {
  const { socialMediaButtonIcon } = props
  return (
    <>
      <ButtonGroup buttonIconGroup={socialMediaButtonIcon} />
    </>
  )
}

export default SocialMediaContent
