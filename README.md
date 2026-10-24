# Storia di Pasta

A small, atmosphere-led restaurant website for Sukhumvit Soi 33/1, Bangkok. Four zones: Il Cortile, La Sala, La Cantina and Il Patio (the front step and wine window).

## Development

Requires Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
npm run build
```

## Content and assets

- `index.html`: concise restaurant copy, four zones, enamel-sign navigation, direct header contact actions and a compact location footer.
- `src/style.css`: responsive styles and locally hosted brand font.
- `src/main.js`: stylesheet import, copyright year and the accessible wine-window animation.
- `public/images/`: optimized owner-supplied photographs, logo and crops of the four enamel signs.
- `assets/`: untouched originals, kept locally. The designer PDF is not used in the website and exceeds GitHub's ordinary file-size limit.

Opening details and an exact map pin await owner confirmation. The map link searches the supplied street. No tracking, cookies, database or customer data collection is needed for this presentation site.

## Hosting

Domain: https://storiadipasta.com
Repository: https://github.com/mikemmacd/storia-di-pasta
Target Vercel workspace: `michael-macdonalds-projects-91c3e4ca` (the owner's selected Chrome account).

Build settings: Vite, `npm run build`, output `dist`. Production branch: `main`. The repository is connected to this workspace. Pushes to `main` trigger production builds in Vercel’s cloud.

Cloud production URL: https://storia-di-pasta-delta.vercel.app

Cloudflare manages DNS. The root domain uses a DNS-only CNAME pointing to the destination shown in Vercel's domain settings. Keep nameservers and unrelated records unchanged. HTTPS was verified on the original deployment; verify again after transferring the domain.

## Validation

Production build and desktop/mobile browser review. Zone signs are anchor links to the corresponding photographed spaces. No menu pricing or unverified 'Bangkok’s first' claim is published.

## Design and usability review — 24 October 2026

- Header: direct Maps, email and Facebook links with accessible names, tooltips and square 36 × 36px mobile touch targets. No contact detour or redundant navigation. The wine window remains a prominent animated signature beside the larger original wordmark; contact icons are larger and tightly grouped, with Maps first.
- Navigation: four signs remain the destinations for the four spaces. No empty menu, booking or delivery links are published.
- Content: one H1, clear section headings, owner-selected photographs, readable 16px body copy on mobile and restrained italic accents.
- Footer: plain restaurant name, location and copyright. No second panel of contact buttons.
- Accessibility: visible keyboard focus, working skip link, hidden decorative SVGs, labelled icon links and reduced-motion support. Animation runs once after two seconds, can be replayed and resets when the page is hidden. This is a targeted review, not a formal accessibility certification.
- Performance: responsive smaller JPEG photographs, smaller JPEG sign images, reserved photograph dimensions, lazy-loaded section images, prioritised hero and locally hosted font. Original photos and sign PNGs are retained.
- Metadata: canonical URL, page description, social preview image, site URL/name, favicon and large-image sharing card.
- Remaining business details: replace the street-search Maps destination with a verified venue pin; add confirmed opening hours and a current food/drinks menu or delivery link when available. Do not invent these details.

## Wine-window story

The section after Il Patio introduces the Florentine buchetta del vino tradition and links to the official Visit Tuscany history. Its current close-up is an evening-light reconstruction based on the owner’s detailed Photo 1.jpg, preserving the real hatch, etched VINO and wooden counter. The current close-up removes the address plaque and uses tighter framing. Its prompt is in `docs/wine-window-real-v3.md`; historical source references and the earlier image prompt are in `docs/wine-window-image.md`.

The wine-window feature pairs an arched portrait with the Italian name, a concise Renaissance history and three illustrated service steps: Ring the bell, Say ciao, Cin cin. A native details disclosure provides the additional 1630s history and authoritative source links. The mobile reading order is title, image, history, ritual; the existing header animation remains independent.

Il Patio now uses the owner’s oblique exterior angle with generated evening lighting and guests, including Thai adults, and exactly three stools based on the owner’s bentwood cane-seat reference. The address plaque is removed. Only the Il Patio image changed; prompt and provenance are in `docs/il-patio-evening-v2.md` and `docs/il-patio-evening-v3.md`.

The final Il Patio scene also includes two narrow freestanding timber side counters based on the owner’s furniture drawing, fitted within the existing stone platform. See `docs/il-patio-evening-v4.md`.

Version 5 explored planned trailing vines, purple flowers and guests at both portable counters, with the designer mockup informing planting and layout only. See `docs/il-patio-evening-v5.md`. The current image is version 6, returning to the owner’s preferred four-guest image while fixing the right counter’s full wall-to-edge length and the left guest’s body/furniture intersection; see `docs/il-patio-evening-v6.md`.

The main hero and social-preview image now use `hero-exterior-v2.jpg`, matching the close-up wine hatch design, removing the address plaque and representing more Thai guests. The previous exterior asset is retained. See `docs/hero-exterior-v2.md`.

Final owner selection: Il Patio uses `patio-evening-v3.jpg`, the exact scene selected from `exec-f84595a4-1cfe-4b68-aadb-08e19449625b.png`, with three cane-seat stools and no portable side counters or upper vines. Other versions are retained as alternatives.
