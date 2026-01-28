"use client"

import Link from "next/link"
import { Instagram, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

const XIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.654l-5.207-6.802-5.974 6.802H2.42l7.728-8.835L1.236 2.25h6.814l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
  </svg>
)

export default function ConnectSection() {
  const email = "pantusharshinde@gmail.com"

  return (
    <motion.section
      id="connect-section"
      className="min-h-screen bg-zinc-900 text-white relative py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col space-y-12">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Connect
          </motion.h2>

          <motion.div
            className="space-y-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              href="/resume"
              className="text-2xl font-bold text-red-600 hover:text-red-500 transition-colors flex items-center gap-2"
            >
              <span className="border-b-2 border-red-600">Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <a
              href={`mailto:${email}`}
              className="text-amber-500 hover:text-amber-400 transition-colors text-lg md:text-xl flex items-center gap-2"
            >
              <Mail className="w-6 h-6" />
              {email}
            </a>

            <div className="flex gap-6">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                <XIcon />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-500 transition-colors"
              >
                <Instagram className="w-8 h-8" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-500 transition-colors"
              >
                <Linkedin className="w-8 h-8" />
              </Link>
            </div>

            <div className="flex gap-8 text-gray-400">
              <Link href="/projects" className="hover:text-white transition-colors font-medium">
                Projects
              </Link>
              <Link href="/about" className="hover:text-white transition-colors font-medium">
                About
              </Link>
              <Link href="/blogs" className="hover:text-white transition-colors font-medium">
                Blogs
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
