"use client"

import { DocLayout } from "@/components/doc-layout"
import { DocContent } from "@/components/doc-content"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Terminal, Smartphone, Zap } from "lucide-react"

const developerSections = [
  {
    title: "Getting Started",
    children: [
      { title: "Quick Start", href: "#quick-start" },
      { title: "Installation", href: "#installation" },
      { title: "First App", href: "#first-app" },
    ],
  },
  {
    title: "SDK & Tools",
    children: [
      { title: "Cubiq SDK", href: "#cubiq-sdk" },
      { title: "CLI Tools", href: "#cli-tools" },
      { title: "IDE Plugins", href: "#ide-plugins" },
    ],
  },
  {
    title: "zkURL Protocol",
    children: [
      { title: "Protocol Overview", href: "#protocol-overview" },
      { title: "Implementation", href: "#implementation" },
      { title: "Best Practices", href: "#best-practices" },
    ],
  },
  {
    title: "Smart Contracts",
    children: [
      { title: "zkEVM Compatibility", href: "#zkevm" },
      { title: "Deployment", href: "#deployment" },
      { title: "Verification", href: "#verification" },
    ],
  },
  {
    title: "Examples",
    children: [
      { title: "Mobile Voting App", href: "#voting-app" },
      { title: "zkProof Verification", href: "#proof-verification" },
      { title: "DeFi Integration", href: "#defi-integration" },
    ],
  },
]

