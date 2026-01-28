"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { SectionContainer } from "@/components/ui/section-container"
import { SectionHeader } from "@/components/ui/section-header"
import { AnimatedImage } from "@/components/ui/animated-image"
import { SkillsGrid } from "@/components/ui/skills-grid"
import { ARTIST_SKILLS, COLORS } from "@/config/content"
import { IMAGES } from "@/config/constants"

export default function ArtistSection() {
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
              title="Let's play with words"
              subtitle="artist"
              description="Poet known as 'Nomad' with a passion for poetry, creative writing, and meaningful communication. Merging technology with artistic expression to remind us that words and emotions matter."
              subtitleColor={COLORS.tertiary}
            />
            <Link
              href="https://www.instagram.com/shyayer_nomad?igsh=N3h3bHpsdmM4YTI5"
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <AnimatedImage src={IMAGES.artistCard} alt="Artist card - Click to visit Instagram" />
            </Link>
          </div>
          <SkillsGrid skills={ARTIST_SKILLS} />
        </div>
      </SectionContainer>
    </motion.div>
  )
}
