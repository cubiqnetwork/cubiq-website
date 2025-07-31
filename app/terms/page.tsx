import { DocLayout } from "@/components/doc-layout"
import { DocContent } from "@/components/doc-content"
import { Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const termsSections = [
  { title: "Introduction", href: "#introduction" },
  { title: "Acceptance of Terms", href: "#acceptance" },
  { title: "Services Description", href: "#services" },
  { title: "User Obligations", href: "#user-obligations" },
  { title: "Prohibited Activities", href: "#prohibited-activities" },
  { title: "Intellectual Property", href: "#intellectual-property" },
  { title: "Disclaimers", href: "#disclaimers" },
  { title: "Limitation of Liability", href: "#limitation-of-liability" },
  { title: "Indemnification", href: "#indemnification" },
  { title: "Termination", href: "#termination" },
  { title: "Governing Law", href: "#governing-law" },
  { title: "Dispute Resolution", href: "#dispute-resolution" },
  { title: "Miscellaneous", href: "#miscellaneous" },
  { title: "Contact Us", href: "#contact-us" },
]

export default function TermsPage() {
  return (
    <DocLayout title="Terms of Service" sections={termsSections}>
      <DocContent>
        <h1>Terms of Service</h1>

        <p className="text-xl text-gray-400 mb-12">
          Welcome to Cubiq Network. These Terms of Service ("Terms") govern your use of the Cubiq Network website and
          all associated services, features, content, and applications (collectively, the "Services").
        </p>

        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-8 mb-16">
          <h3 className="text-white font-semibold mb-6">Agreement to Terms</h3>
          <p className="text-gray-300">
            By accessing or using our Services, you agree to be bound by these Terms and all policies referenced herein.
            If you do not agree to these Terms, you may not access or use our Services.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="introduction" className="mb-6">
            Introduction
          </h2>

          <p className="mb-8">
            These Terms constitute a legally binding agreement between you and Cubiq Network ("we," "us," or "our").
            Please read them carefully. We may modify these Terms at any time, and such modifications will be effective
            immediately upon posting the modified Terms on our website. Your continued use of the Services after any
            such modifications constitutes your acceptance of the revised Terms.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="acceptance" className="mb-6">
            Acceptance of Terms
          </h2>

          <p className="mb-8">
            By accessing or using the Services, you affirm that you are of legal age to enter into this agreement, or
            that you have obtained parental or guardian consent if you are a minor. You also affirm that you have read,
            understood, and agree to be bound by these Terms.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="services" className="mb-6">
            Services Description
          </h2>

          <p className="mb-8">
            Cubiq Network provides a decentralized blockchain platform designed to enable mobile devices to participate
            as validators ("Qubes") and interact with decentralized applications (dApps). Our Services include, but are
            not limited to:
          </p>

          <ul className="mb-8 space-y-2">
            <li>Access to documentation and guides for developers and users.</li>
            <li>Information about the Cubiq protocol, architecture, and technology.</li>
            <li>Community resources and communication channels.</li>
            <li>Tools and SDKs for building on the Cubiq Network.</li>
          </ul>
          <p className="mb-8">
            The Services are provided "as is" and "as available" without any warranties of any kind.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="user-obligations" className="mb-6">
            User Obligations
          </h2>

          <p className="mb-8">As a user of our Services, you agree to:</p>

          <ul className="mb-8 space-y-2">
            <li>Comply with all applicable laws and regulations.</li>
            <li>Use the Services only for lawful purposes.</li>
            <li>Not engage in any activity that interferes with or disrupts the Services.</li>
            <li>Provide accurate and complete information when interacting with the Services.</li>
            <li>Maintain the security of any credentials or access keys associated with your use of the Services.</li>
          </ul>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="prohibited-activities" className="mb-6">
            Prohibited Activities
          </h2>

          <p className="mb-8">
            You may not access or use the Services for any purpose other than that for which we make the Services
            available. As a user of the Services, you agree not to:
          </p>

          <ul className="mb-8 space-y-2">
            <li>
              Systematically retrieve data or other content from the Services to create or compile, directly or
              indirectly, a collection, compilation, database, or directory without written permission from us.
            </li>
            <li>
              Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users
              by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by
              automated means or under false pretenses.
            </li>
            <li>
              Circumvent, disable, or otherwise interfere with security-related features of the Services, including
              features that prevent or restrict use or copying of any Content or enforce limitations on the use of the
              Services and/or the Content contained therein.
            </li>
            <li>Engage in unauthorized framing of or linking to the Services.</li>
            <li>
              Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account
              information such as user passwords.
            </li>
            <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
            <li>
              Engage in any automated use of the system, such as using scripts to send comments or messages, or using
              any data mining, robots, or similar data gathering and extraction tools.
            </li>
            <li>
              Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected
              to the Services.
            </li>
            <li>Attempt to impersonate another user or person or use the username of another user.</li>
            <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
            <li>
              Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content
              for any revenue-generating endeavor or commercial enterprise.
            </li>
            <li>
              Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making
              up a part of the Services.
            </li>
            <li>
              Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or
              any portion of the Services.
            </li>
            <li>
              Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of
              the Services to you.
            </li>
            <li>Delete the copyright or other proprietary rights notice from any Content.</li>
            <li>
              Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other
              code.
            </li>
            <li>
              Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material,
              including excessive use of capital letters and spamming (continuous posting of repetitive text), that
              interferes with any party’s uninterrupted use and enjoyment of the Services or modifies, impairs,
              disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the
              Services.
            </li>
            <li>
              Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active
              information collection or transmission mechanism, including without limitation, clear graphics interchange
              formats (“gifs”), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as
              “spyware” or “passive collection mechanisms” or “pcms”).
            </li>
            <li>
              Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or
              distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper,
              or offline reader that accesses the Services, or using or launching any unauthorized script or other
              software.
            </li>
            <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
            <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
          </ul>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="intellectual-property" className="mb-6">
            Intellectual Property
          </h2>

          <p className="mb-8">
            Unless otherwise indicated, the Services are our proprietary property and all source code, databases,
            functionality, software, website designs, audio, video, text, photographs, and graphics on the Services
            (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks")
            are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and
            various other intellectual property rights and unfair competition laws of the United States, international
            copyright laws, and international conventions.
          </p>
          <p className="mb-8">
            The Content and the Marks are provided on the Services "AS IS" for your information and personal use only.
            Except as expressly provided in these Terms of Use, no part of the Services and no Content or Marks may be
            copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated,
            transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever,
            without our express prior written permission.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="disclaimers" className="mb-6">
            Disclaimers
          </h2>

          <p className="mb-8">
            THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL
            BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR
            IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES
            OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES’ CONTENT OR THE CONTENT OF ANY
            WEBSITES LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS,
            MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE
            WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF
            OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4)
            ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES,
            OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR
            OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE
            OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="limitation-of-liability" className="mb-6">
            Limitation of Liability
          </h2>

          <p className="mb-8">
            IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY
            DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT,
            LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN
            ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR
            LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE
            LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF
            ACTION ARISING.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="indemnification" className="mb-6">
            Indemnification
          </h2>

          <p className="mb-8">
            You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our
            respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim,
            or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out
            of: (1) your Content; (2) use of the Services; (3) breach of these Terms of Use; (4) any breach of your
            representations and warranties set forth in these Terms of Use; (5) your violation of the rights of a third
            party, including but not limited to intellectual property rights; or (6) any overt harmful act toward any
            other user of the Services with whom you connected via the Services.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="termination" className="mb-6">
            Termination
          </h2>

          <p className="mb-8">
            These Terms of Use shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY
            OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR
            LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON
            FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR
            COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE
            OR PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT
            WARNING, IN OUR SOLE DISCRETION.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="governing-law" className="mb-6">
            Governing Law
          </h2>

          <p className="mb-8">
            These Terms of Use and your use of the Services are governed by and construed in accordance with the laws of
            [Your Jurisdiction], without regard to its conflict of law principles.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="dispute-resolution" className="mb-6">
            Dispute Resolution
          </h2>

          <p className="mb-8">
            Any legal action or proceeding arising under these Terms of Use will be brought exclusively in the federal
            or state courts located in [Your Jurisdiction], and you hereby consent to the personal jurisdiction and
            venue therein.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="miscellaneous" className="mb-6">
            Miscellaneous
          </h2>

          <p className="mb-8">
            These Terms of Use and any policies or operating rules posted by us on the Services or in respect to the
            Services constitute the entire agreement and understanding between you and us. Our failure to exercise or
            enforce any right or provision of these Terms of Use shall not operate as a waiver of such right or
            provision. These Terms of Use operate to the fullest extent permissible by law. We may assign any or all of
            our rights and obligations to others at any time. We shall not be responsible or liable for any loss,
            damage, delay, or failure to act caused by any cause beyond our reasonable control.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12">
          <h2 id="contact-us" className="mb-6">
            Contact Us
          </h2>

          <p className="mb-8">
            If you have questions or comments about these Terms, you may email us at{" "}
            <a href="mailto:info@cubiq.org" className="text-blue-400 hover:underline">
              info@cubiq.org
            </a>
            .
          </p>

          <Card className="bg-gray-900/50 border-gray-800 mb-8">
            <CardHeader className="flex flex-row items-center gap-4">
              <Mail className="w-8 h-8 text-blue-400" />
              <CardTitle className="text-white">Email Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">For any terms-related inquiries, please reach out to us directly.</p>
            </CardContent>
          </Card>
        </div>
      </DocContent>
    </DocLayout>
  )
}
