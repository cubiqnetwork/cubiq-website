import { DocLayout } from "@/components/doc-layout"
import { DocContent } from "@/components/doc-content"
import { Globe, LinkIcon, ShieldCheck, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const zkurlSections = [
  { title: "Overview", href: "#overview" },
  { title: "The Need for zkURL", href: "#need" },
  { title: "Protocol Design", href: "#protocol-design" },
  { title: "Proof Lifecycle with zkURL", href: "#proof-lifecycle" },
  { title: "Security and Reliability", href: "#security-reliability" },
  { title: "Implementation Guide", href: "#implementation-guide" },
]

export default function ZkUrlPage() {
  return (
    <DocLayout title="zkURL Protocol" sections={zkurlSections}>
      <DocContent>
        <h1>zkURL Protocol</h1>

        <p className="text-xl text-gray-400 mb-12">
          The zkURL protocol is Cubiq Network's innovative solution for decentralized, verifiable, and efficient
          distribution of zero-knowledge proofs.
        </p>

        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-8 mb-16">
          <h3 className="text-white font-semibold mb-6">Proofs as First-Class Citizens</h3>
          <p className="text-gray-300">
            zkURL treats zero-knowledge proofs as addressable resources, enabling seamless fetching and verification
            across the network.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="overview" className="mb-6">
            Overview
          </h2>

          <p className="mb-8">
            In a zero-knowledge blockchain like Cubiq, proofs are fundamental. They attest to the correctness of
            computations performed off-chain, allowing lightweight nodes (Qubes) to verify the entire network state
            without re-executing every transaction. However, efficiently distributing and retrieving these proofs across
            a decentralized network, especially to mobile devices, presents a unique challenge.
          </p>
          <p className="mb-8">
            The zkURL protocol addresses this by providing a standardized, secure, and resilient mechanism for proof
            publication and retrieval, making proofs as accessible as web pages.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="need" className="mb-6">
            The Need for zkURL
          </h2>

          <p className="mb-8">
            Traditional content distribution methods are often centralized or not optimized for the specific
            requirements of cryptographic proofs. The need for zkURL arises from:
          </p>

          <ul className="mb-8 space-y-2">
            <li>
              <strong>Decentralized Access:</strong> Proofs must be retrievable from multiple, decentralized sources to
              avoid single points of failure and censorship.
            </li>
            <li>
              <strong>Verifiability:</strong> The protocol must ensure the authenticity and integrity of the retrieved
              proofs.
            </li>
            <li>
              <strong>Efficiency for Mobile:</strong> Proofs need to be fetched quickly and with minimal overhead for
              resource-constrained mobile devices.
            </li>
            <li>
              <strong>Standardization:</strong> A common format and retrieval mechanism simplifies integration for dApps
              and network participants.
            </li>
          </ul>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="protocol-design" className="mb-6">
            Protocol Design
          </h2>

          <p className="mb-8">
            The zkURL protocol defines a URI scheme for addressing zero-knowledge proofs. Its structure is designed to
            be intuitive yet comprehensive:
          </p>

          <h3 className="mt-8 mb-4">3.1. zkURL Format</h3>
          <pre className="mb-6">
            <code>zk://[proverID]@[domain_or_hash]/[proof_id]#[metadata]</code>
          </pre>
          <p className="mb-8">Each component serves a specific purpose:</p>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>`zk://` (Scheme):</strong> Identifies the protocol as a zkURL.
            </li>
            <li>
              <strong>`[proverID]` (Optional Prover Identifier):</strong> A unique identifier for the prover that
              generated or published the proof. This can be a public key hash or a registered alias.
            </li>
            <li>
              <strong>`[domain_or_hash]` (Host/Content Address):</strong>
              <ul>
                <li>
                  <strong>Domain:</strong> A traditional domain name (e.g., `prover.cubiq.org`) pointing to a prover
                  endpoint.
                </li>
                <li>
                  <strong>Content Hash:</strong> A cryptographic hash (e.g., IPFS CID, Arweave ID) pointing to the
                  proof's location in decentralized storage.
                </li>
              </ul>
            </li>
            <li>
              <strong>`/[proof_id]` (Proof Identifier):</strong> A unique identifier for the specific proof, typically a
              block number, transaction hash, or a unique proof hash.
            </li>
            <li>
              <strong>`#[metadata]` (Optional Metadata):</strong> Additional parameters like proof version (`v1`),
              compression format (`gzip`), or specific proof types.
            </li>
          </ul>

          <h3 className="mt-8 mb-4">3.2. Example zkURLs</h3>
          <pre className="mb-6">
            <code>zk://prover01@prover.cubiq.org/block/8472934#v1</code>
            <code>zk://QmHash...CID@ipfs/tx/0xabc...def#gzip</code>
          </pre>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader className="flex flex-row items-center gap-4">
                <LinkIcon className="w-8 h-8 text-blue-400" />
                <CardTitle className="text-white">Standardized Addressing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  A uniform way to locate and reference any zero-knowledge proof on the network.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader className="flex flex-row items-center gap-4">
                <Globe className="w-8 h-8 text-green-400" />
                <CardTitle className="text-white">Decentralized Retrieval</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Supports fetching proofs from both centralized endpoints and decentralized storage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="proof-lifecycle" className="mb-6">
            Proof Lifecycle with zkURL
          </h2>

          <p className="mb-8">The zkURL protocol integrates seamlessly into the Cubiq Network's proof lifecycle:</p>

          <ol className="mb-8 space-y-2">
            <li>
              <strong>Transaction Submission:</strong> Users submit transactions to the network.
            </li>
            <li>
              <strong>Block Proposal:</strong> A Qube validator proposes a new block containing batched transactions.
            </li>
            <li>
              <strong>Proof Generation:</strong> Cloud Provers generate a zero-knowledge proof for the proposed block.
            </li>
            <li>
              <strong>zkURL Publication:</strong> The generated proof is published to a zkURL endpoint (e.g., a prover
              server or IPFS). The zkURL for this proof is then included in the block header.
            </li>
            <li>
              <strong>Qube Verification:</strong> Mobile Qubes receive the block header, extract the zkURL, fetch the
              proof, and verify it locally.
            </li>
            <li>
              <strong>Consensus & Finality:</strong> Upon successful verification, Qubes vote to finalize the block.
            </li>
          </ol>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="security-reliability" className="mb-6">
            Security and Reliability
          </h2>

          <p className="mb-8">zkURL is designed with robust security and reliability features:</p>

          <h3 className="mt-8 mb-4">4.1. Cryptographic Verification</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Proof Signatures:</strong> Proofs are signed by the generating prover, allowing verifiers to
              authenticate the source.
            </li>
            <li>
              <strong>Content Addressing:</strong> When using content hashes in the zkURL, the integrity of the proof is
              guaranteed by the hash itself.
            </li>
          </ul>

          <h3 className="mt-8 mb-4">4.2. Redundancy and Fallbacks</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Multiple Sources:</strong> Qubes can attempt to fetch proofs from multiple zkURL endpoints or
              decentralized storage networks (e.g., IPFS, Arweave) if a primary source is unavailable.
            </li>
            <li>
              <strong>Caching:</strong> CDNs and local caches can be used to speed up proof retrieval.
            </li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader className="flex flex-row items-center gap-4">
                <ShieldCheck className="w-8 h-8 text-blue-400" />
                <CardTitle className="text-white">Tamper-Proof</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Ensures that retrieved proofs have not been altered since publication.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader className="flex flex-row items-center gap-4">
                <Zap className="w-8 h-8 text-yellow-400" />
                <CardTitle className="text-white">High Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Proofs remain accessible even if some distribution points go offline.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12">
          <h2 id="implementation-guide" className="mb-6">
            Implementation Guide
          </h2>

          <p className="mb-8">The Cubiq SDK provides convenient functions for interacting with the zkURL protocol:</p>

          <h3 className="mt-8 mb-4">5.1. Parsing zkURLs</h3>
          <pre className="mb-6">
            <code>{`import { zkURL } from "@cubiq/sdk";

const url = "zk://prover01@prover.cubiq.org/block/8472934#v1";
const parsed = zkURL.parse(url);

console.log(parsed.proverID);   // "prover01"
console.log(parsed.domainOrHash); // "prover.cubiq.org"
console.log(parsed.proofId);    // "block/8472934"
console.log(parsed.metadata);   // { v: "1" }`}</code>
          </pre>

          <h3 className="mt-8 mb-4">5.2. Fetching Proofs</h3>
          <pre className="mb-6">
            <code>{`import { zkURL } from "@cubiq/sdk";

async function fetchAndVerifyProof(zkUrl: string) {
  try {
    const proof = await zkURL.fetch(zkUrl, {
      fallbacks: ["ipfs", "arweave"], // Optional fallback sources
      timeout: 5000 // Optional timeout
    });
    
    const isValid = await zkURL.verify(proof, {
      checkSignature: true,
      checkTimestamp: true,
      maxAge: 3600 // Proof valid for 1 hour
    });

    if (isValid) {
      console.log("Proof verified successfully!");
      return proof;
    } else {
      throw new Error("Proof verification failed.");
    }
  } catch (error) {
    console.error("Failed to fetch or verify proof:", error);
    throw error;
  }
}`}</code>
          </pre>
        </div>
      </DocContent>
    </DocLayout>
  )
}
