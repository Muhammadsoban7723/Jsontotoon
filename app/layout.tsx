import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JSON TO TOON - Reduce LLM Token Usage by 30-60%',
  description: 'Free online JSON to TOON converter. Transform JSON to Token-Oriented Object Notation (TOON) format and cut LLM API costs by 30-60%. Client-side processing, no signup required.',
  keywords: 'JSON to TOON, TOON format, token reduction, LLM optimization, GPT token savings, Claude API costs',
  openGraph: {
    title: 'JSON TO TOON - Reduce LLM Token Usage by 30-60%',
    description: 'Free JSON to TOON converter. Cut LLM token costs by up to 60% instantly.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON TO TOON - Reduce LLM Token Usage by 30-60%',
    description: 'Free JSON to TOON converter for LLM optimization.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
