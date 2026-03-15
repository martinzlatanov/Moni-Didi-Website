# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

"Sing, Smile & Fun" — a bright, kid-friendly music and fun festival landing page for children aged 5–11.

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
- `--color-festival-orange: #FF914D`
- `--color-festival-purple: #9D50BB`
- `--color-festival-dark: #1A0B2E`
- `--color-festival-green: #7ED957`
- `--color-festival-light: #FDFBFF`
- `--color-festival-soft-purple: #F3E8FF`

These map to Tailwind utilities like `bg-festival-purple`, `text-festival-orange`, etc.

Fonts (Google Fonts, loaded in `index.css`):
- `font-display` → Creepster (`.spooky-text`)
- `font-sans` → Fredoka (`.kids-text`)
- `font-accent` → Space Grotesk (`.accent-text`)
