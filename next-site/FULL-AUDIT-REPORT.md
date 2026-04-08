# Full SEO Audit Report: Skagit River Adult Family Home

**URL:** https://skagitriverafh.com
**Audit Date:** April 8, 2026
**Business Type:** Licensed Adult Family Home (Senior Residential Care)
**Platform:** Next.js (App Router, SSR)
**Pages Crawled:** 6 (/, /about, /services, /gallery, /pricing, /contact)

---

## Executive Summary

### Overall SEO Health Score: 34 / 100

Skagit River Adult Family Home has a well-designed Next.js website with genuine content strengths — original photography, a substantive services page, consistent NAP data, and a verifiable state license. However, the site suffers from **critical technical SEO infrastructure gaps** that make it nearly invisible to search engines and AI systems. There is no robots.txt, no sitemap.xml, no structured data, no canonical tags, an SSL certificate that fails on `www`, and OpenGraph URLs pointing to a completely different domain (`3hebroncareafh.site`).

The good news: most critical issues are purely technical and fixable within 1-2 days without rewriting any content.

### Top 5 Critical Issues

| # | Issue | Impact |
|---|-------|--------|
| 1 | **SSL Certificate Mismatch** — `www.skagitriverafh.com` shows security warning (cert only covers non-www) | Users get browser warnings; Google flags insecure |
| 2 | **OG URL Points to Wrong Domain** — All pages: `og:url: "https://3hebroncareafh.site"` | Social shares and AI systems reference wrong site |
| 3 | **No robots.txt** (404) | No crawl directives; no sitemap pointer |
| 4 | **No sitemap.xml** (404) | Search engines can't efficiently discover pages |
| 5 | **Zero Structured Data** — No JSON-LD on any page | No rich results, no knowledge panel, no FAQ snippets |

### Top 5 Quick Wins

| # | Fix | Effort |
|---|-----|--------|
| 1 | Fix `SITE.url` in `constants.ts` from `3hebroncareafh.site` → `skagitriverafh.com` | 5 min |
| 2 | Fix duplicate title on Services page (`"Services | Skagit River | Skagit River"`) | 5 min |
| 3 | Add unique meta descriptions to About and Contact pages | 15 min |
| 4 | Create `robots.txt` with sitemap reference | 30 min |
| 5 | Generate `sitemap.xml` via Next.js `app/sitemap.ts` | 30 min |

---

## Scoring Summary

| Category | Weight | Score (0-10) | Weighted |
|----------|--------|-------------|----------|
| Technical SEO | 22% | 3.0 | 6.6 |
| Content Quality | 23% | 6.4 | 14.7 |
| On-Page SEO | 20% | 4.0 | 8.0 |
| Schema / Structured Data | 10% | 0.0 | 0.0 |
| Performance (CWV) | 10% | 5.0 | 5.0 |
| AI Search Readiness | 10% | 4.1 | 4.1 |
| Images | 5% | 6.0 | 3.0 |
| **Subtotal** | **100%** | | **41.4** |
| Local SEO Modifier | — | | **-7.0** |
| **Final Score** | | | **34 / 100** |

---

## 1. Technical SEO — 3.0 / 10

### 1.1 Crawlability (2/10)

| Issue | Severity | Details |
|-------|----------|---------|
| No robots.txt | Critical | Returns 404. No crawl directives, no sitemap pointer. |
| No sitemap.xml | Critical | Returns 404. Search engines cannot discover or prioritize pages. |
| No canonical tags | High | No page specifies a preferred URL. Risk of duplicate indexing. |
| No robots meta tags | Medium | Pages don't declare indexing preferences. |

### 1.2 Indexability (3/10)

| Issue | Severity | Details |
|-------|----------|---------|
| www vs non-www unresolved | Critical | SSL only works on non-www. No 301 redirect configured. |
| No canonical tags | High | Engines must guess preferred URL version. |
| `metadataBase` domain mismatch | Critical | `constants.ts` has `SITE.url = "https://3hebroncareafh.site"` — all generated canonical/OG URLs point to wrong domain. |

### 1.3 Security (3/10)

| Issue | Severity | Details |
|-------|----------|---------|
| SSL cert mismatch on www | Critical | Certificate only covers `skagitriverafh.com`, not `www.skagitriverafh.com`. Browser security warning for www visitors. |
| Missing security headers | Medium | No Content-Security-Policy, X-Frame-Options, or Strict-Transport-Security detected. |

