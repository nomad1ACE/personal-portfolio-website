"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { SectionContainer } from "@/components/ui/section-container"
import { SectionHeader } from "@/components/ui/section-header"
import { AnimatedImage } from "@/components/ui/animated-image"
import { SkillsGrid } from "@/components/ui/skills-grid"
import { DESIGNER_SKILLS, COLORS } from "@/config/content"
import { IMAGES } from "@/config/constants"

export default function DesignerSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <SectionContainer>
        <div className="space-y-24">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <SectionHeader
              title="Let's design together"
              subtitle="designer"
              description="UX-focused designer combining psychology with design principles. Expert in Figma and Canva, specializing in wireframing and user experience design to create intuitive interfaces that resonate emotionally with users."
              subtitleColor={COLORS.primary}
            />
            <Link
              href="https://www.figma.com/@tusharshinde"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="group cursor-pointer relative"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-600 rounded-lg opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300 rounded-lg"></div>
                  <AnimatedImage src={IMAGES.designerCard} alt="Designer card - Click to visit Figma" />
                  <motion.div className="absolute inset-0 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-semibold text-lg bg-black/60 px-4 py-2 rounded-lg">Click to Explore</span>
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
          <SkillsGrid skills={DESIGNER_SKILLS} columns={3} />
        </div>
      </SectionContainer>
    </motion.div>
  )
}