export default function DevelopersPage() {
  return (
    <DocLayout title="Developer Guide" sections={developerSections}>
      <DocContent>
        <h1>Developer Guide</h1>

        <p className="text-xl text-gray-400 mb-12">
          Build the next generation of mobile-native dApps on Cubiq Network. This comprehensive guide covers everything
          from setup to deployment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Code className="w-5 h-5 mr-2 text-blue-400" />
                SDK Ready
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Full-featured SDK with TypeScript support and mobile-first APIs</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Smartphone className="w-5 h-5 mr-2 text-blue-400" />
                Mobile Native
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Built-in support for Android and iOS with native bindings</p>
            </CardContent>
          </Card>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="quick-start" className="mb-6">
            Quick Start
          </h2>

          <p className="mb-6">
            Get up and running with Cubiq Network in minutes. Follow these steps to create your first mobile-native
            dApp.
          </p>

          <h3 className="mt-8 mb-4">Prerequisites</h3>
          <ul className="mb-8 space-y-2">
            <li>Node.js 18+ installed</li>
            <li>Basic knowledge of TypeScript/JavaScript</li>
            <li>Understanding of blockchain concepts</li>
            <li>Mobile development experience (optional)</li>
          </ul>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="installation" className="mb-6">
            Installation
          </h2>

          <p className="mb-6">Install the Cubiq CLI and SDK to get started:</p>

          <pre className="mb-6">
            <code>{`npm install -g @cubiq/cli
npm install @cubiq/sdk`}</code>
          </pre>

          <p className="mb-4">Initialize a new Cubiq project:</p>

          <pre className="mb-8">
            <code>{`cubiq init my-mobile-dapp
cd my-mobile-dapp
npm install`}</code>
          </pre>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="first-app" className="mb-6">
            Your First App
          </h2>

          <p className="mb-6">Let's create a simple mobile voting app that demonstrates Cubiq's key features:</p>

          <pre className="mb-8">
            <code>{`import { Cubiq } from "@cubiq/sdk";

const client = new Cubiq({
  network: "testnet",
  zkUrlEndpoint: "zk://testnet.cubiq.org"
});

// Initialize mobile Qube connection
async function initializeApp() {
  await client.connect();
  
  // Check if running on mobile device
  if (client.isMobile()) {
    console.log("Running on mobile Qube!");
  }
}

// Verify a zkProof for a proposal
async function verifyProposal(proposalId: string) {
  const proof = await client.zk.getProof(\`zk://proposal/\${proposalId}\`);
  
  if (await client.zk.verifyProof(proof)) {
    console.log("Proposal verified successfully!");
    return true;
  }
  
  return false;
}

// Cast a vote (mobile-optimized)
async function castVote(proposalId: string, vote: boolean) {
  if (await verifyProposal(proposalId)) {
    const tx = await client.qube.vote(proposalId, vote);
    console.log("Vote cast:", tx.hash);
  }
}`}</code>
          </pre>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="cubiq-sdk" className="mb-6">
            Cubiq SDK
          </h2>

          <p className="mb-8">The Cubiq SDK provides a comprehensive toolkit for building mobile-native dApps:</p>

          <h3 className="mt-8 mb-4">Core Features</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>zkURL Client</strong> - Fetch and verify zero-knowledge proofs
            </li>
            <li>
              <strong>Qube Integration</strong> - Connect to mobile validator nodes
            </li>
            <li>
              <strong>Smart Contract Tools</strong> - Deploy and interact with zkEVM contracts
            </li>
            <li>
              <strong>Mobile Bindings</strong> - Native Android/iOS support
            </li>
          </ul>

          <h3 className="mt-8 mb-6">SDK Architecture</h3>

          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-blue-500/10 rounded-lg p-4 mb-2">
                  <Terminal className="w-8 h-8 text-blue-400 mx-auto" />
                </div>
                <h4 className="text-white font-semibold">Core SDK</h4>
                <p className="text-sm text-gray-400">Client library for chain interaction</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500/10 rounded-lg p-4 mb-2">
                  <Smartphone className="w-8 h-8 text-blue-400 mx-auto" />
                </div>
                <h4 className="text-white font-semibold">Mobile Runtime</h4>
                <p className="text-sm text-gray-400">WASM-based proof verification</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500/10 rounded-lg p-4 mb-2">
                  <Zap className="w-8 h-8 text-blue-400 mx-auto" />
                </div>
                <h4 className="text-white font-semibold">zkURL Toolkit</h4>
                <p className="text-sm text-gray-400">Proof fetching and validation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="cli-tools" className="mb-6">
            CLI Tools
          </h2>

          <p className="mb-6">The Cubiq CLI provides essential development tools:</p>

          <pre className="mb-8">
            <code>{`# Initialize new project
cubiq init myApp

# Deploy smart contracts
cubiq deploy --network testnet

# Verify zkProofs
cubiq verify --proof zkproof.json --block 123456

# Setup mobile Qube
cubiq qube onboard

# Run local development server
cubiq dev`}</code>
          </pre>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="protocol-overview" className="mb-6">
            zkURL Protocol Overview
          </h2>

          <p className="mb-6">
            The zkURL protocol is Cubiq's revolutionary approach to decentralized proof distribution:
          </p>

          <blockquote className="mb-8">
            zkURL is to Cubiq what HTTP is to the Web - a standardized way to fetch and verify zero-knowledge proofs
            across devices.
          </blockquote>

          <h3 className="mt-8 mb-4">zkURL Format</h3>
          <pre className="mb-6">
            <code>zk://[proverID]@[domain_or_hash]/[proof_id]#[metadata]</code>
          </pre>

          <p className="mb-2">
            <strong>Example:</strong>
          </p>
          <pre className="mb-8">
            <code>zk://prover01@prover.cubiq.org/block/8472934#v1</code>
          </pre>

          <h3 className="mt-8 mb-4">Components</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>proverID</strong> - Registered identity of prover (mapped to pubkey)
            </li>
            <li>
              <strong>domain_or_hash</strong> - Host or content-addressed hash (IPFS, Arweave)
            </li>
            <li>
              <strong>proof_id</strong> - Unique proof identifier (block number or hash)
            </li>
            <li>
              <strong>metadata</strong> - Optional metadata (version, compression format)
            </li>
          </ul>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="implementation" className="mb-6">
            zkURL Implementation
          </h2>

          <p className="mb-6">Here's how to implement zkURL fetching in your application:</p>

          <pre className="mb-8">
            <code>{`import { zkURL } from "@cubiq/sdk";

// Fetch and verify a proof
async function fetchProof(zkUrl: string) {
  try {
    // Parse zkURL
    const parsed = zkURL.parse(zkUrl);
    console.log("Prover ID:", parsed.proverID);
    console.log("Proof ID:", parsed.proofId);
    
    // Fetch proof with fallback
    const proof = await zkURL.fetch(zkUrl, {
      fallbacks: ["ipfs", "arweave"],
      timeout: 5000
    });
    
    // Verify proof integrity
    const isValid = await zkURL.verify(proof, {
      checkSignature: true,
      checkTimestamp: true,
      maxAge: 3600 // 1 hour
    });
    
    if (isValid) {
      console.log("Proof verified successfully!");
      return proof;
    } else {
      throw new Error("Proof verification failed");
    }
    
  } catch (error) {
    console.error("zkURL fetch failed:", error);
    throw error;
  }
}`}</code>
          </pre>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="zkevm" className="mb-6">
            zkEVM Compatibility
          </h2>

          <p className="mb-8">Cubiq provides full Solidity compatibility through its zkEVM implementation:</p>

          <h3 className="mt-8 mb-6">Supported Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="mb-4">✅ Fully Supported</h4>
              <ul className="space-y-2">
                <li>Solidity 0.8.x</li>
                <li>Standard EVM opcodes</li>
                <li>Events and logs</li>
                <li>Contract interactions</li>
                <li>Hardhat/Foundry tools</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">⚠️ Limited Support</h4>
              <ul className="space-y-2">
                <li>Some precompiles</li>
                <li>Complex assembly</li>
                <li>Gas-intensive operations</li>
                <li>Large contract sizes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="deployment" className="mb-6">
            Smart Contract Deployment
          </h2>

          <p className="mb-6">Deploy your contracts to Cubiq Network:</p>

          <pre className="mb-6">
            <code>{`// hardhat.config.ts
import { HardhatUserConfig } from "hardhat/config";
import "@cubiq/hardhat-plugin";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    cubiq: {
      url: "https://rpc.cubiq.org",
      accounts: [process.env.PRIVATE_KEY!]
    },
    cubiqTestnet: {
      url: "https://testnet-rpc.cubiq.org",
      accounts: [process.env.PRIVATE_KEY!]
    }
  }
};

export default config;`}</code>
          </pre>

          <pre className="mb-8">
            <code>{`# Deploy to testnet
npx hardhat deploy --network cubiqTestnet

# Verify contract
npx hardhat verify --network cubiqTestnet DEPLOYED_CONTRACT_ADDRESS`}</code>
          </pre>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="voting-app" className="mb-6">
            Example: Mobile Voting App
          </h2>

          <p className="mb-6">Complete example of a mobile-optimized voting application:</p>

          <pre className="mb-8">
            <code>{`// VotingApp.tsx
import React, { useState, useEffect } from 'react';
import { Cubiq } from '@cubiq/sdk';

interface Proposal {
  id: string;
  title: string;
  description: string;
  zkProofUrl: string;
  verified: boolean;
}

export function VotingApp() {
  const [cubiq] = useState(() => new Cubiq({ network: 'testnet' }));
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    initializeApp();
  }, []);

  async function initializeApp() {
    try {
      await cubiq.connect();
      await loadProposals();
    } catch (error) {
      console.error('Failed to initialize:', error);
    }
  }

  async function loadProposals() {
    setLoading(true);
    try {
      const proposalList = await cubiq.contract.call('getActiveProposals');
      
      // Verify each proposal's zkProof
      const verifiedProposals = await Promise.all(
        proposalList.map(async (proposal: any) => {
          const proof = await cubiq.zk.getProof(proposal.zkProofUrl);
          const verified = await cubiq.zk.verifyProof(proof);
          
          return {
            ...proposal,
            verified
          };
        })
      );
      
      setProposals(verifiedProposals);
    } catch (error) {
      console.error('Failed to load proposals:', error);
    } finally {
      setLoading(false);
    }
  }

  async function castVote(proposalId: string, support: boolean) {
    try {
      setLoading(true);
      
      // Verify proposal proof before voting
      const proposal = proposals.find(p => p.id === proposalId);
      if (!proposal?.verified) {
        throw new Error('Proposal not verified');
      }
      
      // Cast vote through Qube
      const tx = await cubiq.qube.vote(proposalId, support);
      console.log('Vote cast:', tx.hash);
      
      // Refresh proposals
      await loadProposals();
      
    } catch (error) {
      console.error('Failed to cast vote:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="voting-app">
      <h1>Cubiq Mobile Voting</h1>
      
      {loading && <div>Loading...</div>}
      
      {proposals.map(proposal => (
        <div key={proposal.id} className="proposal-card">
          <h3>{proposal.title}</h3>
          <p>{proposal.description}</p>
          
          <div className="verification-status">
            {proposal.verified ? (
              <span className="verified">✅ Verified</span>
            ) : (
              <span className="unverified">❌ Unverified</span>
            )}
          </div>
          
          <div className="vote-buttons">
            <button 
              onClick={() => castVote(proposal.id, true)}
              disabled={!proposal.verified || loading}
            >
              Vote Yes
            </button>
            <button 
              onClick={() => castVote(proposal.id, false)}
              disabled={!proposal.verified || loading}
            >
              Vote No
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}`}</code>
          </pre>
        </div>

        <div className="border-t border-gray-800 pt-12">
          <h2 className="mb-8">Next Steps</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Explore Examples</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">Check out our comprehensive example applications</p>
                <Badge variant="outline" className="border-blue-500 text-blue-400">
                  Coming Soon
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Join Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">Connect with other developers building on Cubiq</p>
                <Badge variant="outline" className="border-green-500 text-green-400">
                  Discord & GitHub
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </DocContent>
    </DocLayout>
  )
}
