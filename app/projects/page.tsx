import { ProjectCard } from "@/components/ProjectCard"
import { projects } from "@/data/projects"
import { Github, ExternalLink } from "lucide-react"

export default function ProjectsPage() {
  const completedProjects = projects.filter((p) => p.status === "Completed")

  return (
    <div className="min-h-screen bg-zinc-900 text-white py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Projects</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            A collection of my work spanning web development, mobile applications, and creative projects. Click on any
            project to view the source code and detailed documentation on GitHub.
          </p>
        </div>

        {/* Projects List */}
        {completedProjects.length > 0 && (
          <section className="mb-16">
            <div className="space-y-6">
              {completedProjects.map((project) => (
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
