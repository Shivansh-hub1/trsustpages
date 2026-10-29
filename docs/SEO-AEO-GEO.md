# SEO / AEO / GEO — what is implemented

Site: `https://devshivansh.in` · Language: `en-IN` · Market: Bikapur / Ayodhya / Uttar Pradesh + remote global

---

## 1. Technical SEO (all pages)

| Item | Status | Where |
|---|---|---|
| Unique `<title>` per page, ≤65 chars | ✅ | per-route `metadata` |
| Unique meta description, ≤158 chars | ✅ | per-route `metadata` |
| Canonical URL on every page | ✅ | `alternates.canonical` |
| `hreflang` / `x-default` | ✅ | `alternates.languages` in root layout |
| Single `<h1>` per page, logical h2/h3 order | ✅ | verified across all 30 routes |
| Open Graph + Twitter card (summary_large_image) | ✅ | root layout + per-route |
| 1200×630 OG image | ✅ | `/og.png` |
| `robots.txt` with sitemap + explicit AI-crawler allow | ✅ | `app/robots.ts` |
| XML sitemap, all 30 URLs with priorities | ✅ | `app/sitemap.ts` |
| Web app manifest + SVG favicon | ✅ | `manifest.ts`, `icon.svg` |
| 301 redirects for guessed legacy URLs | ✅ | `next.config.ts` (20 rules) |
| Clean, extensionless, trailing-slash-consistent URLs | ✅ | Next.js routes |
| Breadcrumbs (visible + `BreadcrumbList` schema) | ✅ | every inner page |
| Internal linking: service ↔ location ↔ blog ↔ FAQ | ✅ | cross-link blocks on every template |
| Geo meta (`geo.region`, `geo.position`, ICBM) | ✅ | root layout |
| Security headers, HSTS | ✅ | `next.config.ts` |
| Core Web Vitals: SSR, self-hosted fonts, no image payloads, CSS/SVG artwork only | ✅ | build-level |
| `.env.local` never committed; service key server-only | ✅ | `.gitignore` |

### Redirect map (protects link equity from guessy URLs)
`/portfolio → /work`, `/case-studies → /work`, `/seo → /services/seo-services`,
`/web-design`, `/web-development`, `/digital-marketing`, `/ecommerce`, `/aeo`, `/geo`,
`/ai-search`, `/bikapur`, `/ayodhya`, `/faizabad`, `/lucknow`, `/dubai`, `/london`,
`/new-york`, `/quote`, `/get-quote`, `/free-audit` → real pages.

---

## 2. Structured data (schema.org, one `@graph` per page)

Emitted site-wide from `app/layout.tsx`:
- `Organization` (`@id: /#organization`) — name, logo, sameAs, address, contactPoint, knowsAbout
- `LocalBusiness` + `ProfessionalService` (`@id: /#localbusiness`) — NAP, `geo`, `hasMap`,
  `openingHoursSpecification`, `areaServed` (all 7 cities + India), `aggregateRating`
- `WebSite` (`@id: /#website`) — with `SearchAction`

Per template:
| Page | Nodes added |
|---|---|
| Home | `ItemList` (services), `FAQPage` (8 Q&A), `HowTo` (4-step process) |
| Service detail | `Service` + `Offer` + `hasOfferCatalog`, `FAQPage`, `BreadcrumbList` |
| Services index | `ItemList`, `BreadcrumbList` |
| Location detail | `WebPage`, `Service` with `areaServed: City`, `FAQPage`, `BreadcrumbList` |
| Locations index | `LocalBusiness`, `ItemList`, `BreadcrumbList` |
| Work | `CollectionPage`, `BreadcrumbList` |
| Blog index | `Blog` + `blogPost[]`, `BreadcrumbList` |
| Blog post | `BlogPosting` (author, publisher, datePublished, wordCount), `BreadcrumbList` |
| Contact | `ContactPage`, `LocalBusiness`, `FAQPage` |
| FAQ | `FAQPage` (14 questions), `WebPage` |

Validate after deploy:
- https://search.google.com/test/rich-results
- https://validator.schema.org/

> Note: `aggregateRating` currently states 5.0 from 27 reviews. Keep it aligned with your real
> Google Business Profile once live — inflated numbers risk a manual action.

---

## 3. AEO — Answer Engine Optimisation

Written for extraction, not for volume:

- **Answer-first block on every service page** — an H2 phrased as a question, followed by a
  40–60 word self-contained definition paragraph (`What is {service} at Trustpages?`).
- **Answer-first block on every location page** — `Who builds websites in {city}?` with
  city, service, starting price and contact details in one paragraph.
- **FAQ accordions** with real Q&A pairs, mirrored in `FAQPage` schema (home 8, service 3 each,
  location 3 each, FAQ page 14).
- **Question-shaped headings** throughout (`How much does a website cost?`,
  `What is the difference between SEO, AEO and GEO?`).
- **Comparison and definition passages** in the blog (AEO vs GEO vs SEO; pricing ranges).
- **Contact data in text form** (`+91 83031 72373`, email) so answer boxes and voice assistants
  can lift a phone number without parsing markup.

---

## 4. GEO — Generative Engine Optimisation

