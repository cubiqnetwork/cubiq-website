import { DocLayout } from "@/components/doc-layout"
import { DocContent } from "@/components/doc-content"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers, Smartphone, Cloud, Shield, Network } from "lucide-react"

const architectureSections = [
  {
    title: "Overview",
    children: [
      { title: "High-Level Architecture", href: "#overview" },
      { title: "Design Principles", href: "#principles" },
      { title: "Key Components", href: "#components" },
    ],
  },
  {
    title: "Core Layers",
    children: [
      { title: "Execution Layer", href: "#execution" },
      { title: "Proving Layer", href: "#proving" },
      { title: "Consensus Layer", href: "#consensus" },
    ],
  },
  {
    title: "Qube Architecture",
    children: [
      { title: "Mobile Nodes", href: "#mobile-nodes" },
      { title: "Proof Verification", href: "#verification" },
      { title: "Consensus Participation", href: "#participation" },
    ],
  },
  {
    title: "zkURL Protocol",
    children: [
      { title: "Protocol Design", href: "#protocol-design" },
      { title: "Proof Lifecycle", href: "#proof-lifecycle" },
      { title: "Security Model", href: "#security-model" },
    ],
  },
  {
    title: "Cloud Infrastructure",
    children: [
      { title: "Prover Network", href: "#prover-network" },
      { title: "Plonky3 Integration", href: "#plonky3" },
      { title: "Scalability", href: "#scalability" },
    ],
  },
]

