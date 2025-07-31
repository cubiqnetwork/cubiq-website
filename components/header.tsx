"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Github, Twitter, Instagram } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 h-20 flex items-center px-4 md:px-6 lg:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white text-2xl font-bold">
          <img src="/Cubiq-logo-2.png" alt="Cubiq Logo" height={150} width={150} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white hover:text-blue-400">
                Documentation
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-900 border-gray-700 text-white">
              <DropdownMenuItem asChild>
                <Link href="/developers" className="block px-4 py-2 hover:bg-gray-800">
                  Developers
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/user-guide" className="block px-4 py-2 hover:bg-gray-800">
                  User Guide
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/architecture" className="block px-4 py-2 hover:bg-gray-800">
                  Architecture
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/whitepaper" className="block px-4 py-2 hover:bg-gray-800">
                  Whitepaper
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white hover:text-blue-400">
                Network
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-900 border-gray-700 text-white">
              <DropdownMenuItem asChild>
                <Link href="/validators" className="block px-4 py-2 hover:bg-gray-800">
                  Validators
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/zkurl" className="block px-4 py-2 hover:bg-gray-800">
                  zkURL Protocol
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/provers" className="block px-4 py-2 hover:bg-gray-800">
                  Cloud Provers
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/community" className="text-white hover:text-blue-400 transition-colors">
            Community
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white hover:text-blue-400">
                Legal
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-900 border-gray-700 text-white">
              <DropdownMenuItem asChild>
                <Link href="/privacy" className="block px-4 py-2 hover:bg-gray-800">
                  Privacy Policy
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/terms" className="block px-4 py-2 hover:bg-gray-800">
                  Terms of Service
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/security" className="block px-4 py-2 hover:bg-gray-800">
                  Security
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/about" className="text-white hover:text-blue-400 transition-colors">
            About
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="https://github.com/cubiqnetwork"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link
            href="https://x.com/cubiqnetwork"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </Link>
          <Link
            href="https://instagram.com/cubiqnetwork"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </Link>
          {/* Wallet Connect Button - Commented out */}
          {/* <Button variant="secondary" className="bg-blue-600 hover:bg-blue-700 text-white">
            Connect Wallet
          </Button> */}
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6 text-white" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs bg-gray-950 border-l border-gray-800 p-6">
            <div className="flex justify-between items-center mb-6">
              <Link
                href="/"
                className="flex items-center gap-2 text-white text-xl font-bold"
                onClick={() => setIsOpen(false)}
              >
                <img src="/Cubiq-logo-2.png" alt="Cubiq Logo" width={150} />
              </Link>
              {/* <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6 text-white" />
                <span className="sr-only">Close navigation menu</span>
              </Button> */}
            </div>
            <nav className="grid gap-4 text-lg font-medium">
              <Link href="/developers" className="text-gray-300 hover:text-blue-400" onClick={() => setIsOpen(false)}>
                Developers
              </Link>
              <Link href="/user-guide" className="text-gray-300 hover:text-blue-400" onClick={() => setIsOpen(false)}>
                User Guide
              </Link>
              <Link href="/architecture" className="text-gray-300 hover:text-blue-400" onClick={() => setIsOpen(false)}>
                Architecture
              </Link>
              <Link href="/whitepaper" className="text-gray-300 hover:text-blue-400" onClick={() => setIsOpen(false)}>
                Whitepaper
              </Link>
              <Link href="/validators" className="text-gray-300 hover:text-blue-400" onClick={() => setIsOpen(false)}>
                Validators
              </Link>
              <Link href="/zkurl" className="text-gray-300 hover:text-blue-400" onClick={() => setIsOpen(false)}>
                zkURL Protocol
              </Link>
              <Link href="/provers" className="text-gray-300 hover:text-blue-400" onClick={() => setIsOpen(false)}>
                Cloud Provers
              </Link>
              <Link href="/community" className="text-gray-300 hover:text-blue-400" onClick={() => setIsOpen(false)}>
                Community
              </Link>
              <Link href="/privacy" className="text-gray-300 hover:text-blue-400" onClick={() => setIsOpen(false)}>
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-blue-400" onClick={() => setIsOpen(false)}>
                Terms of Service
              </Link>
              <Link href="/security" className="text-gray-300 hover:text-blue-400" onClick={() => setIsOpen(false)}>
                Security
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-blue-400" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <div className="flex items-center gap-4 mt-4">
                <Link
                  href="https://github.com/cubiqnetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </Link>
                <Link
                  href="https://x.com/cubiqnetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </Link>
                <Link
                  href="https://instagram.com/cubiqnetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </Link>
              </div>
              {/* Wallet Connect Button - Commented out */}
              {/* <Button variant="secondary" className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setIsOpen(false)}>
                Connect Wallet
              </Button> */}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
