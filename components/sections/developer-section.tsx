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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
              className="group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <AnimatedImage src={IMAGES.developerCard} alt="Developer card - Click to visit GitHub" />
            </Link>
          </div>
          <SkillsGrid skills={DEVELOPER_SKILLS} />
        </div>
      </SectionContainer>
    </motion.div>
  )
}
