"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export const LuminousEffect = () => {
  const { scrollYProgress } = useScroll()
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    setWindowHeight(window.innerHeight)
    const handleResize = () => setWindowHeight(window.innerHeight)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const yRange = useTransform(scrollYProgress, [0, 1], [windowHeight * -1, windowHeight * 2])

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50 opacity-30"
      style={{
        background: `radial-gradient(600px circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)`,
        y: yRange,
      }}
    />
  )
}
