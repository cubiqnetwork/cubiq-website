import { DocLayout } from "@/components/doc-layout"
import { DocContent } from "@/components/doc-content"
import { Lock, Fingerprint, Bug, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const securitySections = [
  { title: "Overview", href: "#overview" },
  { title: "Cryptographic Security", href: "#cryptography" },
  { title: "Network Security", href: "#network-security" },
  { title: "Smart Contract Security", href: "#smart-contract-security" },
  { title: "Audits & Bug Bounty", href: "#audits-bounty" },
  { title: "User Best Practices", href: "#user-practices" },
]

export default function SecurityPage() {
  return (
    <DocLayout title="Security" sections={securitySections}>
      <DocContent>
        <h1>Security at Cubiq Network</h1>

        <p className="text-xl text-gray-400 mb-12">
          Security is paramount at Cubiq Network. We employ a multi-layered approach to protect the integrity,
          confidentiality, and availability of our network and your assets.
        </p>

        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-8 mb-16">
          <h3 className="text-white font-semibold mb-6">Our Security Philosophy</h3>
          <p className="text-gray-300">
            We believe in security by design, integrating robust cryptographic primitives and decentralized principles
            into every layer of the Cubiq protocol.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="overview" className="mb-6">
            Overview
          </h2>

          <p className="mb-8">
            Cubiq Network's security model is built on the foundation of zero-knowledge proofs, ensuring that all
            off-chain computations are verifiable without revealing underlying data. This, combined with a robust
            consensus mechanism and secure infrastructure, creates a highly resilient and trustworthy environment.
          </p>
          <p className="mb-8">Key pillars of our security include:</p>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Zero-Knowledge Proofs:</strong> Cryptographic verification of computation.
            </li>
            <li>
              <strong>Decentralized Consensus:</strong> Resilient against single points of failure.
            </li>
            <li>
              <strong>Secure Infrastructure:</strong> Protection of prover networks and data.
            </li>
            <li>
              <strong>Continuous Auditing:</strong> Regular security assessments and bug bounty programs.
            </li>
          </ul>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="cryptography" className="mb-6">
            Cryptographic Security
          </h2>

          <p className="mb-8">At the heart of Cubiq's security are advanced cryptographic techniques:</p>

          <h3 className="mt-8 mb-4">Zero-Knowledge Proofs (ZKPs)</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Plonky3:</strong> Our primary ZKP system for efficient and recursive proof generation.
            </li>
            <li>
              <strong>Proof Verification:</strong> Mobile Qubes verify proofs locally using optimized WASM verifiers.
            </li>
            <li>
              <strong>Data Integrity:</strong> Ensures that off-chain computations are executed correctly and honestly.
            </li>
          </ul>

          <h3 className="mt-8 mb-4">Digital Signatures</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Transaction Signing:</strong> All transactions are cryptographically signed by users.
            </li>
            <li>
              <strong>Prover Signatures:</strong> zkURL proofs are signed by registered provers, ensuring authenticity.
            </li>
            <li>
              <strong>Validator Signatures:</strong> Qube validators sign blocks to confirm their validity.
            </li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader className="flex flex-row items-center gap-4">
                <Fingerprint className="w-8 h-8 text-blue-400" />
                <CardTitle className="text-white">Proof Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Ensuring that every computation is verifiable and tamper-proof through ZKPs.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader className="flex flex-row items-center gap-4">
                <Lock className="w-8 h-8 text-purple-400" />
                <CardTitle className="text-white">Data Confidentiality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Protecting sensitive information by proving knowledge without revealing the data itself.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="network-security" className="mb-6">
            Network Security
          </h2>

          <p className="mb-8">The Cubiq Network is designed to be resilient against various network attacks:</p>

          <h3 className="mt-8 mb-4">Consensus Mechanism (DPoS)</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Delegated Proof of Stake:</strong> Ensures network security through staked QUBE tokens.
            </li>
            <li>
              <strong>Slashing:</strong> Malicious validator behavior is penalized by slashing staked tokens.
            </li>
            <li>
              <strong>BFT-style Finality:</strong> Provides strong guarantees against forks and double-spending.
            </li>
          </ul>

          <h3 className="mt-8 mb-4">P2P Networking</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Gossip Protocol:</strong> Efficient and resilient block propagation across mobile nodes.
            </li>
            <li>
              <strong>Encrypted Communications:</strong> All peer-to-peer communications are encrypted.
            </li>
            <li>
              <strong>Sybil Resistance:</strong> Mechanisms to prevent malicious actors from overwhelming the network.
            </li>
          </ul>

          <h3 className="mt-8 mb-4">Cloud Prover Network Security</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Isolated Environments:</strong> Provers operate in secure, isolated cloud environments.
            </li>
            <li>
              <strong>Access Controls:</strong> Strict access policies and authentication for prover infrastructure.
            </li>
            <li>
              <strong>Monitoring & Alerting:</strong> Continuous monitoring for suspicious activities and anomalies.
            </li>
          </ul>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="smart-contract-security" className="mb-6">
            Smart Contract Security
          </h2>

          <p className="mb-8">
            While Cubiq's zkEVM provides a secure execution environment, smart contract security remains crucial:
          </p>

          <ul className="mb-8 space-y-2">
            <li>
              <strong>EVM Compatibility:</strong> Supports Solidity, allowing developers to leverage existing security
              best practices.
            </li>
            <li>
              <strong>ZK-Optimized Opcodes:</strong> Focus on opcodes that are efficiently provable, reducing complexity
              and potential attack surface.
            </li>
            <li>
              <strong>Auditing:</strong> We encourage and support independent security audits of smart contracts
              deployed on Cubiq.
            </li>
            <li>
              <strong>Developer Tools:</strong> Provide tools and guidelines for writing secure and efficient smart
              contracts.
            </li>
          </ul>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="audits-bounty" className="mb-6">
            Audits & Bug Bounty
          </h2>

          <p className="mb-8">We are committed to continuous security improvement through external validation:</p>

          <h3 className="mt-8 mb-4">Security Audits</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Regular Audits:</strong> Our protocol and core components undergo regular security audits by
              leading blockchain security firms.
            </li>
            <li>
              <strong>Transparency:</strong> Audit reports will be publicly available for review.
            </li>
          </ul>

          <h3 className="mt-8 mb-4">Bug Bounty Program</h3>
          <p className="mb-8">
            We operate a bug bounty program to incentivize security researchers to identify and report vulnerabilities.
            Details of the program, including scope and rewards, will be published on our official channels.
          </p>

          <Card className="bg-gray-900/50 border-gray-800 mb-8">
            <CardHeader className="flex flex-row items-center gap-4">
              <Bug className="w-8 h-8 text-red-400" />
              <CardTitle className="text-white">Report a Vulnerability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                If you discover a security vulnerability, please report it responsibly through our bug bounty program or
                contact us directly.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="border-t border-gray-800 pt-12">
          <h2 id="user-practices" className="mb-6">
            User Best Practices
          </h2>

          <p className="mb-8">While we implement robust security measures, user vigilance is also critical:</p>

          <ul className="mb-8 space-y-2">
            <li>
              <strong>Secure Your Devices:</strong> Keep your mobile devices and operating systems updated.
            </li>
            <li>
              <strong>Strong Passwords/Keys:</strong> Use strong, unique passwords and secure your private keys.
            </li>
            <li>
              <strong>Phishing Awareness:</strong> Be wary of suspicious emails, links, or messages.
            </li>
            <li>
              <strong>Verify Information:</strong> Always verify information from official Cubiq channels.
            </li>
            <li>
              <strong>Software Updates:</strong> Keep your Cubiq Qube client and SDKs updated to the latest versions.
            </li>
          </ul>

          <Card className="bg-gray-900/50 border-gray-800 mb-8">
            <CardHeader className="flex flex-row items-center gap-4">
              <Users className="w-8 h-8 text-green-400" />
              <CardTitle className="text-white">Community Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Join our community to stay informed about security updates and best practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </DocContent>
    </DocLayout>
  )
}
