import { DocLayout } from "@/components/doc-layout"
import { DocContent } from "@/components/doc-content"
import { Users, Lightbulb, Shield, Map, Smartphone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const aboutSections = [
  { title: "About Cubiq Network", href: "#about-cubiq" },
  { title: "Our Vision", href: "#our-vision" },
  { title: "Key Principles", href: "#key-principles" },
  { title: "The Team", href: "#the-team" },
  { title: "Roadmap", href: "#roadmap" },
]

export default function AboutPage() {
  return (
    <DocLayout title="About Cubiq" sections={aboutSections}>
      <DocContent>
        <h1>About Cubiq Network</h1>

        <p className="text-xl text-gray-400 mb-12">
          Cubiq Network is building the future of decentralized applications by enabling mobile devices to participate
          as first-class citizens in blockchain networks.
        </p>

        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-8 mb-16">
          <h3 className="text-white font-semibold mb-6">Our Mission</h3>
          <p className="text-gray-300">
            To democratize access to blockchain technology by making it accessible, secure, and efficient for billions
            of mobile users worldwide, without compromising decentralization.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="about-cubiq" className="mb-6">
            About Cubiq Network
          </h2>

          <p className="mb-8">
            Cubiq Network is a groundbreaking blockchain platform designed from the ground up to integrate mobile
            devices into the core of its decentralized infrastructure. By leveraging zero-knowledge proofs and a modular
            architecture, Cubiq offloads heavy computation to a cloud-based prover network, allowing even low-end
            smartphones to act as full-fledged validators ("Qubes").
          </p>
          <p className="mb-8">
            Our innovative approach addresses the long-standing challenge of mobile participation in blockchain,
            unlocking unprecedented scalability, decentralization, and accessibility for the next generation of dApps.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="our-vision" className="mb-6">
            Our Vision
          </h2>

          <p className="mb-8">
            We envision a world where every smartphone is a node, every user is a participant, and blockchain technology
            is seamlessly integrated into daily life. Cubiq aims to be the foundational layer for a truly global,
            mobile-native decentralized internet.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Lightbulb className="w-5 h-5 mr-2 text-blue-400" />
                  Decentralization for All
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Empowering billions of mobile users to participate in network consensus and governance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Shield className="w-5 h-5 mr-2 text-blue-400" />
                  Uncompromised Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Leveraging zero-knowledge proofs to ensure integrity and privacy of transactions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="key-principles" className="mb-6">
            Key Principles
          </h2>

          <p className="mb-8">Cubiq is built upon a set of core principles that guide our development:</p>

          <ul className="mb-8 space-y-3">
            <li>
              <strong>Mobile-First:</strong> Designed from the ground up for optimal performance on mobile devices.
            </li>
            <li>
              <strong>Zero-Knowledge Security:</strong> All off-chain computation is cryptographically verifiable.
            </li>
            <li>
              <strong>Modularity:</strong> A flexible architecture allowing independent evolution of components.
            </li>
            <li>
              <strong>Scalability:</strong> Engineered to support billions of users and high transaction throughput.
            </li>
            <li>
              <strong>User-Centric:</strong> Focusing on ease of use and accessibility for the everyday user.
            </li>
          </ul>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="the-team" className="mb-6">
            The Team
          </h2>

          <p className="mb-8">
            Cubiq Network is developed by a passionate team of blockchain engineers, cryptographers, and mobile
            developers dedicated to pushing the boundaries of decentralized technology. Our team combines deep academic
            expertise with practical industry experience to build a robust and innovative platform.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader className="flex flex-row items-center gap-4">
                <Users className="w-8 h-8 text-blue-400" />
                <CardTitle className="text-white">Core Developers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Experts in Rust, Solidity, and ZK-SNARKs, building the core protocol.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader className="flex flex-row items-center gap-4">
                <Lightbulb className="w-8 h-8 text-purple-400" />
                <CardTitle className="text-white">Research & Cryptography</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Leading research into new proof systems and cryptographic primitives.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader className="flex flex-row items-center gap-4">
                <Smartphone className="w-8 h-8 text-green-400" />
                <CardTitle className="text-white">Mobile Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Specialists in Android and iOS development, optimizing for mobile environments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12">
          <h2 id="roadmap" className="mb-6">
            Roadmap
          </h2>

          <p className="mb-8">
            Our journey is guided by a clear roadmap focused on continuous innovation and expansion:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Map className="w-5 h-5 mr-2 text-blue-400" />
                  Phase 1: Testnet Launch (Q4 2023)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-400 space-y-2">
                  <li>• Core protocol implementation</li>
                  <li>• Initial mobile Qube client</li>
                  <li>• Cloud prover network deployment</li>
                  <li>• Basic zkEVM functionality</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Map className="w-5 h-5 mr-2 text-purple-400" />
                  Phase 2: Mainnet Beta (Q2 2024)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-400 space-y-2">
                  <li>• Enhanced mobile Qube features</li>
                  <li>• Advanced zkEVM optimizations</li>
                  <li>• Developer SDK release</li>
                  <li>• Community governance module</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Map className="w-5 h-5 mr-2 text-green-400" />
                  Phase 3: Ecosystem Growth (H2 2024+)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-400 space-y-2">
                  <li>• Interoperability bridges</li>
                  <li>• Sharding implementation</li>
                  <li>• AI integration for network optimization</li>
                  <li>• Global expansion and partnerships</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </DocContent>
    </DocLayout>
  )
}
