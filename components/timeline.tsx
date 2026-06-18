"use client"

import { Code2, Palette, BookOpen, Lightbulb, PenTool, Zap, Award } from "lucide-react"

interface TimelineEvent {
  year: string
  title: string
  description: string
  color: "red" | "cyan" | "lime" | "amber"
  icon?: React.ComponentType<{ className?: string }>
  skills?: string[]
  achievements?: string[]
}

const preTimelineEvents: TimelineEvent[] = [
  {
    year: "Before 10th",
    title: "Early Years",
    description: "Foundation years - schooling and early interest in learning",
    color: "red",
    icon: BookOpen,
    achievements: ["Strong academics", "Curiosity for tech"],
  },
]

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
  red: "from-red-600 to-red-700 text-red-600",
  cyan: "from-cyan-400 to-cyan-500 text-cyan-400",
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

          <div className="space-y-8 md:space-y-12 opacity-40 blur-sm pointer-events-none mb-8">
            {preTimelineEvents.map((event, index) => (
              <div key={`pre-${index}`} className="flex md:flex-row flex-row">
                <div className="md:w-1/2 w-full md:pr-12 md:text-right text-left pl-12 md:pl-0">
                  <div className="p-6 bg-zinc-800/50 rounded-lg border border-zinc-700">
                    <p className={`text-sm font-semibold mb-2 ${colorMap[event.color]}`}>{event.year}</p>
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
                <div className="w-0 flex justify-center">
                  <div
                    className={`w-4 h-4 rounded-full border-4 border-zinc-900 relative z-10 ${colorMap[event.color]}`}
                    style={{
                      backgroundColor: event.color === "red" ? "#DC2626" : event.color === "cyan" ? "#22D3EE" : event.color === "lime" ? "#B8E986" : "#F59E0B",
                    }}
                  ></div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>

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
                    <div className={`p-6 rounded-lg border ${bgColor} transition-all duration-300 hover:shadow-lg backdrop-blur-sm`}>
                      {/* Icon and Year */}
                      <div className="flex items-center gap-2 mb-3">
                        {Icon && <Icon className={`w-5 h-5 ${colorMap[event.color]}`} />}
                        <p className={`text-sm font-semibold ${colorMap[event.color]}`}>{event.year}</p>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">{event.title}</h3>
                      
                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">{event.description}</p>
                      
                      {/* Skills Tags */}
                      {event.skills && event.skills.length > 0 && (
                        <div className="mb-3">
                          <p className="text-xs text-gray-500 mb-2">Skills</p>
                          <div className="flex flex-wrap gap-2">
                            {event.skills.map((skill) => (
                              <span key={skill} className={`px-2 py-1 text-xs rounded-full bg-zinc-700/50 text-gray-300 border border-zinc-600/50`}>
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
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-0 flex justify-center">
                    <div
                      className={`w-5 h-5 rounded-full border-4 border-zinc-900 relative z-10 transform transition-all duration-300 group-hover:scale-150`}
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
          <div className="bg-gradient-to-r from-red-500/5 to-cyan-500/5 rounded-lg p-8 border border-zinc-700 text-center">
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
          </div>
        </div>
      </div>
    </div>
  )
}
