"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { IMAGES } from "@/config/constants"

export function LoadingScreen() {
  const [stage, setStage] = useState<"horse" | "quote">("horse")
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const HORSE_TIME = 2500
    const TOTAL_TIME = 6000

    const stageTimer = setTimeout(() => {
      setStage("quote")
    }, HORSE_TIME)

    const hideTimer = setTimeout(() => {
      setIsVisible(false)
    }, TOTAL_TIME)

    return () => {
      clearTimeout(stageTimer)
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

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes glass-shine {
          0% {
            transform: translateX(-150%) rotate(25deg);
          }
          100% {
            transform: translateX(150%) rotate(25deg);
          }
        }

        .horse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .fade-in {
          animation: fade-in 0.6s ease forwards;
        }

        .glass-container {
          position: relative;
          overflow: hidden;
        }

        .glass-container::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 50%;
          height: 200%;
          background: linear-gradient(
            120deg,
            rgba(255,255,255,0.05) 0%,
            rgba(255,255,255,0.4) 50%,
            rgba(255,255,255,0.05) 100%
          );
          animation: glass-shine 3.5s ease-in-out infinite;
          pointer-events: none;
        }
      `}</style>

      {stage === "horse" && (
        <div className="flex flex-col items-center gap-6 fade-in">
          <div className="relative w-[280px] h-[280px] glass-container">
            <Image
              src={IMAGES.horseLogo || "/placeholder.svg"}
              alt="Loading horse"
              fill
              className="object-contain horse-glow"
            />
          </div>

          <div className="flex flex-col items-center gap-4 mt-4">
            <p className="text-2xl font-semibold text-gray-300">
              Loading<span className="text-red-600">...</span> I know I'm{" "}
              <span className="text-red-600">Unique</span>
            </p>
            <p className="text-sm text-gray-400">
              Merging creativity, technology and psychology
            </p>
          </div>
        </div>
      )}

      {stage === "quote" && (
        <div className="px-8 text-center max-w-2xl fade-in">
          <p className="text-2xl md:text-3xl font-semibold leading-relaxed text-gray-300">
            I see my{" "}
            <span className="text-red-600 font-bold">weaknesses</span>{" "}
            as vessels
            <br />
            That force me to use my{" "}
            <span className="text-red-600 font-bold">strengths</span>{" "}
            effectively..
          </p>
        </div>
      )}
    </div>
  )
}
