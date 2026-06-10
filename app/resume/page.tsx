import Image from "next/image"
import Link from "next/link"
import { Mail, Linkedin, Github } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <Image
              src="/images/design-mode/tushar-portrait.png"
              alt="Tushar's portrait"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
            <h1 className="text-3xl font-bold mt-4 text-center">Tushar Shinde</h1>
            <p className="text-xl text-center text-gray-400">UI/UX Designer, Developer & AI Enthusiast</p>

            <div className="mt-6 space-y-2">
              <a href="mailto:pantusharshinde@gmail.com" className="flex items-center text-gray-300 hover:text-white">
                <Mail className="w-5 h-5 mr-2" />
                pantusharshinde@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
              <a
                href="https://github.com/nomad1ACE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Summary</h2>
              <p className="text-gray-300">
                Computer Science graduate and MCA candidate at MIT-WPU passionate about AI, System Engineering, and Human-Technology Interaction. I build systems that connect logic with creativity—designing intelligent applications, crafting clean interfaces, and refining ideas into functional prototypes that bridge technology and psychology.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-200 mb-2">Development</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Python & Java</li>
                    <li>React & JavaScript</li>
                    <li>C++ Programming</li>
                    <li>Flask</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-200 mb-2">AI & Design</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>LLM Fine-tuning</li>
                    <li>UX Psychology</li>
                    <li>Figma & Canva</li>
                    <li>Wireframing</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Experience</h2>
              <div className="mb-4">
                <h3 className="text-xl font-semibold">UI/UX Designer & Developer</h3>
                <p className="text-gray-400">Freelance | 2020 - Present</p>
                <ul className="list-disc list-inside text-gray-300 mt-2">
                  <li>Designed and developed responsive web applications</li>
                  <li>Collaborated with clients to create user-centered designs</li>
                  <li>Implemented front-end solutions using React and Next.js</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Education</h2>
              <div className="mb-4">
                <h3 className="text-xl font-semibold">Master of Computer Applications (MCA)</h3>
                <p className="text-gray-400">MIT-WPU | In Progress</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
                <p className="text-gray-400">Graduated</p>
              </div>
            </section>
          </div>
        </div>

        <div className="text-center">
          <Link href="/" className="text-blue-400 hover:text-blue-300">
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  )
}
