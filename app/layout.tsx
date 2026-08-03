import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { SITE_CONFIG } from "@/config/constants"
import ClientLayout from "./client-layout"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-white`}>
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  )
}
