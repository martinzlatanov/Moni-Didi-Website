# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

"Magic Night Festival" — a bright, kid-friendly Halloween event landing page for children aged 5–11.

## Tech Stack

- **React 19** + **TypeScript** (strict mode)
- **Tailwind CSS v4** via `@tailwindcss/vite` (no `tailwind.config.js` — config lives in `src/index.css` `@theme` block)
- **motion** (`motion/react`) for all animations — import from `motion/react`, NOT `framer-motion`
- **Lucide React** for icons
- **Vite 6** build tool

## Commands

```bash
npm run dev      # start dev server
npm run build    # type-check + production build
npm run preview  # preview production build
```

## Architecture

Single-page app in `src/App.tsx` — all components are co-located in that one file (Navbar, Hero, ExperienceSection, ScheduleSection, TicketsSection, ContactSection, Footer).

### Design tokens

Custom CSS variables and Tailwind theme extensions are defined in `src/index.css` under `@theme`:
- `--color-halloween-orange: #FF914D`
- `--color-halloween-purple: #9D50BB`
- `--color-halloween-dark: #1A0B2E`
- `--color-halloween-green: #7ED957`
- `--color-halloween-light: #FDFBFF`
- `--color-halloween-soft-purple: #F3E8FF`

These map to Tailwind utilities like `bg-halloween-purple`, `text-halloween-orange`, etc.

Fonts (Google Fonts, loaded in `index.css`):
- `font-display` → Creepster (`.spooky-text`)
- `font-sans` → Fredoka (`.kids-text`)
- `font-accent` → Space Grotesk (`.accent-text`)
