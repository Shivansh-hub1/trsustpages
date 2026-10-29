# Deploy — Vercel + Supabase + devshivansh.in

Everything in the repo is ready. Two paths: dashboard (2 minutes) or CLI (1 minute).

---

## Option 1 — Vercel CLI (fastest, recommended)

```bash
cd trustpages
npx vercel login                 # opens browser, authorise
npx vercel link                  # create/link project "trustpages"
npx vercel env add SUPABASE_URL production
npx vercel env add SUPABASE_SERVICE_ROLE_KEY production
npx vercel env add SUPABASE_URL preview
npx vercel env add SUPABASE_SERVICE_ROLE_KEY preview
npx vercel --prod                # build + deploy
npx vercel domains add devshivansh.in
npx vercel domains add www.devshivansh.in
```

Values to paste when prompted:

```
SUPABASE_URL=https://nbywcfyrezqiiugqluty.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<the service_role key from Supabase → Settings → API>
```

Then in Vercel → Project → Settings → Domains, set **www → redirect to apex**.

---

## Option 2 — Vercel dashboard

1. **vercel.com/new** → *Import Git Repository* (push this folder to GitHub first) **or**
   drag the project folder in. Framework auto-detects as **Next.js**; leave build settings alone
   (`next build`, output `.next`).
2. **Settings → Environment Variables** — add both keys (Production + Preview):
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
3. **Deploy**.
4. **Settings → Domains → Add** `devshivansh.in`, then add `www.devshivansh.in` and choose
   “Redirect to devshivansh.in”.
5. Vercel will show the DNS record it wants. You already added a CNAME — confirm it matches:

   | Type | Name | Value | TTL |
   |---|---|---|---|
   | A | `@` | `76.76.21.21` | Auto (apex) |
   | CNAME | `www` | `cname.vercel-dns.com` | Auto |

   Apex domains cannot use a CNAME in plain DNS; if your registrar only allows a CNAME at the
   root, switch the nameservers to Vercel's (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`) or use
   your provider's ALIAS/ANAME record pointed at `cname.vercel-dns.com`.
6. Wait for **Valid Configuration** (usually under 5 minutes, up to 24h for DNS propagation).
   Vercel issues the Let's Encrypt certificate automatically — no action needed.
7. Set the apex as **primary** so `www` 308-redirects to it (avoids duplicate content).

---

## Verify after deploy

```bash
curl -I https://devshivansh.in                      # 200, HSTS header, no x-powered-by
curl -s  https://devshivansh.in/robots.txt          # sitemap + AI bot rules
curl -s  https://devshivansh.in/sitemap.xml | head  # 30 URLs
curl -s  https://devshivansh.in/llms.txt | head     # AI summary present
curl -sI https://www.devshivansh.in                 # 308 → apex
```

Test the live form:

```bash
curl -s -X POST https://devshivansh.in/api/enquiry \
  -H 'Content-Type: application/json' \
  -d '{"name":"Launch Test","phone":"+918303172373","message":"post-deploy check"}'
# {"ok":true}
```

Then confirm in Supabase → Table editor → `enquiries`.

**Post-deploy SEO steps** (Search Console verification, sitemap submission, indexing requests,
analytics, Google Business Profile) are in `docs/LOCAL-SEO-PLAYBOOK.md`, Part C.

---

## Supabase details already provisioned

| Item | Value |
|---|---|
| Project | `trustpages` |
| Ref | `nbywcfyrezqiiugqluty` |
| Region | `ap-south-1` (Mumbai — closest to Ayodhya) |
| Table | `public.enquiries` (RLS on, zero public policies) |
| API route | `POST /api/enquiry` (server-side only, rate-limited, honeypot) |

Get the service-role key from: Supabase dashboard → Project → **Settings → API → Project API keys
→ `service_role`**. Never put it in `NEXT_PUBLIC_*` or in client code.

Optional: turn on email alerts for new rows with a Supabase Database Webhook → your inbox, or add
a scheduled Edge Function that emails a daily digest.

---

## Local development

```bash
npm install
cp .env.example .env.local   # paste the same two values
npm run dev
```
