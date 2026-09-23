/**
 * Canonical website id stored on shared contact_inquiries.source_site.
 * Use the brand hostname (no www), not the ads/preview host the visitor happened to be on.
 */

export function hostnameFromUrl(value: string | null | undefined): string | null {
  if (!value) return null;
  const raw = value.trim();
  if (!raw) return null;

  try {
    const url = raw.includes('://') ? new URL(raw) : new URL(`https://${raw}`);
    return stripWww(url.hostname);
  } catch {
    return stripWww(raw.split('/')[0] ?? '');
  }
}

export function stripWww(host: string): string {
  return host.trim().toLowerCase().replace(/^www\./, '');
}

/** Preview / local hosts that should store as the production brand hostname. */
const GUT_OEM_WHOLESALE_ALIASES = new Set([
  'gut.tradeglo.net',
  'gut-oem-wholesale.pages.dev',
  'localhost',
  '127.0.0.1',
]);

export function canonicalSourceSite(
  value: string | null | undefined,
  fallback: string
): string {
  const host = hostnameFromUrl(value);
  if (!host) return stripWww(fallback);
  if (GUT_OEM_WHOLESALE_ALIASES.has(host)) return 'gut.tradeglo.net';
  return host;
}

export function sourceSiteFromConfig(siteUrl: string | undefined): string {
  return hostnameFromUrl(siteUrl) ?? 'gut.tradeglo.net';
}
