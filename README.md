# GutSource

B2B site for **private label digestive enzymes & probiotics** — OEM + wholesale dual funnel.

- **Brand:** GutSource
- **Stack:** Astro static (`npm run build` → `dist/`)
- **Inquiry CRM:** shared Supabase `contact_inquiries` (`source_site` = `gut-oem-wholesale.pages.dev`)
- **Repo:** https://github.com/zuoben/gut-oem-wholesale
- **Deploy target:** Cloudflare Pages project `gut-oem-wholesale`

## Local

```bash
# Node >= 22.12
npm install
npm run build
npm run preview
```

## Cloudflare Pages (needs auth)

```bash
export CLOUDFLARE_API_TOKEN=...   # Pages edit permission
# optional: export CLOUDFLARE_ACCOUNT_ID=...
npx wrangler pages project create gut-oem-wholesale
npx wrangler pages deploy dist --project-name=gut-oem-wholesale
```

After first deploy, set `src/config.yaml` `site.site` (and `astro.config.ts` `site` if present) to the live URL and rebuild if the hostname differs from `gut-oem-wholesale.pages.dev`.

## Pages shipped (v1)

- `/` — dual CTA (OEM | Wholesale)
- `/oem` — private label capabilities + inquiry
- `/wholesale` — wholesale account / price list + inquiry
- `/contact` — shared inquiry form
- `/about`, `/privacy`, `/terms`
- `/blog` + one sourcing stub post

## Env still needed for full form protection

- `PUBLIC_TURNSTILE_SITE_KEY` (Cloudflare Turnstile) — optional; form warns if missing
- Supabase URL/anon key are baked from `src/config/supabase.ts` (shared common-services-db)
