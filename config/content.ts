import { Coffee, Package, Figma, Code2, Palette, Pen, Users, MessageSquare } from "lucide-react"
import { Instagram, Linkedin } from "lucide-react"
import { PoetryIcon, WritingIcon, CommunicationIcon, TranslationIcon } from "@/components/icons/art-icons"
import type { Skill, SocialLink } from "@/types"
import { XIcon } from "lucide-react" // Import XIcon for Twitter

export const COLORS = {
  primary: "text-red-600",
  secondary: "text-cyan-400",
  tertiary: "text-[#B8E986]",
  accent: "text-amber-500",
} as const

export const HERO_CONTENT = {
  greeting: "Hi there, it's",
  name: "Tushar.",
  descriptionParts: [
    "Computer Science graduate and MCA candidate at ",
    { text: "MIT-WPU", url: "https://mitwpu.edu.in", isLink: true },
    ", passionate about Artificial Intelligence, System Engineering, and Human-Technology Interaction. I build systems that connect logic with creativity — where technology, design, and psychology intersect to create meaningful digital experiences. As a developer and designer, I work across disciplines: coding intelligent systems, crafting clean interfaces, and refining ideas into functional prototypes. Beyond technology, I express my creative side as Nomad — a poetic identity reminding us that words and emotions matter as much as algorithms.",
  ],
  cta: [
    { label: "Projects", href: "/projects" },
    { label: "Timeline", href: "/about" },
  ],
} as const

export const DEVELOPER_SKILLS: Skill[] = [
  { name: "Python", icon: Code2, color: "text-[#3776AB]" },
  { name: "C++", icon: Code2, color: "text-[#00599C]" },
  { name: "Java", icon: Coffee, color: "text-[#007396]" },
  { name: "Flask", icon: Package, color: "text-[#000000]" },
  { name: "LLM Fine-tuning", icon: Code2, color: "text-[#412991]" },
  { name: "JavaScript", icon: Code2, color: "text-[#F7DF1E]" },
]

export const DESIGNER_SKILLS: Skill[] = [
  { name: "Figma", icon: Palette, color: "text-[#F24E1E]" },
  { name: "Canva", icon: Palette, color: "text-[#00C4CC]" },
  { name: "Wireframing", icon: Palette, color: "text-[#8B7D6B]" },
  { name: "UX Psychology", icon: Users, color: "text-red-600" },
]

export const ARTIST_SKILLS: Skill[] = [
  { name: "Poetry", icon: PoetryIcon, color: "text-[#B8E986]" },
  { name: "Creative Writing", icon: WritingIcon, color: "text-[#B8E986]" },
  { name: "Communication", icon: CommunicationIcon, color: "text-[#B8E986]" },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "X", url: "https://twitter.com", icon: XIcon, color: "text-black dark:text-white" },
  { name: "Instagram", url: "https://instagram.com", icon: Instagram, color: "text-pink-600" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin, color: "text-blue-600" },
]
