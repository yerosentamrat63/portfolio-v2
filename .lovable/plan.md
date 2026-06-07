
# Yerosen Tamrat Portfolio — Replica Plan

A visually faithful, single-page replica of https://yerosen-portfolio.vercel.app/ on the modern Lovable stack (TanStack Start + React 19 + Tailwind v4), with a small backend on Lovable Cloud to power a real contact form (the original just opens Gmail).

## Stack

- TanStack Start v1 (SSR-ready, file-based routing) — already scaffolded
- React 19 + TypeScript
- Tailwind v4 (tokens in `src/styles.css`, `oklch` colors)
- shadcn/ui primitives where useful (Button, Toast)
- Motion for React for subtle scroll/hover animation
- Google Fonts: **JetBrains Mono** (UI/mono) + **Inter** (body) + **Instrument Serif** (display italics like "clean code" / "sharp logic")
- Lucide icons
- Lovable Cloud: Postgres table `contact_messages` + a TanStack server function for submissions (no Supabase mention to user)

## Design system

Dark "terminal" aesthetic matching the source:
- Background `oklch(0.14 0.02 250)` near-black with subtle blue tint
- Foreground near-white, muted slate
- Accent: soft mint/teal `oklch(0.86 0.09 175)` (used on H1, CTA borders, code-window syntax)
- Code-window greens/yellows/reds (mac traffic lights), purple/green syntax highlights
- Faint grid background overlay on hero
- Mono everywhere except display headlines

## Sections (single page, smooth-scroll anchors)

1. **Sticky Nav** — "Yerosen Tamrat" left; ABOUT / SKILLS / PROJECTS / EDUCATION / CONTACT right
2. **Hero** — pill badge "A2SV Member · Open to Opportunities", kicker "Frontend Developer & CS Student", giant headline "Solving Problems. Shipping Code.", subcopy, two CTAs (VIEW MY WORK ↓, GET IN TOUCH), animated terminal/code window on the right rendering `yerosen.ts` with syntax-highlighted const, plus a 3-stat strip (GPA / LeetCode / Community), and a horizontally-scrolling skills marquee
3. **About** — "WHO I AM" eyebrow, headline with serif italics for *clean code* & *sharp logic*, 4 stat cards, two-column story (MY STORY)
4. **Skills & Tools** — filter chips (ALL / LANGUAGES / WEB / TOOLS) with animated grid of skill cards
5. **Selected Projects** — numbered cards `/01`–`/05` with role, description, tech tag chips, status badge (COMPLETED / ONGOING), and external links where applicable
6. **Education** — two-card layout (American College of Technology + A2SV) with arrow bullet lines and a GPA badge
7. **Certificates** — numbered list of 4 certs with provider and status
8. **Contact** — headline "Let's engineer something great." with email / phone / location, plus a real contact form (name, email, message) wired to a server function that writes to Lovable Cloud
9. **Footer** — minimal copyright + socials

## Backend

Enable Lovable Cloud and add:

- Table `public.contact_messages` (id, name, email, message, created_at) with RLS:
  - `INSERT` allowed for `anon` + `authenticated` (public form)
  - `SELECT` only for `service_role`
- Required grants on the table
- Server function `submitContactMessage` in `src/lib/contact.functions.ts` using `inputValidator` (Zod: name 1–120, email valid, message 1–2000) → inserts via the admin client (since anon insert is OK, but admin keeps RLS surface minimal). On success returns `{ ok: true }`; client shows a Sonner toast.

No auth, no admin UI in v1 (messages reviewable in the Lovable Cloud table view).

## Routes

- `src/routes/__root.tsx` — head metadata, fonts via `<link>`, Sonner mount
- `src/routes/index.tsx` — the whole portfolio (single page, hash anchors are appropriate here per source)

## Assets

- No personal photos exist on the source site (it's text + code window), so no AI image generation needed.
- Favicon: generate a small "YT" monogram mark.

## Out of scope / explicit choices

- Not cloning the exact React/Vite repo file-for-file — porting to TanStack Start with cleaner componentization.
- Not adding blog, CMS, or auth.
- Resume link points to the same Google Drive URL as the original.

## Technical notes

- Fonts loaded via `<link>` in `__root.tsx` head; families registered in `@theme` (`--font-mono`, `--font-sans`, `--font-display`).
- Code window built as a styled React component (not an actual editor) with token-colored spans.
- Marquee implemented with CSS `@keyframes` translateX, duplicated content for seamless loop, respects `prefers-reduced-motion`.
- All colors via semantic tokens in `src/styles.css` — no raw hex/`text-white` in components.
- Server fn called via `useServerFn` from the contact form's submit handler (no protected middleware needed — public form).

Approve to build.
