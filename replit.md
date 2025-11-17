# JSON TO TOON

## Overview

JSON TO TOON is a Next.js-based web application that converts JSON data to TOON (Token-Oriented Object Notation) format. The primary purpose is to reduce LLM token usage by 30-60%, helping developers and AI practitioners cut API costs when working with GPT-4, Claude, Gemini, and other large language models. All conversion happens client-side in the browser, ensuring complete user privacy with no server-side data processing.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: Next.js 14 with App Router
- Uses React Server Components for static pages (About, FAQ, Privacy, Terms, Contact)
- Client components for interactive features (DataConverter, Header with mobile menu)
- TypeScript for type safety throughout the application
- File-based routing in `/app` directory

**Styling Approach**
- Tailwind CSS for utility-first styling
- Custom color palette defined in `tailwind.config.ts` with primary blue theme (50-900 shades)
- Custom animations for fade-in effects
- Responsive design with mobile-first approach
- Sticky header with hamburger menu for mobile devices

**UI Components**
- Header: Sticky navigation with responsive mobile menu
- Footer: Multi-column layout with site links and social media
- DataConverter: Main conversion tool with real-time token counting
- Uses React Icons (FaIcons) for consistent iconography throughout

**State Management**
- Local component state using React hooks (useState, useEffect)
- No global state management needed due to simple client-side architecture
- Form state managed locally in contact page

### Core Conversion Logic

**TOON Format Conversion** (`utils/toonConverter.ts`)
- Bidirectional conversion between JSON and TOON format
- Key algorithm: Detects uniform arrays of objects and compresses them by extracting common keys
- Handles nested structures, primitive arrays, and edge cases
- Reduces redundant JSON syntax (brackets, quotes, repeated keys)

**Token Counting** (`utils/tokenCounter.ts`)
- Uses `gpt-tokenizer` library to count tokens accurately
- Real-time token calculation as user types
- Calculates percentage reduction between input and output
- Provides immediate feedback on compression efficiency

**Processing Model**
- 100% client-side JavaScript execution
- No backend API calls for conversion
- No data leaves the user's browser
- Privacy-first architecture

### Pages and Routing

**Static Marketing Pages**
- `/` - Homepage with hero section and embedded converter
- `/about` - Company mission and TOON format explanation
- `/faq` - Accordion-style frequently asked questions
- `/contact` - Contact form (client-side only, no backend submission)
- `/privacy` - Privacy policy emphasizing client-side processing
- `/terms` - Terms and conditions

**SEO Optimization**
- Metadata exports in each page for title, description, keywords
- OpenGraph tags for social media sharing
- Twitter card metadata
- Semantic HTML structure

### Design Patterns

**Component Composition**
- Functional components with TypeScript interfaces
- Shared layout component (`app/layout.tsx`) wraps all pages
- Reusable Header and Footer components
- Single-responsibility principle for utility functions

**Error Handling**
- Try-catch blocks in conversion functions
- User-friendly error messages displayed in UI
- Validation for JSON input before conversion
- Graceful degradation for token counting failures

**Performance Optimizations**
- Static generation for marketing pages
- Client-side hydration for interactive components
- Minimal JavaScript bundle with tree-shaking
- Lazy loading not implemented but recommended for future

## External Dependencies

### Core Framework
- **Next.js 14.2.0**: React framework with App Router, Server Components, and automatic code splitting
- **React 18.3.0** & **React DOM 18.3.0**: UI library for component-based architecture

### Styling
- **Tailwind CSS 3.4.1**: Utility-first CSS framework
- **PostCSS 8.4.33**: CSS processing with Autoprefixer 10.4.17
- **Inter font**: Via Next.js Google Fonts integration

### UI & Interaction
- **React Icons 5.0.0**: Icon library (using Font Awesome icons)
- **Framer Motion 11.0.0**: Animation library (imported but minimal usage in current implementation)

### Token Processing
- **gpt-tokenizer 2.1.1**: Accurate GPT token counting using OpenAI's tokenization algorithm

### Development Tools
- **TypeScript 5.3.3**: Type checking and enhanced developer experience
- **ESNext/ES2020**: Modern JavaScript features

### Runtime Environment
- **Node.js 20+**: Required for development and build process
- Custom dev server configuration: Runs on port 5000, binds to 0.0.0.0 for network access

### No Backend Services
- No database (Drizzle, Postgres, or otherwise)
- No authentication system
- No API routes or serverless functions
- No external API integrations
- No analytics or tracking services mentioned in code

### Build & Deployment
- Next.js build system with automatic static optimization
- No specific deployment platform configured
- Environment agnostic - can deploy to Vercel, Netlify, or any Node.js host