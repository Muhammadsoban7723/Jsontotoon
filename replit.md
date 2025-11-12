# JSON to TOON Converter

## Overview

A web-based utility tool for converting JSON data to TOON format, designed to reduce LLM token usage by 30-60%. This is a tool-first application that prioritizes functionality and clarity over marketing elements. The converter operates entirely client-side for security and privacy, with no server-side data processing.

The application features a dual-pane converter interface with real-time token counting, sample templates for quick testing, and utility functions for copying and downloading converted output.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript, built using Vite for fast development and optimized production builds.

**Routing**: Uses Wouter for lightweight client-side routing. The application is primarily single-page with a home converter view and a 404 fallback.

**UI Component System**: Built on shadcn/ui (New York style variant) with Radix UI primitives for accessible, unstyled components. Uses Tailwind CSS for styling with a custom design system emphasizing clean utility aesthetics inspired by modern developer tools (Linear, Vercel, Stripe).

**State Management**: React hooks and context for local state. TanStack Query (React Query) configured for potential future API integration, though currently the app operates entirely client-side.

**Design System**:
- Typography: Inter/DM Sans for UI, JetBrains Mono/Fira Code for code display
- Spacing: Consistent Tailwind units (3, 4, 6, 8, 12, 16, 20)
- Theme: Light/dark mode support with CSS variables for colors
- Components: Focused on form elements (textarea, select, button), cards, accordions, and utility UI

**Key Features**:
- Dual-pane JSON to TOON converter with side-by-side layout on desktop, stacked on mobile
- Real-time token counting for both input and output
- Sample data templates (simple object, array of objects, nested structures)
- Copy to clipboard and download as text file functionality
- Error handling with user-friendly error messages
- Responsive design with mobile-first approach

### Core Conversion Logic

**Token Counter** (`client/src/lib/token-counter.ts`): Custom implementation that estimates token count by analyzing characters, words, and numbers. Provides approximate token counts for comparing JSON vs TOON efficiency.

**TOON Converter** (`client/src/lib/toon-converter.ts`): 
- Converts JSON to TOON format with configurable delimiters (comma, tab, pipe)
- Handles string escaping and quote requirements intelligently
- Special handling for uniform arrays (arrays of objects with identical keys)
- Preserves data types (null, boolean, number, string)
- Configurable indentation

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js

**Current Implementation**: Minimal backend setup with placeholder routes. The server primarily serves the static frontend build and provides infrastructure for potential future features.

**Session Management**: Infrastructure includes connect-pg-simple for PostgreSQL session storage (currently unused as app has no authentication)

**Storage Layer**: In-memory storage implementation (`MemStorage`) with interface-based design allowing easy swap to database-backed storage. Currently includes user CRUD operations as scaffolding.

**Development Setup**: 
- Vite dev server integration for HMR in development
- Source mapping support for debugging
- Logging middleware for API requests
- Raw body parsing for potential webhook support

### Styling Architecture

**Tailwind Configuration**: Custom theme extending base Tailwind with:
- Custom border radius values (9px, 6px, 3px)
- HSL-based color system with CSS variables for theming
- Separate light/dark mode color definitions
- Custom font family variables
- Shadow and elevation utilities

**CSS Variables Strategy**: All colors defined as HSL values in CSS variables, enabling runtime theme switching without rebuilding. Variables cover:
- Base colors (background, foreground, border)
- Component colors (card, popover, primary, secondary, muted, accent)
- State colors (destructive)
- Theme-specific variants for light/dark modes

**Component Patterns**:
- "New York" variant of shadcn/ui (more refined, subtle borders)
- Consistent use of `cn()` utility for class merging
- Elevation system using subtle shadows and borders
- Hover and active states with elevation changes

## External Dependencies

### Core Framework Dependencies

- **React & React DOM** (18+): Frontend framework
- **Vite**: Build tool and dev server
- **TypeScript**: Type safety across the stack
- **Express**: Backend server framework
- **Wouter**: Lightweight routing library

### UI Component Libraries

- **Radix UI**: Comprehensive suite of unstyled, accessible component primitives
  - Dialog, Dropdown, Select, Accordion, Tabs, Toast, Tooltip, and many more
  - All components used via `@radix-ui/react-*` packages
- **shadcn/ui**: Component patterns and styling conventions built on Radix
- **class-variance-authority**: Type-safe variant styling
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel functionality

### Styling & Utilities

- **Tailwind CSS**: Utility-first CSS framework
- **tailwindcss-animate**: Animation utilities
- **clsx & tailwind-merge**: Class name utilities
- **lucide-react**: Icon library

### Form Handling

- **React Hook Form**: Form state management
- **@hookform/resolvers**: Form validation resolvers
- **Zod**: Schema validation

### State Management & Data Fetching

- **TanStack Query** (@tanstack/react-query): Server state management (configured but not actively used)

### Database & ORM

- **Drizzle ORM**: TypeScript ORM configured for PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **drizzle-zod**: Zod schema generation from Drizzle schemas
- **connect-pg-simple**: PostgreSQL session store for Express

**Note**: Database infrastructure is configured but not currently used. The application operates entirely client-side with no data persistence.

### Development Tools

- **@replit/vite-plugin-runtime-error-modal**: Runtime error display in development
- **@replit/vite-plugin-cartographer**: Code navigation
- **@replit/vite-plugin-dev-banner**: Development environment indicator
- **esbuild**: JavaScript bundler for server code
- **tsx**: TypeScript execution for development

### Google Fonts (CDN)

- Inter / DM Sans: Primary UI font
- JetBrains Mono / Fira Code: Monospace for code/JSON display
- Geist Mono, Architects Daughter: Additional font options

### Future Considerations

The backend infrastructure (Express, Drizzle, PostgreSQL session storage) suggests potential future features such as:
- User accounts and authentication
- Saving conversion history
- Sharing converted outputs
- API endpoints for programmatic conversion

Currently, all conversion happens client-side with no server communication beyond serving static assets.