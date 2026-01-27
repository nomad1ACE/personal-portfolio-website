"use client"

import { motion } from "framer-motion"
import { SkillCard } from "./skill-card"
import type { Skill } from "@/types"

interface SkillsGridProps {
  skills: Skill[]
  columns?: number
  delay?: number
}

export function SkillsGrid({ skills, columns = 4, delay = 0.6 }: SkillsGridProps) {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  }

  return (
    <motion.div
      className={`grid ${gridCols[columns as keyof typeof gridCols]} gap-8`}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </motion.div>
  )
}
