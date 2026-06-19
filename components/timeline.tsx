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
  const amplitude = 90
  const frequency = 0.013
  const cardSpacing = 220
  const totalHeight = timelineEvents.length * cardSpacing
  const centerX = 200

  let wavePath = "M "
  for (let y = 0; y < totalHeight; y += 12) {
    const x = Math.sin(y * frequency) * amplitude + centerX
    wavePath += `${x},${y} `
  }

  return (
    <div className="py-12 md:py-24 bg-zinc-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 text-center">My Journey</h2>
          <p className="text-sm md:text-base text-gray-400 text-center max-w-2xl mx-auto">
            A 2.5D isometric voyage through growth, learning, and creative exploration
          </p>
        </div>

        {/* 2.5D Wave Timeline Container */}
        <div className="relative w-full" style={{ height: `${totalHeight + 200}px`, perspective: "1200px" }}>
          {/* SVG Wave Path */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none hidden sm:block"
            width="100%"
            height="100%"
            viewBox={`0 0 400 ${totalHeight}`}
            preserveAspectRatio="xMidYMid meet"
            style={{
              filter: "drop-shadow(0 20px 50px rgba(220, 38, 38, 0.25)) drop-shadow(0 15px 30px rgba(34, 211, 238, 0.2))",
            }}
          >
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#DC2626" stopOpacity="0.9" />
                <stop offset="35%" stopColor="#F59E0B" stopOpacity="0.8" />
                <stop offset="65%" stopColor="#22D3EE" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#B8E986" stopOpacity="0.7" />
              </linearGradient>

              <filter id="waveGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Shadow layer */}
            <path
              d={wavePath}
              fill="none"
              stroke="rgba(0, 0, 0, 0.5)"
              strokeWidth="20"
              style={{
                filter: "blur(8px)",
                transform: "translate(4px, 4px)",
              }}
            />

            {/* Main wave */}
            <path
              d={wavePath}
              fill="none"
              stroke="url(#waveGradient)"
              strokeWidth="12"
              filter="url(#waveGlow)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Highlight edge */}
            <path
              d={wavePath}
              fill="none"
              stroke="rgba(255, 255, 255, 0.4)"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ transform: "translateY(-2px)", mixBlendMode: "screen" }}
            />
          </svg>

          {/* Timeline Events */}
          <div className="relative sm:absolute sm:top-0 sm:left-0 sm:w-full sm:h-full">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon
              const yPosition = index * cardSpacing + 60
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
                  className="w-full sm:absolute px-4 sm:px-0 group mb-8 sm:mb-0"
                  style={{
                    left: isLeft ? 0 : "auto",
                    right: isLeft ? "auto" : 0,
                    top: `${yPosition}px`,
                    maxWidth: "calc(100% - 32px)",
                    width: "100%",
                    position: "relative",
                  }}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 25 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                >
                  {/* Card Container */}
                  <div className={`w-full sm:w-96 group ${isLeft ? "sm:left-0" : "sm:right-0"}`}>
                    {/* Connecting line - Desktop only */}
                    <svg
                      className="absolute top-6 w-12 h-1 pointer-events-none hidden sm:block"
                      style={{
                        right: isLeft ? "-48px" : "auto",
                        left: isLeft ? "auto" : "-48px",
                      }}
                      viewBox="0 0 48 1"
                      preserveAspectRatio="none"
                    >
                      <line
                        x1="0"
                        y1="0"
                        x2="48"
                        y2="0"
                        stroke={getColorHex(event.color)}
                        strokeWidth="1.5"
                        opacity="0.6"
                        style={{
                          filter: `drop-shadow(0 0 3px ${getColorHex(event.color)})`,
                        }}
                      />
                    </svg>

                    {/* Event Card */}
                    <div
                      className={`relative p-4 sm:p-6 rounded-xl border ${bgColor} backdrop-blur-sm transition-all duration-500 hover:shadow-2xl overflow-hidden`}
                      style={{
                        transform: `perspective(1000px) rotateY(${isLeft ? -8 : 8}deg) rotateX(2deg)`,
                        transformStyle: "preserve-3d",
                        boxShadow: `inset 0 1px 0 0 rgba(255,255,255,0.1), 0 10px 30px -5px ${getColorHex(event.color)}20`,
                      }}
                    >
                      {/* Shimmer effect */}
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
                              <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${colorMap[event.color]}`} />
                            </motion.div>
                          )}
                          <p className={`text-xs sm:text-sm font-bold ${colorMap[event.color]} uppercase tracking-wide`}>
                            {event.year}
                          </p>
                        </div>

                        {/* Title */}
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                          {event.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-3">{event.description}</p>

                        {/* Skills - Desktop only */}
                        {event.skills && event.skills.length > 0 && (
                          <div className="mb-3 relative z-10 hidden sm:block">
                            <p className="text-xs text-gray-500 mb-2">Skills</p>
                            <div className="flex flex-wrap gap-1">
                              {event.skills.slice(0, 3).map((skill) => (
                                <span
                                  key={skill}
                                  className="px-2 py-1 text-xs rounded-full bg-zinc-700/50 text-gray-300 border border-zinc-600/50"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Achievements - Show all */}
                        {event.achievements && event.achievements.length > 0 && (
                          <div className="relative z-10">
                            <p className="text-xs text-gray-500 mb-2">Achievements</p>
                            <div className="flex flex-wrap gap-1">
                              {event.achievements.map((achievement) => (
                                <span
                                  key={achievement}
                                  className={`px-2 py-1 text-xs rounded-full bg-zinc-700 ${
                                    colorMap[event.color].split(" ")[0]
                                  } border border-zinc-600/30 flex items-center gap-1`}
                                >
                                  <span>✓</span> {achievement}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Timeline dot - Desktop only */}
                    <div
                      className="absolute top-8 w-5 h-5 rounded-full border-4 border-zinc-900 transform transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg hidden sm:block"
                      style={{
                        left: isLeft ? "100%" : "auto",
                        right: isLeft ? "auto" : "100%",
                        marginLeft: isLeft ? "20px" : "0",
                        marginRight: isLeft ? "0" : "20px",
                        backgroundColor:
                          event.color === "red"
                            ? "#DC2626"
                            : event.color === "cyan"
                              ? "#22D3EE"
                              : event.color === "lime"
                                ? "#B8E986"
                                : "#F59E0B",
                        boxShadow: getGlow(event.color),
                      }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-24 pt-8 border-t border-zinc-700">
          <motion.div
            className="bg-gradient-to-r from-red-500/5 to-cyan-500/5 rounded-lg p-6 sm:p-8 border border-zinc-700 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">What&apos;s Next?</h3>
            <p className="text-xs sm:text-sm text-gray-400 mb-6 max-w-xl mx-auto">
              Currently focusing on advanced AI research, system design, and creating meaningful digital experiences that blend technology with human-centered design.
            </p>
            <div className="flex gap-3 sm:gap-4 justify-center flex-wrap">
              <a
                href="/projects"
                className="px-4 sm:px-6 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base font-semibold transition-colors"
              >
                View Projects
              </a>
              <a
                href="#developer-section"
                className="px-4 sm:px-6 py-2 rounded-lg border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-sm sm:text-base font-semibold transition-colors"
              >
                Explore Skills
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
