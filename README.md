# GutSource

B2B site for **private label digestive enzymes & probiotics** — OEM + wholesale dual funnel.

- **Brand:** GutSource
- **Stack:** Astro static (`npm run build` → `dist/`)
- **Inquiry CRM:** shared Supabase `contact_inquiries` (`source_site` = `gut.tradeglo.net`)
- **Canonical site:** https://gut.tradeglo.net
- **Repo:** https://github.com/zuoben/gut-oem-wholesale
- **Deploy target:** Cloudflare Pages project `gut-oem-wholesale` → custom domain `gut.tradeglo.net`

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

After first deploy with token:
```bash
npx wrangler pages domain add gut.tradeglo.net --project-name=gut-oem-wholesale
```
Point DNS `gut.tradeglo.net` CNAME to `gut-oem-wholesale.pages.dev` (Cloudflare proxy OK). Site config already uses https://gut.tradeglo.net.

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
