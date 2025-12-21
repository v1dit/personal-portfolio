"use client"

import { useEffect, useRef } from "react"

const experiences = [
  {
    title: "Blockchain Developer (Return Offer)",
    company: "Unicage",
    period: "Aug 2025 - Present",
    description:
      "Building decentralized systems and smart contract infrastructure for enterprise blockchain solutions.",
    current: true,
  },
  {
    title: "Blockchain Development Intern",
    company: "Unicage",
    period: "Summer 2025",
    description: "Developed smart contracts and contributed to core blockchain infrastructure, earning a return offer.",
  },
  {
    title: "Founder",
    company: "Homora",
    period: "Jun 2025 - Present",
    description: "AI-driven property intelligence, empowering real estate agencies.",
    current: true,
  },
  {
    title: "Lead Lab Researcher",
    company: "Santa Clara University",
    period: "Jan 2025 - Present",
    description: "Leading research initiatives in machine learning and AI applications for real-world systems.",
    current: true,
  },
  {
    title: "AI & Software Engineering Research Assistant",
    company: "SCU",
    period: "Jun 2025 - Present",
    description: "Conducting research on multimodal AI systems and developing novel machine learning solutions.",
    current: true,
  },
  {
    title: "Software Engineer Intern",
    company: "Elytra Robotics",
    period: "Apr 2025 - May 2025",
    description: "Built software systems for autonomous robotics platforms and sensor integration.",
  },
  {
    title: "Data Analyst Intern",
    company: "Berkeley Lab",
    period: "Jun 2022 - Jun 2023",
    description: "Analyzed large-scale scientific datasets and developed data visualization tools.",
  },
  {
    title: "Graduate Research Assistant",
    company: "San Jose State University",
    period: "Jun 2022 - Oct 2022",
    description:
      "Researched environmental regulations, analyzed legal trends, co-authored published paper on effective governance.",
  },
]

export default function Experience() {
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
    <section id="experience" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-sm font-semibold text-blue-600 mb-4 tracking-wide uppercase">Experience</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">{"Where I've worked"}</h3>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`animate-on-scroll opacity-0 relative ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:text-right"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="ml-8 md:ml-0 md:mx-8">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 md:-translate-x-1/2 ${
                      exp.current ? "ring-4 ring-blue-500/20" : ""
                    }`}
                  />

                  <div className="cursor-hover p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-gray-200/50 hover:border-gray-300/50 transition-all duration-300 hover:shadow-lg">
                    {exp.current && (
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-3">
                        Current
                      </span>
                    )}
                    <div className="text-sm text-blue-600 font-medium mb-1">{exp.period}</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h4>
                    <div className="text-base font-medium text-gray-700 mb-3">{exp.company}</div>
                    <p className="text-sm text-gray-600 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
