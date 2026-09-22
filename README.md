# GutSource

B2B site for **private label digestive enzymes & probiotics** — OEM + wholesale dual funnel.

- Stack: Astro static site
- Inquiry CRM: shared Supabase `contact_inquiries` (`source_site` = hostname from `site` config)
- Deploy target: Cloudflare Pages (`dist` output)

```bash
npm install
npm run build
npx wrangler pages deploy dist --project-name=gutsource
```
