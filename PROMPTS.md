# AI-Assisted Development — Prompt Log

This project was built with Claude (Anthropic) in an AI-native workflow, as
encouraged by the assignment brief. Below is the actual sequence of prompts
used, condensed for clarity, along with the reasoning behind each step.

## 1. Initial request

> "I want to make this in zip file and make frontend using react js and no
> need of backend use this as reference [reference URL] ... make exactly
> same as this task is for hiring round for company" (with the assignment
> brief attached as a `.docx`)

**Action taken:** Read the assignment brief to confirm scope (desktop-only,
three views: Listing / Photo Tour / Lightbox, React frontend, no backend
required, architecture diagram required, plagiarism/no-direct-lift-and-shift
warning noted). Attempted to fetch the reference URL directly — blocked by
the site's `robots.txt` (no scraping/automated access), and no general web
browsing tool was available in this environment.

## 2. Getting real reference material honestly

Rather than guessing at the reference's exact layout from memory, I told the
user I couldn't scrape the live site and asked them to share screenshots of
the three views (listing page, photo tour, lightbox) instead.

> User uploaded 7 screenshots covering: hero gallery + header, photo tour
> grid + room detail, lightbox single-photo view, listing summary + guest
> favourite badge + booking card, sticky nav + "where you'll sleep", amenities
> + calendar, and the reviews section.

**Action taken:** Used these screenshots as the actual source of truth for
layout, spacing, copy, and component structure — building an **original**
implementation (own component structure, own icon set, own mock data)
rather than copying markup/CSS from any codebase, in line with the
assignment's plagiarism/no-lift-and-shift instruction.

## 3. Build plan (internal, executed autonomously)

1. Scaffold Vite + React + Tailwind + React Router + Framer Motion.
2. Define design tokens (Airbnb-style color palette, type scale, shadows,
   motion easing/keyframes) in `tailwind.config.js`.
3. Build a hand-drawn line-icon set (`Icons.jsx`) instead of importing any
   icon library that ships Airbnb's actual glyphs, to keep the icon shapes
   original while matching the visual language.
4. Build the listing page section by section: hero gallery → title/summary →
   guest-favourite badge → host row → highlights → description (with
   show-more and "auto-translated" banner) → sleeping arrangements →
   amenities (+ "show all" modal) → availability calendar → reviews
   (rating bars, category scores, filterable tag chips, review cards) →
   location → sticky nav + sticky booking card.
5. Build the Photo Tour overlay (thumbnail grid grouped by room + scrollable
   room sections) and the Lightbox overlay (single photo, prev/next arrows,
   keyboard ←/→ navigation, Esc to close, animated transitions, "N of Total"
   counter), routed with React Router so both overlay the persistent listing
   page state (wishlist/toast) rather than remounting it.
6. Add motion: hover scale/brighten on gallery tiles, sticky-nav slide/shadow
   on scroll, modal fade/scale-in, lightbox slide+fade between photos,
   toast slide-up for demo actions (Reserve/Save — no backend, so these show
   a toast rather than silently doing nothing or faking a real booking).

## 4. Verification

> Internal step — not a user prompt, but part of the workflow.

Built the app (`npm run build`), served it, and used a headless browser
(Playwright) to screenshot the listing page at several scroll depths, the
photo tour, and the lightbox — then visually compared each against the
user-provided reference screenshots to check layout/spacing/behavior parity.
This caught one real bug: the Photo Tour route was rendering inline instead
of as a full-screen overlay above the listing page; fixed by making it a
fixed-position layer consistent with the Lightbox.

## 5. Follow-up

> "Continue"

**Action taken:** Re-verified the fix, then packaged the deliverables the
assignment asks for: the zipped codebase, `ARCHITECTURE.md` +
`architecture-diagram.png` (production scaling strategy for frontend,
backend, storage, search, deployment), this prompt log, and example
sub-agent/skill configs describing the review workflow used during
development (see `.claude/agents/`).

## Notes on originality

- No code, markup, CSS, or assets were copied from the reference site or
  any other Airbnb clone. Structure and styling were derived from the
  user's own screenshots and general knowledge of common listing-page UX
  patterns.
- All photos in the demo use royalty-free stock images (Unsplash), not
  images pulled from the reference site.
- The icon set, mock data, and copy are original or adapted/paraphrased
  from the screenshots, not extracted from any source codebase.
