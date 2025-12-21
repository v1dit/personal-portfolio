"use client"

import { useEffect, useRef } from "react"

const skillCategories = [
  {
    title: "Frameworks & Tools",
    skills: ["React.js", "FastAPI", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "Git/GitHub"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Google Cloud", "Docker", "Cloud Architectures", "API Integration"],
  },
  {
    title: "AI & ML Specialties",
    skills: [
      "Deep Learning",
      "Computer Vision",
      "Multimodal ML",
      "Model Training & Optimization",
      "ML System Design",
      "AI-Driven Predictive Modeling",
    ],
  },
  {
    title: "Blockchain & Web3",
    skills: ["Solidity", "Hardhat", "Smart Contracts", "web3.js", "Ethers.js", "Oracles"],
  },
  {
    title: "Data & Analytics",
    skills: [
      "Data Pipeline Engineering",
      "Data Analysis",
      "Remote Sensing",
      "Quantitative Finance",
      "Financial Analysis",
    ],
  },
]

const courses = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming (C++/Java)",
  "AI & Machine Learning",
  "Cloud Computing",
  "14 AP Courses in high school",
]

const spokenLanguages = ["English", "Spanish", "Hindi"]
const programmingLanguages = ["Python", "Java", "C++", "JavaScript", "SQL", "Solidity"]

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className="py-32 px-6 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-sm font-semibold text-blue-600 mb-4 tracking-wide uppercase">Skills</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Tech Stack / Courses / Skills
          </h3>
        </div>

        <div className="mb-6">
          <div className="animate-on-scroll opacity-0 p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-gray-200/50 hover:border-gray-300/50 transition-all duration-300 hover:shadow-lg">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Languages</h4>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">Programming</p>
                <div className="flex flex-wrap gap-2">
                  {programmingLanguages.map((language, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-gray-800 border border-gray-200/50"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">Spoken</p>
                <div className="flex flex-wrap gap-2">
                  {spokenLanguages.map((language, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-gray-800 border border-gray-200/50"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-gray-200/50 hover:border-gray-300/50 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h4 className="text-lg font-bold text-gray-900 mb-4">{category.title}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-gray-800 border border-gray-200/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-1 gap-6">
          <div
            className="animate-on-scroll opacity-0 p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-gray-200/50 hover:border-gray-300/50 transition-all duration-300 hover:shadow-lg"
            style={{ animationDelay: "600ms" }}
          >
            <h4 className="text-lg font-bold text-gray-900 mb-4">Courses</h4>
            <ul className="space-y-2">
              {courses.map((course, index) => (
                <li key={index} className="text-sm text-gray-700 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3" />
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
