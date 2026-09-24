/**
 * /llms.txt — LLM-oriented site guide (https://llmstxt.org/)
 */
import { tagSiteLinksForLlm } from '~/utils/llm-urls';

export const prerender = true;

const BODY = `# GutSource

> B2B OEM / private-label and wholesale partner for digestive enzyme capsules, probiotics, and optional fiber powder. Site: https://gut.tradeglo.net/

GutSource serves brands, retailers, gyms/spas, and distributors — not consumer checkout. Dietary supplement structure/function language only; no disease-treatment or detox claims.

## Core pages

- [Home](https://gut.tradeglo.net/): Dual OEM + wholesale overview and quote CTA
- [OEM / Private Label](https://gut.tradeglo.net/oem): Private label digestive enzyme and probiotic programs
- [Wholesale](https://gut.tradeglo.net/wholesale): Case packs and wholesale account requests
- [Products](https://gut.tradeglo.net/products): Capability examples / SKU formats
- [Contact](https://gut.tradeglo.net/contact): RFQ and sample requests

## Company

- [About](https://gut.tradeglo.net/about): Who GutSource is and who we serve
- [FAQ](https://gut.tradeglo.net/faq): Buyer FAQ for OEM and wholesale
- [Blog](https://gut.tradeglo.net/blog): Sourcing notes

## Legal

- [Privacy](https://gut.tradeglo.net/privacy)
- [Terms](https://gut.tradeglo.net/terms)
- [Sitemap](https://gut.tradeglo.net/sitemap-index.xml)
`;

export const GET = async () => {
  const body = tagSiteLinksForLlm(BODY.replace(/^\uFEFF/, '').trimStart()) + '\n';

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, must-revalidate',
      'X-Content-Type-Options': 'nosniff',
    },
  });
};
