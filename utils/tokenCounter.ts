import { encode } from 'gpt-tokenizer'

export function countTokens(text: string): number {
  if (!text || text.trim().length === 0) return 0
  try {
    const tokens = encode(text)
    return tokens.length
  } catch (error) {
    console.error('Error counting tokens:', error)
    return 0
  }
}

export function calculateReduction(originalTokens: number, compressedTokens: number): number {
  if (originalTokens === 0) return 0
  return Math.round(((originalTokens - compressedTokens) / originalTokens) * 100)
}