| Lever | Implementation |
|---|---|
| Machine-readable site summary | `public/llms.txt` — services, prices, locations, quotable facts, and explicit guidance for assistants on how to represent the business |
| Crawl permission for AI agents | `robots.ts` allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot/User, Google-Extended, Applebot-Extended, CCBot, Bingbot, cohere-ai, Amazonbot, meta-externalagent, YouBot, DuckDuckBot |
| Entity consistency | identical name, address, phone, email, hours and price ranges across every page, footer, schema and `llms.txt` |
| Entity clarity | `knowsAbout`, `slogan`, `foundingDate`, `areaServed`, `hasOfferCatalog` describe exactly what the business is |
| Quotable units | short definition sentences, price statements expressed as “from ₹X”, explicit “we do not guarantee rankings” honesty clause (models favour non-promotional, verifiable claims) |
| Structured facts over marketing prose | every service page states deliverables as a list machines can enumerate |
| Topical authority | dedicated pages per service + per city, interlinked, plus 3 long-form guides |
| Citation-worthiness | transparent pricing, stated limitations, named process, real address |

**Monthly GEO measurement (do this manually):**
1. Keep a fixed panel of 40–60 buyer prompts (e.g. “web design agency in Bikapur”, “who builds
   Shopify stores in Ayodhya”, “best SEO agency in Uttar Pradesh for small business”).
2. Run the same list on the 1st of each month in ChatGPT, Gemini, Perplexity and Google AI
   Overviews.
3. Log: mentioned? cited URL? sentiment? competitors named?
4. Any prompt where you are absent becomes a content brief — usually a missing comparison page,
   a missing city page, or a missing third-party citation.

---

## 5. Keyword map (page → primary intent)

| Page | Primary keyword | Supporting |
|---|---|---|
| `/` | web design agency Bikapur | web design Ayodhya, website designer UP |
| `/services/website-design` | website design Bikapur | website designer Ayodhya, UI UX design UP |
| `/services/web-development` | web development Bikapur | Next.js developer India, custom web app UP |
| `/services/seo-services` | SEO services Bikapur | local SEO Ayodhya, small business SEO India |
| `/services/digital-marketing` | digital marketing agency Bikapur | Google Ads Ayodhya, PPC UP |
| `/services/ecommerce` | ecommerce website development Bikapur | Shopify developer India |
| `/services/ai-search-optimization` | AEO services India | GEO generative engine optimisation, get cited by ChatGPT |
| `/locations/bikapur` | web design Bikapur | website developer Bikapur, SEO Bikapur |
| `/locations/ayodhya` | web design Ayodhya | hotel website Ayodhya, SEO Ayodhya |
| `/locations/faizabad` | web design Faizabad | clinic website Faizabad |
| `/locations/lucknow` | web design Lucknow | SEO agency Lucknow |
| `/locations/dubai` | web design Dubai | SEO Dubai SME |
| `/locations/london` | web design London | technical SEO London |
| `/locations/new-york` | web design New York | SEO New York startup |
| `/blog/website-cost-india-2026` | website cost in India | website price Bikapur |
| `/blog/aeo-geo-explained` | what is AEO and GEO | AEO vs SEO |
| `/blog/local-seo-checklist-bikapur-businesses` | local SEO checklist India | Google Business Profile Bikapur |
| `/faq` | web design agency FAQ | website cost FAQ India |

One page = one intent. Do not add a second page targeting the same keyword; extend the existing
one instead.

---

## 6. Measurement setup (do after deploy)

1. **Google Search Console** — verify `devshivansh.in` (DNS TXT), submit `sitemap.xml`,
   then request indexing for the 8 highest-value URLs.
2. **Bing Webmaster Tools** — verify, submit sitemap (also feeds ChatGPT search via Bing).
3. **Analytics** — add a privacy-friendly tool (Plausible/Umami) or GA4; mark
   `form_submit` and `whatsapp_click` as conversions.
4. **Baselines to record now**: indexed pages, ranking positions for the 10 core keywords,
   monthly organic sessions, enquiries per month, GBP views/calls/direction requests.
5. **Monthly cadence**: publish 1 article, refresh 1 service page, add 4–8 Google reviews,
   run the AI prompt panel, review Search Console queries for new page ideas.

---

## 7. Known gaps to close (honest list)

- **Reviews** — the schema declares 5.0/27. Replace with real, verifiable Google figures as soon
  as the profile exists; consider removing `aggregateRating` until then to stay safe.
- **Backlinks** — nothing earns links yet. Priorities: Justdial/Sulekha/IndiaMART listings,
  local news/press in Ayodhya, a genuine free “Bikapur business website teardown” post,
  chamber-of-commerce and UP startup directory listings, supplier/partner pages.
- **Hindi** — service pages are English only. `hi-IN` versions of the 3 location pages would
  capture significant local intent; the layout already supports `alternates.languages`.
- **Case-study evidence** — portfolio figures are illustrative and labelled as such on `/work`.
  Replace with client-approved numbers when available; keep the disclaimer until then.
- **Images** — none yet by design. If real photos are added, use `next/image` with
  AVIF/WebP and explicit width/height to protect LCP and CLS.
