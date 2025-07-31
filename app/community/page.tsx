import { DocLayout } from "@/components/doc-layout"
import { DocContent } from "@/components/doc-content"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MessageCircle, Twitter, X, Github, Instagram, Youtube, DiscIcon as Discord, Send } from "lucide-react"

const communitySections = [
  { title: "Overview", href: "#overview" },
  { title: "Join Our Community", href: "#join-community" },
  { title: "Social Channels", href: "#social-channels" },
  { title: "Developer Resources", href: "#developer-resources" },
  { title: "Events & Meetups", href: "#events-meetups" },
  { title: "Contribution Guidelines", href: "#contribution-guidelines" },
]

export default function CommunityPage() {
  return (
    <DocLayout title="Community" sections={communitySections}>
      <DocContent>
        <h1>Cubiq Network Community</h1>

        <p className="text-xl text-gray-400 mb-12">
          Join the vibrant and growing Cubiq Network community! Connect with developers, researchers, validators, and
          enthusiasts who are passionate about mobile-native blockchain.
        </p>

        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-8 mb-16">
          <h3 className="text-white font-semibold mb-6">Be Part of the Future</h3>
          <p className="text-gray-300">
            Your participation is crucial to the success and decentralization of Cubiq Network. Engage, contribute, and
            help us build the next generation of dApps.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="overview" className="mb-6">
            Overview
          </h2>

          <p className="mb-8">
            The Cubiq community is a diverse group of individuals united by a shared vision of a truly decentralized and
            mobile-accessible blockchain ecosystem. We foster an open, collaborative, and inclusive environment where
            ideas are shared, questions are answered, and contributions are celebrated.
          </p>
          <p className="mb-8">
            Whether you're a seasoned blockchain developer, a mobile enthusiast, a potential validator, or just curious
            about the technology, there's a place for you in the Cubiq community.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="join-community" className="mb-6">
            Join Our Community
          </h2>

          <p className="mb-8">Connecting with the Cubiq community is easy. Choose your preferred platform:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader className="flex flex-row items-center gap-4">
                <Discord className="w-8 h-8 text-indigo-400" />
                <CardTitle className="text-white">Discord (Coming soon ...)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Join our Discord server for real-time discussions, support, and announcements.
                </p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  Join Discord
                </a>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader className="flex flex-row items-center gap-4">
                <Send className="w-8 h-8 text-cyan-400" />
                <CardTitle className="text-white">Telegram (Coming soon ...)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Stay updated with official news and chat with the community on Telegram.
                </p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  Join Telegram
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="social-channels" className="mb-6">
            Social Channels
          </h2>

          <p className="mb-8">
            Follow us on social media to get the latest updates, news, and insights from Cubiq Network:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader className="flex flex-row items-center gap-4">
                <X className="w-8 h-8 text-blue-400" />
                <CardTitle className="text-white">X (Formerly Twitter)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Follow us for real-time updates, announcements, and engaging discussions.
                </p>
                <a href="https://x.com/CubiqNetwork" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  Follow @CubiqNetwork
                </a>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader className="flex flex-row items-center gap-4">
                <MessageCircle className="w-8 h-8 text-green-400" />
                <CardTitle className="text-white">Medium</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Read in-depth articles, technical insights, and project updates on our blog.
                </p>
                <a href="https://medium.com/@CubiqNetwork" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  Read Our Blog
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="developer-resources" className="mb-6">
            Developer Resources
          </h2>

          <p className="mb-8">For developers looking to build on Cubiq, we offer dedicated resources:</p>

          <ul className="mb-8 space-y-2">
            <li>
              <strong>GitHub Repositories:</strong> Access our open-source code, contribute, and report issues.
              <br />
              <a href="https://github.com/cubiqnetwork" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Visit GitHub
              </a>
            </li>
            <li>
              <strong>Developer Documentation:</strong> Comprehensive guides and API references.
              <br />
              <a href="/developers" className="text-blue-400 hover:underline">
                Explore Docs
              </a>
            </li>
            <li>
              <strong>SDK & Tools:</strong> Libraries and CLI tools to streamline your development.
            </li>
          </ul>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="events-meetups" className="mb-6">
            Events & Meetups
          </h2>

          <p className="mb-8">
            Stay tuned for upcoming events, webinars, and community meetups where you can learn more about Cubiq Network
            and connect with the team and other community members.
          </p>

          <Card className="bg-gray-900/50 border-gray-800 mb-8">
            <CardHeader className="flex flex-row items-center gap-4">
              <Users className="w-8 h-8 text-purple-400" />
              <CardTitle className="text-white">Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Check our social channels for announcements on virtual and in-person events.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="border-t border-gray-800 pt-12">
          <h2 id="contribution-guidelines" className="mb-6">
            Contribution Guidelines
          </h2>

          <p className="mb-8">
            We welcome contributions from the community! Whether it's code, documentation, translations, or community
            support, your efforts help strengthen the Cubiq Network.
          </p>

          <h3 className="mt-8 mb-4">How to Contribute</h3>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Code:</strong> Fork our repositories on GitHub, make your changes, and submit a pull request.
            </li>
            <li>
              <strong>Documentation:</strong> Help us improve our guides and tutorials.
            </li>
            <li>
              <strong>Community Support:</strong> Answer questions and help new users on Discord or Telegram.
            </li>
            <li>
              <strong>Feedback:</strong> Share your ideas and suggestions for improving the network.
            </li>
          </ul>
          <p className="mb-8">Please refer to our GitHub repositories for detailed contribution guidelines.</p>
        </div>
      </DocContent>
    </DocLayout>
  )
}
