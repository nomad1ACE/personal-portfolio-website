"use client"

import type React from "react"
import Link from "next/link"
import { Github } from "lucide-react"
import { LoadingScreen } from "@/components/loading-screen"

function Navigation() {
  const scrollToContact = () => {
    const element = document.getElementById("connect-section")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="flex items-center gap-8">
      <Link href="/" className="text-gray-300 hover:text-white transition-colors">
        Home
      </Link>
      <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
        About
      </Link>
      <button
        onClick={scrollToContact}
        className="font-bold text-red-600 hover:text-red-500 transition-colors"
      >
        Contact
      </button>
      <a
        href="https://github.com/nomad1ACE"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition-colors"
        title="Visit GitHub Profile"
      >
        <Github size={20} />
      </a>
      <a
        href="https://huggingface.co/Tusha111"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition-colors"
        title="Visit Hugging Face Profile"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
        </svg>
      </a>
    </nav>
  )
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <LoadingScreen />
      <header className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex justify-end items-center py-8">
          <Navigation />
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}
