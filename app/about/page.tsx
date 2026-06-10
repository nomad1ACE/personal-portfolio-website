import Image from "next/image"
import Timeline from "@/components/timeline"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/design-mode/tushar-portrait.png"
              alt="Tushar's portrait"
              width={400}
              height={600}
              className="rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <p className="text-xl">
              Hi, I'm Tushar, also known as Nomad in the world of poetry. I'm an artistic UI/UX Designer with a passion
              for merging creativity with functionality.
            </p>
            <p className="text-xl">
              With a strong foundation in computer science, I bring a unique blend of technical expertise and artistic
              vision to every project I undertake.
            </p>
            <p className="text-xl">
              My journey in the world of technology and design has been driven by a lifelong curiosity and a desire to
              create meaningful, user-centric experiences.
            </p>
            <p className="text-xl">
              When I'm not designing or coding, you can find me immersed in the art of poetry, exploring new
              technologies, or collaborating on innovative projects.
            </p>
          </div>
        </div>
        <Timeline />
      </div>
    </div>
  )
}
