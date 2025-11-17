'use client'

import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const faqs = [
  {
    category: 'General Questions',
    questions: [
      {
        q: 'What is DataCompress Pro?',
        a: 'DataCompress Pro is a free, browser-based tool that compresses JSON and structured data by 40-60%. It helps developers reduce file sizes, optimize API responses, and save bandwidth without requiring signup or installation.',
      },
      {
        q: 'Is DataCompress Pro really free?',
        a: 'Yes, completely free with no catch. There are no subscription fees, usage limits, ads, or hidden costs. Core compression functionality will always remain free forever.',
      },
      {
        q: 'Do I need to create an account?',
        a: 'No! You can use DataCompress Pro completely anonymously. Just visit the website, paste your data, and compress. No email, password, or account required.',
      },
    ],
  },
  {
    category: 'Compression & Technology',
    questions: [
      {
        q: 'How much size reduction can I expect?',
        a: 'Typical results show 40-60% size reduction on average. The exact reduction depends on your data structure. Uniform arrays and tabular data compress better, while deeply nested structures see smaller reductions.',
      },
      {
        q: 'Is the compression lossless?',
        a: 'Yes! The compression is 100% lossless. When you decompress the data, you get back your original structure exactly. We preserve all values, array order, and data types.',
      },
      {
        q: 'What types of data can I compress?',
        a: 'You can compress JSON objects, arrays, nested structures, and any valid JSON data. The tool works best with uniform arrays of objects (like user lists, product catalogs, or analytics data) but supports all JSON formats.',
      },
    ],
  },
  {
    category: 'Privacy & Security',
    questions: [
      {
        q: 'Is my data safe?',
        a: 'Yes, your data is completely safe because it never leaves your device. All compression happens locally in your browser using JavaScript. We have no servers to store or process your data.',
      },
      {
        q: 'Do you collect or store my data?',
        a: 'No, absolutely not. We do not collect, store, log, or transmit your data in any way. We may collect anonymous analytics (page views, browser type) but never your actual data content.',
      },
      {
        q: 'Can I use this for sensitive data?',
        a: 'Yes, from a technical perspective. Since all processing is client-side and your data stays on your device, it is safe for sensitive information. However, always follow your organization security policies.',
      },
    ],
  },
  {
    category: 'Usage & Features',
    questions: [
      {
        q: 'How do I use the converter?',
        a: 'It is simple: 1) Paste your JSON data into the input box, 2) Click "Convert to Compressed", 3) View the compressed output and savings percentage, 4) Click "Copy" to use your optimized data.',
      },
      {
        q: 'What is the maximum file size I can compress?',
        a: 'There is no hard limit, but browser memory affects performance. Files under 1MB compress instantly, 1-10MB takes under 1 second, and 10-50MB may take a few seconds depending on your device.',
      },
      {
        q: 'Can I decompress back to original format?',
        a: 'Yes! Use the swap button to reverse the process. The conversion is fully bidirectional and lossless in both directions.',
      },
    ],
  },
  {
    category: 'Technical Questions',
    questions: [
      {
        q: 'Does this work offline?',
        a: 'Once the page loads initially, the compression works offline since all processing is client-side. You need internet only to load the website initially.',
      },
      {
        q: 'What browsers are supported?',
        a: 'DataCompress Pro works on all modern browsers including Chrome, Firefox, Safari, Edge, and mobile browsers on iOS and Android.',
      },
      {
        q: 'Can I integrate this into my application?',
        a: 'Currently, we only offer the web-based tool. For programmatic compression in your code, you can implement similar algorithms using compression libraries available in most programming languages.',
      },
    ],
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-5 text-left hover:text-primary-600 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        {isOpen ? (
          <FaChevronUp className="flex-shrink-0 text-primary-600" />
        ) : (
          <FaChevronDown className="flex-shrink-0 text-gray-400" />
        )}
      </button>
      {isOpen && (
        <div className="pb-5 text-gray-600 animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Find answers to common questions about DataCompress Pro and data compression
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqs.map((category, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {category.category}
              </h2>
              <div className="bg-white rounded-xl border border-gray-200">
                {category.questions.map((faq, faqIdx) => (
                  <FAQItem key={faqIdx} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
