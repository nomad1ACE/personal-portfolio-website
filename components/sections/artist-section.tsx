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
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
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
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="group cursor-pointer relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-lime-500 to-lime-600 rounded-lg opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
                <AnimatedImage src={IMAGES.artistCard} alt="Artist card - Click to visit Instagram" />
                <motion.div className="absolute inset-0 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-semibold text-lg bg-black/60 px-4 py-2 rounded-lg">Click to Explore</span>
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>
          <SkillsGrid skills={ARTIST_SKILLS} />
        </div>
      </SectionContainer>
    </motion.div>
  )
}
