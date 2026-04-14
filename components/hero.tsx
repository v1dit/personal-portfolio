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

  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Vidit_Agarwal_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 opacity-0"
    >
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gray-500 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-blue-600" />
          Santa Clara University
          <span className="text-gray-300">/</span>
          Computer Science + Economics
        </div>

        <div className="mb-8 inline-block">
          <div className="w-32 h-32 rounded-full overflow-hidden border border-gray-200 bg-white shadow-[0_18px_50px_-24px_rgba(15,23,42,0.35)] mx-auto">
            <Image
              src="/profile.png"
              alt="Vidit Agarwal"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-950 text-balance">
          Vidit Agarwal
        </h1>

        <p className="text-lg md:text-2xl text-gray-700 mb-5 max-w-4xl mx-auto text-pretty leading-relaxed">
          Building at the intersection of AI, systems, blockchain, and product-minded engineering.
        </p>

        <p className="text-base md:text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-pretty leading-relaxed">
          I&apos;m a double major in Computer Science and Economics at Santa Clara University with experience across
          research labs, startups, full-stack products, and applied ML systems. This site is a simple web version of
          my resume, recent work, and the projects I&apos;ve been shipping.
        </p>

        <div className="mb-12 flex flex-wrap justify-center gap-3 text-sm text-gray-600">
          <span className="rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">AI / ML</span>
          <span className="rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">Full-Stack</span>
          <span className="rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">Blockchain</span>
          <span className="rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">Research</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button onClick={scrollToProjects} size="lg" className="group text-base px-8 py-6 shadow-sm">
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            onClick={handleResumeDownload}
            variant="outline"
            size="lg"
            className="text-base px-8 py-6 bg-transparent"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Long-term goal: build something ambitious enough to earn a place in YC.
        </p>
      </div>
    </section>
  )
}
