# Nitheeshvar R — Portfolio plan

## Product and implementation

Build a responsive, single-page professional portfolio for Nitheeshvar R, a first-year B.Tech IT student focused on web development and IoT. It should support showcasing student projects and help with future job opportunities. Use the existing React 19 + TypeScript + Vite frontend, Wouter route setup, Tailwind v4 stylesheet, and already-installed Framer Motion; no new application framework or backend is needed. The site is static and does not require login, database, or server services.

The page will contain Home, About, Projects, Skills, and Contact sections, with working in-page navigation, email contact, and GitHub profile link. Projects include the Student Fee Management System, Daynote, websites, Arduino Uno work, and a line-following robot. Only names/categories and the focus areas are known. Avoid inventing descriptions, outcomes, project links, tool lists, achievements, images, or credentials; present concise honest descriptions and invite later replacement with the user's factual details. Resume, portrait, and additional assets can be added when supplied.

Use React components and data-driven project/skill sections in `client/src/pages/Home.tsx` (or small focused components under `client/src/components/` if useful), site-wide visual and motion rules in `client/src/index.css`, page metadata in `client/index.html`, and the existing app route in `client/src/App.tsx`. Add `public/manus-routes.json` with the one actual route `/`. Keep dependencies unchanged. Support keyboard use, mobile layouts, reduced-motion preference, and graceful non-3D presentation.

## Design

Three visual directions considered: nostalgic terminal/editorial (0.07), quiet digital notebook (0.04), and analog lab journal (0.02). Choose nostalgic terminal/editorial, refined through the user's preference for minimalism and tasteful 3D.

- **Design Movement:** Nostalgic early-web / terminal-inspired editorial minimalism.
- **Core Principles:** Personal and candid; sparse but expressive; technical details feel tactile; motion never obstructs reading.
- **Color Philosophy:** Warm paper-like cream and deep ink evoke a well-kept project notebook; one vivid CRT green marks interaction and technical energy; muted slate/ochre supply restrained secondary accents.
- **Layout Paradigm:** A left-anchored editorial canvas with asymmetric project panels, generous whitespace, small metadata labels, and a compact persistent navigation rail/header instead of a centered generic dashboard grid.
- **Signature Elements:** A pixel-like monogram/terminal caret; a faux desktop/status readout; a small interactive CSS-rendered 3D hardware-inspired orb/device illustration without inventing a portrait or project screenshot.
- **Interaction Philosophy:** Navigation behaves like exploring an engineer's notebook; project entries reveal additional visual detail on hover/focus, while all content remains readable without interaction.
- **Animation:** Expressive but purposeful: staggered hero type reveal, gentle scroll-triggered section entrances, subtle parallax/float on the decorative 3D object, animated cursor/status signal, and quick hover transitions. Avoid scroll hijacking, autoplay audio, excessive motion, or dependency on hover. Respect `prefers-reduced-motion` by removing transforms, parallax, and long transitions.
- **Typography System:** A confident editorial serif for oversized headings paired with a crisp sans-serif for body/UI and a restrained monospaced face for labels/code-like accents; use reliable local/system stacks, avoiding external font dependencies.
- **Brand Essence:** A curious IT student making practical things across web and hardware; personality: curious, thoughtful, hands-on.
- **Brand Voice:** Conversational, clear, and honest about being early in the journey. Example lines: “I’m learning by making things that work.” “From a web app to a robot that follows a line.”
- **Wordmark & Logo:** A compact custom NR monogram built from a terminal cursor/bracket motif, accompanied by the name in a considered typographic lockup.
- **Signature Brand Color:** CRT leaf green, used sparingly for active states and accent marks.

## Project structure

- `client/src/App.tsx`: existing single-page route and application wrapper.
- `client/src/pages/Home.tsx`: portfolio sections, navigation, project data, contact actions, motion.
- `client/src/index.css`: palette, typography, responsive structure, custom motion, reduced-motion rules.
- `client/index.html`: browser title and public metadata plus meaningful initial page content where practical.
- `public/manus-routes.json`: page route declaration for `/`.
- `public/`: only small original brand/icon assets if needed; no generated likeness or unprovided project imagery.

## Serving and delivery

Run and preview using the existing static Vite command (`pnpm dev:static`) on port 3000. Publish as static output using the template's initialized `pnpm build:static` configuration. No server, database, external API, or new credentials are required. Publication was explicitly requested; publish the completed portfolio and provide only the confirmed published URL.
