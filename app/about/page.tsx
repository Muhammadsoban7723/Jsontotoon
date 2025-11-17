import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About - JSON TO TOON',
  description: 'Learn about JSON TO TOON and how we help developers reduce LLM token usage by 30-60% with TOON format conversion.',
}

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            About DataCompress Pro
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Making data optimization accessible for everyone — one compression at a time
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6 text-lg">
              We built DataCompress Pro to solve a simple but important problem: <strong>data files are often larger than they need to be</strong>.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              Every time you store or transfer JSON data, images, or other structured information, you're dealing with thousands of redundant characters — repeated keys, excessive whitespace, and unnecessary formatting. For developers making frequent API calls or storing large datasets, this overhead adds up to real costs in bandwidth, storage, and processing time.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">What We Do</h2>
            <p className="text-gray-600 mb-6 text-lg">
              DataCompress Pro is an advanced compression tool designed to <strong>reduce data size by 40-60%</strong> while maintaining perfect data integrity. Our free, browser-based converter transforms your data into an optimized format that's smaller, faster, and more efficient.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Traditional JSON</h3>
                <p className="text-sm text-gray-600 mb-4">Repetitive keys, excessive punctuation</p>
                <pre className="bg-white p-4 rounded-lg text-sm overflow-x-auto">
{`{
  "users": [
    {"id": 1, "name": "Alice"},
    {"id": 2, "name": "Bob"},
    {"id": 3, "name": "Carol"}
  ]
}`}
                </pre>
                <p className="text-center mt-4 font-semibold text-gray-700">~65 tokens</p>
              </div>

              <div className="bg-primary-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compressed Format</h3>
                <p className="text-sm text-gray-600 mb-4">Compact, optimized structure</p>
                <pre className="bg-white p-4 rounded-lg text-sm overflow-x-auto">
{`users[
  id | name
  1 | Alice
  2 | Bob
  3 | Carol
]`}
                </pre>
                <p className="text-center mt-4 font-semibold text-green-600">~35 tokens (46% savings)</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Why We Built This</h2>
            <p className="text-gray-600 mb-6 text-lg">
              When we discovered the inefficiencies in traditional data formats, we immediately saw the potential to help developers save bandwidth and reduce costs. But there was a problem: while compression techniques existed, there wasn't a <strong>simple, web-based tool</strong> that anyone could use instantly without installation or configuration.
            </p>

            <div className="bg-primary-50 p-8 rounded-xl my-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Core Beliefs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">🌍 Accessible to Everyone</h4>
                  <p className="text-gray-600">Data optimization should be available to all developers, not just enterprises with big budgets.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">🔒 Privacy First</h4>
                  <p className="text-gray-600">Your data should stay on your device. We process everything client-side with zero server transmission.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">⚡ Simple and Fast</h4>
                  <p className="text-gray-600">Developer tools should be instant and friction-free. No account, no waiting, just results.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">🆓 Always Free</h4>
                  <p className="text-gray-600">Essential tools should be free. No hidden fees, no premium tiers, no upsells.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Key Features</h2>
            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="text-primary-600 font-bold text-xl">✓</div>
                <div>
                  <h4 className="font-bold text-gray-900">40-60% Size Reduction</h4>
                  <p className="text-gray-600">Dramatically reduce file sizes while maintaining perfect data accuracy.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-primary-600 font-bold text-xl">✓</div>
                <div>
                  <h4 className="font-bold text-gray-900">100% Client-Side Processing</h4>
                  <p className="text-gray-600">Your data never leaves your browser. Complete privacy and security guaranteed.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-primary-600 font-bold text-xl">✓</div>
                <div>
                  <h4 className="font-bold text-gray-900">Real-Time Token Counting</h4>
                  <p className="text-gray-600">See exact token counts and compression percentages instantly.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-primary-600 font-bold text-xl">✓</div>
                <div>
                  <h4 className="font-bold text-gray-900">No Installation Required</h4>
                  <p className="text-gray-600">Works in any modern browser. No downloads, dependencies, or setup.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-500 to-primary-700 text-white p-8 rounded-xl text-center my-12">
              <h2 className="text-2xl font-bold mb-4">Start Optimizing Your Data Today</h2>
              <p className="text-primary-100 mb-6 text-lg">
                Ready to reduce your data size by 40-60%?
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/"
                  className="px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Try the Converter
                </Link>
                <Link
                  href="/faq"
                  className="px-8 py-3 bg-primary-800 text-white rounded-lg font-semibold hover:bg-primary-900 transition-colors"
                >
                  View FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