**Fix:** Update SSL certificate to SAN/wildcard covering both domains. Set up 301 redirect `www` → non-www. Add security headers in `next.config.js`.

### 1.4 URL Structure (7/10)

Clean, descriptive URLs: `/about`, `/services`, `/gallery`, `/pricing`, `/contact`. No query parameters, no inconsistent trailing slashes. Short and keyword-relevant.

### 1.5 Mobile Optimization (7/10)

- Viewport meta tag present and correct.
- Next.js provides responsive rendering.
- Image optimization via Next.js Image component likely in use.

### 1.6 Core Web Vitals — Lab Estimate (5/10)

| Metric | Estimate | Risk |
|--------|----------|------|
| LCP | 2.5–4.0s | Medium-High — hero images from 3 external domains (ibb.co, kenwoodcare.com) add DNS lookups |
| INP | <200ms | Low — minimal interactivity |
| CLS | 0.1–0.25 | Medium — gallery with 48+ images, some without explicit dimensions |

**Key concern:** Homepage loads images from 3 external domains. This hurts LCP and introduces third-party dependency risk.

### 1.7 JavaScript Rendering (6/10)

Next.js SSR ensures core content is in initial HTML. However, several `"use client"` components (`HomeFAQ`, `GalleryGrid`, `FadeIn`, `ScaleReveal`) may not render content for crawlers that don't execute JavaScript. The FAQ answers inside accordions and the entire gallery grid are at risk.

---

## 2. Content Quality — 6.4 / 10

### 2.1 E-E-A-T Assessment

| Signal | Score | Notes |
|--------|-------|-------|
| **Experience** | 14/20 | Origin story is authentic. 5 testimonials present but undated. 3 homepage images are stock/external (ibb.co, kenwoodcare.com), undermining authenticity. |
| **Expertise** | 16/25 | RN delegation, DSHS license, certification mentions. **No named individuals anywhere on the site** — owner, caregivers, and RN are all anonymous. This is the biggest E-E-A-T gap. |
| **Authoritativeness** | 14/25 | License #758550 is verifiable. But zero external citations, no link to DSHS verification, no industry affiliations, no awards, no GBP reference. |
| **Trustworthiness** | 20/30 | Consistent NAP, Google Maps embed, office hours, privacy/terms pages. Gmail address (`@gmail.com`) reduces professionalism vs. business domain email. |

### 2.2 Per-Page Content Analysis

| Page | Words | Title | Meta Description | Issues |
|------|-------|-------|-----------------|--------|
| Homepage | ~800 | Good: includes location + business type | Unique, well-written | H1 is aspirational ("Comfort. Care. Family.") not keyword-rich; 3 stock images |
| About | ~1,100 | OK: "About Us \| Skagit River" | **DUPLICATE of homepage** | Strong narrative; no staff names or bios |
| Services | ~2,000 | **BAD: "Services \| Skagit River \| Skagit River"** | Unique, excellent | Best page on site; comprehensive and well-structured |
| Gallery | ~900 | OK | Unique, good | 41+ original images with excellent alt text |
| Pricing | ~400 | OK | Unique | **THIN CONTENT** — intentionally vague on rates, fails to satisfy search intent |
| Contact | ~650 | OK | **DUPLICATE of homepage** | Complete NAP + form; no response time info |

### 2.3 Critical Content Issues

**Duplicate Meta Descriptions:** About and Contact pages inherit the homepage description because they don't set their own `description` in the metadata export. This means 3 of 6 pages show identical descriptions in search results.

**Thin Content — Pricing Page (~400 words):** At the absolute floor for a healthcare pricing page. The phrase "start in the mid-range for adult family homes in Skagit County" is intentionally vague but Google's Helpful Content criteria flags pages that require users to leave to get the information the page promises. Needs:
- Ballpark range (e.g., "$X,000–$X,000/month depending on care level")
- AFH vs. Assisted Living vs. Nursing Home cost comparison
- Financial planning resources (VA Aid & Attendance, COPES waiver, LTC insurance)
- Target 800–1,200 words

**Duplicate Title — Services Page:** The metadata title is set to `"Services | ${SITE.name}"` but the layout template appends `| ${SITE.name}` again, producing "Services | Skagit River | Skagit River". Fix: change to just `title: "Services"`.

