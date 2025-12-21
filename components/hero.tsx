"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

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

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center px-6 pt-20 opacity-0">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/60 shadow-xl mx-auto">
            <Image
              src="/profile.png"
              alt="Vidit Agarwal"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900 text-balance">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-teal-500 bg-clip-text text-transparent">
            Vidit Agarwal
          </span>
        </h1>

        <p className="text-base md:text-lg text-gray-600 mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          <span className="font-bold">Double Major in Computer Science & Economics at Santa Clara University.</span>{" "}
          Interested in the intersection of AI, machine learning, blockchain, full-stack engineering, and fintech.
          Experience spans research, startups, and production-level systems in geospatial ML, decentralized AI, and
          multimodal learning platforms.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button onClick={scrollToProjects} size="lg" className="group text-base px-8 py-6">
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="text-base px-8 py-6 bg-transparent">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  )
}
