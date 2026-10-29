# Local + Global SEO playbook — Trustpages

Base: Bikapur, Ayodhya district, Uttar Pradesh 224204 · +91 83031 72373 · newtonsir869@gmail.com

---

## Part A — Local SEO for Bikapur & Ayodhya (do these first, in this order)

### Week 1 — Foundations that unblock everything else

1. **Google Business Profile (GBP)** — the single highest-leverage asset.
   - Primary category: *Website designer*. Secondary: *Internet marketing service*,
     *Software company*, *Graphic designer*.
   - Service areas: Bikapur, Ayodhya, Faizabad, Goshainganj, Milkipur, Rudauli, Sohawal,
     Bhadarsa, Lucknow (keep to genuine coverage; over-listing dilutes relevance).
   - Hours: Mon–Sat 10:00–19:00. Add special hours for festivals.
   - Description (750 chars) must contain: web design, website development, SEO, Bikapur,
     Ayodhya, Faizabad, Lucknow, eCommerce, Google Business Profile.
   - Attributes: “Online appointments”, “Onsite services”, “Language assistance: Hindi, English”.
   - Upload **10+ real photos**: exterior with signage, interior/workstation, team at work,
     laptop with a live site, owner portrait, logo image. Add 2–4 new photos monthly.
   - Add Products: *5-page business website ₹24,999*, *eCommerce store ₹59,999*,
     *Local SEO retainer ₹15,000/mo* — with real images and links to the service page.
   - Add Services with prices. Fill the Q&A yourself (5–8 pre-emptive questions).
   - Turn on messaging only if you can answer within an hour.

2. **NAP consistency** — identical everywhere, exactly:
   `Trustpages, Bikapur Main Road, Bikapur, Ayodhya, Uttar Pradesh 224204, India · +91 83031 72373`
   Uses: website footer, GBP, Instagram bio, WhatsApp business profile, invoices, email signature.
   Never write “Bikapur, Faizabad” in one place and “Bikapur, Ayodhya” in another.

3. **Citations** (do 2 per day, keep a spreadsheet of URL + date + login):
   Justdial · Sulekha · IndiaMART · TradeIndia · Bing Places · Apple Business Connect ·
   Yelp India · Glassdoor/serp listings · UP startup directories · Ayodhya district business
   associations · Facebook Page · LinkedIn Company Page · Instagram business profile ·
   Google Maps (auto) · Yellowpages India · City-wise directories for Faizabad/Lucknow.
   For each: same name, same phone, same category, link only to `https://devshivansh.in`.

### Week 2 — On-site local signals (already built, now tune)

The site ships with 7 location pages. Tune rather than add:

- `/locations/bikapur` is the **primary** local page — it carries the address, the walk-in
  promise and the strongest local proof. Link to it from the footer, contact page and every
  service page (already done).
- Keep one page per city. Do **not** create “web design in {30 villages}” doorways — thin,
  near-duplicate city pages are the most common local SEO failure and can suppress the whole
  site.
- Each location page must answer, in the first 60 words: who you are, what you do, where,
  starting price, and phone number. Already implemented.

### Weeks 2–8 — Reviews (the ranking lever nobody does consistently)

- Ask **the same day**, in person, with a QR code or a WhatsApp link:
  `https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID`
- Target: 4–8 new reviews/month, every month. Recency beats volume.
- Reply to **every** review within 48 hours, in the reviewer's language, mentioning the service
  and city (“Thanks Rakesh — glad the new interiors site is bringing enquiries in Ayodhya”).
- Never buy reviews. One flag can wipe the profile.
- Once you have 10+ real reviews, update `SITE.reviews` in `lib/site.ts` to the true count and
  rating so the schema matches reality.

### Ongoing — local content that ranks

One post per fortnight, always with a local hook and a real photo:

- “What a Bikapur kirana shop needs on its website in 2026”
- “Google Business Profile mistakes we see in Ayodhya businesses”
- “Hotel vs homestay websites: what pilgrims actually search before visiting Ayodhya”
- “How much does a website cost in Faizabad? Real price bands”
- “Hindi or English website for a Lucknow service business?”

