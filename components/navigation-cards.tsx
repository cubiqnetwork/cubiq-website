"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Book, Code, Cpu, Smartphone, Zap, Users } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const navigationItems = [
  {
    title: "About Cubiq",
    description: "Learn about the mobile-native blockchain revolution",
    icon: Book,
    href: "/about",
    gradient: "from-blue-500 to-blue-700",
    items: ["Introduction & Motivation", "Mobile Participation", "Architecture Overview", "Design Philosophy"],
  },
  {
    title: "Developers",
    description: "Build on the first mobile-native blockchain",
    icon: Code,
    href: "/developers",
    gradient: "from-purple-500 to-purple-700",
    items: ["Getting Started", "SDK & Tooling", "zkURL Protocol", "Smart Contracts"],
  },
  {
    title: "Qubes & Validators",
    description: "Run mobile nodes and participate in consensus",
    icon: Smartphone,
    href: "/validators",
    gradient: "from-green-500 to-green-700",
    items: ["Qube Architecture", "Mobile Node Setup", "Staking & Rewards", "Consensus Protocol"],
  },
  {
    title: "zkURL Protocol",
    description: "Decentralized proof distribution system",
    icon: Zap,
    href: "/zkurl",
    gradient: "from-yellow-500 to-orange-600",
    items: ["Protocol Design", "Proof Lifecycle", "Security Model", "Implementation"],
  },
  {
    title: "Cloud Provers",
    description: "Scalable zero-knowledge proof generation",
    icon: Cpu,
    href: "/provers",
    gradient: "from-red-500 to-red-700",
    items: ["Prover Architecture", "Plonky3 Integration", "Proof Generation", "Infrastructure"],
  },
  {
    title: "Community",
    description: "Join the Cubiq ecosystem and governance",
    icon: Users,
    href: "/community",
    gradient: "from-indigo-500 to-indigo-700",
    items: ["Tokenomics", "Governance", "Roadmap", "Contributing"],
  },
]

export function NavigationCards() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Explore Cubiq Network</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the power of mobile-native blockchain through comprehensive guides, developer tools, and technical
            documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {navigationItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={item.href}>
                <Card className="group bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 h-full cursor-pointer overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`h-32 bg-gradient-to-br ${item.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute top-4 left-4">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute bottom-4 right-4 opacity-20">
                        <item.icon className="w-16 h-16 text-white" />
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 mb-4 text-sm">{item.description}</p>

                      <ul className="space-y-2 mb-4">
                        {item.items.map((subItem) => (
                          <li key={subItem} className="flex items-center text-sm text-gray-500">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-500" />
                            {subItem}
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
