# QA Report — Bridge The Gap STEM Program

Prepared 2026-11-15.

## Source checks: passed

- All eight TS/TSX source/config/generator files passed TypeScript syntax transpilation checks.
- The entire CSS file passed PostCSS syntax parsing.
- All six checked-in HTML route snapshots have exactly one H1 and review-mode noindex metadata.
- All checked-in internal route links resolve to one of the six routes, and no broken internal links were found.
- All six named stock photo sources are in the centralized image config.
- The generated assets `logo.png`, `favicon.png`, `og-card.png`, and the SVG image fallback exist and are valid files.

## Visual checks: passed in an isolated browser preview

A lightweight React-TSX-compatible static representation was rendered for layout QA in Chromium (without loading external photography or Google Fonts). The preview used the included SVG fallback for unavailable external images, and generic vector arrow icons in place of the Lucide runtime icons.

Six routes were checked at **1440, 1024, 768, 430, 390, and 320 px** viewport widths (36 route/viewport combinations). Results: no horizontal page overflow, one main heading per route, and visible internal navigation. A CSS-driven mobile navigation state was checked at 390 px. Native FAQ `<details>` expansion was checked.

Screenshots were generated outside the deliverable ZIP for inspection. This static-render test does **not** replace a production React hydration or Vite build test.

## Production-build limitation

The authoring container could not resolve registry.npmjs.org and `npm install` could not complete. Thus **the full `npm run build`, full TypeScript typecheck, and client hydration have NOT been verified**. The build has an intentionally uncomplicated React 18 + Vite 6 + `tsx` prerender script setup with no custom plugin compiler. Run `npm install`, `npm run build`, and optionally `npm run typecheck` in VS Code or Vercel.

## Publication and rights

The authentic program logo and facility-specific photographs were not available for verification. Placeholder logo and illustrative Pexels photo URLs are editable and must not be presented as official assets. State rating 3 is from the current Oklahoma Human Services locator; earlier records differ. Program account on Facebook was supplied in the source sheet but direct Facebook-page inspection was blocked.

Site indexing defaults to OFF until authorization and a real production domain are configured. See README.
