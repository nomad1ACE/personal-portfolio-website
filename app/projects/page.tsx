import { ProjectCard } from "@/components/ProjectCard"
import { projects } from "@/data/projects"
import { Github, ExternalLink } from "lucide-react"

export default function ProjectsPage() {
  const completedProjects = projects.filter((p) => p.status === "Completed")
  const inProgressProjects = projects.filter((p) => p.status === "In Progress")
  const planningProjects = projects.filter((p) => p.status === "Planning")

  return (
    <div className="min-h-screen bg-zinc-900 text-white py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Projects</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            A collection of my work spanning web development, mobile applications, and creative projects. Click on any
            project to view the source code and detailed documentation on GitHub.
          </p>
        </div>

        {/* Completed Projects */}
        {completedProjects.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-green-400">Completed Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* In Progress Projects */}
        {inProgressProjects.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-yellow-400">In Progress</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {inProgressProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Planning Projects */}
        {planningProjects.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">Planning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {planningProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <div className="bg-zinc-800 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Want to see more?</h3>
            <p className="text-gray-400 mb-6">
              Check out my GitHub profile for additional projects, contributions, and code samples.
            </p>
            <a
              href="https://github.com/nomad1ACE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Github className="w-5 h-5" />
              Visit GitHub Profile
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
