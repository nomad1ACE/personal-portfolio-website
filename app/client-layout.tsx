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
