# Edit the logo, photographs, and social media in minutes

## 1. Replace the logo (no code changes)

The logo currently displayed in the header/footer is a provisional, original BTG concept. It is not the real program logo.

- Save your approved official PNG as **`logo.png`**.
- Replace **`public/branding/logo.png`** with your new PNG.
- Recommended source: square PNG, transparent background, about **800 × 800 px**, or a similar high-resolution file.
- Keep the exact filename and location. Header and footer update automatically.

For the small icon in the browser tab, separately replace `public/branding/favicon.png`. For social media previews, replace `public/branding/og-card.png` (recommended 1200 × 630 px).

## 2. Replace a photograph

The site has SIX named image keys in one place: `src/config/media.ts`:

- `hero` — main homepage photograph
- `building` — building-blocks photo near homepage center
- `discovery` — STEM discovery photo
- `teamwork` — educator and learner photo
- `preschool` — preschool age-group photo
- `schoolAge` — school-age photo

To replace one with a facility image:

1. Add an approved image, e.g. `hero.jpg`, to `public/photos/`.
2. Open `src/config/media.ts`.
3. Change the `hero` value to `'/photos/hero.jpg'`. Do the same for other keys as needed.
4. Save, rebuild and redeploy. **Every occurrence updates automatically**.

Do not rename the keys. The file contains example Pexels URLs by default. They are illustrative and cannot be represented as genuine photos of the program. Get permission before using real children's or staff's photos.

If an external stock photograph is unavailable, the site uses an included abstract STEM artwork (`public/branding/stem-illustration.svg`) rather than leaving a blank area.

## 3. Add or replace social profiles

Edit `src/config/site.ts`. The sheet-supplied Facebook page is populated. Fields for Instagram, YouTube, TikTok, and Pinterest are ready to receive genuine, verified links.

For example:

```ts
facebook: 'https://www.facebook.com/p/Bridge-The-Gap-STEM-Program-61593747099232/',
instagram: 'https://www.instagram.com/your-verified-profile/',
```

Leave an unavailable profile as `''`. Empty social profiles are omitted, avoiding broken or invented links. This system updates all rendered social link locations.

## 4. Update details or SEO

- Edit `src/config/site.ts` for phone, email, address, director, and hours.
- Edit `src/config/seo.ts` for each page's metadata.
- Run `npm run generate` after changes, or just run `npm run dev` / `npm run build` (both generate automatically).

When using Vercel with GitHub, push committed changes to the repository and verify that Vercel builds the **new commit hash** rather than redeploying the old one.
