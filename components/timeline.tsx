"use client"

import { Code2, Palette, BookOpen, Lightbulb, PenTool, Zap, Award } from "lucide-react"
import { motion } from "framer-motion"

interface TimelineEvent {
  year: string
  title: string
  description: string
  color: "red" | "cyan" | "lime" | "amber"
  icon?: React.ComponentType<{ className?: string }>
  skills?: string[]
  achievements?: string[]
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "10th Grade",
    title: "Beginning",
    description: "Started my coding journey with curiosity and passion for technology",
    color: "red",
    icon: Code2,
    skills: ["Python", "C++"],
    achievements: ["First program", "Competitive coding start"],
  },
  {
    year: "12th Grade",
    title: "Exploration",
    description: "Explored web development and discovered my love for building interfaces",
    color: "cyan",
    icon: Palette,
    skills: ["JavaScript", "HTML/CSS"],
    achievements: ["Built first website", "Discovered passion for UI"],
  },
  {
    year: "Bachelors (BSc CS)",
    title: "Foundation",
    description: "Graduated with a strong foundation in Computer Science and algorithms",
    color: "lime",
    icon: Award,
    skills: ["Data Structures", "Algorithms", "Java"],
    achievements: ["Degree completed", "Strong GPA"],
  },
  {
    year: "Design Discovery",
    title: "Creative Merge",
    description: "Discovered the intersection of design and development, started creating meaningful UX",
    color: "amber",
    icon: Lightbulb,
    skills: ["Figma", "UX Design", "React"],
    achievements: ["3+ projects", "Design-dev bridge"],
  },
  {
    year: "Poetry & Nomad",
    title: "Artistic Expression",
    description: "Embraced creative writing and poetry as Nomad, expressing emotions through words",
    color: "red",
    icon: PenTool,
    skills: ["Poetry", "Creative Writing"],
    achievements: ["Published poems", "Created Nomad identity"],
  },
  {
    year: "Current - MCA",
    title: "Masters & Beyond",
    description: "Pursuing MCA at MIT-WPU, diving deeper into AI, System Engineering, and Human-Technology Interaction",
    color: "cyan",
    icon: Zap,
    skills: ["LLM Fine-tuning", "AI", "System Design"],
    achievements: ["Ongoing studies", "Advanced research"],
  },
]

const colorMap = {
  red: "text-red-600",
  cyan: "text-cyan-400",
  lime: "text-[#B8E986]",
  amber: "text-amber-500",
}

const getGlow = (color: string) => {
  const glowMap = {
    red: "0 0 30px rgba(220, 38, 38, 0.8), 0 0 60px rgba(220, 38, 38, 0.4)",
    cyan: "0 0 30px rgba(34, 211, 238, 0.8), 0 0 60px rgba(34, 211, 238, 0.4)",
    lime: "0 0 30px rgba(184, 233, 134, 0.8), 0 0 60px rgba(184, 233, 134, 0.4)",
    amber: "0 0 30px rgba(245, 158, 11, 0.8), 0 0 60px rgba(245, 158, 11, 0.4)",
  }
  return glowMap[color as keyof typeof glowMap] || glowMap.red
}

const getColorHex = (color: string) => {
  const hexMap = {
    red: "#DC2626",
    cyan: "#22D3EE",
    lime: "#B8E986",
    amber: "#F59E0B",
  }
  return hexMap[color as keyof typeof hexMap]
}

