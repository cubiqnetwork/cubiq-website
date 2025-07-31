"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  life: number
  maxLife: number
}

interface MousePosition {
  x: number
  y: number
}

export function InteractiveParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef<MousePosition>({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle colors
    const colors = [
      "rgba(59, 130, 246, 0.6)", // blue-500
      "rgba(147, 51, 234, 0.6)", // purple-600
      "rgba(16, 185, 129, 0.6)", // emerald-500
      "rgba(245, 158, 11, 0.6)", // amber-500
      "rgba(239, 68, 68, 0.6)", // red-500
    ]

    // Create initial particles
    const createParticle = (x?: number, y?: number): Particle => {
      return {
        x: x ?? Math.random() * canvas.width,
        y: y ?? Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 200 + 100,
      }
    }

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particlesRef.current.push(createParticle())
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }

      // Create particles near mouse
      if (Math.random() < 0.3) {
        const angle = Math.random() * Math.PI * 2
        const distance = Math.random() * 50 + 20
        const x = e.clientX + Math.cos(angle) * distance
        const y = e.clientY + Math.sin(angle) * distance

        particlesRef.current.push(createParticle(x, y))
      }
    }

    // Mouse enter/leave handlers
    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const mouse = mouseRef.current
      const particles = particlesRef.current

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i]

        // Update life
        particle.life++

        // Mouse interaction
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          const force = (150 - distance) / 150
          const angle = Math.atan2(dy, dx)

          // Attract particles to mouse
          particle.vx += Math.cos(angle) * force * 0.01
          particle.vy += Math.sin(angle) * force * 0.01

          // Increase opacity near mouse
          particle.opacity = Math.min(1, particle.opacity + force * 0.02)
        } else {
          // Fade out when away from mouse
          particle.opacity = Math.max(0.1, particle.opacity - 0.005)
        }

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Add some drift
        particle.vx *= 0.99
        particle.vy *= 0.99

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Remove old particles
        if (particle.life > particle.maxLife || particles.length > 200) {
          particles.splice(i, 1)
          continue
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color.replace(/[\d.]+\)$/, `${particle.opacity})`)
        ctx.fill()

        // Draw connections to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j]
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Add new particles occasionally
      if (particles.length < 50 && Math.random() < 0.02) {
        particles.push(createParticle())
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-50"
      }`}
      style={{ mixBlendMode: "screen" }}
    />
  )
}
