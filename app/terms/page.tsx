import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions - JSON TO TOON',
  description: 'Terms and Conditions for using JSON TO TOON services.',
}

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Terms & Conditions
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using DataCompress Pro, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-600">
                DataCompress Pro provides a free, browser-based data compression tool that allows users to compress JSON and structured data. The service is provided "as is" without warranty of any kind.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Service</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Permitted Use</h3>
              <p className="text-gray-600 mb-4">You may use DataCompress Pro for:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Compressing JSON and structured data</li>
                <li>Personal, educational, or commercial purposes</li>
                <li>Integration into your own applications and workflows</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Prohibited Use</h3>
              <p className="text-gray-600 mb-4">You may NOT:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Attempt to compromise the security of the website</li>
                <li>Use the service for illegal activities</li>
                <li>Reverse engineer or copy the website code without permission</li>
                <li>Use automated tools to abuse or overload the service</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-600">
                The DataCompress Pro website, including its design, code, and content, is owned by DataCompress Pro and protected by copyright laws. You may not copy, modify, or distribute our website content without explicit permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Data and Privacy</h2>
              <p className="text-gray-600">
                All data processing happens client-side in your browser. We do not collect, store, or transmit your conversion data. Please refer to our Privacy Policy for detailed information about data handling.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Disclaimer of Warranties</h2>
              <p className="text-gray-600 mb-4">
                DataCompress Pro is provided "as is" and "as available" without any warranties, express or implied, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Accuracy or reliability of compression results</li>
                <li>Uninterrupted or error-free service</li>
                <li>Fitness for a particular purpose</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-600">
                In no event shall DataCompress Pro be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, or other intangible losses resulting from:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li>Your use or inability to use the service</li>
                <li>Any errors or inaccuracies in compression results</li>
                <li>Unauthorized access to your device or data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. User Responsibility</h2>
              <p className="text-gray-600">
                You are solely responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li>Verifying the accuracy of compression results</li>
                <li>Maintaining backups of your original data</li>
                <li>Ensuring your use complies with applicable laws</li>
                <li>The security of your device and browser</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Service Availability</h2>
              <p className="text-gray-600">
                We strive to maintain service availability but do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue the service at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
              <p className="text-gray-600">
                These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-600">
                For questions about these Terms & Conditions, please contact us at hello@datacompresspro.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
