"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  title: string
  subtitle: string
  description: string
  titleColor?: string
  subtitleColor?: string
  delay?: number
}

export function SectionHeader({
  title,
  subtitle,
  description,
  titleColor = "text-white",
  subtitleColor = "text-red-600",
  delay = 0.2,
}: SectionHeaderProps) {
  return (
    <motion.div
      className="space-y-6"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
        {title.split(" ").map((word, index) => {
          const isHighlighted = word.includes("build") || word.includes("design") || word.includes("play")
          return (
            <span key={index} className={isHighlighted ? subtitleColor : titleColor}>
              {word}{" "}
            </span>
          )
        })}
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold">
        <span className={titleColor}>{subtitle.split("").slice(0, 3).join("")}</span>
        <span className={subtitleColor}>{subtitle.split("").slice(3).join("")}</span>
      </h3>
      <p className="text-gray-400 max-w-lg">{description}</p>
    </motion.div>
  )
}
