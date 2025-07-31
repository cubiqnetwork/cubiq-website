import Link from "next/link"
import { Github, X, Instagram, Youtube, DiscIcon as Discord, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 text-white text-2xl font-bold">
            <img src="/Cubiq-logo-2.png" alt="Cubiq Logo" width={150} />
          </Link>
          <p className="text-gray-400 text-sm">Empowering mobile devices to participate in decentralized networks.</p>
          <div className="flex gap-4">
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
            <Link
              href="https://www.youtube.com/channel/UCYhHHGKxw0b_cYK_E38uP8w"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Youtube className="w-6 h-6" />
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Documentation</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/developers" className="text-gray-400 hover:text-blue-400 transition-colors">
                Developers
              </Link>
            </li>
            <li>
              <Link href="/user-guide" className="text-gray-400 hover:text-blue-400 transition-colors">
                User Guide
              </Link>
            </li>
            <li>
              <Link href="/architecture" className="text-gray-400 hover:text-blue-400 transition-colors">
                Architecture
              </Link>
            </li>
            <li>
              <Link href="/whitepaper" className="text-gray-400 hover:text-blue-400 transition-colors">
                Whitepaper
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Network</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/validators" className="text-gray-400 hover:text-blue-400 transition-colors">
                Qubes & Validators
              </Link>
            </li>
            <li>
              <Link href="/zkurl" className="text-gray-400 hover:text-blue-400 transition-colors">
                zkURL Protocol
              </Link>
            </li>
            <li>
              <Link href="/provers" className="text-gray-400 hover:text-blue-400 transition-colors">
                Cloud Provers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Network Explorer
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Legal & Community</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/security" className="text-gray-400 hover:text-blue-400 transition-colors">
                Security
              </Link>
            </li>
            <li>
              <Link href="/community" className="text-gray-400 hover:text-blue-400 transition-colors">
                Community
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                About Cubiq
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 text-center text-gray-500 text-sm mt-12 border-t border-gray-800 pt-8">
        &copy; {new Date().getFullYear()} Cubiq Network. All rights reserved.
      </div>
    </footer>
  )
}
