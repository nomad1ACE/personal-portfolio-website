"use client"
import { useEffect } from "react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of UI/UX Design",
    excerpt: "Exploring emerging trends and technologies shaping the future of user interface and experience design.",
    date: "2023-05-15",
  },
  {
    id: 2,
    title: "Bridging Art and Technology",
    excerpt: "How artistic sensibilities can enhance and elevate technological innovations.",
    date: "2023-04-22",
  },
  {
    id: 3,
    title: "The Power of Poetic Coding",
    excerpt: "Discovering the beauty and efficiency in writing code that reads like poetry.",
    date: "2023-03-10",
  },
  // Add more blog posts as needed
]

export default function BlogsPage() {
  useEffect(() => {
    window.location.href = "https://linkedin.com/in/tusharshinde/recent-activity/articles/"
  }, [])

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center">
      <p className="text-gray-400">Redirecting to LinkedIn articles...</p>
    </div>
  )
}
