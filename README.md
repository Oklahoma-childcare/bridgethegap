# Bridge The Gap STEM Program — Hugo, Oklahoma

Original editorial / STEM-inspired six-page React + TypeScript + Vite website source.

## Run locally

1. Extract this project ZIP (the project folder is the root of the ZIP).
2. Open the folder in VS Code.
3. Run:

```bash
npm install
npm run dev
```

Vite prints the local address. The `predev` script generates the six prerendered HTML entry points before starting the dev server.

## Production and Vercel

```bash
npm run build
npm run preview
```

Vercel settings:
- Framework preset: **Vite**
- Build command: **npm run build**
- Output directory: **dist**
- Root directory: `/` (repository root)
- Node: **20 or later**

The `prebuild` script renders the six HTML routes and then Vite transforms the files into `dist`. The pages are normal link-navigated, prerendered multipage React pages rather than client-only SEO placeholders. No `static-preview` folder is included.

### SEO publishing

**Default mode is review/noindex**. To enable indexing for a domain you are authorized to publish as this provider, set BOTH Vercel environment variables:

```text
PUBLIC_SITE_APPROVED=true
PUBLIC_SITE_URL=https://www.your-authorized-domain.com
```

Then create a **new production deployment**. The generator adds canonical URLs, schema.org ChildCare structured data, an XML sitemap, and robots.txt in publication mode. Without both values, robots remain noindex/disallow. Use your actual domain rather than the placeholder above.

## Edit without touching layout

See `BRAND-PHOTOS-SOCIAL-EDITING.md`.

| What | File |
|---|---|
| Header/footer logo | `public/branding/logo.png` — overwrite with approved real logo |
| Favicon | `public/branding/favicon.png` |
| Social share image | `public/branding/og-card.png` |
| All photo sources | `src/config/media.ts` |
| Approved local photos | `public/photos/` |
| Phone, email, address, Facebook/social links | `src/config/site.ts` |
| Page SEO titles and descriptions | `src/config/seo.ts` |
| Design and responsiveness | `src/styles.css` |
| Main page content | `src/App.tsx` |

## Pages

- `/` — Type-led homepage with science-gallery imagery
- `/the-lab/` — What S, T, E, and M represent
- `/age-groups/` — Preschool and school-age categories
- `/saturdays/` — Saturday schedule and FAQs
- `/our-story/` — Program facts and public record
- `/contact/` — Phone, email, directions, Facebook

## Facts and limitations

Oklahoma Human Services currently lists license `K830058355`, capacity **30**, Saturday hours **9 AM–2 PM**, and director **Evangela Bills**. The current provider page shows **3 stars**, whereas the earlier source spreadsheet and older indexed listings showed **1 star**. Current state data was used; see `SOURCES-AND-REVIEW.md`.

The initial logo is a **temporary original concept**, not the program's verified official logo. All Pexels photos are illustrative stock, not facility photographs. No claim is made that particular STEM projects, meals, transport, fees, or available places are included; contact the program to confirm.

## Development QA

See `QA-REPORT.md` for verified and unverified checks. The source was syntax-parsed and static browser layout-checked. The npm registry was unavailable in the authoring environment, so the full Vite production build could not be completed here.
