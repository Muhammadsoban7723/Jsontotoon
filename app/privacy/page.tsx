import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - JSON TO TOON',
  description: 'Privacy Policy for JSON TO TOON - Learn how we protect your data and privacy.',
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 text-center">
            Last updated: November 17, 2025
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600">
                At DataCompress Pro, we take your privacy seriously. This Privacy Policy explains how we handle your information when you use our website and services. The short version: we process everything client-side, so your data never leaves your device.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Processing</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Client-Side Processing</h3>
              <p className="text-gray-600 mb-4">
                All data compression and conversion happens entirely in your web browser using JavaScript. When you paste JSON or other data into our tool:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Your data is processed locally on your device</li>
                <li>No data is transmitted to our servers</li>
                <li>No data is stored on our servers</li>
                <li>No data is logged or recorded</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What We DO NOT Collect</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Your JSON input data</li>
                <li>Your compressed output data</li>
                <li>Conversion history</li>
                <li>Personal information</li>
                <li>Account credentials (we have no accounts)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">What We MAY Collect</h3>
              <p className="text-gray-600 mb-2">
                We may collect anonymous analytics data to improve our service:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Page views and navigation patterns</li>
                <li>General geographic location (country/region)</li>
                <li>Browser type and version</li>
                <li>Device type (desktop, mobile, tablet)</li>
                <li>Referring website</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
              <p className="text-gray-600 mb-4">
                We use minimal cookies for essential functionality:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Analytics Cookies (Optional):</strong> Help us understand how visitors use our site</li>
              </ul>
              <p className="text-gray-600 mt-4">
                We do NOT use advertising cookies, tracking cookies, or third-party marketing cookies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
              <p className="text-gray-600">
                We may use third-party services for analytics (such as Google Analytics). These services may collect information about your browser and device. We configure these services to respect user privacy as much as possible.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-600">
                Since your data never leaves your browser, the security of your data depends on your local device and browser security. We recommend:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li>Keep your browser updated</li>
                <li>Use a secure internet connection</li>
                <li>Clear your browser cache/history on shared devices</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-4">
                Since we do not collect or store your personal data or conversion data, there is nothing to access, modify, or delete. Your data remains entirely under your control on your own device.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-600">
                Our service is not directed to children under 13. We do not knowingly collect information from children under 13.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify users of significant changes by posting a notice on our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have questions about this Privacy Policy, please contact us at hello@datacompresspro.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
