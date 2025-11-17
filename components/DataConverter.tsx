'use client'

import { useState, useEffect } from 'react'
import { FaCopy, FaRedo, FaExchangeAlt, FaCheck } from 'react-icons/fa'
import { jsonToTOON, toonToJSON, sampleData } from '@/utils/toonConverter'
import { countTokens, calculateReduction } from '@/utils/tokenCounter'

export default function TOONConverter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [inputTokens, setInputTokens] = useState(0)
  const [outputTokens, setOutputTokens] = useState(0)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setInputTokens(countTokens(input))
  }, [input])

  useEffect(() => {
    setOutputTokens(countTokens(output))
  }, [output])

  const handleConvert = () => {
    setError('')
    try {
      const toon = jsonToTOON(input)
      setOutput(toon)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Conversion failed')
      setOutput('')
    }
  }

  const handleReset = () => {
    setInput('')
    setOutput('')
    setError('')
  }

  const handleSwap = () => {
    const temp = input
    setInput(output)
    setOutput(temp)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const loadSample = (sampleKey: keyof typeof sampleData) => {
    setInput(sampleData[sampleKey])
    setError('')
  }

  const reduction = calculateReduction(inputTokens, outputTokens)

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="mb-6 flex flex-wrap gap-3">
        <select
          onChange={(e) => e.target.value && loadSample(e.target.value as keyof typeof sampleData)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          defaultValue=""
        >
          <option value="" disabled>Try Sample...</option>
          <option value="simple">Simple Object</option>
          <option value="arrayOfObjects">Array of Objects</option>
          <option value="nested">Nested Structure</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">JSON Input</h3>
            <span className="text-sm text-gray-600">{inputTokens} tokens</span>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your JSON data here..."
            className="w-full h-80 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 font-mono text-sm"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">TOON Output</h3>
            <span className="text-sm text-gray-600">{outputTokens} tokens</span>
          </div>
          <textarea
            value={output}
            readOnly
            placeholder="TOON format will appear here..."
            className="w-full h-80 p-4 border border-gray-300 rounded-lg bg-gray-50 font-mono text-sm"
          />
        </div>
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-4 items-center">
        <button
          onClick={handleConvert}
          disabled={!input}
          className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold transition-colors"
        >
          Convert to TOON
        </button>

        <button
          onClick={handleSwap}
          disabled={!input || !output}
          className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Swap input and output"
        >
          <FaExchangeAlt />
        </button>

        <button
          onClick={handleCopy}
          disabled={!output}
          className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
        >
          {copied ? <FaCheck className="text-green-600" /> : <FaCopy />}
          {copied ? 'Copied!' : 'Copy'}
        </button>

        <button
          onClick={handleReset}
          className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
        >
          <FaRedo />
          Reset
        </button>

        {inputTokens > 0 && outputTokens > 0 && (
          <div className="ml-auto text-lg font-semibold text-green-600">
            {reduction}% token reduction
          </div>
        )}
      </div>
    </div>
  )
}
