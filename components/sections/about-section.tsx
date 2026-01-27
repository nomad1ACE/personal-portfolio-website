"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { HoverCard } from "@/components/HoverCard"

export default function AboutSection() {
  return (
    <motion.section
      id="highlights"
      className="min-h-screen bg-zinc-900 text-white relative py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="space-y-24">
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Which card do you wa
            <span className="text-red-600">nt</span>
            <br />
            to pick ?
          </motion.h2>

          <div className="relative">
            <motion.div
              className="space-y-4 mb-12"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">I know I am</h3>
              <p className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight blur-[0.5px]">
                <span className="text-red-600">Unique.</span>
              </p>
            </motion.div>

            <motion.div
              className="relative h-[400px] md:h-[500px] w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="absolute right-0 md:right-24 top-0 w-[300px] md:w-[400px] aspect-square">
                <HoverCard className="w-full h-full">
                  <Image
                    src="/images/design-mode/Component%2026.png"
                    alt="Gradient cards illustration"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </HoverCard>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
