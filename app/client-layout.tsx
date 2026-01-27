"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { IMAGES } from "@/config/constants"

export default function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3000) // give resume a bit more time to load

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-zinc-900 z-50 flex items-center justify-center overflow-hidden">
          <style>{`
            @keyframes vertical-wipe {
              0% { clip-path: inset(100% 0 0 0); opacity: 0; }
              40% { clip-path: inset(0 0 0 0); opacity: 1; }
              70% { clip-path: inset(0 0 0 0); opacity: 1; }
              100% { clip-path: inset(0 0 100% 0); opacity: 0; }
            }
            @keyframes pulse-glow {
              0%, 100% { filter: drop-shadow(0 0 15px rgba(255, 0, 0, 0.5)); }
              50% { filter: drop-shadow(0 0 35px rgba(255, 0, 0, 0.9)); }
            }
            .horse-cinematic {
              animation: vertical-wipe 2.5s ease-in-out forwards, pulse-glow 2s ease-in-out infinite;
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .fade-text {
              animation: fadeIn 2s ease-in forwards;
            }
          `}</style>

          <div className="flex flex-col items-center gap-6">
            <div className="relative w-[300px] h-[300px]">
              <Image
                src={IMAGES.horseLogo || "/placeholder.svg"}
                alt="Loading horse"
                fill
                className="object-contain horse-cinematic"
              />
            </div>
           <p className="text-gray-400 text-sm fade-text tracking-widest uppercase">
  Loading... 
  I know I am{" "}
  <span
    style={{
      fontWeight: "bold",
      color: "red",
      textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
    }}
  >
    unique
  </span>
</p>


          </div>
        </div>
      )}

      {/* Resume content shows once loader disappears */}
      {!isVisible && children}
    </>
  )
}
