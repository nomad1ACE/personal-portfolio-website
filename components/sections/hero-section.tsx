import Image from "next/image"
import Link from "next/link"
import { HERO_CONTENT, COLORS } from "@/config/content"
import { IMAGES } from "@/config/constants"

export function HeroSection() {
  return (
    <section className="min-h-screen text-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative">
        {/* Background Horse Logo */}
        <div className="absolute left-1/4 top-0 opacity-50 pointer-events-none -translate-x-1/2">
          <div className="relative w-[600px] h-[600px]">
            <Image
              src={IMAGES.horseLogo || "/placeholder.svg"}
              alt="Horse logo"
              fill
              className="object-contain drop-shadow-horse"
              priority
            />
          </div>
        </div>

        {/* Main Content */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-xl">{HERO_CONTENT.greeting}</p>
              <h1 className="text-6xl font-bold">
                <span className={COLORS.primary}>{HERO_CONTENT.name}</span>
              </h1>
            </div>
            <p className="text-gray-400 max-w-lg leading-relaxed">
              {HERO_CONTENT.descriptionParts.map((part, index) => {
                if (typeof part === "string") {
                  return <span key={index}>{part}</span>
                }
                return (
                  <a
                    key={index}
                    href={part.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${COLORS.primary} hover:text-red-500 underline transition-colors`}
                  >
                    {part.text}
                  </a>
                )
              })}
            </p>
            <div className="space-x-4">
              {HERO_CONTENT.cta.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-block ${COLORS.primary} hover:text-red-500 transition-colors`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end h-[600px]">
            <Image
              src={IMAGES.hero || "/placeholder.svg"}
              alt="Portrait photo"
              width={400}
              height={600}
              className="object-contain"
              priority
            />
          </div>
        </main>
      </div>
    </section>
  )
}
