# Config Data Guidelines

## Structure

Each `*Data.json.ts` file exports:
1. A TypeScript interface defining the shape
2. A typed array/object with the actual data
3. A default export

## Conventions

- **File naming**: `{thing}Data.json.ts` (e.g., `factData.json.ts`, `navData.json.ts`)
- **Interface naming**: `{Thing}Props` or descriptive name (e.g., `funFact`, `SiteDataProps`)
- **Keep data and types together** in the same file for easy maintenance

## Content Tone

This is Monica's personal site - data should reflect her playful, personable voice:
- Facts should be conversational, not formal
- OK to use contractions, casual phrasing
- Personal anecdotes welcome

## Key Files

| File | Purpose |
|------|---------|
| `siteData.json.ts` | Global site config (title, contact, author info) |
| `factData.json.ts` | Fast facts for about page |
| `navData.json.ts` | Navigation menu structure |
| `speakingData.json.ts` | Speaking engagement history |
| `talkData.json.ts` | Talk/presentation details |
| `testimonialData.json.ts` | Testimonials/quotes |
| `faqData.json.ts` | FAQ content |
| `teamData.json.ts` | Team member profiles (if used) |