### 2.4 AI Citation Readiness — 58/100

**Strengths:** FAQ has 6 well-structured Q&A pairs. Services page conditions list is extractable. Trust strip facts (license, 24/7 staff) are citation anchors.

**Gaps:** FAQ answers are too short (28–60 words vs. optimal 80–140 words for AI citation). No statistics or external data references. No publication dates. No `dateModified` metadata.

---

## 3. On-Page SEO — 4.0 / 10

### 3.1 Title Tags

| Page | Title | Verdict |
|------|-------|---------|
| Home | "Skagit River \| Adult Family Home in Mount Vernon, WA" | Good |
| About | "About Us \| Skagit River" | Could add "Adult Family Home Mount Vernon" |
| Services | "Services \| Skagit River \| Skagit River" | **Fix: duplicate brand** |
| Gallery | "Gallery \| Skagit River" | Could be more descriptive |
| Pricing | "Pricing \| Skagit River" | Could add "Adult Family Home Costs" |
| Contact | "Contact Us \| Skagit River" | Could add location |

### 3.2 Open Graph Tags — Critical Failures

| Issue | Severity | Details |
|-------|----------|---------|
| `og:url` points to wrong domain | **Critical** | All pages: `"https://3hebroncareafh.site"` |
| `og:title` identical on all pages | High | All use "Skagit River \| Adult Family Home" |
| `og:description` identical on all pages | High | All use homepage description |
| No `og:image` | High | No social sharing preview image on any page |

### 3.3 Heading Structure

All pages have proper H1 → H2 → H3 hierarchy with single H1 per page. **Well done.**

### 3.4 Internal Linking

- Navigation consistent across all pages (6 links + CTA).
- Services page links to Pricing (good cross-link).
- **Missing:** No contextual internal links within body content.
- **Missing:** No breadcrumbs (HTML breadcrumbs exist visually but no BreadcrumbList schema).

---

## 4. Schema & Structured Data — 0.0 / 10

**No structured data exists on any page.** This is the single most impactful gap for a local service business.

### Required Schema (Priority Order)

| Priority | Schema Type | Target | Google Rich Result | Effort |
|----------|------------|--------|-------------------|--------|
| P1 | `NursingHome` + `LocalBusiness` | `layout.tsx` (global) | Knowledge panel, map pack | 30 min |
| P1 | `WebSite` | `layout.tsx` (global) | Sitelinks eligibility | 5 min |
| P2 | `BreadcrumbList` | All 5 inner pages | Breadcrumb trail in SERPs | 20 min |
| P2 | `Service` (ItemList) | `/services` | AI citation, service listing | 15 min |
| P3 | `Review` + `AggregateRating` | Homepage | Star ratings in SERPs | 20 min |
| P3 | `FAQPage` | Homepage | AI/LLM citations (no Google FAQ rich result for commercial sites since Aug 2023) | 10 min |

### Implementation Approach

Create a reusable `JsonLd` component:

