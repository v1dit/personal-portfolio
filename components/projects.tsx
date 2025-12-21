"use client"

import { useEffect, useRef } from "react"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "SportsBet Portfolio",
    description:
      "Decentralized sports betting portfolio with ML predictions (~83% accuracy) and on-chain auditability for transparent wagering.",
    tags: ["Blockchain", "Machine Learning", "Solidity", "Python"],
    gradient: "from-green-500/20 to-blue-500/20",
  },
  {
    title: "ArtiFACT",
    description:
      "AI-driven media authenticity engine using ConvNeXt-V2, EfficientNet-V2, CLIP, and multimodal ML for detecting synthetic media.",
    tags: ["PyTorch", "CLIP", "ConvNeXt-V2", "Computer Vision"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Voyagent",
    description:
      "LLM-powered travel planner using FastAPI, React, and real-time APIs for personalized itinerary generation.",
    tags: ["FastAPI", "React", "LLM", "REST APIs"],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Ember Alert",
    description:
      "Rapid emergency response system for wildfire detection and notification using real-time satellite data and ML.",
    tags: ["Machine Learning", "Emergency Response", "Python", "Real-time"],
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "DriveWatch AI",
    description:
      "AWS x Inrix finalist project for real-time Amber Alert vehicle detection using computer vision and edge computing.",
    tags: ["AWS", "Computer Vision", "Edge AI", "Real-time"],
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    title: "Open Spaces AI",
    description:
      "AI-powered platform for discovering and analyzing public spaces, leveraging computer vision and geospatial data.",
    tags: ["AI", "Geospatial", "Computer Vision", "Python"],
    gradient: "from-teal-500/20 to-green-500/20",
  },
  {
    title: "IP Rights & Market Value Analysis",
    description:
      "Research project analyzing the impact of intellectual property rights on Apple's market valuation and competitive positioning.",
    tags: ["Research", "Economics", "Data Analysis", "Finance"],
    gradient: "from-indigo-500/20 to-blue-500/20",
  },
  {
    title: "Satellite Vegetation Health Model",
    description:
      "Predictive model using satellite imagery and machine learning to forecast vegetation health and environmental changes.",
    tags: ["Remote Sensing", "ML", "Python", "Environmental Science"],
    gradient: "from-emerald-500/20 to-green-500/20",
  },
]

export default function Projects() {
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
    <section id="projects" ref={sectionRef} className="py-32 px-6 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-sm font-semibold text-blue-600 mb-4 tracking-wide uppercase">My Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">Featured Projects</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty leading-relaxed">
            A selection of projects spanning AI/ML, blockchain, full-stack development, and research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`animate-on-scroll opacity-0 group p-8 rounded-3xl bg-gradient-to-br ${project.gradient} backdrop-blur-xl border border-white/40 hover:border-white/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h4>
              <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white/60 backdrop-blur-sm text-gray-700 border border-gray-200/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform">
                View on GitHub
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
