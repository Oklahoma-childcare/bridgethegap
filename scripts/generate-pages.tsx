import React from 'react';
import { renderToString } from 'react-dom/server';
import { mkdir, writeFile, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { App } from '../src/App';
import { pageMeta, routes, type Route } from '../src/config/seo';
import { site } from '../src/config/site';

const root = resolve(process.cwd());
const rawUrl = (process.env.PUBLIC_SITE_URL ?? '').trim().replace(/\/+$/, '');
const approved = process.env.PUBLIC_SITE_APPROVED === 'true';
const validUrl = /^https:\/\/[a-z0-9.-]+(?::\d+)?$/i.test(rawUrl);
const indexable = approved && validUrl;
const siteUrl = indexable ? rawUrl : '';
const safe = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const safeJson = (object: unknown) => JSON.stringify(object).replace(/</g, '\\u003c');
const pathFor = (route: Route) => route === '/' ? '/' : `${route}/`;

function pageDocument(route: Route) {
  const { title, description } = pageMeta[route];
  const canonical = siteUrl ? `${siteUrl}${pathFor(route)}` : '';
  const markup = renderToString(<App route={route} />);
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'ChildCare',
    name: site.name,
    description: pageMeta['/'].description,
    url: siteUrl,
    telephone: site.phone,
    email: site.email,
    image: `${siteUrl}/branding/og-card.png`,
    address: {
      '@type': 'PostalAddress', streetAddress: site.addressLine,
      addressLocality: site.city, addressRegion: site.state,
      postalCode: site.postalCode, addressCountry: 'US',
    },
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification', dayOfWeek: 'https://schema.org/Saturday',
      opens: '09:00', closes: '14:00',
    }],
    sameAs: [site.facebook, site.instagram, site.youtube, site.tiktok, site.pinterest].filter(Boolean),
  };
  return `<!doctype html>
<html lang="en"><head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#17232c" />
  <meta name="robots" content="${indexable ? 'index,follow,max-image-preview:large' : 'noindex,nofollow'}" />
  <title>${safe(title)}</title>
  <meta name="description" content="${safe(description)}" />
  ${canonical ? `<link rel="canonical" href="${safe(canonical)}" />` : ''}
  <link rel="icon" type="image/png" href="/branding/favicon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${safe(title)}" />
  <meta property="og:description" content="${safe(description)}" />
  ${canonical ? `<meta property="og:url" content="${safe(canonical)}" /><meta property="og:image" content="${safe(siteUrl)}/branding/og-card.png" />` : ''}
  <meta name="twitter:card" content="summary_large_image" />
  ${indexable ? `<script type="application/ld+json">${safeJson(ld)}</script>` : ''}
  <script type="module" src="/src/main.tsx"></script>
</head><body><div id="root">${markup}</div></body></html>`;
}

for (const route of routes) {
  const dir = resolve(root, route === '/' ? '.' : route.slice(1));
  await mkdir(dir, { recursive: true });
  await writeFile(resolve(dir, 'index.html'), pageDocument(route), 'utf8');
}
await mkdir(resolve(root, 'public'), { recursive: true });
await writeFile(resolve(root, 'public', 'robots.txt'), indexable
  ? `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`
  : 'User-agent: *\nDisallow: /\n', 'utf8');
if (indexable) {
  const entries = routes.map(route => `<url><loc>${safe(`${siteUrl}${pathFor(route)}`)}</loc></url>`).join('');
  await writeFile(resolve(root, 'public', 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`, 'utf8');
} else {
  await rm(resolve(root, 'public', 'sitemap.xml'), { force: true });
}
console.log(`Generated ${routes.length} prerendered HTML pages. SEO indexing: ${indexable ? 'enabled' : 'review/noindex'}.`);
