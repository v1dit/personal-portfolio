"use client"

import { useEffect, useRef } from "react"

const experiences = [
  {
    title: "Open Source Systems Engineering",
    company: "The Linux Foundation",
    period: "Jan 2026 - Present",
    description: "Contributing to open-source systems engineering work with a focus on Magma Core.",
    current: true,
  },
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
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">Where I&apos;ve worked</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty leading-relaxed">
            Research, internships, open-source systems, and founder-led product work across software and AI.
          </p>
        </div>

        <div className="space-y-5">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 rounded-[2rem] border border-gray-200 bg-white/85 p-6 shadow-[0_22px_60px_-38px_rgba(15,23,42,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_30px_70px_-40px_rgba(15,23,42,0.32)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="grid gap-5 md:grid-cols-[180px_1fr] md:gap-8">
                <div className="border-b border-gray-100 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-8">
                  <div className="text-sm font-semibold text-blue-600">{exp.period}</div>
                  {exp.current && (
                    <span className="mt-3 inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-700">
                      Current
                    </span>
                  )}
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h4>
                  <div className="text-base font-medium text-gray-700 mb-3">{exp.company}</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
