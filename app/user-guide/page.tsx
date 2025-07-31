import { DocLayout } from "@/components/doc-layout"
import { DocContent } from "@/components/doc-content"
import { Smartphone, Wallet, Zap, Settings } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const userGuideSections = [
  { title: "Introduction", href: "#introduction" },
  { title: "Getting Started with Cubiq", href: "#getting-started" },
  { title: "Understanding Qubes", href: "#understanding-qubes" },
  { title: "Managing Your Wallet", href: "#managing-wallet" },
  { title: "Interacting with dApps", href: "#interacting-dapps" },
  { title: "Staking QUBE Tokens", href: "#staking-qube" },
  { title: "Troubleshooting", href: "#troubleshooting" },
  { title: "FAQs", href: "#faqs" },
]

export default function UserGuidePage() {
  return (
    <DocLayout title="User Guide" sections={userGuideSections}>
      <DocContent>
        <h1>User Guide</h1>

        <p className="text-xl text-gray-400 mb-12">
          Welcome to the Cubiq Network User Guide! This guide will help you understand and navigate the Cubiq ecosystem,
          from setting up your mobile Qube to interacting with decentralized applications.
        </p>

        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-8 mb-16">
          <h3 className="text-white font-semibold mb-6">Your Gateway to Decentralization</h3>
          <p className="text-gray-300">
            Cubiq empowers you to be a first-class participant in the blockchain, directly from your mobile device.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="introduction" className="mb-6">
            Introduction
          </h2>

          <p className="mb-8">
            Cubiq Network is a revolutionary blockchain platform that allows mobile devices to act as lightweight
            validators, known as "Qubes." This guide is designed for end-users who want to understand how to use Cubiq
            Network, manage their assets, and interact with decentralized applications (dApps) in a mobile-native
            environment.
          </p>
          <p className="mb-8">
            No prior blockchain experience is required, but a basic understanding of digital assets and mobile apps will
            be helpful.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="getting-started" className="mb-6">
            Getting Started with Cubiq
          </h2>

          <p className="mb-8">Follow these steps to begin your journey with Cubiq Network:</p>

          <h3 className="mt-8 mb-4">Step 1: Download the Cubiq App</h3>
          <p className="mb-6">
            The Cubiq mobile application is your primary interface for interacting with the network.
          </p>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>For Android:</strong> Download from the Google Play Store (Link to #).
            </li>
            <li>
              <strong>For iOS:</strong> Download from the Apple App Store (Link to #).
            </li>
          </ul>

          <h3 className="mt-8 mb-4">Step 2: Create Your Wallet</h3>
          <p className="mb-6">Upon first opening the app, you will be prompted to create a new Cubiq wallet.</p>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Generate Seed Phrase:</strong> Write down your 12-word seed phrase and store it securely offline.
              This is crucial for recovering your wallet.
            </li>
            <li>
              <strong>Set a Password/PIN:</strong> Create a strong password or PIN for daily access to your wallet.
            </li>
            <li>
              <strong>Biometric Authentication:</strong> Enable Face ID or Fingerprint for convenient and secure access
              (optional, but recommended).
            </li>
          </ul>

          <h3 className="mt-8 mb-4">Step 3: Fund Your Wallet (Optional)</h3>
          <p className="mb-6">To interact with dApps or participate in staking, you will need QUBE tokens.</p>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Acquire QUBE:</strong> Information on where to acquire QUBE tokens will be provided soon (e.g.,
              exchanges).
            </li>
            <li>
              <strong>Receive Tokens:</strong> Use your Cubiq wallet address to receive QUBE tokens.
            </li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader className="flex flex-row items-center gap-4">
                <Smartphone className="w-8 h-8 text-blue-400" />
                <CardTitle className="text-white">Mobile-First Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  The Cubiq app is designed for intuitive and seamless mobile interaction.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader className="flex flex-row items-center gap-4">
                <Wallet className="w-8 h-8 text-purple-400" />
                <CardTitle className="text-white">Secure Wallet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Your assets are protected with advanced encryption and security features.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="understanding-qubes" className="mb-6">
            Understanding Qubes
          </h2>

          <p className="mb-8">
            A "Qube" is your mobile device acting as a lightweight validator on the Cubiq Network. Unlike traditional
            blockchain nodes that require significant computing power, Qubes leverage zero-knowledge proofs to verify
            the network's state with minimal resources.
          </p>

          <h3 className="mt-8 mb-4">What Your Qube Does</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Verifies Proofs:</strong> Your Qube downloads and verifies compact zero-knowledge proofs generated
              by Cloud Provers, ensuring the integrity of transactions.
            </li>
            <li>
              <strong>Participates in Consensus:</strong> If you stake QUBE tokens, your Qube can participate in the
              Delegated Proof of Stake (DPoS) consensus, voting on block validity.
            </li>
            <li>
              <strong>Secures the Network:</strong> By running a Qube, you contribute to the decentralization and
              security of the entire Cubiq Network.
            </li>
          </ul>

          <h3 className="mt-8 mb-4">Benefits of Running a Qube</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Low Resource Usage:</strong> Minimal impact on your phone's battery and data plan.
            </li>
            <li>
              <strong>True Decentralization:</strong> Directly participate in securing the network.
            </li>
            <li>
              <strong>Potential Rewards:</strong> Earn rewards for staking and validating (details to be announced).
            </li>
          </ul>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="managing-wallet" className="mb-6">
            Managing Your Wallet
          </h2>

          <p className="mb-8">
            The Cubiq app provides a comprehensive wallet interface for managing your QUBE tokens and other assets.
          </p>

          <h3 className="mt-8 mb-4">Sending and Receiving Tokens</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Receive:</strong> Tap "Receive" to display your wallet address and QR code. Share this with others
              to receive QUBE.
            </li>
            <li>
              <strong>Send:</strong> Tap "Send," enter the recipient's address and amount. Review transaction details
              carefully before confirming.
            </li>
          </ul>

          <h3 className="mt-8 mb-4">Transaction History</h3>
          <p className="mb-8">
            View a detailed history of all your incoming and outgoing transactions within the app. Each transaction will
            include details like amount, date, and transaction hash.
          </p>

          <h3 className="mt-8 mb-4">Security Best Practices</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Never Share Your Seed Phrase:</strong> Your seed phrase is the master key to your wallet. Keep it
              private and secure.
            </li>
            <li>
              <strong>Beware of Phishing:</strong> Always double-check URLs and sender identities before clicking links
              or entering credentials.
            </li>
            <li>
              <strong>Regular Updates:</strong> Keep your Cubiq app updated to the latest version for security patches
              and new features.
            </li>
          </ul>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="interacting-dapps" className="mb-6">
            Interacting with dApps
          </h2>

          <p className="mb-8">
            Cubiq Network supports EVM-compatible smart contracts, allowing you to interact with a wide range of
            decentralized applications.
          </p>

          <h3 className="mt-8 mb-4">Using the In-App Browser (if available)</h3>
          <p className="mb-8">
            Some dApps may be accessible directly through an in-app browser within the Cubiq application, providing a
            seamless experience.
          </p>

          <h3 className="mt-8 mb-4">Connecting to External dApps</h3>
          <p className="mb-8">
            For dApps accessed via a standard web browser, you can connect your Cubiq wallet using WalletConnect or
            similar protocols (details to be provided).
          </p>

          <pre className="mb-8">
            <code>{`// Example: Connecting to a dApp (conceptual)
import { CubiqWallet } from "@cubiq/wallet-sdk";

async function connectToDApp() {
  const wallet = new CubiqWallet();
  await wallet.connect(); // Connects to the Cubiq app
  
  // Now you can sign transactions or interact with smart contracts
  const transaction = {
    to: "0x...",
    value: "1000000000000000000" // 1 QUBE
  };
  const signedTx = await wallet.signTransaction(transaction);
  console.log("Signed Transaction:", signedTx);
}`}</code>
          </pre>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="staking-qube" className="mb-6">
            Staking QUBE Tokens
          </h2>

          <p className="mb-8">
            Staking QUBE tokens allows you to participate in the network's Delegated Proof of Stake (DPoS) consensus
            mechanism and earn rewards.
          </p>

          <h3 className="mt-8 mb-4">How Staking Works</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Delegate Your Stake:</strong> You can delegate your QUBE tokens to a validator (Qube) of your
              choice.
            </li>
            <li>
              <strong>Earn Rewards:</strong> Delegators receive a portion of the block rewards earned by the validator
              they support.
            </li>
            <li>
              <strong>Contribute to Security:</strong> Your staked tokens contribute to the overall security and
              decentralization of the network.
            </li>
          </ul>

          <h3 className="mt-8 mb-4">Staking via the Cubiq App</h3>
          <p className="mb-8">
            The Cubiq app will provide an intuitive interface for managing your staked QUBE, including:
          </p>
          <ul className="mb-8 space-y-2">
            <li>Viewing available validators.</li>
            <li>Delegating and undelegating your stake.</li>
            <li>Tracking your staking rewards.</li>
          </ul>

          <Card className="bg-gray-900/50 border-gray-800 mb-8">
            <CardHeader className="flex flex-row items-center gap-4">
              <Zap className="w-8 h-8 text-yellow-400" />
              <CardTitle className="text-white">Earn Rewards</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Participate in network security and earn passive income through staking.</p>
            </CardContent>
          </Card>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="troubleshooting" className="mb-6">
            Troubleshooting
          </h2>

          <p className="mb-8">Encountering issues? Here are some common problems and solutions:</p>

          <h3 className="mt-8 mb-4">App Not Connecting to Network</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Check Internet Connection:</strong> Ensure your device has a stable internet connection.
            </li>
            <li>
              <strong>Restart App:</strong> Close and reopen the Cubiq app.
            </li>
            <li>
              <strong>Check Network Status:</strong> Visit our official channels (e.g., Twitter, Discord) for network
              status updates.
            </li>
          </ul>

          <h3 className="mt-8 mb-4">Transaction Pending for Too Long</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Network Congestion:</strong> The network might be busy. Wait for a few minutes.
            </li>
            <li>
              <strong>Gas Fees:</strong> Ensure you have sufficient QUBE for transaction fees.
            </li>
            <li>
              <strong>Check Transaction Hash:</strong> Use a network explorer (Link to #) to check the status of your
              transaction.
            </li>
          </ul>

          <Card className="bg-gray-900/50 border-gray-800 mb-8">
            <CardHeader className="flex flex-row items-center gap-4">
              <Settings className="w-8 h-8 text-red-400" />
              <CardTitle className="text-white">Need More Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Visit our{" "}
                <a href="/community" className="text-blue-400 hover:underline">
                  Community
                </a>{" "}
                page for support channels.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="border-t border-gray-800 pt-12">
          <h2 id="faqs" className="mb-6">
            Frequently Asked Questions (FAQs)
          </h2>

          <p className="mb-8">Find quick answers to common questions about Cubiq Network.</p>

          <h3 className="mt-8 mb-4">What is a Qube?</h3>
          <p className="mb-8">
            A Qube is a lightweight mobile validator on the Cubiq Network. It verifies zero-knowledge proofs to secure
            the network without requiring high computational resources.
          </p>

          <h3 className="mt-8 mb-4">How do I earn rewards?</h3>
          <p className="mb-8">
            You can earn rewards by staking your QUBE tokens and delegating them to a validator. The validator earns
            block rewards, and you receive a portion of those rewards.
          </p>

          <h3 className="mt-8 mb-4">Is Cubiq Network secure?</h3>
          <p className="mb-8">
            Yes, Cubiq Network is built with security as a core principle, leveraging zero-knowledge proofs, a robust
            DPoS consensus, and continuous security audits. Refer to our{" "}
            <a href="/security" className="text-blue-400 hover:underline">
              Security page
            </a>{" "}
            for more details.
          </p>
        </div>
      </DocContent>
    </DocLayout>
  )
}
