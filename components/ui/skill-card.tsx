import { HoverCard } from "@/components/HoverCard"
import type { SkillCardProps } from "@/types"

export function SkillCard({ skill }: SkillCardProps) {
  const IconComponent = skill.icon

  return (
    <HoverCard className="aspect-square w-full max-w-[200px] mx-auto bg-zinc-800 rounded-2xl p-6 shadow-lg">
      <div className="flex flex-col items-center justify-center h-full space-y-4">
        <IconComponent className={`w-16 h-16 ${skill.color}`} />
        <span className={`${skill.color} text-xl font-medium`}>{skill.name}</span>
      </div>
    </HoverCard>
  )
}
