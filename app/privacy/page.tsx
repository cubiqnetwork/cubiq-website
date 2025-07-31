import { DocLayout } from "@/components/doc-layout"
import { DocContent } from "@/components/doc-content"
import { ShieldCheck, Lock, Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const privacySections = [
  { title: "Introduction", href: "#introduction" },
  { title: "Information We Collect", href: "#information-collection" },
  { title: "How We Use Your Information", href: "#information-usage" },
  { title: "Data Sharing and Disclosure", href: "#data-sharing" },
  { title: "Data Security", href: "#data-security" },
  { title: "Your Rights and Choices", href: "#your-rights" },
  { title: "Changes to This Policy", href: "#policy-changes" },
  { title: "Contact Us", href: "#contact-us" },
]

export default function PrivacyPage() {
  return (
    <DocLayout title="Privacy Policy" sections={privacySections}>
      <DocContent>
        <h1>Privacy Policy</h1>

        <p className="text-xl text-gray-400 mb-12">
          Your privacy is critically important to us. This Privacy Policy outlines how Cubiq Network collects, uses,
          maintains, and discloses information collected from users of the Cubiq Network website and related services.
        </p>

        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-8 mb-16">
          <h3 className="text-white font-semibold mb-6">Our Commitment to Privacy</h3>
          <p className="text-gray-300">
            We are committed to protecting your personal information and your right to privacy. If you have any
            questions or concerns about our practices with regard to your personal information, please contact us.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="introduction" className="mb-6">
            Introduction
          </h2>

          <p className="mb-8">
            This Privacy Policy applies to all information collected through our website (such as{" "}
            <a href="#">https://cubiq.org</a>), and/or any related services, sales, marketing or events (we refer to
            them collectively in this Privacy Policy as the "Services").
          </p>
          <p className="mb-8">
            Please read this Privacy Policy carefully as it will help you make informed decisions about sharing your
            personal information with us.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="information-collection" className="mb-6">
            Information We Collect
          </h2>

          <p className="mb-8">
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining
            information about us or our products and Services, when you participate in activities on the Services or
            otherwise when you contact us.
          </p>

          <h3 className="mt-8 mb-4">Personal Information Provided by You</h3>
          <p className="mb-6">
            The personal information that we collect depends on the context of your interactions with us and the
            Services, the choices you make and the products and features you use. The personal information we collect
            may include the following:
          </p>
          <ul className="mb-8 space-y-2">
            <li>
              <strong>Contact Data:</strong> Email address, social media handles (e.g., GitHub, Twitter).
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you use our website, such as pages visited, time spent
              on pages, and links clicked. This is typically anonymized or aggregated.
            </li>
            <li>
              <strong>Communication Data:</strong> Content of messages, questions, or feedback you send to us.
            </li>
          </ul>

          <h3 className="mt-8 mb-4">Information Automatically Collected</h3>
          <p className="mb-6">
            We automatically collect certain information when you visit, use or navigate the Services. This information
            does not reveal your specific identity (like your name or contact information) but may include device and
            usage information, such as your IP address, browser and device characteristics, operating system, language
            preferences, referring URLs, device name, country, location, information about how and when you use our
            Services and other technical information. This information is primarily needed to maintain the security and
            operation of our Services, and for our internal analytics and reporting purposes.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="information-usage" className="mb-6">
            How We Use Your Information
          </h2>

          <p className="mb-8">
            We use personal information collected via our Services for a variety of business purposes described below.
            We process your personal information for these purposes in reliance on our legitimate business interests, in
            order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal
            obligations.
          </p>

          <ul className="mb-8 space-y-2">
            <li>
              <strong>To facilitate account creation and logon process:</strong> If you choose to link your account with
              us to a third-party account (such as your Google or GitHub account), we use the information you allowed us
              to collect from those third parties to facilitate account creation and logon process.
            </li>
            <li>
              <strong>To send you marketing and promotional communications:</strong> We and/or our third-party marketing
              partners may use the personal information you send to us for our marketing purposes, if this is in
              accordance with your marketing preferences.
            </li>
            <li>
              <strong>To send administrative information to you:</strong> We may use your personal information to send
              you product, service and new feature information and/or information about changes to our terms,
              conditions, and policies.
            </li>
            <li>
              <strong>To fulfill and manage your requests:</strong> We may use your information to fulfill and manage
              your requests made through the Services.
            </li>
            <li>
              <strong>To post testimonials:</strong> We post testimonials on our Services that may contain personal
              information. Prior to posting a testimonial, we will obtain your consent to use your name and testimonial.
            </li>
            <li>
              <strong>To protect our Services:</strong> We may use your information as part of our efforts to keep our
              Services safe and secure (for example, for fraud monitoring and prevention).
            </li>
            <li>
              <strong>To enable user-to-user communications:</strong> We may use your information in order to enable
              user-to-user communications with user's consent.
            </li>
            <li>
              <strong>To respond to user inquiries/offer support to users:</strong> We may use your information to
              respond to your inquiries and solve any potential issues you might have with the use of our Services.
            </li>
            <li>
              <strong>For other business purposes:</strong> We may use your information for other business purposes,
              such as data analysis, identifying usage trends, determining the effectiveness of our promotional
              campaigns and to evaluate and improve our Services, products, marketing and your experience.
            </li>
          </ul>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="data-sharing" className="mb-6">
            Data Sharing and Disclosure
          </h2>

          <p className="mb-8">We only share and disclose your information in the following situations:</p>

          <ul className="mb-8 space-y-2">
            <li>
              <strong>Consent:</strong> We may process your data if you have given us specific consent to use your
              personal information for a specific purpose.
            </li>
            <li>
              <strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve
              our legitimate business interests.
            </li>
            <li>
              <strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process
              your personal information to fulfill the terms of our contract.
            </li>
            <li>
              <strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do
              so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or
              legal process, such as in response to a court order or a subpoena (including in response to public
              authorities to meet national security or law enforcement requirements).
            </li>
            <li>
              <strong>Vital Interests:</strong> We may disclose your information where we believe it is necessary to
              investigate, prevent, or take action regarding potential violations of our policies, suspected fraud,
              situations involving potential threats to the safety of any person and illegal activities, or as evidence
              in litigation in which we are involved.
            </li>
            <li>
              <strong>Vendors, Consultants and Other Third-Party Service Providers:</strong> We may share your data with
              third-party vendors, service providers, contractors or agents who perform services for us or on our behalf
              and require access to such information to do that work. Examples include: payment processing, data
              analysis, email delivery, hosting services, customer service and marketing efforts.
            </li>
            <li>
              <strong>Business Transfers:</strong> We may share or transfer your information in connection with, or
              during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion
              of our business to another company.
            </li>
          </ul>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="data-security" className="mb-6">
            Data Security
          </h2>

          <p className="mb-8">
            We have implemented appropriate technical and organizational security measures designed to protect the
            security of any personal information we process. However, please also remember that we cannot guarantee that
            the internet itself is 100% secure. Although we will do our best to protect your personal information,
            transmission of personal information to and from our Services is at your own risk. You should only access
            the Services within a secure environment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader className="flex flex-row items-center gap-4">
                <ShieldCheck className="w-8 h-8 text-blue-400" />
                <CardTitle className="text-white">Encryption</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Data is encrypted in transit and at rest using industry-standard protocols.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader className="flex flex-row items-center gap-4">
                <Lock className="w-8 h-8 text-purple-400" />
                <CardTitle className="text-white">Access Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Strict access controls and authentication mechanisms are in place for all systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="your-rights" className="mb-6">
            Your Rights and Choices
          </h2>

          <p className="mb-8">
            In some regions (like the European Economic Area), you have certain rights under applicable data protection
            laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii)
            to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv)
            if applicable, to data portability. In certain circumstances, you may also have the right to object to the
            processing of your personal information. To make such a request, please use the contact details provided
            below.
          </p>

          <h3 className="mt-8 mb-4">Withdrawing Your Consent</h3>
          <p className="mb-8">
            If we are relying on your consent to process your personal information, you have the right to withdraw your
            consent at any time. Please note however that this will not affect the lawfulness of the processing before
            its withdrawal.
          </p>

          <h3 className="mt-8 mb-4">Opting Out of Marketing Communications</h3>
          <p className="mb-8">
            You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the
            emails that we send or by contacting us using the details provided below. You will then be removed from the
            marketing list — however, we may still communicate with you, for example to send you service-related
            messages that are necessary for the administration and use of your account, to respond to service requests,
            or for other non-marketing purposes.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 id="policy-changes" className="mb-6">
            Changes to This Policy
          </h2>

          <p className="mb-8">
            We may update this privacy policy from time to time. The updated version will be indicated by an updated
            "Revised" date and the updated version will be effective as soon as it is accessible. If we make material
            changes to this privacy policy, we may notify you either by prominently posting a notice of such changes or
            by directly sending you a notification. We encourage you to review this privacy policy frequently to be
            informed of how we are protecting your information.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-12">
          <h2 id="contact-us" className="mb-6">
            Contact Us
          </h2>

          <p className="mb-8">
            If you have questions or comments about this policy, you may email us at{" "}
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
              <p className="text-gray-400">For any privacy-related inquiries, please reach out to us directly.</p>
            </CardContent>
          </Card>
        </div>
      </DocContent>
    </DocLayout>
  )
}
