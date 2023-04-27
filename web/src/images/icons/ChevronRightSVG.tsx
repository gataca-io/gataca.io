import React from "react"

export type ISVGProps = {
  strokeColor?: string
  className?: string
}

const CrevronRightSVG: React.FC<ISVGProps> = props => {
  const { strokeColor, className } = props
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12L10 8L6 4"
        stroke={strokeColor || "#4745B7"}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default CrevronRightSVG
