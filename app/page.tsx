import TOONConverter from '@/components/DataConverter'
import { FaShieldAlt, FaBolt, FaChartLine, FaLock, FaInfinity, FaSync } from 'react-icons/fa'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4 inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
            100% Client-Side Processing — Your data never leaves your device
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Convert JSON to TOON and Save <span className="text-primary-600">30-60%</span> Tokens
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform JSON to Token-Oriented Object Notation (TOON) format instantly. Reduce LLM token usage, cut API costs for GPT-4, Claude, and Gemini — no signup required.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <TOONConverter />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Convert JSON to TOON?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Save money on LLM API costs, optimize token usage, and make your AI applications more efficient
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FaChartLine className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">30-60% Token Reduction</h3>
              <p className="text-gray-600">
                TOON format eliminates redundant JSON keys, brackets, and punctuation, cutting token usage by 30-60% on average.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FaBolt className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lower LLM API Costs</h3>
              <p className="text-gray-600">
                Save significantly on GPT-4, Claude, Gemini, and other LLM API costs. With 46% fewer tokens on average, you'll see immediate savings.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FaInfinity className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Completely Free Forever</h3>
              <p className="text-gray-600">
                No account required, no credit card, no limits. Convert unlimited JSON to TOON anytime, anywhere — 100% free.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FaLock className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Your Data Never Leaves Your Device</h3>
              <p className="text-gray-600">
                All conversion happens locally in your browser. Zero data transmission, zero servers, zero tracking. Complete privacy guaranteed.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FaShieldAlt className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lossless Conversion</h3>
              <p className="text-gray-600">
                TOON preserves all your data perfectly. Convert back to JSON anytime with zero data loss.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FaSync className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Conversion</h3>
              <p className="text-gray-600">
                Convert even large JSON files in milliseconds. Real-time processing with immediate results — no waiting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is TOON Format?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Token-Oriented Object Notation: A compact data format designed specifically for Large Language Models
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
                <p className="text-center mt-4 font-semibold text-gray-700">~45 tokens</p>
              </div>

              <div className="bg-primary-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">TOON Format</h3>
                <p className="text-sm text-gray-600 mb-4">Compact, token-optimized</p>
                <pre className="bg-white p-4 rounded-lg text-sm overflow-x-auto">
{`users[3]{id,name}:
  1,Alice
  2,Bob
  3,Carol`}
                </pre>
                <p className="text-center mt-4 font-semibold text-green-600">~28 tokens (38% savings)</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-500 to-primary-700 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">How TOON Saves Tokens</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div>
                  <div className="text-3xl font-bold mb-2">1.</div>
                  <p>Eliminates repeated keys in arrays of objects</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">2.</div>
                  <p>Removes excessive brackets, braces, and quotes</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">3.</div>
                  <p>Uses tabular format for uniform data structures</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Use JSON TO TOON
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Converting JSON to TOON is simple and takes seconds
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Paste Your JSON</h3>
                <p className="text-gray-600">
                  Copy your JSON data and paste it into the input box. Works with any valid JSON format.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Click Convert</h3>
                <p className="text-gray-600">
                  Press "Convert to TOON" and watch instant transformation with real-time token counts.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">See Token Savings</h3>
                <p className="text-gray-600">
                  View exact token reduction percentage and compare original vs TOON token counts.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Copy & Use in LLM Prompts</h3>
                <p className="text-gray-600">
                  Click copy and use your TOON data in GPT-4, Claude, Gemini, or any LLM prompt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Reduce Your LLM Costs by 60%?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers optimizing their AI workflows with TOON format. Start converting now — it's completely free.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#"
              className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Try Converter Now
            </a>
            <Link
              href="/about"
              className="px-8 py-4 bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-800 transition-colors"
            >
              Learn More About TOON
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
