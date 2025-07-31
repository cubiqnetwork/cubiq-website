import { DocLayout } from "@/components/doc-layout"
import { DocContent } from "@/components/doc-content"
import { Cpu, Server, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const proversSections = [
  { title: "Overview", href: "#overview" },
  { title: "Role of Cloud Provers", href: "#role" },
  { title: "Prover Network Architecture", href: "#architecture" },
  { title: "Plonky3 Integration", href: "#plonky3" },
  { title: "Scalability and Performance", href: "#scalability" },
  { title: "Becoming a Prover", href: "#become-prover" },
]

export default function ProversPage() {
  return (
    <DocLayout title="Cloud Provers" sections={proversSections}>
      <DocContent>
        <h1>Cloud Provers</h1>

        <p className="text-xl text-gray-400 mb-12">
          Cloud Provers are the backbone of Cubiq Network's zero-knowledge proof generation, offloading intensive
          computation from mobile devices to ensure efficiency and scalability.
        </p>

        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-8 mb-16">
          <h3 className="text-white font-semibold mb-6">Key Role in Cubiq</h3>
          <p className="text-gray-300">
            Provers generate cryptographic proofs for transactions and state transitions, enabling mobile Qubes to
            verify network integrity with minimal resources.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="overview" className="mb-6">
            Overview
          </h2>

          <p className="mb-8">
            In the Cubiq Network, Cloud Provers are specialized nodes responsible for the computationally intensive task
            of generating zero-knowledge proofs (ZKPs). These proofs cryptographically verify the correctness of
            transactions and state changes on the network, allowing lightweight mobile Qubes to validate the blockchain
            without needing to re-execute every transaction.
          </p>
          <p className="mb-8">
            This separation of concerns—computation by provers, verification by Qubes—is fundamental to Cubiq's
            mobile-native design, enabling broad participation and scalability.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="role" className="mb-6">
            Role of Cloud Provers
          </h2>

          <p className="mb-8">Cloud Provers perform several critical functions:</p>

          <ul className="mb-8 space-y-2">
            <li>
              <strong>Proof Generation:</strong> They take transaction batches and generate compact zero-knowledge
              proofs using advanced cryptographic techniques (e.g., Plonky3).
            </li>
            <li>
              <strong>Execution Trace Generation:</strong> They simulate transaction execution within the zkEVM to
              create the necessary traces for proof generation.
            </li>
            <li>
              <strong>Proof Aggregation:</strong> Provers can aggregate multiple individual proofs into a single, more
              compact proof, further enhancing scalability.
            </li>
            <li>
              <strong>zkURL Publication:</strong> Once generated, proofs are published via the zkURL protocol for
              efficient distribution and retrieval by Qubes.
            </li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader className="flex flex-row items-center gap-4">
                <Cpu className="w-8 h-8 text-blue-400" />
                <CardTitle className="text-white">Off-Chain Computation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Handles heavy cryptographic computations, freeing up mobile devices.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader className="flex flex-row items-center gap-4">
                <Server className="w-8 h-8 text-purple-400" />
                <CardTitle className="text-white">Proof Factory</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Generates verifiable proofs for every state transition on the network.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="architecture" className="mb-6">
            Prover Network Architecture
          </h2>

          <p className="mb-8">
            The Cloud Prover Network is designed for high availability, scalability, and decentralization:
          </p>

          <h3 className="mt-8 mb-4">Distributed Infrastructure</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Geographic Distribution:</strong> Provers are deployed globally to minimize latency and enhance
              resilience.
            </li>
            <li>
              <strong>Horizontal Scaling:</strong> The network can scale horizontally by adding more prover instances as
              demand for proof generation increases.
            </li>
            <li>
              <strong>Load Balancing:</strong> Incoming proof requests are distributed across available provers to
              optimize throughput.
            </li>
          </ul>

          <h3 className="mt-8 mb-4">Technology Stack</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>GPU Acceleration:</strong> Provers leverage powerful GPUs to accelerate the computationally
              intensive ZKP generation process.
            </li>
            <li>
              <strong>Rust-based zkEVM:</strong> Used for efficient and provable execution trace generation.
            </li>
            <li>
              <strong>Containerization:</strong> Prover instances are containerized for consistent deployment and
              management.
            </li>
          </ul>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="plonky3" className="mb-6">
            Plonky3 Integration
          </h2>

          <p className="mb-8">
            Cubiq Network utilizes Plonky3 as its primary zero-knowledge proof system for Cloud Provers. Plonky3 offers
            several advantages:
          </p>

          <ul className="mb-8 space-y-2">
            <li>
              <strong>Recursive Proofs:</strong> Enables the aggregation of multiple proofs into a single, compact
              proof, which is highly efficient for on-chain verification and mobile Qube validation.
            </li>
            <li>
              <strong>STARK-based:</strong> Provides strong cryptographic security guarantees and transparency.
            </li>
            <li>
              <strong>Fast Proving Times:</strong> Optimized for performance, allowing for rapid proof generation.
            </li>
            <li>
              <strong>Small Proof Sizes:</strong> Generates proofs that are small enough to be efficiently transmitted
              and verified by mobile devices.
            </li>
          </ul>

          <pre className="mb-8">
            <code>{`// Pseudocode: Simplified Plonky3 proof generation flow
function generate_proof(transactions: List<Transaction>): ZKProof {
  // 1. Execute transactions in zkEVM to get execution trace
  let trace = zk_evm.execute(transactions);

  // 2. Convert trace into Plonky3 circuit constraints
  let circuit = plonky3.build_circuit(trace);

  // 3. Generate the zero-knowledge proof
  let proof = plonky3.prove(circuit);

  return proof;
}`}</code>
          </pre>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="scalability" className="mb-6">
            Scalability and Performance
          </h2>

          <p className="mb-8">
            The Cloud Prover Network is designed to meet the demands of a global, mobile-first blockchain:
          </p>

          <h3 className="mt-8 mb-4">Throughput</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Parallel Proving:</strong> Multiple provers can generate proofs concurrently for different blocks
              or transaction batches.
            </li>
            <li>
              <strong>Batching:</strong> Transactions are batched to optimize proof generation efficiency.
            </li>
          </ul>

          <h3 className="mt-8 mb-4">Latency</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Optimized Algorithms:</strong> Continuous research and development to reduce proof generation
              times.
            </li>
            <li>
              <strong>Geographic Proximity:</strong> Users are routed to the nearest available prover for lower latency.
            </li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">High TPS Potential</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-400 mb-2">1000+ TPS</div>
                <p className="text-gray-400 text-sm">Theoretical maximum with optimized prover network.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Fast Proof Times</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-400 mb-2">~500ms</div>
                <p className="text-gray-400 text-sm">Target average proof generation time per block.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12">
          <h2 id="become-prover" className="mb-6">
            Becoming a Prover
          </h2>

          <p className="mb-8">
            Details on how to set up and operate a Cloud Prover node will be released soon. This will involve:
          </p>

          <ul className="mb-8 space-y-2">
            <li>
              <strong>Hardware Requirements:</strong> Specifications for CPU, GPU, RAM, and storage.
            </li>
            <li>
              <strong>Software Setup:</strong> Instructions for deploying and configuring the prover software.
            </li>
            <li>
              <strong>Staking Requirements:</strong> Information on any QUBE token staking necessary to participate as a
              prover.
            </li>
            <li>
              <strong>Incentives:</strong> Details on rewards for generating valid proofs.
            </li>
          </ul>

          <Card className="bg-gray-900/50 border-gray-800 mb-8">
            <CardHeader className="flex flex-row items-center gap-4">
              <Globe className="w-8 h-8 text-orange-400" />
              <CardTitle className="text-white">Prover Network Launch</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Stay tuned for announcements regarding the public launch of the Cloud Prover Network and participation
                guidelines.
              </p>
              <Badge variant="outline" className="border-orange-500 text-orange-400 mt-4">
                Coming Soon
              </Badge>
            </CardContent>
          </Card>
        </div>
      </DocContent>
    </DocLayout>
  )
}
