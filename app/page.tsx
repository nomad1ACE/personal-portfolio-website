import { HeroSection } from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import DeveloperSection from "@/components/sections/developer-section"
import DesignerSection from "@/components/sections/designer-section"
import ArtistSection from "@/components/sections/artist-section"
import ConnectSection from "@/components/sections/connect-section"
import { LuminousEffect } from "@/components/LuminousEffect"

export default function HomePage() {
  return (
    <div className="bg-zinc-900 relative">
      <LuminousEffect />
      <HeroSection />
      <AboutSection />
      <DeveloperSection />
      <DesignerSection />
      <ArtistSection />
      <ConnectSection />
    </div>
  )
}
