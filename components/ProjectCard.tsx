"use client"

import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { HoverCard } from "./HoverCard"
import type { ProjectCardProps } from "@/types"

export function ProjectCard({ project }: ProjectCardProps) {
  const handleClick = () => {
    window.open(project.githubUrl, "_blank", "noopener,noreferrer")
  }

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
    <HoverCard className="bg-zinc-800 rounded-lg overflow-hidden cursor-pointer group">
      <div onClick={handleClick} className="block">
        <div className="relative h-48">
          <Image
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 flex items-center gap-2">
            <span className={`px-2 py-1 text-xs font-medium text-white rounded-full ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-white">
              <Github className="w-6 h-6" />
              <span className="text-sm font-medium">View on GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-red-400 transition-colors">
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
      </div>
    </HoverCard>
  )
}
