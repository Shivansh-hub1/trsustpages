# Trustpages — website

A production-ready web design agency site for **Trustpages**, Bikapur / Ayodhya, Uttar Pradesh.
Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, self-hosted Outfit + Poppins,
and Supabase for lead capture.

Design language extracted from the reference site with `designlang` and re-expressed as a clean,
original system: purple `#6b2e88` → navy `#2a245c` gradients, ultra-soft radii, flat surfaces,
pill CTAs, hexagon trust badges, Outfit display type.

---

## Quick start

```bash
npm install
cp .env.example .env.local   # then paste your Supabase keys
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

---

## Environment variables

| Variable | Where | Purpose |
|---|---|---|
| `SUPABASE_URL` | Vercel → Settings → Environment Variables | e.g. `https://xxxx.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | Vercel → Settings → Environment Variables | server-only key for inserting enquiries |

Neither variable is exposed to the browser. The form posts to `/api/enquiry`, which writes to
`public.enquiries` with the service role key. Row-level security is enabled and **no** anon or
authenticated policy exists, so the table is unreadable from the client — verified.

### Database

Already created in project `trustpages` (`nbywcfyrezqiiugqluty`, region `ap-south-1`):

```sql
create table public.enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  email text,
  service text,
  message text,
  source_page text,
  referrer text,
  user_agent text,
  status text not null default 'new'
);
alter table public.enquiries enable row level security;
```

Read your leads with the Supabase SQL editor:

```sql
select created_at, name, phone, email, service, source_page, message
from public.enquiries
order by created_at desc;
```

---

## Project structure

```
app/
  layout.tsx               root metadata, fonts, Organization + LocalBusiness + WebSite schema
  page.tsx                 homepage (hero, orbit, services, work, testimonials, FAQ, form)
  services/page.tsx        service index
  services/[slug]/page.tsx six service detail pages (Service + FAQ + Breadcrumb schema)
  locations/page.tsx       locations index
  locations/[slug]/page.tsx 7 city pages, local + global
  work/page.tsx            portfolio + case studies
  about, blog, blog/[slug], contact, faq, privacy, terms
  api/enquiry/route.ts     lead capture → Supabase
  sitemap.ts robots.ts manifest.ts icon.svg not-found.tsx
components/
  Header, Footer, ui (PageHero, CTABand, StatStrip, JsonLd…), Icons, Artwork,
  Faq (accessible accordion), LeadForm, Logo
lib/
  site.ts                  ← ALL content, prices, cities, FAQs, blog posts live here
  schema.ts                schema.org graph builders
public/
  fonts/                   self-hosted Outfit + Poppins (woff2)
  llms.txt                 machine-readable summary for AI assistants
  og.png                   1200×630 social card
docs/
  SEO-AEO-GEO.md           everything implemented + what to do next
  LOCAL-SEO-PLAYBOOK.md    Bikapur/Ayodhya + global playbook
  DEPLOY.md                Vercel + domain + Supabase setup
```

### Editing content

Almost everything is data, not markup. Open `lib/site.ts`:

- `SITE` — name, phone, email, address, hours, socials, rating
- `SERVICES` — service pages (name, price, deliverables, outcomes, process, FAQs, keywords)
- `LOCATIONS` — city pages (intro, local proof, focus, FAQs)
- `FAQ_S` / `FAQS`, `TESTIMONIALS`, `PORTFOLIO`, `BLOG_POSTS`, `STATS`, `DIFFERENTIATORS`

Add a service or city and the routes, sitemap, schema, nav menu and footer update automatically.

---

## Design tokens

| Token | Value | Use |
|---|---|---|
| `--color-plum` | `#6b2e88` | primary brand |
| `--color-navy` | `#2a245c` | headings, dark sections |
| `--color-lilac` | `#f4e0ff` | soft accents |
| `--color-mist` | `#f4f7ff` | section backgrounds |
| `--color-ink` / `--color-body` | `#242323` / `#595c5f` | text |
| `--radius-card` | `26px` | cards |
| fonts | Outfit (display), Poppins (body) | self-hosted |

All artwork is inline SVG/CSS — no stock photography, no external image requests.

---

## Accessibility & performance

- Semantic landmarks, skip link, visible focus rings, 44px touch targets
- Accordion FAQ with `aria-expanded` / `aria-controls`
- `prefers-reduced-motion` respected (marquee, float, reveal animations disabled)
- Self-hosted fonts with `display: swap`, preloaded, subset to latin
- Server-rendered HTML for every route; no client-side data fetching for content
- Security headers (HSTS, nosniff, frame options, referrer policy, permissions policy)
