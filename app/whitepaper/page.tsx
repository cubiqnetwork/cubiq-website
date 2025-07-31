import { DocLayout } from "@/components/doc-layout"
import { DocContent } from "@/components/doc-content"
import { Layers, Cuboid, CloudCogIcon, Link, Handshake, CogIcon, Smartphone, Shield, Network } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const whitepaperSections = [
  { title: "Abstract", href: "#abstract" },
  { title: "Introduction", href: "#introduction" },
  { title: "What is Cubiq?", href: "#what-is-cubiq" },
  { title: "Why Mobile Participation Matters", href: "#mobile-participation" },
  { title: "Problem Statement", href: "#problem-statement" },
  { title: "Cubiq Network Architecture", href: "#architecture" },
  { title: "Key Components of Cubiq Network", href: "#key-components" },
  { title: "Zero-Knowledge Proofs in Cubiq", href: "#zkp" },
  { title: "zkURL Protocol", href: "#zkurl-protocol" },
  { title: "Consensus Mechanism", href: "#consensus" },
  { title: "Tokenomics", href: "#tokenomics" },
  { title: "Roadmap", href: "#roadmap" },
  { title: "Conclusion", href: "#conclusion" },
]

export default function WhitepaperPage() {
  return (
    <DocLayout title="Whitepaper" sections={whitepaperSections}>
      <DocContent>
        <h1 className="text-xl">Cubiq Network Whitepaper</h1>

        <p className="text text-gray-400 mb-12 mt-10">
          A technical deep dive into the Cubiq Network protocol, architecture, and vision for a mobile-native,
          zero-knowledge blockchain.
        </p>

        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-8 mb-16">
          <h3 className="text-white font-semibold mb-6">Version 1.0 - July 2025</h3>
          <p className="text-gray-300">
            This document outlines the foundational principles and technical specifications of the Cubiq Network.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="abstract" className="text-xl mb-6">
            Abstract
          </h2>

          <p className="mb-8">
            The Cubiq Network proposes a novel blockchain architecture designed to enable billions of mobile devices to
            participate as first-class citizens in decentralized networks. By separating computation from validation
            through the extensive use of zero-knowledge proofs (ZKPs) and a cloud-based prover network, Cubiq overcomes
            the resource constraints traditionally associated with mobile blockchain participation. This whitepaper
            details Cubiq's modular stack, including its zkEVM, Plonky3-based proving layer, lightweight DPoS consensus,
            and the innovative zkURL protocol for decentralized proof distribution. We present a scalable, secure, and
            inclusive framework for the next generation of mobile-native decentralized applications.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="introduction" className="text-xl mb-6">
            1. Introduction
          </h2>

          <p className="mb-8">
            The rapid proliferation of mobile devices presents an unprecedented opportunity for global blockchain
            adoption. However, existing blockchain architectures are primarily designed for high-performance servers,
            rendering direct mobile participation impractical due to computational, storage, and bandwidth limitations.
            This bottleneck hinders true decentralization and limits the reach of dApps to a fraction of the global
            population.
          </p>
          <p className="mb-8">
            Cubiq Network addresses this fundamental challenge by introducing a paradigm shift: a blockchain
            purpose-built for mobile. Our solution leverages the power of zero-knowledge cryptography to offload heavy
            computational tasks, allowing mobile devices to perform only lightweight, verifiable operations.
          </p>
        </div>
        <div className="px-10">
          <div className="border-t border-gray-800 pt-12 mb-12">
            <h3 id="what-is-cubiq" className="mb-6">
              1.1 What is Cubiq?
            </h3>

            <p className="mb-8">
              Cubiq is a novel Layer 1 blockchain designed from the ground up to be mobile-native, while maintaining Ethereum-equivalent security. It achieves this by:

            </p>
            <li className="mb-2">Offloading computationally expensive zk-SNARK/STARK proof generation to a centralized or decentralized cloud-based prover,</li>
            <li className="mb-2">While enabling mobile devices to act as lightweight verification and consensus nodes, called Qubes,</li>
            <li className="mb-2">Through a zkURL protocol, analogous to RPC URLs, but for proof retrieval and integrity validation.</li>
          </div>
          <div className="border-t border-gray-800 pt-12 mb-12">
            <h3 id="mobile-participation" className="mb-6">
              1.2 Why Mobile Participation Matters
            </h3>

            <p className="mb-8">
              As of 2025, over 6.9 billion mobile devices are in active use globally. Yet, less than a fraction of a percent of these participate in blockchain consensus or validation due to technical barriers.
            </p>
            <p className="mb-8">Cubiq's mobile-first architecture democratizes access to blockchain infrastructure by enabling:</p>
            <li className="mb-2">Low-resource nodes (Qubes) to join and validate the chain,</li>
            <li className="mb-2">End-to-end verifiability of data and transactions using zero-knowledge proofs,
            </li>
            <li className="mb-2">Geo-distributed decentralization, no longer centered on datacenter-heavy node operators.</li>
          </div>
          <div className="border-t border-gray-800 pt-12 mb-12">
            <h3 id="design-philosophy" className="mb-6">
              1.3 Design Philosophy
            </h3>

            <p className="mb-8">
              Cubiq is guided by these core principles:
            </p>
            <li className="mb-2">Minimal Trust – Every component verifiable, no black boxes.
            </li>
            <li className="mb-2">Device Inclusivity – Works on low-end Android/iOS phones.</li>
            <li className="mb-2">Modular Stack – Pluggable consensus, proof systems, and APIs.
            </li>
            <li className="mb-2">Security via ZK Proofs – All offloaded computation is verifiable.
            </li>
            <li className="mb-2">Open Ecosystem – SDKs and tooling to onboard developers & hardware partners.
            </li>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="problem-statement" className="text-xl mb-6">
            2. Problem Statement
          </h2>

          <p className="mb-8">
            Current blockchain designs face significant hurdles in achieving widespread mobile adoption:
          </p>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Resource Intensiveness:</strong> Full nodes require substantial CPU, RAM, and storage, unsuitable
              for mobile devices.
            </li>
            <li>
              <strong>Bandwidth Consumption:</strong> Syncing and maintaining blockchain state demands high bandwidth.
            </li>
            <li>
              <strong>Resource Drain:</strong> Continuous computation leads to rapid resource depletion and hampers device performance.
            </li>
            <li>
              <strong>Limited Decentralization:</strong> High barriers to entry concentrate node operation among a few
              entities.
            </li>
            <li>
              <strong>User Experience:</strong> Complex setup and maintenance deter average mobile users.
            </li>
          </ul>
          <p className="mb-8">
            These issues collectively prevent blockchain technology from reaching its full potential as a truly global
            and inclusive decentralized infrastructure.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="architecture" className="text-xl mb-6">
            3. Cubiq Network Architecture
          </h2>

          <p className="mb-8">
            Cubiq's architecture is modular and layered, designed for efficiency, scalability, and mobile-native
            operation. It comprises three primary layers:
          </p>
          <div className="px-10">
            <h3 className="mt-8 mb-4">3.1. Execution Layer (zkEVM)</h3>
            <p className="mb-6">
              An EVM-compatible runtime environment optimized for zero-knowledge provability. It supports Solidity smart
              contracts with modifications to ensure efficient constraint generation for ZKPs.
            </p>
            <ul className="mb-8 space-y-2">
              <li>
                <strong>Solidity Compatibility:</strong> Supports standard Solidity 0.8.x opcodes.
              </li>
              <li>
                <strong>ZK-Optimization:</strong> Opcodes are carefully selected and optimized for efficient proving in
                Plonky3.
              </li>
              <li>
                <strong>State Management:</strong> Utilizes sparse Merkle trees for efficient state proofs.
              </li>
            </ul>

            <h3 className="mt-8 mb-4">3.2. Proving Layer (Cloud Prover Network)</h3>
            <p className="mb-6">
              This layer is responsible for generating zero-knowledge proofs of state transitions. It is a network of
              specialized, high-performance cloud-based provers.
            </p>
            <ul className="mb-8 space-y-2">
              <li>
                <strong>Plonky3 Integration:</strong> Leverages recursive STARK proofs for efficient and scalable proof
                generation.
              </li>
              <li>
                <strong>Horizontal Scaling:</strong> Designed to scale horizontally to meet demand.
              </li>
              <li>
                <strong>Proof Aggregation:</strong> Aggregates multiple transactions into single, verifiable proofs.
              </li>
            </ul>

            <h3 className="mt-8 mb-4">3.3. Consensus & Networking Layer (Mobile Qubes)</h3>
            <p className="mb-6">
              Managed by lightweight mobile-based validators ("Qubes") using a Delegated Proof of Stake (DPoS) consensus
              mechanism and gossip-based P2P networking.
            </p>
            <ul className="mb-8 space-y-2">
              <li>
                <strong>Lightweight Validation:</strong> Qubes verify ZKPs, not re-execute transactions.
              </li>
              <li>
                <strong>Gossip-based P2P:</strong> Efficient block and transaction propagation.
              </li>
              <li>
                <strong>DPoS Consensus:</strong> Enables broad participation in network security.
              </li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Layers className="w-8 h-8 text-blue-400" />
                  <CardTitle className="text-white">Modular Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">Separation of concerns for scalability and independent evolution.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Smartphone className="w-8 h-8 text-green-400" />
                  <CardTitle className="text-white">Mobile-Native</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">Optimized for low-resource mobile devices as first-class participants.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="key-components" className="text-xl mb-6">
            4. Key Components of Cubiq Network
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-8">
            <Card className="bg-blue-900/50 border-gray-800">
              <CardHeader className="flex flex-row items-center gap-4">
                <Cuboid className="w-8 h-8 text-green-400" />
                <CardTitle className="text-white">A. Qubes (Mobile Nodes)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-5">Lightweight mobile nodes that participate in consensus and validation.</p>
                <p className="text-gray-400 mt-4">Devices running Qube client participate in:
                </p>

                <ul className="list-disc list-inside">
                  <li>Proof verification (lightweight zk-STARK checks)</li>
                  <li>Block propagation & gossiping</li>
                  <li>Voting and staking in the DPoS consensus</li>
                  <li>Each Qube connects to a zkURL, a secure REST/WebSocket endpoint serving the proof data.</li>
                  <li>Built using WASM + Native Mobile Bridges (Swift/Java/Kotlin) to support Android and iOS.</li>
                </ul>
                <p className="text-gray-400 mt-4"> Advantages:</p>
                <ul className="list-disc list-inside">
                  <li>Low bandwidth usage ({"<"}2 MB/block)
                  </li>
                  <li>Verifier can run in under 500ms on mid-range smartphones</li>
                  <li>Energy-aware caching and background sync modes</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-blue-900/50 border-gray-800">
              <CardHeader className="flex flex-row items-center gap-4">
                <CloudCogIcon className="w-8 h-8 text-yellow-400" />
                <CardTitle className="text-white">B. Cloud Prover Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mt-4"> - Generates recursive zero-knowledge proofs for:
                </p>

                <ul className="list-disc list-inside">
                  <li>EVM state transitions</li>
                  <li>Block validity</li>
                  <li>L1 to L2 interoperability (future scope)</li>
                </ul>
                <p className="text-gray-400 mt-4"> - Runs Plonky3 in a containerized Kubernetes environment.</p>
                <p className="text-gray-400 mt-2"> - Horizontally scalable — supports multiple proof generators per region.</p>
                <p className="text-gray-400 mt-2"> - Generates Proof Bundles, which include:</p>
                <ul className="list-disc list-inside">
                  <li>zk-STARK/zk-SNARK
                  </li>
                  <li>Public Inputs (state root, transactions)</li>
                  <li>Metadata (gas usage, timestamps, signatures)</li>
                </ul>
                <p className="text-gray-400 mt-4"> - Proof bundles are indexed by zkURL and served to Qubes for validation.</p>
              </CardContent>
            </Card>
            <Card className="bg-blue-900/50 border-gray-800">
              <CardHeader className="flex flex-row items-center gap-4">
                <Link className="w-8 h-8 text-blue-400" />
                <CardTitle className="text-white">C. zkURL Protocol</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mt-4 mb-6"> - Custom protocol schema, analogous to https://, used for requesting proofs:
                </p>
                <pre className="bg-gray-800 p-4 rounded mb-4">
                  <code>zk://proof.cubiq.network/block/1202045</code>
                </pre>
                <pre className="bg-gray-800 p-4 rounded mb-4">
                  <code>zk://prover.cubiq.net/proof/tx/0xabc...123</code>
                </pre>
                <p className="text-gray-400 mt-2"> - Supports:</p>
                <ul className="list-disc list-inside">
                  <li>Signed responses using prover identity</li>
                  <li>ZK-verified caching on Qube client</li>
                  <li>DNS pinning and fallback mirrors</li>
                </ul>
                <p className="text-gray-400 mt-4"> - zkURL is not just a URL — it’s a verifiable proof fetcher endpoint with zero trust assumptions.</p>
              </CardContent>
            </Card>
            <Card className="bg-blue-900/50 border-gray-800">
              <CardHeader className="flex flex-row items-center gap-4">
                <Handshake className="w-8 h-8 text-green-400" />
                <CardTitle className="text-white">D. Consensus Module (DPoS)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mt-4"> - Epoch-based Delegated Proof-of-Stake:
                </p>

                <ul className="list-disc list-inside">
                  <li>Qubes stake Cubiq’s native token to become validators</li>
                  <li>Delegators can delegate stake to trusted Qubes</li>
                </ul>
                <p className="text-gray-400 mt-4"> - Block producers are elected per epoch using a VRF + stake-weighted lottery</p>
                <p className="text-gray-400 mt-2"> - Fast finality through multi-step voting.</p>
                <p className="text-gray-400 mt-2"> - Mobile-safe due to:</p>
                <ul className="list-disc list-inside">
                  <li>Low bandwidth voting rounds</li>
                  <li>Partial participation threshold (~66% of weighted stake)</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-blue-900/50 border-gray-800">
              <CardHeader className="flex flex-row items-center gap-4">
                <CogIcon className="w-8 h-8 text-gray-400" />
                <CardTitle className="text-white">E. Execution Environment (zkEVM)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mt-4"> - Fully Solidity-compatible, using a zk-circuit optimized variant of the EVM.
                </p>
                <p className="text-gray-400 mt-2"> - Supported opcodes restricted to those efficiently provable in Plonky3.</p>
                <p className="text-gray-400 mt-2"> - Contracts compile down to zk-compatible bytecode.</p>
                <p className="text-gray-400 mt-2"> - Uses a modified Geth engine for pre-processing of transactions before proof generation.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12 px-10">
          <h2 id="zkp" className="mb-6">
            4.1 Data Flow in Cubiq Network
          </h2>

          <p className="mb-8">
            Here’s a simplified flow of a transaction in the Cubiq network:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>User submits tx</strong> → mempool → included in proposed block.
            </li>
            <li>
              <strong>Cloud Prover </strong> → processes block → generates proof bundle.
            </li>
            <li>
              <strong>Proof served via zkURL</strong> to Qubes.
            </li>
            <li>
              <strong>Qubes verify proof</strong> → cast vote via consensus module.
            </li>
            <li>
              <strong>Block finalized</strong> → chain progresses.
            </li>
          </ol>
          <p className="mb-8 mt-8">This enables low-latency block propagation without requiring full EVM execution on Qube devices.</p>

          <h3 className="mt-8 mb-4">4.2. Security Considerations</h3>
          <ul className="list-disc list-inside">
            <li>
              <strong>ZK Soundness:</strong> All blocks are provably correct via zero-knowledge proofs.
            </li>
            <li>
              <strong>Prover Trustlessness:</strong> Even if prover is centralized, any incorrect proof is rejected by Qubes.
            </li>
            <li>
              <strong>Consensus Finality:</strong> Double signing or equivocation results in slashing.
            </li>
            <li>
              <strong>Data Availability:</strong> Proofs and public inputs are stored with redundancy and verified via hashes.
            </li>
          </ul>
          <h3 className="mt-8 mb-4">4.3. Extensibility & Modularity</h3>
          <ul className="list-disc list-inside">
            <li>
              <strong>Pluggable Provers: </strong> While Plonky3 is default, others like zkSync’s Boojum could be integrated.
            </li>
            <li>
              <strong>Prover Trustlessness:</strong> Even if prover is centralized, any incorrect proof is rejected by Qubes.
            </li>
            <li>
              <strong>Consensus Finality:</strong> Double signing or equivocation results in slashing.
            </li>
            <li>
              <strong>Data Availability:</strong> Proofs and public inputs are stored with redundancy and verified via hashes.
            </li>
          </ul>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="zkurl-protocol" className="text-xl mb-6">
            5. Proof Lifecycle
          </h2>

          <p className="mb-8">
            The proof lifecycle is central to Cubiq’s architecture. It defines how transactions are verified without requiring every node to execute them locally — enabling trustless mobile verification through offloaded zero-knowledge proving.
          </p>
          <div className="px-10">
            <h3 className="mt-8 mb-4">5.1. Transaction Inclusion</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                User submits a transaction through a wallet or dApp.
              </li>
              <li>
                The transaction enters the pending mempool of a Qube or relay node.
              </li>
              <li>
                A validator Qube (block proposer) bundles a set of valid transactions.
              </li>
              <li>
                The block proposal is broadcast via Cubiq’s P2P network.
              </li>
            </ol>
            <h3 className="mt-8 mb-4">5.2. Proof Generation (Cloud Prover Role)</h3>
            <p className="mb-4">Once a block is proposed:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                The cloud prover listens for proposed blocks via pub-sub.
              </li>
              <li>
                It simulates all transactions using a zkEVM interpreter.
              </li>
              <li>
                The execution trace is encoded into Plonky3 circuits.
              </li>
              <li>
                A recursive ZK proof is generated for the block, including:
                <ul className="list-disc list-inside px-4">
                  <li>Merkle root transition</li>
                  <li>EVM state consistency</li>
                  <li>Public inputs (block number, state root, gas, etc.)</li>
                  <li>Signature verifications</li>
                </ul>
              </li>
            </ol>
            <p className="mt-4">This phase is computationally intensive and is offloaded to dedicated GPUs or TPU-based prover clusters.</p>
            <h3 className="mt-8 mb-4">5.3. Proof Packaging and zkURL Publication</h3>
            <p className="mb-4">Once the proof is generated:</p>
            <ul className="list-disc list-inside px-4">
              <li>
                It is compressed and signed by the prover.
              </li>
              <li>
                Published to a zkURL endpoint, e.g.:
                <br />
                <pre className="bg-gray-800 p-4 rounded mb-4"><code>zk://prover.cubiq.org/proof/123456</code></pre>
              </li>
              <li>
                The proof bundle includes:
                <ul className="list-disc list-inside px-4">
                  <li>The ZK proof</li>
                  <li>Public input data (encoded as JSON or binary)</li>
                  <li>Metadata: timestamp, prover ID, block hash</li>
                  <li>Fallback IPFS hash for decentralized availability</li>
                </ul>
              </li>
            </ul>
            <h3 className="mt-8 mb-4">5.4. Proof Verification by Qubes</h3>
            <p className="mb-4">Qube clients (running on mobile) perform the following:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Fetch proof using zkURL.
              </li>
              <li>
                Verify validity using:
                <ul className="list-disc list-inside px-4">
                  <li>Embedded Plonky3 verifier (WASM optimized)</li>
                  <li>Consistency of public inputs (gas, root hash, block hash)</li>
                </ul>
              </li>
              <li>
                If valid, the Qube votes on the block as part of DPoS consensus.
              </li>
            </ol>
            <p className="mt-4 mb-8">Even on mid-range phones, verification takes &lt;500ms with &lt;2MB memory footprint due to recursive proof compression.</p>
            <h3 className="mt-8 mb-4">5.5. Consensus and Finality</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Qubes that have verified the proof broadcast votes in favor of the block.
              </li>
              <li>
                Once 2/3 of weighted Qubes (by stake) have validated:
                <ul className="list-disc list-inside px-4">
                  <li>The block is finalized.</li>
                  <li>State root and block hash are stored.</li>
                </ul>
              </li>
              <li>
                Finality is deterministic — no fork resolution logic required.
              </li>
            </ol>
            <h3 className="mt-8 mb-4">5.6. Storage and Availability</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Finalized blocks are pinned on:
                <ul className="list-disc list-inside px-4">
                  <li>Cubiq L1 storage (pebble-backed or IPFS)</li>
                  <li>zkURL mirrors and CDN</li>
                  <li>Merkle hash anchors on Ethereum L1 (optional future milestone)</li>
                </ul>
              </li>
              <li>
                Finality is deterministic — no fork resolution logic required.
              </li>
            </ol>
            <h3 className="mt-8 mb-4">5.7. Error Handling and Fraud Protection</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                If a Qube fails proof verification:
                <ul className="list-disc list-inside px-4">
                  <li>It does not vote, and alerts are raised.</li>
                  <li>If {">"}1/3 of Qubes dispute a block, the block is rejected.</li>
                </ul>
              </li>
              <li>
                Malicious provers are slashed and blacklisted.
              </li>
              <li>Qubes only accept proofs that:
                <ul className="list-disc list-inside px-4">
                  <li>Match expected block height</li>
                  <li>Have correct signatures from the registered prover ID</li>
                  <li>Pass all ZK verification rules</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="zkurl-protocol" className="text-xl mb-6">
            6. zkURL Protocol Design
          </h2>

          <p className="mb-8">
            The zkURL protocol is a foundational abstraction in Cubiq, allowing zero-knowledge proofs to be accessed in a standardized, authenticated, and efficient manner across devices — especially resource-constrained mobile Qubes.
          </p>
          <p className="mb-8">
            It is a novel decentralized mechanism for distributing and retrieving zero-knowledge proofs.
            It functions similarly to HTTP for web content, but specifically for cryptographic proofs.
          </p>
          <div className="px-10">
          <h3 className="mt-8 mb-4">6.1. Protocol Format</h3>
          <pre className="mb-6">
            <code>zk://[proverID]@[domain_or_hash]/[proof_id]#[metadata]</code>
          </pre>
          <p className="mb-8">
            This format allows Qubes to request proofs from specific provers or content-addressed storage (e.g., IPFS,
            Arweave) and verify their authenticity.
          </p>

          <h3 className="mt-8 mb-4">6.2. Security Features</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Cryptographic Signatures:</strong> All proofs are signed by registered provers.
            </li>
            <li>
              <strong>Content Addressing:</strong> Proofs can be identified by their cryptographic hash, ensuring
              tamper-proof retrieval.
            </li>
            <li>
              <strong>Fallback Mechanisms:</strong> Multiple retrieval sources enhance availability and censorship
              resistance.
            </li>
          </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="consensus" className="text-xl mb-6">
            7. Consensus Mechanism
          </h2>

          <p className="mb-8">
            Cubiq Network employs a lightweight Delegated Proof of Stake (DPoS) consensus mechanism, optimized for
            mobile participation and fast finality.
          </p>

          <h3 className="mt-8 mb-4">7.1. DPoS Mechanics</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Validator Election:</strong> A set of active validators (Qubes) are elected by QUBE token holders
              through delegation.
            </li>
            <li>
              <strong>Block Production:</strong> Elected validators take turns proposing new blocks.
            </li>
            <li>
              <strong>Proof Verification & Voting:</strong> Other validators verify the ZKP in the proposed block and
              vote on its validity.
            </li>
            <li>
              <strong>Instant Finality:</strong> Blocks are finalized with 2/3+ supermajority vote, providing strong
              security guarantees.
            </li>
          </ul>

          <h3 className="mt-8 mb-4">7.2. Mobile Qubes as Validators</h3>
          <p className="mb-8">
            The DPoS design allows mobile Qubes to participate in consensus without needing to run full nodes, as their
            role is primarily ZKP verification and voting, not heavy computation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader className="flex flex-row items-center gap-4">
                <Network className="w-8 h-8 text-purple-400" />
                <CardTitle className="text-white">Decentralized & Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Achieves high throughput and rapid block finality with broad participation.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader className="flex flex-row items-center gap-4">
                <Shield className="w-8 h-8 text-red-400" />
                <CardTitle className="text-white">Secure & Resilient</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Slashing mechanisms deter malicious behavior, ensuring network integrity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="tokenomics" className="text-xl mb-6">
            8. Tokenomics
          </h2>

          <p className="mb-8">The native utility token of the Cubiq Network is QUBE. It serves multiple functions:</p>

          <h3 className="mt-8 mb-4">7.1. Staking</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Validator Stake:</strong> QUBE tokens must be staked by validators to participate in DPoS
              consensus.
            </li>
            <li>
              <strong>Delegation:</strong> Token holders can delegate QUBE to validators to earn rewards.
            </li>
          </ul>

          <h3 className="mt-8 mb-4">8.2. Transaction Fees</h3>
          <p className="mb-8">QUBE is used to pay for transaction fees on the network, similar to gas in Ethereum.</p>

          <h3 className="mt-8 mb-4">8.3. Governance</h3>
          <p className="mb-8">
            QUBE holders will have governance rights, allowing them to vote on protocol upgrades and network parameters.
          </p>

          <h3 className="mt-8 mb-4">8.4. Incentives</h3>
          <p className="mb-8">
            Rewards are distributed to validators and delegators for their contributions to network security and
            operation.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="roadmap" className="text-xl mb-6">
            9. Roadmap
          </h2>

          <p className="mb-8">
            Our development roadmap is structured in phases, focusing on iterative progress and community engagement:
          </p>

          <h3 className="mt-8 mb-4">Phase 1: Testnet Launch (Q4 2025)</h3>
          <ul className="mb-8 space-y-2">
            <li>Core protocol implementation.</li>
            <li>Initial mobile Qube client.</li>
            <li>Cloud prover network deployment.</li>
            <li>Basic zkEVM functionality.</li>
          </ul>

          <h3 className="mt-8 mb-4">Phase 2: Mainnet Beta (Q2 2026)</h3>
          <ul className="mb-8 space-y-2">
            <li>Enhanced mobile Qube features.</li>
            <li>Advanced zkEVM optimizations.</li>
            <li>Developer SDK release.</li>
            <li>Community governance module.</li>
          </ul>

          <h3 className="mt-8 mb-4">Phase 3: Ecosystem Growth (Q3 2026)</h3>
          <ul className="mb-8 space-y-2">
            <li>Interoperability bridges.</li>
            <li>Sharding implementation.</li>
            <li>AI integration for network optimization.</li>
            <li>Global expansion and partnerships.</li>
          </ul>
        </div>

        <div className="border-t border-gray-800 pt-12">
          <h2 id="conclusion" className="text-xl mb-6">
            10. Conclusion
          </h2>

          <p className="mb-8">
            Cubiq Network represents a significant leap forward in blockchain technology, addressing the critical need
            for mobile-native decentralization. By combining zero-knowledge proofs, a modular architecture, and an
            inclusive consensus mechanism, we are building a scalable, secure, and accessible platform for the next
            generation of decentralized applications. We invite developers, researchers, and users to join us in
            realizing this vision.
          </p>
        </div>
      </DocContent>
    </DocLayout>
  )
}
