"use client"

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <SectionHeader
              title="Let's design together"
              subtitle="designer"
              description="UX-focused designer combining psychology with design principles. Expert in Figma and Canva, specializing in wireframing and user experience design to create intuitive interfaces that resonate emotionally with users."
              subtitleColor={COLORS.primary}
            />
            <AnimatedImage src={IMAGES.designerCard} alt="Designer card" />
          </div>
          <SkillsGrid skills={DESIGNER_SKILLS} columns={3} />
        </div>
      </SectionContainer>
    </motion.div>
  )
}
