"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { IMAGES } from "@/config/constants"

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-zinc-900 z-50 flex items-center justify-center">
      <style>{`
        @keyframes vertical-load {
          0% { transform: translateY(0); opacity: 1; }
          25% { transform: translateY(-20px); opacity: 0.8; }
          50% { transform: translateY(0); opacity: 1; }
          75% { transform: translateY(20px); opacity: 0.8; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes pulse-glow {
          0%, 100% { 
            filter: drop-shadow(0 0 10px rgba(255, 0, 0, 0.4));
          }
          50% { 
            filter: drop-shadow(0 0 25px rgba(255, 0, 0, 0.9));
          }
        }
        .horse-vertical {
          animation: vertical-load 2s ease-in-out infinite, pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
      
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-[300px] h-[300px]">
          <Image
            src={IMAGES.horseLogo || "/placeholder.svg"}
            alt="Loading horse"
            fill
            className="object-contain horse-vertical"
          />
        </div>
        
        <div className="flex flex-col items-center gap-4 mt-4">
          <p className="text-2xl font-semibold text-gray-300">
            Loading<span className="text-red-600">...</span> I know I'm <span className="text-red-600">Unique</span>
          </p>
          <p className="text-sm text-gray-400 mt-2">Merging creativity, technology and psychology</p>
        </div>
      </div>
    </div>
  )
}
