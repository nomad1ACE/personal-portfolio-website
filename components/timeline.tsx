"use client"

interface TimelineEvent {
  year: string
  title: string
  description: string
  color: "red" | "cyan" | "lime" | "amber"
}

const preTimelineEvents: TimelineEvent[] = [
  {
    year: "Before 10th",
    title: "Early Years",
    description: "Foundation years - schooling and early interest in learning",
    color: "red",
  },
]

const timelineEvents: TimelineEvent[] = [
  {
    year: "10th Grade",
    title: "Beginning",
    description: "Started my coding journey with curiosity and passion for technology",
    color: "red",
  },
  {
    year: "12th Grade",
    title: "Exploration",
    description: "Explored web development and discovered my love for building interfaces",
    color: "cyan",
  },
  {
    year: "Bachelors (BSc CS)",
    title: "Foundation",
    description: "Graduated with a strong foundation in Computer Science and algorithms",
    color: "lime",
  },
  {
    year: "Design Discovery",
    title: "Creative Merge",
    description: "Discovered the intersection of design and development, started creating meaningful UX",
    color: "amber",
  },
  {
    year: "Poetry & Nomad",
    title: "Artistic Expression",
    description: "Embraced creative writing and poetry as Nomad, expressing emotions through words",
    color: "red",
  },
  {
    year: "Current - MCA",
    title: "Masters & Beyond",
    description: "Pursuing MCA at MIT-WPU, diving deeper into AI, System Engineering, and Human-Technology Interaction",
    color: "cyan",
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
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 md:mb-16 text-center">My Journey</h2>

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
              <div key={`pre-${index}`} className={`flex md:${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} flex-row`}>
                {/* Content */}
                <div className={`md:w-1/2 w-full ${index % 2 === 0 ? "md:pr-12 md:text-right text-left" : "md:pl-12 md:text-left text-left"} pl-12 md:pl-0`}>
                  <div className="p-6 bg-zinc-800 rounded-lg border border-zinc-700">
                    <p className={`text-sm font-semibold mb-2 ${colorMap[event.color]}`}>{event.year}</p>
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="w-0 flex justify-center">
                  <div
                    className={`w-4 h-4 rounded-full border-4 border-zinc-900 relative z-10 ${colorMap[event.color]}`}
                    style={{
                      backgroundColor:
                        event.color === "red"
                          ? "#DC2626"
                          : event.color === "cyan"
                            ? "#22D3EE"
                            : event.color === "lime"
                              ? "#B8E986"
                              : "#F59E0B",
                    }}
                  ></div>
                </div>

                {/* Empty Space */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>

          <div className="space-y-8 md:space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`flex md:${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} flex-row`}>
                {/* Content */}
                <div className={`md:w-1/2 w-full ${index % 2 === 0 ? "md:pr-12 md:text-right text-left" : "md:pl-12 md:text-left text-left"} pl-12 md:pl-0`}>
                  <div className="p-6 bg-zinc-800 rounded-lg border border-zinc-700 hover:border-zinc-600 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-700/50">
                    <p className={`text-sm font-semibold mb-2 ${colorMap[event.color]}`}>{event.year}</p>
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>

                <div className="w-0 flex justify-center">
                  <div
                    className={`w-5 h-5 rounded-full border-4 border-zinc-900 relative z-10 transform transition-all duration-300 hover:scale-150 ${colorMap[event.color]}`}
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
            ))}
          </div>


        </div>
      </div>
    </div>
  )
}