export default function Timeline() {
  // Generate SVG wave path using sine wave
  const amplitude = 100
  const frequency = 0.012
  const totalHeight = timelineEvents.length * 220

  let wavePath = "M "
  for (let y = 0; y < totalHeight; y += 15) {
    const x = Math.sin(y * frequency) * amplitude + 200
    wavePath += `${x},${y} `
  }

  return (
    <div className="py-12 md:py-24 bg-zinc-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">My Journey</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            A 2.5D isometric voyage through growth, learning, and creative exploration
          </p>
        </div>

        {/* 2.5D Wave Timeline Container */}
        <div className="relative w-full" style={{ height: `${totalHeight + 200}px`, perspective: "1200px" }}>
          {/* SVG Wave Path */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{
              filter: "drop-shadow(0 20px 40px rgba(220, 38, 38, 0.15)) drop-shadow(0 10px 20px rgba(34, 211, 238, 0.1))",
            }}
          >
            <defs>
              {/* Main wave gradient */}
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#DC2626" stopOpacity="0.9" />
                <stop offset="35%" stopColor="#F59E0B" stopOpacity="0.8" />
                <stop offset="65%" stopColor="#22D3EE" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#B8E986" stopOpacity="0.7" />
              </linearGradient>

              {/* Glow filter */}
              <filter id="waveGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Shadow/Depth layer */}
            <path
              d={wavePath}
              fill="none"
              stroke="rgba(0, 0, 0, 0.3)"
              strokeWidth="24"
              style={{
                filter: "blur(8px)",
                transform: "translate(6px, 6px)",
              }}
            />

            {/* Main glow wave */}
            <path
              d={wavePath}
              fill="none"
              stroke="url(#waveGradient)"
              strokeWidth="12"
              filter="url(#waveGlow)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Highlight edge for depth */}
            <path
              d={wavePath}
              fill="none"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="4"
              strokeLinecap="round"
              style={{ transform: "translateY(-2px)", mixBlendMode: "screen" }}
            />
          </svg>

          {/* Timeline Events */}
          {timelineEvents.map((event, index) => {
            const Icon = event.icon
            const yPosition = index * 220 + 100
            const waveX = Math.sin(yPosition * frequency) * amplitude + 200
            const isLeft = index % 2 === 0

            const bgColor =
              event.color === "red"
                ? "bg-red-500/5 border-red-500/30 hover:border-red-500/60"
                : event.color === "cyan"
                  ? "bg-cyan-500/5 border-cyan-500/30 hover:border-cyan-500/60"
                  : event.color === "lime"
                    ? "bg-lime-500/5 border-lime-500/30 hover:border-lime-500/60"
                    : "bg-amber-500/5 border-amber-500/30 hover:border-amber-500/60"

            return (
              <motion.div
                key={index}
                className="absolute w-72 group"
                style={{
                  left: isLeft ? "20px" : "auto",
                  right: isLeft ? "auto" : "20px",
                  top: `${yPosition}px`,
                }}
                initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 20, rotateY: isLeft ? 15 : -15 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}
              >
                {/* Connecting line from card to wave */}
                <svg
                  className="absolute top-6 w-16 h-1 pointer-events-none"
                  style={{
                    right: isLeft ? "-64px" : "auto",
                    left: isLeft ? "auto" : "-64px",
                  }}
                  viewBox="0 0 64 1"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="64"
                    y2="0"
                    stroke={getColorHex(event.color)}
                    strokeWidth="1.5"
                    opacity="0.6"
                    style={{
                      filter: `drop-shadow(0 0 3px ${getColorHex(event.color)})`,
                    }}
                  />
                </svg>

                {/* Event Card with 3D perspective */}
                <div
                  className={`relative p-6 rounded-xl border ${bgColor} backdrop-blur-sm transition-all duration-500 hover:shadow-2xl overflow-hidden`}
                  style={{
                    transform: `perspective(1000px) rotateY(${isLeft ? -8 : 8}deg) rotateX(2deg)`,
                    transformStyle: "preserve-3d",
                    boxShadow: `inset 0 1px 0 0 rgba(255,255,255,0.1), 0 10px 30px -5px ${getColorHex(event.color)}20`,
                  }}
                >
                  {/* Background shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-xl pointer-events-none" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon and Year */}
                    <div className="flex items-center gap-2 mb-3">
                      {Icon && (
                        <motion.div
                          whileHover={{ rotate: 12, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <Icon className={`w-5 h-5 ${colorMap[event.color]}`} />
                        </motion.div>
                      )}
                      <p className={`text-sm font-bold ${colorMap[event.color]} uppercase tracking-wide`}>{event.year}</p>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300 line-clamp-2">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">{event.description}</p>

                    {/* Skills Tags */}
                    {event.skills && event.skills.length > 0 && (
                      <div className="mb-3">
                        <p className="text-xs text-gray-500 mb-2 font-semibold">Skills</p>
                        <div className="flex flex-wrap gap-2">
                          {event.skills.slice(0, 2).map((skill) => (
                            <motion.span
                              key={skill}
                              whileHover={{ scale: 1.05 }}
                              className="px-2.5 py-1 text-xs rounded-full bg-zinc-700/40 text-gray-300 border border-zinc-600/50 backdrop-blur"
                            >
                              {skill}
                            </motion.span>
                          ))}
                          {event.skills.length > 2 && (
                            <span className="px-2.5 py-1 text-xs rounded-full bg-zinc-700/40 text-gray-400 border border-zinc-600/50">
                              +{event.skills.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Achievements */}
                    {event.achievements && event.achievements.length > 0 && (
                      <div>
                        <p className="text-xs text-gray-500 mb-2 font-semibold">Achievements</p>
                        <div className="flex flex-wrap gap-2">
                          {event.achievements.map((achievement) => (
                            <motion.span
                              key={achievement}
                              whileHover={{ scale: 1.05, y: -1 }}
                              className={`px-2.5 py-1 text-xs rounded-full bg-zinc-700/60 ${colorMap[event.color]} border border-zinc-600/30 flex items-center gap-1 backdrop-blur`}
                            >
                              <span className="text-xs">✓</span> {achievement}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline dot on wave */}
                <motion.div
                  className="absolute top-6 w-4 h-4 rounded-full border-3 border-zinc-900 shadow-lg"
                  style={{
                    right: isLeft ? "-32px" : "auto",
                    left: isLeft ? "auto" : "-32px",
                    backgroundColor: getColorHex(event.color),
                    boxShadow: `${getGlow(event.color)}, inset 0 1px 2px rgba(255,255,255,0.3)`,
                  }}
                  whileHover={{ scale: 1.8, filter: `drop-shadow(0 0 15px ${getColorHex(event.color)})` }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Call-to-Action Section */}
        <motion.div
          className="mt-20 pt-12 border-t border-zinc-700/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-red-500/8 via-cyan-500/8 to-amber-500/8 rounded-2xl p-8 md:p-12 border border-zinc-700/50 backdrop-blur-sm text-center">
            <h3 className="text-3xl font-bold text-white mb-4">What&apos;s Next?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Currently focused on advanced AI research, system design, and creating meaningful digital experiences that seamlessly blend cutting-edge technology with human-centered design principles.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold transition-all shadow-lg hover:shadow-red-600/50"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#developer-section"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 rounded-lg border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold transition-all shadow-lg hover:shadow-cyan-500/30"
              >
                Explore Skills
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
