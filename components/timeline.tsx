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

const colorMap: Record<string, string> = {
  red: "text-red-400",
  cyan: "text-cyan-400",
  lime: "text-lime-400",
  amber: "text-amber-400",
}

const getGlow = (color: string) => {
  const glowColors: Record<string, string> = {
    red: "0 0 20px rgba(220, 38, 38, 0.5)",
    cyan: "0 0 20px rgba(34, 211, 238, 0.5)",
    lime: "0 0 20px rgba(184, 233, 134, 0.5)",
    amber: "0 0 20px rgba(245, 158, 11, 0.5)",
  }
  return glowColors[color] || glowColors.red
}

export default function Timeline() {
  return (
    <div className="py-12 md:py-24 bg-zinc-900">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center">My Journey</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">A timeline of growth, learning, and creative exploration across technology, design, and art</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-600 via-cyan-400 to-[#B8E986] to-transparent opacity-100"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgb(220, 38, 38), rgb(34, 211, 238), rgb(184, 233, 134), transparent)",
              filter: "drop-shadow(0 0 20px rgba(220, 38, 38, 0.3))",
            }}
          ></div>

          <div className="space-y-8 md:space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon
              const bgColor = 
                event.color === "red" ? "bg-red-500/5 border-red-500/20 hover:border-red-500/40" :
                event.color === "cyan" ? "bg-cyan-500/5 border-cyan-500/20 hover:border-cyan-500/40" :
                event.color === "lime" ? "bg-lime-500/5 border-lime-500/20 hover:border-lime-500/40" :
                "bg-amber-500/5 border-amber-500/20 hover:border-amber-500/40"
              
              return (
                <div key={index} className={`flex md:${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} flex-row group`}>
                  {/* Content */}
                  <div className={`md:w-1/2 w-full ${index % 2 === 0 ? "md:pr-12 md:text-right text-left" : "md:pl-12 md:text-left text-left"} pl-12 md:pl-0`}>
                    <motion.div 
                      className={`p-6 rounded-lg border ${bgColor} transition-all duration-300 hover:shadow-lg backdrop-blur-sm`}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {/* Icon and Year */}
                      <div className="flex items-center gap-2 mb-3">
                        {Icon && <Icon className={`w-5 h-5 ${colorMap[event.color]}`} />}
                        <p className={`text-sm font-semibold ${colorMap[event.color]}`}>{event.year}</p>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">{event.title}</h3>
                      
                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">{event.description}</p>
                      
                      {/* Skills Tags */}
                      {event.skills && event.skills.length > 0 && (
                        <div className="mb-3">
                          <p className="text-xs text-gray-500 mb-2">Skills</p>
                          <div className="flex flex-wrap gap-2">
                            {event.skills.map((skill) => (
                              <span key={skill} className="px-2 py-1 text-xs rounded-full bg-zinc-700/50 text-gray-300 border border-zinc-600/50">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Achievements */}
                      {event.achievements && event.achievements.length > 0 && (
                        <div>
                          <p className="text-xs text-gray-500 mb-2">Achievements</p>
                          <div className="flex flex-wrap gap-2">
                            {event.achievements.map((achievement) => (
                              <span key={achievement} className={`px-2 py-1 text-xs rounded-full bg-zinc-700 ${colorMap[event.color].split(" ")[0]} border border-zinc-600/30 flex items-center gap-1`}>
                                <span>✓</span> {achievement}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-0 flex justify-center">
                    <div
                      className="w-5 h-5 rounded-full border-4 border-zinc-900 relative z-10 transform transition-all duration-300 group-hover:scale-150"
                      style={{
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
                    ></div>
                  </div>

                  {/* Empty Space */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-16 pt-8 border-t border-zinc-700">
          <motion.div
            className="bg-gradient-to-r from-red-500/5 to-cyan-500/5 rounded-lg p-8 border border-zinc-700 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-3">What&apos;s Next?</h3>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Currently focusing on advanced AI research, system design, and creating meaningful digital experiences that blend technology with human-centered design.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/projects" className="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors">
                View Projects
              </a>
              <a href="#developer-section" className="px-6 py-2 rounded-lg border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold transition-colors">
                Explore Skills
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
