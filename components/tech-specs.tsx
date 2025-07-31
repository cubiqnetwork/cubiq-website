"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const specs = [
  {
    category: "Performance",
    items: [
      { label: "Proof Verification Time", value: "<500ms", highlight: true },
      { label: "Memory Usage", value: "<400MB RAM" },
      { label: "Storage Requirements", value: "<200MB" },
      { label: "Bandwidth Usage", value: "<500MB/month" },
      { label: "Battery Impact", value: "<3% daily" },
    ],
  },
  {
    category: "Architecture",
    items: [
      { label: "Consensus Mechanism", value: "Delegated PoS", highlight: true },
      { label: "Proof System", value: "Plonky3 STARKs" },
      { label: "Virtual Machine", value: "zkEVM Compatible" },
      { label: "Block Time", value: "12 seconds" },
      { label: "Finality", value: "BFT Instant" },
    ],
  },
  {
    category: "Network",
    items: [
      { label: "Supported Devices", value: "6.9B+ Mobile", highlight: true },
      { label: "Minimum Stake", value: "1000 QUBE" },
      { label: "Validator Threshold", value: "66% Supermajority" },
      { label: "Slashing Conditions", value: "Invalid Proofs" },
      { label: "Reward Distribution", value: "Per Epoch" },
    ],
  },
]

export function TechSpecs() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Technical Specifications</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built for performance, security, and mass adoption with mobile-first design principles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-gray-900/50 border-gray-800 h-full">
                <CardHeader>
                  <CardTitle className="text-white text-xl">{spec.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {spec.items.map((item) => (
                    <div key={item.label} className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">{item.label}</span>
                      <Badge
                        variant={item.highlight ? "default" : "secondary"}
                        className={item.highlight ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"}
                      >
                        {item.value}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
