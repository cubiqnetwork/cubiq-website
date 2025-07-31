"use client"

import { motion } from "framer-motion"
import { Smartphone, Zap, Shield, Globe, Cpu, Users } from "lucide-react"

const features = [
  {
    icon: Smartphone,
    title: "Mobile-Native Design",
    description:
      "First blockchain designed from the ground up for mobile devices. Over 6.9 billion mobile devices can now participate in consensus.",
    stats: "6.9B+ devices supported",
  },
  {
    icon: Zap,
    title: "zkURL Protocol",
    description:
      "Revolutionary proof distribution system that enables trustless verification without full node requirements.",
    stats: "<500ms verification",
  },
  {
    icon: Shield,
    title: "Plonky3 Proofs",
    description: "Advanced zero-knowledge proofs ensure security while maintaining lightweight mobile compatibility.",
    stats: "<2MB proof size",
  },
  {
    icon: Globe,
    title: "Decentralized Network",
    description: "Geo-distributed validation network powered by mobile Qubes participating in consensus.",
    stats: "Global distribution",
  },
  {
    icon: Cpu,
    title: "Cloud Proving",
    description: "Offload computation to specialized provers while maintaining cryptographic integrity.",
    stats: "Scalable proving",
  },
  {
    icon: Users,
    title: "Community Governed",
    description: "Decentralized governance through QUBE token holders and mobile validator participation.",
    stats: "DAO controlled",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Revolutionary Blockchain Architecture</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cubiq introduces groundbreaking innovations that make blockchain accessible to billions of mobile users
            worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 h-full hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg mr-4 group-hover:bg-blue-500/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                    <span className="text-sm text-blue-400 font-medium">{feature.stats}</span>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
