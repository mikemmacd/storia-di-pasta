# Storia di Pasta

Restaurant website for Sukhumvit Soi 33/1, Bangkok. Built with Vite, semantic HTML, CSS and vanilla JavaScript; deployed to Vercel. No database, cookies, tracking or visitor data collection is required for the current brochure site.

## Development

Requires Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

## Content

- `index.html`: restaurant copy, navigation, sections and metadata.
- `src/main.js`: day/night content and accessible keyboard interactions.
- `src/style.css`: responsive styles and locally hosted brand font.
- `public/images/`: optimized copies of the owner-supplied, named images. Original assets and the designer PDF remain in `assets/`; the PDF imagery is not used on the site.
- `vercel.json`: production build configuration and response headers.

Opening status, hours, menu prices, contact details and ordering links await owner confirmation. Future dishes and drinks are described as planned. The map link searches the supplied street, not an unverified exact restaurant pin. No reservation or order form is presented until a real service is connected.

## Deployment

Production: https://storia-di-pasta.vercel.app
Vercel project: `storia-di-pasta`, scope `mmacdonald-6165s-projects`.

```sh
npm run build
vercel deploy --yes --prod
```

`storiadipasta.com` has been added to the Vercel project. DNS is managed at Cloudflare. Run `vercel domains verify storiadipasta.com` to obtain the current required DNS configuration. Cloudflare CLI authentication needs renewal before DNS can be changed. Do not change nameservers or mail-related records.

Vercel's automatic GitHub integration could not connect because the Vercel account needs a GitHub Login Connection. Direct CLI deployments work. Connect the repository in Vercel settings to enable automatic builds after pushes.

## Research

The wine-window story is based on Visit Tuscany and the Wine Windows Association:
- https://www.visittuscany.com/en/ideas/wine-shops-old-and-new-in-florence/
- https://buchettedelvino.org/home%2520eng/who-%2526-what.html

Research did not establish that this is Bangkok's first wine window, so that claim is omitted.

## Checks performed

Production build; desktop and 390px mobile browser review; day/night click and arrow-key interaction. Deployment status verified through Vercel CLI. No backend or checkout has been added without a defined operational requirement.

### Current DNS requirement

Vercel verification on 2026-10-23 requested a DNS-only CNAME at `@` pointing to `c65183f767cf9246.vercel-dns-017.com`. Cloudflare proxy should be off. Re-verify with Vercel before applying if configuration has changed. The custom domain is attached but is not live until DNS is configured.

### Repository status

The implementation is committed locally. GitHub push failed because this machine has no usable HTTPS GitHub credentials. Original `assets/` files remain untouched and untracked; optimized public assets are included in the implementation commit.
