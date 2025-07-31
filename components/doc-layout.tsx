"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ChevronRight, ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Footer } from "@/components/footer"

interface DocSection {
  title: string
  href?: string
  children?: DocSection[]
}

interface DocLayoutProps {
  title: string
  sections: DocSection[]
  children: React.ReactNode
}

export function DocLayout({ title, sections, children }: DocLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())
  const pathname = usePathname()

  useEffect(() => {
    const handleScrollToHash = () => {
      const { hash } = window.location
      if (hash) {
        const element = document.getElementById(hash.substring(1))
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
          }, 100)
        }
      }
    }

    window.addEventListener("hashchange", handleScrollToHash)
    handleScrollToHash()

    return () => {
      window.removeEventListener("hashchange", handleScrollToHash)
    }
  }, [pathname])

  const toggleSection = (sectionTitle: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionTitle)) {
      newExpanded.delete(sectionTitle)
    } else {
      newExpanded.add(sectionTitle)
    }
    setExpandedSections(newExpanded)
  }

  const renderSection = (section: DocSection, level = 0) => {
    const hasChildren = section.children && section.children.length > 0
    const isExpanded = expandedSections.has(section.title)
    const fullHref = section.href ? `${pathname}${section.href}` : "#"

    return (
      <div key={section.title} className={`${level > 0 ? "ml-4" : ""}`}>
        <div className="flex items-center">
          {hasChildren ? (
            <button
              onClick={() => toggleSection(section.title)}
              className="flex items-center w-full text-left py-2 px-3 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 rounded-md transition-colors"
            >
              {isExpanded ? <ChevronDown className="w-4 h-4 mr-2" /> : <ChevronRight className="w-4 h-4 mr-2" />}
              {section.title}
            </button>
          ) : (
            <Link
              href={fullHref}
              className="block w-full py-2 px-3 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 rounded-md transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              {section.title}
            </Link>
          )}
        </div>
        {hasChildren && isExpanded && (
          <div className="ml-2">{section.children?.map((child) => renderSection(child, level + 1))}</div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <div
        className={`fixed top-20 left-0 bottom-0 z-40 w-80 bg-gray-900/95 backdrop-blur-md border-r border-gray-800 transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 pt-4`}
      >
        <div className="flex items-center justify-between p-4 lg:hidden">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="p-4 hidden lg:block">
          <h2 className="text-lg font-semibold text-white mb-4">{title}</h2>
        </div>

        <nav className="px-4 pb-4 overflow-y-auto h-full">{sections.map((section) => renderSection(section))}</nav>
      </div>

      {/* Main content container with left margin */}
      <div className="flex-1 lg:ml-80">
        <div className="max-w-4xl mx-auto px-10 py-10">{children}</div>
        <Footer />
      </div>

      {/* Mobile sidebar toggle */}
      {!sidebarOpen && (
        <div className="lg:hidden fixed top-24 left-1 z-50">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSidebarOpen(true)}
            className="bg-gray-900 border-gray-700"
          >
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  )
}