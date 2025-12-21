"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-sm font-semibold text-blue-600 mb-4 tracking-wide uppercase">Contact</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">Get in touch</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty leading-relaxed">
            Looking for internship opportunities, research collaborations, or exciting projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-on-scroll opacity-0" style={{ animationDelay: "100ms" }}>
            <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-gray-800/80 h-full">
              <h4 className="text-2xl font-bold text-gray-900 mb-8">{"Let's connect"}</h4>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 mb-1">Email</div>
                    <a href="mailto:vagarwal@scu.edu" className="text-gray-600 hover:text-blue-600 transition-colors">
                      vagarwal@scu.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 mb-1">Location</div>
                    <div className="text-gray-600">Santa Clara, CA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0" style={{ animationDelay: "200ms" }}>
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-gray-200/50"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/50 border-gray-200/50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/50 border-gray-200/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white/50 border-gray-200/50 resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
