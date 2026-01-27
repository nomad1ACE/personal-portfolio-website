"use client"

interface IconProps {
  className?: string
}

export function PoetryIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2L4 6V18L12 22L20 18V6L12 2Z" fill="#B8E986" stroke="#95D45A" strokeWidth="1.5" />
      <path d="M8 9H16M8 12H14M8 15H12" stroke="#4A6D1D" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function WritingIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M20 12V5C20 3.89543 19.1046 3 18 3H6C4.89543 3 4 3.89543 4 5V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V12Z"
        fill="#B8E986"
        stroke="#95D45A"
        strokeWidth="1.5"
      />
      <path d="M14 7H8M16 11H8M12 15H8" stroke="#4A6D1D" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function CommunicationIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.9706 16.9706 21 12 21C10.2186 21 8.54839 20.4525 7.13943 19.5H3.62406C3.24673 19.5 2.95929 19.1441 3.05271 18.7805L3.88713 15.6195C3.33889 14.5492 3 13.3295 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        fill="#B8E986"
        stroke="#95D45A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function TranslationIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M3 5H15M9 3V5M10.5 9H13.5M7 13L11 5L15 13M19 9V21M19 9L22 13M19 9L16 13"
        stroke="#4A6D1D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="2" y="5" width="20" height="16" rx="2" fill="#B8E986" fillOpacity="0.3" />
    </svg>
  )
}
