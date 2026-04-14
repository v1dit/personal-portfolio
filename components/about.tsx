"use client"

import { useEffect, useRef } from "react"
import { Brain, Code, Blocks, Database, Users, Github, Linkedin, Mail } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI / Machine Learning",
    description: "Deep learning, computer vision, NLP",
  },
  {
    icon: Code,
    title: "Full-Stack Engineering",
    description: "React, FastAPI, cloud systems",
  },
  {
    icon: Blocks,
    title: "Blockchain & Web3",
    description: "Smart contracts, DeFi systems",
  },
  {
    icon: Database,
    title: "Research & Data Systems",
    description: "ML pipelines, data engineering",
  },
  {
    icon: Users,
    title: "Founder-Led Execution",
    description: "Shipping quickly, owning product direction, and building with urgency",
  },
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      const children = sectionRef.current.querySelectorAll(".animate-on-scroll")
      children.forEach((child) => observer.observe(child))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start mb-16">
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-sm font-semibold text-blue-600 mb-4 tracking-wide uppercase">About</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
              Resume-first, builder-minded, and shipping across domains.
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              My work spans applied AI, blockchain infrastructure, research, and product engineering. I like building
              things that feel technically ambitious but still useful in the real world, whether that means training
              models, wiring up full-stack systems, or turning hackathon ideas into polished demos.
            </p>
            <p className="mt-5 text-base text-gray-500 leading-relaxed max-w-2xl">
              I&apos;m especially drawn to startup environments, fast iteration, and products with enough depth to earn
              real trust from users.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/v1dit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:text-gray-900"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/viditagarwal-"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:text-gray-900"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="mailto:vidit3035@gmail.com"
                className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:text-gray-900"
              >
                <Mail className="h-4 w-4" />
                vidit3035@gmail.com
              </a>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 rounded-[2rem] border border-gray-200 bg-white/90 p-8 shadow-[0_22px_60px_-36px_rgba(15,23,42,0.35)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400 mb-4">At a glance</p>
            <div className="space-y-6 text-left">
              <div>
                <p className="text-sm text-gray-500 mb-1">School</p>
                <p className="text-lg font-semibold text-gray-900">Santa Clara University</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Focus</p>
                <p className="text-lg font-semibold text-gray-900">AI systems, startups, and full-stack execution</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Based in</p>
                <p className="text-lg font-semibold text-gray-900">Santa Clara, California</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="cursor-hover animate-on-scroll opacity-0 p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
