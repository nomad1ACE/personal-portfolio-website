"use client"

import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { HoverCard } from "./HoverCard"
import { IMAGES } from "@/config/constants"
import type { ProjectCardProps } from "@/types"

export function ProjectCard({ project }: ProjectCardProps) {
  const handleClick = () => {
    window.open(project.githubUrl, "_blank", "noopener,noreferrer")
  }
  
  const imageUrl = project.imageUrl || IMAGES.horseLogo || "/placeholder.svg"

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500"
      case "In Progress":
        return "bg-yellow-500"
      case "Planning":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <HoverCard className="bg-zinc-800 rounded-lg overflow-hidden cursor-pointer group border border-zinc-700 hover:border-red-600 transition-colors">
      <div onClick={handleClick} className="block">
        <div className="flex flex-col md:flex-row gap-6 p-6">
          {/* Image Section */}
          <div className="relative w-full md:w-48 h-40 md:h-40 flex-shrink-0">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-2 right-2 flex items-center gap-2">
              <span className={`px-2 py-1 text-xs font-medium text-white rounded-full ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-red-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs bg-zinc-700 text-gray-300 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub CTA */}
            <div className="mt-4 flex items-center gap-2 text-red-500 group-hover:text-red-400 transition-colors">
              <Github className="w-4 h-4" />
              <span className="text-sm font-medium">View on GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </HoverCard>
  )
}
