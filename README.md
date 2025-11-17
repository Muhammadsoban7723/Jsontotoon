# JSON TO TOON

A professional Next.js website featuring a JSON to TOON converter that reduces LLM token usage by 30-60%. Convert JSON to Token-Oriented Object Notation (TOON) format for optimized AI prompts.

## About TOON Format

TOON (Token-Oriented Object Notation) is a compact data format designed specifically for Large Language Models. It reduces token consumption by 30-60% compared to JSON while maintaining complete lossless data integrity.

## Features

- **JSON to TOON Converter**: Convert JSON to TOON format with real-time token counting
- **30-60% Token Reduction**: Dramatically reduce LLM API costs for GPT-4, Claude, and Gemini
- **Client-Side Processing**: All conversion happens in browser for complete privacy
- **Real-Time Token Counter**: See exact token counts and savings instantly
- **Copy to Clipboard**: Easy one-click copying of TOON output
- **Sample Data**: Pre-loaded examples to test the converter
- **Bidirectional Conversion**: Convert JSON to TOON and back
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **SEO Optimized**: Complete metadata and OpenGraph tags

## Pages

- **Home**: Main landing page with TOON converter and features
- **About**: Information about JSON TO TOON and TOON format benefits
- **FAQ**: Comprehensive questions about TOON format and usage
- **Contact**: Contact form for inquiries
- **Privacy Policy**: Detailed privacy information
- **Terms & Conditions**: Usage terms

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Token Counter**: gpt-tokenizer
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:5000](http://localhost:5000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms & conditions
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── DataConverter.tsx  # TOON converter tool
│   ├── Footer.tsx         # Footer
│   └── Header.tsx         # Header with navigation
├── utils/                 # Utility functions
│   ├── toonConverter.ts   # TOON encoding/decoding
│   └── tokenCounter.ts    # Token counting
└── package.json          # Dependencies
```

## How TOON Works

TOON reduces tokens by:
1. **Eliminating repeated keys** in arrays of objects
2. **Removing excessive punctuation** (brackets, braces, quotes)
3. **Using tabular format** for uniform data structures

### Example

**JSON (45 tokens):**
```json
{
  "users": [
    {"id": 1, "name": "Alice"},
    {"id": 2, "name": "Bob"}
  ]
}
```

**TOON (28 tokens - 38% reduction):**
```
users[2]{id,name}:
  1,Alice
  2,Bob
```

## Usage

1. **Paste JSON**: Copy your JSON data into the input box
2. **Click Convert**: Press "Convert to TOON"
3. **See Savings**: View token reduction percentage
4. **Copy & Use**: Use TOON output in LLM prompts

## Deployment on Replit

This project is optimized for Replit:
- Server binds to `0.0.0.0:5000`
- No special configuration needed
- Just click "Run"

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Client-side conversion is instant (<100ms)
- Optimized with Next.js code splitting
- Fast initial page load with SSR

## Privacy

All conversion happens locally in your browser:
- No data transmission to servers
- No data storage or logging
- Complete privacy guaranteed

## License

Proprietary - All rights reserved

## Contact

For questions, visit the Contact page or email: hello@jsontotoon.com

## Acknowledgments

- Next.js for the framework
- Tailwind CSS for styling
- TOON Format specification (github.com/toon-format/spec)
- OpenAI for the GPT tokenizer library
