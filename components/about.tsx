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
    title: "Founder/Leadership",
    description: "Building products, leading teams",
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
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-sm font-semibold text-blue-600 mb-4 tracking-wide uppercase">Connect</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-balance">Find me on</h3>

          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/v1dit"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 p-[2px] hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                <Github className="w-7 h-7 text-white" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/viditagarwal-"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 p-[2px] hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                <Linkedin className="w-7 h-7 text-white" />
              </div>
            </a>
            <a
              href="mailto:vagarwal@scu.edu"
              className="group w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 p-[2px] hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                <Mail className="w-7 h-7 text-white" />
              </div>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="cursor-hover animate-on-scroll opacity-0 p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-gray-200/50 hover:border-gray-300/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center mb-4">
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
