/** Base URL for canonical and JSON-LD (no trailing slash). */
export function getBaseUrl(): string {
  const raw = import.meta.env.VITE_BASE_URL;
  return typeof raw === "string" && raw.trim() ? raw.replace(/\/$/, "") : "https://www.reliable-logistics.com";
}

const ORG_ID = (base: string) => `${base}/#organization`;
const SITE_ID = (base: string) => `${base}/#website`;

/** Supplemental JSON-LD for routes other than home (home WebPage + breadcrumb are in index.html). */
export function buildRouteJsonLd(pathname: string): Record<string, unknown> | null {
  if (pathname === "/") return null;
  if (!["/about", "/services", "/core-strengths"].includes(pathname)) return null;

  const base = getBaseUrl();
  const url = `${base}${pathname}`;

  const titles: Record<string, string> = {
    "/about": "About Us — Reliable Logistics",
    "/services": "Logistics Services — Reliable Logistics",
    "/core-strengths": "Core Strengths — Reliable Logistics",
  };

  const name = titles[pathname]!;

  const crumbs = [
    { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
  ] as Record<string, unknown>[];
  if (pathname === "/about" || pathname === "/core-strengths") {
    crumbs.push({ "@type": "ListItem", position: 2, name: "About Us", item: `${base}/about` });
  }
  if (pathname === "/services") {
    crumbs.push({ "@type": "ListItem", position: 2, name: "Services", item: `${base}/services` });
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name,
        isPartOf: { "@id": SITE_ID(base) },
        about: { "@id": ORG_ID(base) },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: crumbs,
      },
    ],
  };
}