```tsx
// /src/components/json-ld.tsx
export function JsonLd({ schema }: { schema: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

Store schema objects in `/src/lib/schema.ts` and import into layout/pages. The `LocalBusiness` block should include: name, legalName, address (structured), telephone, email, url, openingHours, license (#758550), geo coordinates (48.4291, -122.3343), areaServed (Skagit County), amenityFeature (24/7 staff, RN delegation, memory care, hospice, respite care), and numberOfRooms (6).

---

## 5. Performance (CWV) — 5.0 / 10

| Issue | Severity | Details |
|-------|----------|---------|
| External image hosting | High | Homepage loads from `ibb.co` and `kenwoodcare.com` — extra DNS, no cache control, breakage risk |
| Gallery: 48+ images | Medium | Verify lazy loading and explicit dimensions to prevent CLS |
| No preconnect hints | Medium | Missing `<link rel="preconnect">` for external domains |
| No `og:image` | Medium | No optimized social sharing image |

**Fix:** Host ALL images locally. Replace the 3 external stock images with crops from the existing `/gallery/` library. Use Next.js `<Image>` with `priority` prop for above-the-fold hero images.

---

## 6. Images — 6.0 / 10

### Strengths
- 41+ gallery images with specific, descriptive alt text (best-in-class for this site type)
- Local images use WebP format
- Alt text is keyword-relevant and contextual

### Issues
- 3 homepage images hotlinked from external domains (ibb.co, kenwoodcare.com)
- No `og:image` tag on any page
- Logo alt text missing on some pages
- Gallery images only accessible via `"use client"` JS — crawlers without JS see nothing

---

## 7. AI Search Readiness (GEO) — 4.1 / 10

### AI Crawler Accessibility

| Crawler | Status | Notes |
|---------|--------|-------|
| GPTBot / OAI-SearchBot | Allowed by default | No robots.txt = passive permission, not explicit |
| ClaudeBot | Allowed by default | Same |
| PerplexityBot | Allowed by default | Same |
| Bingbot | Allowed by default | Same |

### Platform-Specific Scores

| Platform | Score | Primary Blocker |
|----------|-------|----------------|
| Google AI Overviews | 2/10 | No structured data, no sitemap, short FAQ answers |
| ChatGPT | 4/10 | No third-party mentions, no llms.txt, domain confusion |
| Perplexity | 4/10 | No llms.txt, no directory listings |
| Bing Copilot | 3/10 | No robots.txt, no sitemap, no OG image |

### Key Gaps

- **No `llms.txt`** — AI agents have no machine-readable site summary
- **No structured data** — Google AI Overviews heavily weight JSON-LD
- **FAQ answers too short** (28–60 words vs. optimal 80–140 for citation)
- **No third-party directory presence** — AI systems cross-reference before citing
- **H2 headings are category labels, not questions** — "Our Core Services" vs. "What care services does Skagit River offer?"
- **Domain mismatch** in codebase splits entity recognition

---

## 8. Local SEO — 3.0 / 10

### 8.1 NAP Consistency (8/10)

Name, Address, Phone consistent across all 6 pages in footer. Second phone (360) 982-2076 only on Contact page.

### 8.2 Google Business Profile (1/10)

No GBP link on website. No review widget. Cannot verify if claimed.
**This is the #1 local SEO action: claim/verify GBP immediately.**

### 8.3 Citations & Directories (1/10)

No evidence of listings on any directory:
- Google Business Profile
- Caring.com
- A Place for Mom
- SeniorAdvisor.com
- Yelp
- Care.com
- WA DSHS provider directory
- BBB, Facebook, Apple Maps, Bing Places

### 8.4 Reviews (2/10)

- 5 testimonials on homepage (S.J., Michael T., Amina K., Jasmine R., David L.)
- No dates on any testimonial
- No review schema markup
- No links to external review platforms
- No review collection strategy

### 8.5 Local Schema (0/10)

No LocalBusiness, GeoCoordinates, opening hours, or service area schema.

### 8.6 Industry-Specific Factors

| Factor | Status |
|--------|--------|
| License displayed | Yes (#758550) — good |
| Service area defined | No |
| Gmail vs business email | Gmail reduces trust for healthcare |
| Condition-specific landing pages | None — missing "memory care Mount Vernon WA", "hospice care Skagit County" |
| Competitive differentiator emphasis | "Max 6 residents" not emphasized enough |

---

## Prioritized Action Plan

### Critical — Fix Immediately (Week 1)

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 1 | **Fix `SITE.url`** in `constants.ts`: change `3hebroncareafh.site` → `skagitriverafh.com` | 5 min | Fixes all OG URLs, canonicals, and sitemap generation |
| 2 | **Fix SSL certificate** to cover both `skagitriverafh.com` and `www.skagitriverafh.com` | 1 hr | Eliminates browser security warnings |
| 3 | **Set up 301 redirect** `www` → non-www (or vice versa) | 30 min | Consolidates link equity |
| 4 | **Create `robots.txt`** in `/public/` with sitemap reference and explicit AI crawler directives | 30 min | Enables crawl guidance |
| 5 | **Generate `sitemap.xml`** via `src/app/sitemap.ts` | 30 min | Enables page discovery |
| 6 | **Fix Services page title** — change to just `title: "Services"` | 5 min | Removes duplicate brand name |
| 7 | **Add unique meta descriptions** to About and Contact pages | 15 min | Eliminates duplicate metadata |

### High — Fix Within 1 Week

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 8 | **Add JSON-LD structured data**: `LocalBusiness`/`NursingHome` + `WebSite` in `layout.tsx` | 2 hrs | Knowledge panel, map pack eligibility |
| 9 | **Add `FAQPage` schema** to homepage FAQ section | 30 min | AI citation signal |
| 10 | **Add `BreadcrumbList` schema** to all inner pages | 1 hr | SERP breadcrumb trails |
| 11 | **Add `og:image`** — create social sharing preview image | 1 hr | Social/AI link previews |
| 12 | **Claim Google Business Profile** — photos, hours, description, categories | 2 hrs | #1 local SEO action |
| 13 | **Replace external stock images** on homepage with local gallery images | 1 hr | Fixes LCP, eliminates dependency risk |
| 14 | **Create `llms.txt`** with facility facts and structure | 30 min | AI agent discoverability |

### Medium — Fix Within 1 Month

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 15 | **Expand Pricing page** to 800–1200 words with rate ranges, comparisons, financial resources | 3 hrs | Resolves thin content, satisfies search intent |
| 16 | **Add named individuals** to About page (owner, RN, caregiver names + credentials) | 1 hr | Biggest E-E-A-T improvement |
| 17 | **Add dates to testimonials** and link to Google Reviews | 1 hr | Freshness signal, trust verification |
| 18 | **Expand FAQ answers** to 80–140 words each; add 4–6 new FAQs | 2 hrs | AI citation optimization |
| 19 | **Add `Service` ItemList schema** to Services page | 1 hr | AI citation, service listing |
| 20 | **Add `Review` + `AggregateRating` schema** to homepage | 1 hr | Star ratings in SERPs |
| 21 | **Get business domain email** (`info@skagitriverafh.com`) | 1 hr | Professional trust signal |
| 22 | **Add contextual internal links** within page body content | 1 hr | Link equity distribution |
| 23 | **Add security headers** via `next.config.js` | 30 min | Security best practice |

### Low — Backlog

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 24 | Create listings on Caring.com, A Place for Mom, SeniorAdvisor | 4 hrs | Third-party authority signals |
| 25 | Add condition-specific landing pages (memory care, hospice) | 8 hrs | Long-tail keyword targeting |
| 26 | Convert H2 headings to question format for AI extraction | 2 hrs | Query-intent matching |
| 27 | Add YouTube facility walkthrough video | 4 hrs | Strongest brand signal for AI citation (0.737 correlation) |
| 28 | Link to DSHS license verification page | 15 min | External authority signal |
| 29 | Add `ImageGallery` schema to Gallery page | 30 min | Image search visibility |
| 30 | Create LinkedIn company page | 1 hr | Entity recognition for AI systems |

---

## Source Files Requiring Changes

| File | Changes Needed |
|------|---------------|
| `/src/lib/constants.ts` | Fix `SITE.url` from `3hebroncareafh.site` → `skagitriverafh.com` |
| `/src/app/layout.tsx` | Add JSON-LD (`LocalBusiness`, `WebSite`), add `og:image`, add security headers |
| `/src/app/services/page.tsx` | Fix title to just `"Services"` |
| `/src/app/about/page.tsx` | Add unique meta description |
| `/src/app/contact/page.tsx` | Add unique meta description |
| `/src/app/page.tsx` | Add `FAQPage` + `Review` schema |
| `/src/app/sitemap.ts` | Create — auto-generate sitemap.xml |
| `/public/robots.txt` | Create — crawl directives + sitemap pointer |
| `/public/llms.txt` | Create — AI-readable facility summary |
| `/src/components/json-ld.tsx` | Create — reusable schema component |
| `/src/lib/schema.ts` | Create — centralized schema definitions |
| `next.config.js` | Add security headers, redirects |

---

## Appendix: Pages Crawled

| URL | Title | Status | Issues |
|-----|-------|--------|--------|
| `/` | Skagit River \| Adult Family Home in Mount Vernon, WA | 200 | 3 external images, no schema |
| `/about` | About Us \| Skagit River | 200 | Duplicate meta desc, no staff names |
| `/services` | Services \| Skagit River \| Skagit River | 200 | Duplicate brand in title |
| `/gallery` | Gallery \| Skagit River | 200 | JS-only rendering risk |
| `/pricing` | Pricing \| Skagit River | 200 | Thin content (~400 words) |
| `/contact` | Contact Us \| Skagit River | 200 | Duplicate meta desc |
| `/robots.txt` | — | 404 | Missing |
| `/sitemap.xml` | — | 404 | Missing |

---

*Report generated by Claude SEO Audit | April 8, 2026*
