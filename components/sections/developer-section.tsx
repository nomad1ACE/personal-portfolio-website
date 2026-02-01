"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { SectionContainer } from "@/components/ui/section-container"
import { SectionHeader } from "@/components/ui/section-header"
import { AnimatedImage } from "@/components/ui/animated-image"
import { SkillsGrid } from "@/components/ui/skills-grid"
import { DEVELOPER_SKILLS } from "@/config/content"
import { IMAGES } from "@/config/constants"

export default function DeveloperSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <SectionContainer id="projects">
        <div className="space-y-24">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionHeader
              title="Let's build together"
              subtitle="developer"
              description="AI & Systems Enthusiast specializing in Python, LLM fine-tuning, and Flask. Strong foundation in C++ and Java with expertise in building intelligent systems and scalable solutions."
              subtitleColor="text-cyan-400"
            />
            <Link
              href="https://github.com/nomad1ACE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="group cursor-pointer relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
                <AnimatedImage src={IMAGES.developerCard} alt="Developer card - Click to visit GitHub" />
                <motion.div className="absolute inset-0 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-semibold text-lg bg-black/60 px-4 py-2 rounded-lg">Click to Explore</span>
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>
          <SkillsGrid skills={DEVELOPER_SKILLS} />
        </div>
      </SectionContainer>
    </motion.div>
  )
}
