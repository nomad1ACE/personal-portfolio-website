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

          {/* Future Brick Wall */}
          <div className="mt-16 md:mt-24">
            {/* Final milestone dot */}
            <div className="flex">
              <div className="w-1/2"></div>
              <div className="w-0 flex justify-center">
                <div
                  className="w-6 h-6 rounded-full border-4 border-zinc-900 relative z-10"
                  style={{
                    backgroundColor: "#22D3EE",
                    boxShadow: getGlow("cyan"),
                  }}
                ></div>
              </div>
              <div className="w-1/2"></div>
            </div>

            {/* Main timeline line diverging to wall */}
            <svg className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-24 w-full h-32 opacity-60 pointer-events-none hidden md:block">
              <defs>
                <linearGradient id="gradientToWall" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#22D3EE" />
                  <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
                </linearGradient>
                <marker
                  id="arrowWall"
                  markerWidth="10"
                  markerHeight="10"
                  refX="5"
                  refY="5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L0,10 L10,5 z" fill="#22D3EE" opacity="0.6" />
                </marker>
              </defs>
              <line
                x1="50%"
                y1="0"
                x2="50%"
                y2="100%"
                stroke="url(#gradientToWall)"
                strokeWidth="2"
                markerEnd="url(#arrowWall)"
              />
            </svg>

            {/* Unified brick wall with all possibilities */}
            <div className="mt-16 md:mt-32 px-2 md:px-0">
              <h3 className="text-center text-gray-400 text-xs md:text-sm italic mb-8 md:mb-12">Where I'm Heading & Beyond</h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 md:gap-2">
                {[
                  { label: "AI & Machine Learning", color: "cyan", blur: 0 },
                  { label: "Design Leadership", color: "lime", blur: 0 },
                  { label: "Creative Tech Pioneer", color: "red", blur: 0 },
                  { label: "Full Stack", color: "gray", blur: 1.5 },
                  { label: "System Design", color: "gray", blur: 1.5 },
                  { label: "ML Research", color: "gray", blur: 1.5 },
                  { label: "UX Innovation", color: "gray", blur: 1.8 },
                  { label: "Tech Founder", color: "gray", blur: 1.8 },
                  { label: "Design Systems", color: "gray", blur: 1.8 },
                  { label: "Human-AI", color: "gray", blur: 2 },
                  { label: "Psychology Tech", color: "gray", blur: 2 },
                  { label: "Open Source", color: "gray", blur: 2 },
                  { label: "Mentorship", color: "gray", blur: 2.3 },
                  { label: "Book Author", color: "gray", blur: 2.3 },
                  { label: "Artist Tech", color: "gray", blur: 2.3 },
                  { label: "Leadership", color: "gray", blur: 2.5 },
                  { label: "Innovation", color: "gray", blur: 2.5 },
                  { label: "Teaching", color: "gray", blur: 2.5 },
                  { label: "Strategy", color: "gray", blur: 2.8 },
                  { label: "Consulting", color: "gray", blur: 2.8 },
                  { label: "Research", color: "gray", blur: 2.8 },
                  { label: "Community", color: "gray", blur: 3 },
                  { label: "Endless", color: "gray", blur: 3 },
                  { label: "Growth", color: "gray", blur: 3 },
                ].map((brick, index) => (
                  <div
                    key={index}
                    className="group relative"
                    style={{
                      filter: brick.blur > 0 ? `blur(${brick.blur}px)` : "blur(0px)",
                    }}
                  >
                    <div
                      className={`p-2 md:p-3 rounded-md border transition-all duration-300 group-hover:blur-none text-center text-xs font-semibold h-12 md:h-16 flex items-center justify-center`}
                      style={{
                        borderColor:
                          brick.color === "cyan"
                            ? "#22D3EE"
                            : brick.color === "lime"
                              ? "#B8E986"
                              : brick.color === "red"
                                ? "#DC2626"
                                : "rgba(156, 163, 175, 0.3)",
                        backgroundColor:
                          brick.color === "cyan"
                            ? "rgba(34, 211, 238, 0.15)"
                            : brick.color === "lime"
                              ? "rgba(184, 233, 134, 0.15)"
                              : brick.color === "red"
                                ? "rgba(220, 38, 38, 0.15)"
                                : "rgba(63, 63, 70, 0.5)",
                        color:
                          brick.color === "cyan"
                            ? "#22D3EE"
                            : brick.color === "lime"
                              ? "#B8E986"
                              : brick.color === "red"
                                ? "#DC2626"
                                : "rgba(209, 213, 219, 0.7)",
                        boxShadow:
                          brick.color !== "gray"
                            ? `0 0 20px ${
                                brick.color === "cyan"
                                  ? "rgba(34, 211, 238, 0.3)"
                                  : brick.color === "lime"
                                    ? "rgba(184, 233, 134, 0.3)"
                                    : "rgba(220, 38, 38, 0.3)"
                              }`
                            : "none",
                      }}
                    >
                      {brick.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Future indicator text */}
              <div className="text-center mt-8 md:mt-12">
                <p className="text-gray-400 text-xs md:text-sm italic">
                  The journey continues... Multiple paths, infinite possibilities. Growth is ongoing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
