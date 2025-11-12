# JSON to TOON Converter - Design Guidelines

## Design Approach
**System Selected**: Clean utility design inspired by modern developer tools (Linear, Vercel, Stripe) - emphasizing clarity, functionality, and trust. This is a tool-first application where the converter interface is the hero.

## Typography
- **Primary Font**: Inter or DM Sans via Google Fonts CDN
- **Monospace Font**: JetBrains Mono or Fira Code for code/JSON display
- **Hierarchy**:
  - H1: 3xl-4xl (homepage hero only)
  - H2: 2xl-3xl (section headers)
  - H3: xl-2xl (feature cards, subsections)
  - Body: base-lg
  - Code/Technical: sm-base monospace
  - Labels/Meta: sm

## Layout System
**Spacing**: Use Tailwind units of 3, 4, 6, 8, 12, 16, 20 consistently
- Component padding: p-4 to p-6
- Section spacing: py-12 to py-20
- Container max-width: max-w-6xl centered
- Converter tool: max-w-7xl for dual-pane layout

## Core Components

### Header (Sticky Navigation)
- Logo + site name on left
- Navigation links: Home, About TOON, Docs (if applicable)
- Dark mode toggle icon button on right
- Height: h-16, border-b with subtle shadow

### Hero/Converter Section (Primary Focus)
- **No large hero image** - This is a tool, not marketing
- Concise headline: "JSON to TOON Converter" with tagline "Reduce LLM token usage by 30-60%"
- Immediately show the dual-textarea converter interface below
- Token count badges above each textarea (e.g., "0 tokens" with subtle badge styling)
- Sample template dropdown above JSON input
- Action buttons between textareas: "Convert to TOON", "Swap", "Reset"
- Utility buttons below TOON output: "Copy", "Download as TXT"

### Converter Interface Layout
- **Desktop**: Side-by-side textareas in grid-cols-2 with gap-6
- **Mobile**: Stacked single column
- Each textarea: min-h-96, monospace font, border, rounded-lg
- Error messages: Display below JSON input in red (text-red-600) with icon

### Features Section
- 2-column grid (lg:grid-cols-2) with 4-6 feature cards
- Each card: Icon + title + 2-3 line description
- Icons: Use Heroicons (outline style) via CDN
- Features highlight: Token reduction, cost savings, privacy, speed, bidirectional conversion

### Benefits/Stats Section
- 3-column grid showcasing key metrics
- Large numbers (3xl-4xl) with labels
- Examples: "30-60% Token Reduction", "100% Client-Side", "Instant Conversion"

### How It Works Section
- Numbered steps (1-2-3) in single column or horizontal layout
- Each step: Number badge + title + description
- Keep it simple: "Paste JSON → Click Convert → Copy Result"

### FAQ Accordion
- Expandable Q&A items (max 5-6 questions)
- Question in bold, answer hidden until clicked
- Icons indicate expand/collapse state

### Footer
- 2-column layout (md:grid-cols-2)
- Left: Logo, tagline, copyright
- Right: Quick links, social icons (GitHub, Twitter)
- Newsletter signup optional but adds value
- Border-top with padding py-12

## Dark Mode Implementation
- Toggle button in header (moon/sun icon)
- Save preference to localStorage
- Implement with Tailwind dark: variant
- Ensure textareas have proper dark mode styling (dark background, light text)

## Interactive States
- Buttons: Clear hover states with subtle scale/shadow
- Textareas: Focus rings with accent color
- Copy button: Show "Copied!" feedback briefly
- Error states: Red border + red text message
- Success states: Green checkmark or subtle confirmation

## Accessibility
- All form inputs have labels (can be visually hidden)
- Buttons have descriptive aria-labels
- Error messages tied to inputs with aria-describedby
- Keyboard navigation fully supported
- Focus indicators clearly visible

## Responsive Breakpoints
- Mobile-first approach
- sm: 640px (single column maintained)
- md: 768px (some 2-column layouts start)
- lg: 1024px (dual converter panes, 2-3 column grids)
- xl: 1280px (max-width constraints applied)

## Images
**No large hero images needed** - This is a conversion tool where functionality takes precedence. Use icons throughout (Heroicons) to illustrate features. Consider adding small illustrative graphics/diagrams to explain JSON vs TOON structure differences in the "How It Works" section if desired.

## Key Design Principles
1. **Tool-first mentality**: Converter interface is above the fold, immediately accessible
2. **Trust indicators**: Show "100% Client-Side", "No Data Collection" prominently
3. **Developer-friendly**: Monospace fonts, clear code display, technical accuracy
4. **Minimal distraction**: No animations except subtle button hover states
5. **Performance focus**: Display token counts to reinforce value proposition