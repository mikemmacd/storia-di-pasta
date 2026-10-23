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

- `index.html`: concise restaurant copy, four zones, enamel-sign navigation and neighbourhood link.
- `src/style.css`: responsive styles and locally hosted brand font.
- `src/main.js`: stylesheet import and copyright year.
- `public/images/`: optimized owner-supplied photographs, logo and crops of the four enamel signs.
- `assets/`: untouched originals, kept locally. The designer PDF is not used in the website and exceeds GitHub's ordinary file-size limit.

Opening details and an exact map pin await owner confirmation. The map link searches the supplied street. No tracking, cookies, database or customer data collection is needed for this presentation site.

## Hosting

Domain: https://storiadipasta.com
Repository: https://github.com/mikemmacd/storia-di-pasta
Target Vercel workspace: `michael-macdonalds-projects-91c3e4ca` (the owner's selected Chrome account).

Build settings: Vite, `npm run build`, output `dist`. Production branch: `main`. Deployment should be triggered by GitHub pushes and built in Vercel's cloud, rather than by uploading local source with the CLI.

Cloudflare manages DNS. The root domain uses a DNS-only CNAME pointing to the destination shown in Vercel's domain settings. Keep nameservers and unrelated records unchanged. HTTPS was verified on the original deployment; verify again after transferring the domain.

## Validation

Production build and desktop/mobile browser review. Zone signs are anchor links to the corresponding photographed spaces. No menu pricing or unverified 'Bangkok’s first' claim is published.
