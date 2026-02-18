"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { IMAGES } from "@/config/constants"

export function LoadingScreen() {
  const [stage, setStage] = useState<"horse" | "quote" | "done">("horse")
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Stage 1: Show horse for 2.1 seconds (70%)
    const stage1Timer = setTimeout(() => {
      setStage("quote")
    }, 4000)

    // Stage 2: Show quote for 0.9 seconds (30%)
    const stage2Timer = setTimeout(() => {
      setStage("done")
    }, 3000)

    // Stage 3: Hide loading screen
    const hideTimer = setTimeout(() => {
      setIsVisible(false)
    }, 3000)

    return () => {
      clearTimeout(stage1Timer)
      clearTimeout(stage2Timer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-zinc-900 z-50 flex items-center justify-center overflow-hidden">
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { 
            filter: drop-shadow(0 0 10px rgba(220, 38, 38, 0.4));
          }
          50% { 
            filter: drop-shadow(0 0 25px rgba(220, 38, 38, 0.9));
          }
        }
        @keyframes fade-out {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .horse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .horse-fade-out {
          animation: fade-out 0.5s ease-out forwards;
        }
        .quote-fade-in {
          animation: fade-in 0.5s ease-in forwards;
        }
      `}</style>

      {/* Stage 1: Horse + "I know I'm Unique" */}
      {stage === "horse" && (
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-[280px] h-[280px]">
            <Image
              src={IMAGES.horseLogo || "/placeholder.svg"}
              alt="Loading horse"
              fill
              className="object-contain horse-glow"
            />
          </div>

          <div className="flex flex-col items-center gap-4 mt-4">
            <p className="text-2xl font-semibold text-gray-300">
              Loading<span className="text-red-600">...</span> I know I'm <span className="text-red-600">Unique</span>
            </p>
            <p className="text-sm text-gray-400">Merging creativity, technology and psychology</p>
          </div>
        </div>
      )}

      {/* Stage 2: Quote with highlighted words */}
      {stage === "quote" && (
        <div className="quote-fade-in px-8 text-center max-w-2xl">
          <p className="text-2xl md:text-3xl font-semibold leading-relaxed text-gray-300">
            I see my{" "}
            <span className="text-red-600 font-bold">weaknesses</span>
            {" "}as vessels
            <br />
            That force me to use my{" "}
            <span className="text-red-600 font-bold">strengths</span>
            {" "}
            effectively..
          </p>
        </div>
      )}
    </div>
  )
}
