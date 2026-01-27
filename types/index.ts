import type React from "react"

export interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  githubUrl: string
  technologies: string[]
  status: "Completed" | "In Progress" | "Planning"
}

export interface Skill {
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

export interface SocialLink {
  name: string
  url: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

export interface SectionProps {
  id?: string
  className?: string
}

export interface SkillCardProps {
  skill: Skill
}

export interface ProjectCardProps {
  project: Project
}