export default function ArchitecturePage() {
  return (
    <DocLayout title="Architecture" sections={architectureSections}>
      <DocContent>
        <h1>Cubiq Network Architecture</h1>

        <p className="text-xl text-gray-400 mb-12">
          Cubiq introduces a revolutionary modular architecture that separates computation, validation, and consensus,
          enabling mobile devices to participate as first-class citizens in blockchain networks.
        </p>

        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-8 mb-16">
          <h3 className="text-white font-semibold mb-6">Architecture Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Smartphone className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-gray-300">Mobile-Native Design</span>
            </div>
            <div className="flex items-center">
              <Cloud className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-gray-300">Offloaded Computation</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-gray-300">Zero-Knowledge Security</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="overview" className="mb-6">
            High-Level Architecture
          </h2>

          <p className="mb-8">
            Cubiq's architecture consists of three primary layers that work together to enable mobile-native blockchain
            participation while maintaining security and decentralization.
          </p>

          <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 mb-8">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-500/10 rounded-lg p-4 mr-6">
                  <Layers className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">Execution Layer</h4>
                  <p className="text-gray-400 text-sm">
                    EVM-compatible runtime environment supporting Solidity smart contracts with modifications for ZK
                    constraint compatibility.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-500/10 rounded-lg p-4 mr-6">
                  <Cloud className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">Proving Layer</h4>
                  <p className="text-gray-400 text-sm">
                    Based on Plonky3, this layer handles proof generation in a cloud-based prover network, enabling
                    scalable zero-knowledge computation.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-500/10 rounded-lg p-4 mr-6">
                  <Network className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">Consensus & Networking Layer</h4>
                  <p className="text-gray-400 text-sm">
                    Lightweight Delegated Proof of Stake (DPoS) consensus managed by mobile-based validators ("Qubes")
                    with gossip-based P2P networking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="principles" className="mb-6">
            Design Principles
          </h2>

          <p className="mb-8">Cubiq is guided by five core principles that shape every architectural decision:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Minimal Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Every component is verifiable through cryptographic proofs. No black boxes or trusted intermediaries.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Device Inclusivity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Designed to work on low-end Android and iOS phones with limited resources.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Modular Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Pluggable consensus, proof systems, and APIs allow independent evolution of components.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Security via ZK</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">All offloaded computation is verifiable through zero-knowledge proofs.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="components" className="mb-6">
            Key Components
          </h2>

          <h3 className="mt-8 mb-4">Qubes (Mobile Nodes)</h3>
          <p className="mb-6">
            Qubes are lightweight mobile nodes that form the backbone of Cubiq's decentralized network. Each Qube
            performs several critical functions:
          </p>

          <ul className="mb-8 space-y-2">
            <li>
              <strong>Proof Verification:</strong> Validates zero-knowledge proofs using optimized WASM verifiers
            </li>
            <li>
              <strong>Block Propagation:</strong> Participates in gossip-based block distribution
            </li>
            <li>
              <strong>Consensus Voting:</strong> Votes on block validity through DPoS mechanism
            </li>
            <li>
              <strong>Staking:</strong> Stakes QUBE tokens to participate in consensus
            </li>
          </ul>

          <div className="bg-blue-900/20 border border-blue-500/50 rounded-lg p-6 mb-8">
            <h4 className="text-blue-400 font-semibold mb-4">Performance Specifications</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              <div>
                <span className="text-gray-400">RAM Usage:</span>
                <br />
                <span className="text-white font-semibold">&lt; 400 MB</span>
              </div>
              <div>
                <span className="text-gray-400">Storage:</span>
                <br />
                <span className="text-white font-semibold">&lt; 200 MB</span>
              </div>
              <div>
                <span className="text-gray-400">Bandwidth:</span>
                <br />
                <span className="text-white font-semibold">&lt; 500 MB/month</span>
              </div>
              <div>
                <span className="text-gray-400">Verification:</span>
                <br />
                <span className="text-white font-semibold">&lt; 500ms</span>
              </div>
            </div>
          </div>

          <h3 className="mt-12 mb-4">Cloud Prover Network</h3>
          <p className="mb-6">
            The Cloud Prover Network handles computationally intensive zero-knowledge proof generation:
          </p>

          <ul className="mb-8 space-y-2">
            <li>
              <strong>Plonky3 Integration:</strong> Uses recursive STARK proofs for efficient verification
            </li>
            <li>
              <strong>Horizontal Scaling:</strong> Multiple provers can work in parallel
            </li>
            <li>
              <strong>Geographic Distribution:</strong> Provers deployed globally for low latency
            </li>
            <li>
              <strong>Proof Bundling:</strong> Aggregates multiple transactions into single proofs
            </li>
          </ul>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="execution" className="mb-6">
            Execution Layer
          </h2>

          <p className="mb-8">
            The execution layer provides full EVM compatibility while being optimized for zero-knowledge proof
            generation:
          </p>

          <h3 className="mt-8 mb-4">zkEVM Implementation</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Solidity Compatible:</strong> Supports Solidity 0.8.x with standard EVM opcodes
            </li>
            <li>
              <strong>ZK-Optimized:</strong> Opcodes restricted to those efficiently provable in Plonky3
            </li>
            <li>
              <strong>State Management:</strong> Uses sparse Merkle trees for efficient state proofs
            </li>
            <li>
              <strong>Gas Model:</strong> Modified gas pricing to account for proof generation costs
            </li>
          </ul>

          <h3 className="mt-8 mb-4">Smart Contract Execution</h3>
          <p className="mb-6">Smart contracts on Cubiq execute in a modified EVM environment:</p>

          <pre className="mb-8">
            <code>{`// Example: ZK-compatible smart contract
pragma solidity ^0.8.19;

contract CubiqVoting {
    mapping(address => bool) public hasVoted;
    mapping(uint256 => uint256) public votes;
    
    // ZK-friendly: simple state transitions
    function vote(uint256 proposalId, bool support) external {
        require(!hasVoted[msg.sender], "Already voted");
        
        hasVoted[msg.sender] = true;
        votes[proposalId] += support ? 1 : 0;
        
        emit VoteCast(msg.sender, proposalId, support);
    }
    
    event VoteCast(address voter, uint256 proposalId, bool support);
}`}</code>
          </pre>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="proving" className="mb-6">
            Proving Layer
          </h2>

          <p className="mb-8">
            The proving layer is responsible for generating zero-knowledge proofs that validate state transitions:
          </p>

          <h3 className="mt-8 mb-4">Plonky3 Architecture</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Recursive Proofs:</strong> Enables proof composition and aggregation
            </li>
            <li>
              <strong>Fast Verification:</strong> Optimized for mobile device constraints
            </li>
            <li>
              <strong>Small Proof Size:</strong> Typically under 2MB per block
            </li>
            <li>
              <strong>Parallel Generation:</strong> Multiple proofs can be generated simultaneously
            </li>
          </ul>

          <h3 className="mt-8 mb-4">Proof Generation Workflow</h3>
          <ol className="mb-8 space-y-2">
            <li>
              <strong>Block Proposal:</strong> Qube proposes a new block with transactions
            </li>
            <li>
              <strong>Execution Trace:</strong> Cloud prover simulates all transactions
            </li>
            <li>
              <strong>Circuit Generation:</strong> Execution trace is encoded into Plonky3 circuits
            </li>
            <li>
              <strong>Proof Creation:</strong> Zero-knowledge proof is generated
            </li>
            <li>
              <strong>zkURL Publication:</strong> Proof is published via zkURL protocol
            </li>
          </ol>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="consensus" className="mb-6">
            Consensus Layer
          </h2>

          <p className="mb-8">
            Cubiq uses a lightweight Delegated Proof of Stake (DPoS) consensus optimized for mobile participation:
          </p>

          <h3 className="mt-8 mb-6">DPoS Mechanics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Validator Selection</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Stake-weighted random selection</li>
                <li>• Minimum 1000 QUBE stake required</li>
                <li>• Delegation support for smaller holders</li>
                <li>• Reputation-based bonuses</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Consensus Process</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• 12-second block times</li>
                <li>• 2/3+ supermajority required</li>
                <li>• BFT-style finality</li>
                <li>• Slashing for malicious behavior</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="protocol-design" className="mb-6">
            zkURL Protocol Design
          </h2>

          <p className="mb-8">The zkURL protocol is Cubiq's innovation for decentralized proof distribution:</p>

          <h3 className="mt-8 mb-4">Protocol Format</h3>
          <pre className="mb-6">
            <code>zk://[proverID]@[domain_or_hash]/[proof_id]#[metadata]</code>
          </pre>

          <p className="mb-2">
            <strong>Example:</strong>
          </p>
          <pre className="mb-8">
            <code>zk://prover01@prover.cubiq.org/block/8472934#v1</code>
          </pre>

          <h3 className="mt-8 mb-4">Security Features</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Cryptographic Signatures:</strong> All proofs signed by registered provers
            </li>
            <li>
              <strong>Content Addressing:</strong> Proofs identified by cryptographic hashes
            </li>
            <li>
              <strong>Replay Protection:</strong> Timestamps and nonces prevent replay attacks
            </li>
            <li>
              <strong>Fallback Mechanisms:</strong> Multiple sources ensure availability
            </li>
          </ul>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="proof-lifecycle" className="mb-6">
            Proof Lifecycle
          </h2>

          <p className="mb-8">Understanding how proofs flow through the system:</p>

          <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 mb-8">
            <h4 className="text-white font-semibold mb-6">Proof Flow Diagram</h4>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-6">
                  1
                </div>
                <div>
                  <span className="text-white font-medium">Transaction Submission</span>
                  <p className="text-gray-400 text-sm">User submits transaction to mempool</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-6">
                  2
                </div>
                <div>
                  <span className="text-white font-medium">Block Proposal</span>
                  <p className="text-gray-400 text-sm">Qube validator bundles transactions into block</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-6">
                  3
                </div>
                <div>
                  <span className="text-white font-medium">Proof Generation</span>
                  <p className="text-gray-400 text-sm">Cloud prover generates zkProof using Plonky3</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-6">
                  4
                </div>
                <div>
                  <span className="text-white font-medium">zkURL Publication</span>
                  <p className="text-gray-400 text-sm">Proof published to zkURL endpoint for distribution</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-6">
                  5
                </div>
                <div>
                  <span className="text-white font-medium">Qube Verification</span>
                  <p className="text-gray-400 text-sm">Mobile Qubes fetch and verify proof locally</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-6">
                  6
                </div>
                <div>
                  <span className="text-white font-medium">Consensus & Finality</span>
                  <p className="text-gray-400 text-sm">2/3+ Qubes vote to finalize block</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="prover-network" className="mb-6">
            Prover Network Architecture
          </h2>

          <p className="mb-8">
            The Cloud Prover Network is designed for scalability, reliability, and decentralization:
          </p>

          <h3 className="mt-8 mb-6">Infrastructure Components</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-700">
              <thead>
                <tr>
                  <th className="bg-gray-800 text-white p-4 border border-gray-700 text-left">Layer</th>
                  <th className="bg-gray-800 text-white p-4 border border-gray-700 text-left">Technology</th>
                  <th className="bg-gray-800 text-white p-4 border border-gray-700 text-left">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-gray-700 text-gray-300">Execution Layer</td>
                  <td className="p-4 border border-gray-700 text-gray-300">Rust zkEVM emulator</td>
                  <td className="p-4 border border-gray-700 text-gray-300">Transaction simulation</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-700 text-gray-300">Circuit Layer</td>
                  <td className="p-4 border border-gray-700 text-gray-300">Plonky3 custom circuits</td>
                  <td className="p-4 border border-gray-700 text-gray-300">Proof generation</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-700 text-gray-300">Compute Layer</td>
                  <td className="p-4 border border-gray-700 text-gray-300">GPU-accelerated instances</td>
                  <td className="p-4 border border-gray-700 text-gray-300">Parallel proving</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-700 text-gray-300">Storage Layer</td>
                  <td className="p-4 border border-gray-700 text-gray-300">IPFS / Arweave / CDN</td>
                  <td className="p-4 border border-gray-700 text-gray-300">Proof distribution</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="scalability" className="mb-6">
            Scalability Considerations
          </h2>

          <p className="mb-8">Cubiq's architecture is designed to scale to billions of mobile participants:</p>

          <h3 className="mt-8 mb-4">Horizontal Scaling</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Prover Parallelization:</strong> Multiple provers can work on different blocks simultaneously
            </li>
            <li>
              <strong>Geographic Distribution:</strong> Provers deployed in multiple regions for low latency
            </li>
            <li>
              <strong>Load Balancing:</strong> zkURL requests distributed across multiple endpoints
            </li>
            <li>
              <strong>Caching Layers:</strong> CDN and edge caching for proof distribution
            </li>
          </ul>

          <h3 className="mt-8 mb-6">Performance Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Throughput</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-400 mb-2">1000+ TPS</div>
                <p className="text-gray-400 text-sm">Theoretical maximum with parallel proving</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Latency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-400 mb-2">12s</div>
                <p className="text-gray-400 text-sm">Block time with instant finality</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Participants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-400 mb-2">6.9B+</div>
                <p className="text-gray-400 text-sm">Potential mobile device participants</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12">
          <h2 className="mb-8">Future Architecture Evolution</h2>

          <p className="mb-8">Cubiq's modular design enables continuous evolution without breaking changes:</p>

          <h3 className="mt-8 mb-4">Planned Enhancements</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Interoperability Bridges:</strong> Connect to Ethereum, Polygon, and other chains
            </li>
            <li>
              <strong>Advanced Proof Systems:</strong> Integration with newer ZK technologies
            </li>
            <li>
              <strong>Sharding Support:</strong> Horizontal scaling through state sharding
            </li>
            <li>
              <strong>AI Integration:</strong> Machine learning for network optimization
            </li>
          </ul>

          <blockquote className="mt-8">
            The architecture described here represents the foundation of Cubiq Network. As the ecosystem grows, new
            components and optimizations will be added while maintaining backward compatibility and the core principle
            of mobile-native participation.
          </blockquote>
        </div>
      </DocContent>
    </DocLayout>
  )
}
