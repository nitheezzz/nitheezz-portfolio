# Nitheeshvar R — Portfolio plan

## Product and implementation

Build a responsive, single-page professional portfolio for Nitheeshvar R, a first-year B.Tech IT student focused on web development and IoT. It should support showcasing student projects and help with future job opportunities. Use the existing React 19 + TypeScript + Vite frontend, Wouter route setup, Tailwind v4 stylesheet, and already-installed Framer Motion; no new application framework or backend is needed. The site is static and does not require login, database, or server services.

The page contains Home, About, Projects, Skills, and Contact sections, with working in-page navigation, email contact, and GitHub profile link. Projects include the Student Fee Management System, Daynote, websites, Arduino Uno work, and a line-following robot. Only names/categories and focus areas are known. Avoid inventing feature details, outcomes, project links, tool lists, achievements, images, or credentials; present concise honest descriptions that can be expanded when the user supplies details. Resume, portrait, and additional assets can be added when supplied.

Use React components and data-driven project/skill sections in `client/src/pages/Home.tsx`, site-wide visual and motion rules in `client/src/index.css`, page metadata in `client/index.html`, and the existing app route in `client/src/App.tsx`. Keep `client/public/manus-routes.json` synchronized with the single actual `/` route. Keep dependencies unchanged. Support keyboard use, mobile layouts, reduced-motion preferences, and a readable fallback without 3D.

## Updated design

The user asked for a more animated and cinematic theme after the first portfolio pass. Retain the nostalgic, minimal, tasteful-3D identity, but increase the contrast, atmosphere, and scale of motion.

- **Design Movement:** Nostalgic early-web terminal aesthetics graded like a quiet sci-fi film title sequence.
- **Core Principles:** Personal and candid; cinematic atmosphere without visual clutter; tactile technical motifs; motion expressive but never obstructive.
- **Color Philosophy:** Shift the main stage to deep ink/charcoal with soft CRT-green light and muted warm amber; retain a paper-toned counterpoint in selected content panels. Treat light as an accent, not a neon wall.
- **Layout Paradigm:** Full-viewport editorial opening, dramatic edge-aligned typography, asymmetrical anchored sections, and clear page pacing instead of a generic centered grid.
- **Signature Elements:** A custom NR terminal-mark; fine scanline/grain and cinematic light sweep; interactive CSS 3D orbital/hardware motif.
- **Interaction Philosophy:** The page unfolds like a personal opening sequence into a tangible project notebook. Scroll and hover reveal details but never gate access to content.
- **Animation:** Layered intro sequence with staggered type and depth; slow cinematic camera-like parallax and orbital drift; scroll-progress accents; section reveals with stagger; focus/hover micro-interactions; restrained grain/light motion. No scroll hijacking, autoplay audio, or motion-dependent content. Honor `prefers-reduced-motion` by disabling parallax, long transitions, continuous animation, and animated reveals. Keep GPU-heavy effects bounded and keep small screens responsive.
- **Typography System:** A confident editorial serif for title lines, crisp system sans for body/UI, and monospaced labels for technical detail; no external font dependency.
- **Brand Essence:** A curious IT student making practical things across web and hardware; personality: curious, thoughtful, hands-on.
- **Brand Voice:** Conversational and honest about being early in the journey. Example lines: “I’m learning by making things that work.” “From a web app to a robot that follows a line.”
- **Wordmark & Logo:** A compact custom NR monogram built from a terminal cursor/bracket motif, alongside the name in an editorial lockup.
- **Signature Brand Color:** CRT leaf green, used sparingly against cinematic charcoal.

## Project structure

- `client/src/App.tsx`: existing single-page route and application wrapper.
- `client/src/pages/Home.tsx`: portfolio sections, navigation, project data, contact actions, motion, and accessible interactions.
- `client/src/index.css`: palette, typography, responsive structure, custom motion, and reduced-motion rules.
- `client/index.html`: browser title and public metadata plus meaningful initial page content.
- `client/public/manus-routes.json`: page route declaration for `/`.
- `client/public/favicon.svg`: original monogram.
- `app.config.ts`: durable HTTPS platform logo metadata.

## Serving and delivery

Run and preview using the existing static Vite command (`pnpm dev:static`) on port 3000. Publish as static output using the template's initialized `pnpm build:static` configuration. No server, database, external API, or new credentials are required. Publish the revised portfolio after the user approves the new version's publication request; do not assume approval of the earlier, less-cinematic release carries over.
