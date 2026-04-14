"use client"

import { useEffect, useRef } from "react"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "BlueDocs",
    description:
      "Interactive ocean planning tool for proposing offshore projects and instantly analyzing spatial conflicts against real federal datasets.",
    tags: ["Next.js", "Mapbox", "FastAPI", "Spatial Analysis"],
    gradient: "from-sky-100 via-white to-cyan-50",
    githubUrl: "https://github.com/shlawgathon/BlueDocs",
    badge: "Hackathon Winner",
    highlight: "Scores project risk and suggests lower-conflict relocation options for offshore planning.",
  },
  {
    title: "Aegis",
    description:
      "PPO-powered blue-team cyber defense pipeline with replay packaging, live incident streams, and a demo-first defense interface.",
    tags: ["RLlib", "PyTorch", "FastAPI", "Cyber Defense"],
    gradient: "from-slate-100 via-white to-blue-50",
    githubUrl: "https://github.com/kgarg2468/aegis",
  },
  {
    title: "Networking Agent",
    description:
      "AI outreach agent that parses LinkedIn profiles, verifies emails, and generates grounded networking messages with optional Gmail sending.",
    tags: ["FastAPI", "OpenAI", "Gmail API", "Agent Systems"],
    gradient: "from-stone-100 via-white to-blue-50",
    githubUrl: "https://github.com/v1dit/networking-agent",
  },
  {
    title: "SportsBet Portfolio",
    description:
      "Decentralized sports betting portfolio with ML predictions (~83% accuracy) and on-chain auditability for transparent wagering.",
    tags: ["Blockchain", "Machine Learning", "Solidity", "Python"],
    gradient: "from-green-50 via-white to-blue-50",
    githubUrl: "https://github.com/v1dit/sportsbet-portfolio",
  },
  {
    title: "ArtiFACT",
    description:
      "AI-driven media authenticity engine using ConvNeXt-V2, EfficientNet-V2, CLIP, and multimodal ML for detecting synthetic media.",
    tags: ["PyTorch", "CLIP", "ConvNeXt-V2", "Computer Vision"],
    gradient: "from-rose-50 via-white to-amber-50",
    githubUrl: "https://github.com/ArtiFACT-CalHacks/artifact",
  },
  {
    title: "Voyagent",
    description:
      "LLM-powered travel planner using FastAPI, React, and real-time APIs for personalized itinerary generation.",
    tags: ["FastAPI", "React", "LLM", "REST APIs"],
    gradient: "from-cyan-50 via-white to-sky-50",
    githubUrl: "https://github.com/abhinavala/Voyagent",
  },
  {
    title: "Ember Alert",
    description:
      "Rapid emergency response system for wildfire detection and notification using real-time satellite data and ML.",
    tags: ["Machine Learning", "Emergency Response", "Python", "Real-time"],
    gradient: "from-orange-50 via-white to-rose-50",
    githubUrl: "https://github.com/AbeBhatti/hackforhumanity",
  },
  {
    title: "DriveWatch AI",
    description:
      "Real-time Amber Alert vehicle detection system using computer vision and edge AI for fast, high-signal roadway monitoring.",
    tags: ["AWS", "Computer Vision", "Edge AI", "Real-time"],
    gradient: "from-amber-50 via-white to-orange-50",
    githubUrl: "https://github.com/v1dit/AWS2024",
    badge: "Hackathon Finalist",
    highlight: "Built as an AWS x INRIX finalist project focused on live vehicle detection for Amber Alerts.",
  },
  {
    title: "Open Spaces AI",
    description:
      "AI-powered platform for discovering and analyzing public spaces, leveraging computer vision and geospatial data.",
    tags: ["AI", "Geospatial", "Computer Vision", "Python"],
    gradient: "from-teal-50 via-white to-emerald-50",
    githubUrl: "https://github.com/OpenSpacesProject",
  },
  {
    title: "IP Rights & Market Value Analysis",
    description:
      "Research project analyzing the impact of intellectual property rights on Apple's market valuation and competitive positioning.",
    tags: ["Research", "Economics", "Data Analysis", "Finance"],
    gradient: "from-indigo-50 via-white to-blue-50",
  },
  {
    title: "Satellite Vegetation Health Model",
    description:
      "Predictive model using satellite imagery and machine learning to forecast vegetation health and environmental changes.",
    tags: ["Remote Sensing", "ML", "Python", "Environmental Science"],
    gradient: "from-emerald-50 via-white to-lime-50",
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
    <section id="projects" ref={sectionRef} className="py-32 px-6 bg-gradient-to-b from-[#f7f9fc] via-white to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-sm font-semibold text-blue-600 mb-4 tracking-wide uppercase">My Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">Selected Projects</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty leading-relaxed">
            A selection of projects across AI, systems, blockchain, spatial intelligence, and full-stack product work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`animate-on-scroll opacity-0 group flex flex-col p-8 rounded-[2rem] bg-gradient-to-br ${project.gradient} border border-gray-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-42px_rgba(15,23,42,0.38)]`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">Project</span>
                {project.badge && (
                  <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                    {project.badge}
                  </span>
                )}
              </div>

              <h4 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h4>
              <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

              {project.highlight && (
                <p className="mb-6 rounded-2xl border border-white/80 bg-white/80 px-4 py-3 text-sm leading-relaxed text-gray-600 shadow-sm">
                  {project.highlight}
                </p>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white/80 text-gray-700 border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="mt-auto">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="border border-gray-200 bg-white/80 px-4 group-hover:translate-x-1 transition-transform"
                  >
                    View on GitHub
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
