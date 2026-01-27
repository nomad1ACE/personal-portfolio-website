"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { HoverCard } from "@/components/HoverCard"

interface AnimatedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  delay?: number
  priority?: boolean
}

export function AnimatedImage({
  src,
  alt,
  width = 300,
  height = 300,
  className = "",
  delay = 0.4,
  priority = false,
}: AnimatedImageProps) {
  return (
    <motion.div
      className="relative h-[400px] flex justify-center md:justify-end"
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <HoverCard>
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className={`object-contain drop-shadow-2xl ${className}`}
          priority={priority}
        />
      </HoverCard>
    </motion.div>
  )
}
