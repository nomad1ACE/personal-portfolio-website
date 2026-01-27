import type { ReactNode } from "react"
import type { SectionProps } from "@/types"

interface SectionContainerProps extends SectionProps {
  children: ReactNode
  fullHeight?: boolean
}

export function SectionContainer({ children, id, className = "", fullHeight = true }: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`bg-zinc-900 text-white relative py-24 ${fullHeight ? "min-h-screen" : ""} ${className}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">{children}</div>
    </section>
  )
}
