"use client"

import { useEffect, useRef, useState } from "react"

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const mousePos = useRef({ x: 0, y: 0 })
  const cursorPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-hover")
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-hover")
      ) {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseout", handleMouseOut)

    // Smooth cursor animation with lerp
    let animationFrameId: number
    const animate = () => {
      const lerp = 0.15 // Smooth trailing effect
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * lerp
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * lerp

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px)`
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block transition-all duration-300 ${
        isHovering ? "scale-150 opacity-80" : "scale-100 opacity-100"
      }`}
      style={{
        width: "12px",
        height: "12px",
        marginLeft: "-6px",
        marginTop: "-6px",
      }}
    >
      <div
        className="h-full w-full rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0.4) 70%)",
          filter: "blur(2px)",
          boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
        }}
      />
    </div>
  )
}
