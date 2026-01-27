"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import type React from "react"

interface HoverCardProps {
  children: ReactNode
  className?: string
}

export const HoverCard: React.FC<HoverCardProps> = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`group relative ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
      <motion.div
        className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        initial={false}
        animate={{ scale: 1 }}
      />
    </motion.div>
  )
}
