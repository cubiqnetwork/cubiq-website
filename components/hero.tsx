"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Zap, Shield } from "lucide-react"
import Link from "next/link"
import * as THREE from "three"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 200

    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvasRef.current })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)

    const particleCount = 300
    const particles: THREE.Mesh[] = []
    const velocities: THREE.Vector3[] = []
    const particleGeometry = new THREE.BoxGeometry(9, 9, 9)
    const particleMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x3b82f6),
      emissive: new THREE.Color(0x3b82f6),
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.4,
      metalness: 0.3,
      roughness: 0.5,
    })

    for (let i = 0; i < particleCount; i++) {
      const particle = new THREE.Mesh(particleGeometry, particleMaterial.clone())
      particle.position.set(
        (Math.random() - 0.5) * 400,
        (Math.random() - 0.5) * 400,
        (Math.random() - 0.5) * 400
      )
      velocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5
      ))
      scene.add(particle)
      particles.push(particle)
    }

    const cubePositions: THREE.Vector3[] = []
    const spacing = 10
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          cubePositions.push(new THREE.Vector3(x * spacing, y * spacing, z * spacing))
        }
      }
    }

    const lines: THREE.Line[] = []
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.7 })
    const createLines = () => {
      lines.forEach(line => scene.remove(line))
      lines.length = 0
      for (let i = 0; i < cubePositions.length; i++) {
        const pos1 = cubePositions[i]
        // Connect to adjacent cubes (6 neighbors: ±x, ±y, ±z)
        for (let dx = -1; dx <= 1; dx += 2) {
          const neighborIdx = i + (dx === -1 ? -1 : 1)
          if (neighborIdx >= 0 && neighborIdx < cubePositions.length) {
            const pos2 = cubePositions[neighborIdx]
            const geometry = new THREE.BufferGeometry().setFromPoints([pos1, pos2])
            const line = new THREE.Line(geometry, lineMaterial)
            lines.push(line)
            scene.add(line)
          }
        }
        for (let dy = -1; dy <= 1; dy += 2) {
          const neighborIdx = i + (dy === -1 ? -3 : 3) // Adjust index for y direction
          if (neighborIdx >= 0 && neighborIdx < cubePositions.length) {
            const pos2 = cubePositions[neighborIdx]
            const geometry = new THREE.BufferGeometry().setFromPoints([pos1, pos2])
            const line = new THREE.Line(geometry, lineMaterial)
            lines.push(line)
            scene.add(line)
          }
        }
        for (let dz = -1; dz <= 1; dz += 2) {
          const neighborIdx = i + (dz === -1 ? -9 : 9) // Adjust index for z direction
          if (neighborIdx >= 0 && neighborIdx < cubePositions.length) {
            const pos2 = cubePositions[neighborIdx]
            const geometry = new THREE.BufferGeometry().setFromPoints([pos1, pos2])
            const line = new THREE.Line(geometry, lineMaterial)
            lines.push(line)
            scene.add(line)
          }
        }
      }
    }

    let cubeCenter = new THREE.Vector3()
    let isHovered = false
    let isExploded = true
    let lastMouseMove = Date.now()

    const animate = () => {
      requestAnimationFrame(animate)

      const now = Date.now()
      const shouldFormCube = isHovered && !isExploded && now - lastMouseMove < 200

      particles.forEach((particle, i) => {
        if (shouldFormCube && i < cubePositions.length) {
          const target = cubePositions[i].clone().add(cubeCenter)
          const distance = particle.position.distanceTo(target)
          if (distance < 1) {
            particle.position.copy(target)
          } else {
            particle.position.lerp(target, 0.1)
          }
        } else {
          particle.position.add(velocities[i])

          if (particle.position.length() > 500) {
            particle.position.set(
              (Math.random() - 0.5) * 400,
              (Math.random() - 0.5) * 400,
              (Math.random() - 0.5) * 400
            )
          }
        }
      })

      if (shouldFormCube) {
        if (lines.length === 0) createLines()
        scene.rotation.y += 0.005
      } else if (lines.length > 0) {
        lines.forEach(line => scene.remove(line))
        lines.length = 0
      }

      renderer.render(scene, camera)
    }

    animate()

    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    const handleMouseMove = (event: MouseEvent) => {
      lastMouseMove = Date.now()
      const rect = renderer.domElement.getBoundingClientRect()
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

      raycaster.setFromCamera(mouse, camera)
      const intersect = raycaster.ray.origin.clone().add(raycaster.ray.direction.clone().multiplyScalar(100))
      cubeCenter.copy(intersect)
    }

    const handleMouseEnter = () => {
      isHovered = true
    }

    const handleMouseLeave = () => {
      isHovered = false
    }

    const handleClick = () => {
      isExploded = !isExploded
    }

    window.addEventListener("mousemove", handleMouseMove)
    canvasRef.current.addEventListener("mouseenter", handleMouseEnter)
    canvasRef.current.addEventListener("mouseleave", handleMouseLeave)
    canvasRef.current.addEventListener("click", handleClick)

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      canvasRef.current?.removeEventListener("mouseenter", handleMouseEnter)
      canvasRef.current?.removeEventListener("mouseleave", handleMouseLeave)
      canvasRef.current?.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: "linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #16213e 100%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4 mb-6 flex-wrap sm:flex-nowrap">
            <img src="/Cubiq-icon.png" alt="Cubiq Icon" width={80} height={80} />
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              CUBIQ Network
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The first mobile-native Layer 1 blockchain with zero-knowledge proofs. Democratizing blockchain
            participation through smartphones and lightweight verification.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
            <Smartphone className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-blue-300">Mobile-First</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
            <Zap className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-blue-300">zkURL Protocol</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-blue-300">Plonky3 Proofs</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/whitepaper">
              Learn More
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-blue-500 text-blue-400 hover:bg-blue-500/10 bg-transparent"
          >
            <Link href="/architecture">View Architecture</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}