Each post must link to one service page and one location page. That internal link is what makes
the post earn rankings instead of sitting alone.

### Local link opportunities (realistic, no paid schemes)

- Ayodhya/Faizabad news sites covering local business (pitch a data story: “we reviewed 50 local
  business websites — here's what's broken”).
- District industry association / chamber membership page listing.
- Supplier and partner pages (hosting, POS, payment gateway partner directories).
- Sponsoring a local event or coaching-centre workshop, with a linked thank-you page.
- Free website clinics at a local college — press usually covers it.

### Tracking (monthly, 15 minutes)

| Metric | Where |
|---|---|
| GBP views, calls, direction requests, website clicks | GBP Insights |
| Map-pack rank for 10 local keywords | Manual incognito search (log it) |
| Organic sessions to location pages | Search Console |
| Enquiries by city | Supabase `enquiries` table (`source_page`) |

---

## Part B — Global SEO (Dubai · London · New York + everywhere else)

You cannot out-rank local agencies in those cities for head terms. Compete where you have an
actual edge: **price transparency, speed of delivery, and India-based economics**.

### Positioning that wins overseas searches

Target comparison and intent queries, not “web design London”:

- “outsourced web design India for UK agencies”
- “hire Next.js developer India fixed price”
- “Shopify development India vs local agency cost”
- “white label web design partner for marketing agencies”
- “offshore SEO team India retainers”

Those queries have real commercial intent, far less competition, and they match how you actually
win work. Build **three landing pages**: `/for/uk-agencies`, `/for/us-startups`,
`/for/uae-businesses` — each with pricing in GBP/USD/AED, overlap hours, and a sample deliverable.

### Technical requirements for overseas ranking

- Prices in the local currency on those pages; local spelling (organise/organization) per market.
- Stated working hours in the client's time zone, not just IST.
- Case studies with the client's city named (already on `/work`).
- `hreflang` only if you build real translated/localised versions — never fake it.
- Trust signals overseas buyers check: named team, written contract, IP ownership clause,
  GDPR-aware forms (already implemented), NDA willingness, payment methods.

### When to consider a country subfolder

Only after you have 3+ clients in that market. Then `devshivansh.in/uk/` with genuinely
localised content (not machine-translated), its own case studies and GBP-equivalent citations.

---

## Part C — Thirty-day launch checklist

**Day 1–3**
- [ ] Deploy to Vercel, attach `devshivansh.in`, force HTTPS, verify redirects
- [ ] Add Supabase env vars, send a test enquiry, confirm the row lands
- [ ] Verify Google Search Console + Bing Webmaster, submit sitemap, request indexing
- [ ] Install analytics, mark form and WhatsApp events as conversions

**Day 4–7**
- [ ] Create/claim Google Business Profile, complete 100%, post 10 photos
- [ ] Instagram `@trust_pages` → business account, bio link, NAP in bio
- [ ] LinkedIn company page, Facebook page
- [ ] Ask your 5 most recent clients for a review (send the direct link)

**Day 8–14**
- [ ] 10 citations submitted (Justdial, Sulekha, IndiaMART, Bing Places, Apple Business Connect…)
- [ ] Publish post #1 (local SEO checklist) and link it from `/locations/bikapur`
- [ ] Replace illustrative case studies with 2 real, client-approved ones
- [ ] Screenshot the baseline: rankings, sessions, reviews, enquiries

**Day 15–30**
- [ ] 4 more reviews collected and replied to
- [ ] Publish post #2, refresh the homepage “selected work” section
- [ ] Run the AI prompt panel (40 prompts) and log results
- [ ] First monthly report: enquiries, rankings, traffic, next month's three priorities

---

## Part D — Rules that keep you safe

1. Never publish fake reviews, fake case studies or invented “award winner” claims. The site
   already labels illustrative work; keep that honest until real evidence replaces it.
2. Never buy links or use PBNs. One penalty costs more than a year of outreach.
3. Don't spin up dozens of thin city pages. Seven real pages beat seventy fake ones.
4. Keep prices consistent between pages, schema and `llms.txt` — AI assistants penalise
   contradictions by simply not citing you.
5. Reply to every enquiry within 12 hours. Local SEO buys the click; response time buys the job.
