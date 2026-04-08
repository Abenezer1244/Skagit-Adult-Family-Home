# SEO Action Plan: Skagit River Adult Family Home

**Current Score: 34/100** | **Target Score: 70+/100**
**Generated:** April 8, 2026

---

## Critical Priority — Fix Immediately

> These issues actively harm your search visibility and user trust. Fix within 1-3 days.

### 1. Fix Domain URL in Codebase (5 minutes)
**File:** `/src/lib/constants.ts`
**Issue:** `SITE.url` is set to `https://3hebroncareafh.site` instead of `https://skagitriverafh.com`
**Impact:** All OpenGraph URLs, canonical tags, and sitemap entries point to the wrong domain
**Action:** Change `SITE.url` to `"https://skagitriverafh.com"`

### 2. Fix SSL Certificate (1 hour)
**Issue:** Certificate only covers `skagitriverafh.com`, not `www.skagitriverafh.com`
**Impact:** Visitors using `www` see a browser security warning
**Action:** Update SSL cert to include both domains (SAN certificate or wildcard `*.skagitriverafh.com`)

### 3. Set Up www → non-www Redirect (30 minutes)
**Issue:** Both `www` and non-www versions exist with no redirect
**Impact:** Splits link equity between two URL versions
**Action:** Configure 301 redirect from `www.skagitriverafh.com` → `skagitriverafh.com` at hosting/DNS level

### 4. Create robots.txt (30 minutes)
**File:** `/public/robots.txt`
**Issue:** Returns 404 — search engines have no guidance
**Action:** Create with content:
```
User-agent: *
Allow: /

# AI Search Crawlers
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: https://skagitriverafh.com/sitemap.xml
```

### 5. Generate sitemap.xml (30 minutes)
**File:** `/src/app/sitemap.ts`
**Issue:** Returns 404 — search engines can't discover pages
**Action:** Create Next.js dynamic sitemap:
```typescript
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://skagitriverafh.com';
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/gallery`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];
}
```

### 6. Fix Services Page Title (5 minutes)
**File:** `/src/app/services/page.tsx`
**Issue:** Title renders as "Services | Skagit River | Skagit River" (brand duplicated)
**Action:** Change `title: \`Services | ${SITE.name}\`` to `title: "Services"`

### 7. Fix Duplicate Meta Descriptions (15 minutes)
**Files:** `/src/app/about/page.tsx`, `/src/app/contact/page.tsx`
**Issue:** Both inherit homepage description
**Action:** Add unique descriptions:
- **About:** `"Learn how Skagit River Adult Family Home was founded in Mount Vernon, WA — our story, our team, and our commitment to 24/7 personalized senior care."`
- **Contact:** `"Reach Skagit River Adult Family Home in Mount Vernon, WA. Call (360) 723-2907, email us, or schedule a tour and care assessment."`

---

## High Priority — Fix Within 1 Week

> These changes unlock rich results, local search visibility, and AI discoverability.

### 8. Add LocalBusiness + WebSite Schema (2 hours)
**Files:** Create `/src/components/json-ld.tsx` and `/src/lib/schema.ts`, update `/src/app/layout.tsx`
**Impact:** Enables Google Knowledge Panel, map pack, and AI entity recognition
**Schema Types:** `NursingHome` + `LocalBusiness` (dual-type), `WebSite`

### 9. Add FAQPage Schema to Homepage (30 minutes)
**File:** `/src/app/page.tsx`
**Impact:** AI citation signal for ChatGPT, Perplexity, Google AI Overviews

### 10. Add BreadcrumbList Schema to Inner Pages (1 hour)
**Files:** All 5 inner page files
**Impact:** Breadcrumb trails in search results

### 11. Add og:image Social Sharing Image (1 hour)
**File:** `/src/app/layout.tsx` + create image
**Impact:** Branded preview when shared on social media or cited by AI

### 12. Claim Google Business Profile (2 hours)
**Action:** Create/claim GBP at business.google.com
- Add all photos from gallery
- Set correct hours, categories, description
- Add services list
- This is the **#1 local SEO action**

### 13. Replace External Stock Images (1 hour)
**File:** Homepage component
**Issue:** 3 images from `ibb.co` and `kenwoodcare.com` — slow, breakable, not original
**Action:** Replace with crops from existing `/gallery/` library

### 14. Create llms.txt (30 minutes)
**File:** `/public/llms.txt`
**Impact:** AI agent discoverability for Perplexity, Claude, future search agents

---

## Medium Priority — Fix Within 1 Month

> Content improvements and authority building for sustained ranking growth.

### 15. Expand Pricing Page (3 hours)
- Add ballpark rate range
- AFH vs Assisted Living vs Nursing Home comparison
- Financial resources (VA Aid & Attendance, COPES waiver, LTC insurance)
- Target 800–1,200 words

### 16. Add Named Individuals to About Page (1 hour)
- Owner/operator name + credentials
- RN name (or "our RN partner")
- Caregiver tenure or team size
- **Single biggest E-E-A-T improvement available**

### 17. Date Testimonials + Link to Reviews (1 hour)
- Add dates to all 5 testimonials
- Link to Google Business Profile reviews
- Add Review + AggregateRating schema

### 18. Expand FAQ Section (2 hours)
- Expand existing 6 answers to 80–140 words each
- Add 4–6 new FAQs (cost, move-in, DSHS license, AFH vs nursing home, emergencies)

### 19. Add Service Schema to Services Page (1 hour)
- `ItemList` wrapping 9 `Service` items

### 20. Get Business Domain Email (1 hour)
- `info@skagitriverafh.com` instead of `@gmail.com`
- Update across site and directories

### 21. Add Contextual Internal Links (1 hour)
- About → Services, Services → Gallery, Gallery → Contact, etc.
- Add within body content, not just navigation

### 22. Add Security Headers (30 minutes)
- `next.config.js`: CSP, X-Frame-Options, HSTS

---

## Low Priority — Backlog

> Long-term authority building and advanced optimization.

### 23. Create Directory Listings (4 hours)
- Caring.com, A Place for Mom, SeniorAdvisor, Yelp, BBB, Facebook, Apple Maps, Bing Places

### 24. Create Condition-Specific Landing Pages (8 hours)
- "Memory Care in Mount Vernon, WA"
- "Hospice Care in Skagit County"
- "Respite Care Mount Vernon"

### 25. Convert H2 Headings to Questions (2 hours)
- "Our Core Services" → "What care services does Skagit River offer?"

### 26. Add YouTube Facility Tour Video (4 hours)
- Strongest brand signal for AI citation (0.737 correlation)

### 27. Link to DSHS License Verification (15 minutes)
### 28. Add ImageGallery Schema (30 minutes)
### 29. Create LinkedIn Company Page (1 hour)

---

## Expected Score After Fixes

| Phase | Actions | Estimated Score |
|-------|---------|----------------|
| Current state | — | 34/100 |
| After Critical fixes (Week 1) | #1–7 | 48/100 |
| After High priority (Week 2) | #8–14 | 65/100 |
| After Medium priority (Month 1) | #15–22 | 75/100 |
| After Low priority (Month 2+) | #23–29 | 82/100 |

---

*Generated by Claude SEO Audit | April 8, 2026*
