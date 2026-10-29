/**
 * Trustpages — single source of truth for brand, NAP, services, locations and copy.
 * Everything editable lives here so SEO/schema and UI never drift apart.
 */

export const SITE = {
  name: "Trustpages",
  legalName: "Trustpages Digital Studio",
  tagline: "Websites that earn trust. Pages that convert.",
  shortDesc:
    "Trustpages is a web design, development and digital growth studio based in Bikapur, Ayodhya, Uttar Pradesh — building fast, trusted, search- and AI-visible websites for local businesses and global brands.",
  url: "https://devshivansh.in",
  locale: "en_IN",
  lang: "en-IN",
  foundingYear: 2021,
  priceRange: "₹₹",
  phone: "+918303172373",
  phoneDisplay: "+91 83031 72373",
  whatsapp: "918303172373",
  email: "newtonsir869@gmail.com",
  logo: "/icon.svg",
  ogImage: "/og.png",
  address: {
    street: "Bikapur Main Road",
    locality: "Bikapur, Ayodhya",
    region: "Uttar Pradesh",
    regionCode: "UP",
    postalCode: "224204",
    country: "IN",
    countryName: "India",
    geo: { lat: 26.5683, lng: 82.1756 },
  },
  hours: "Mon–Sat, 10:00–19:00 IST",
  responseWindow: "within 12 business hours",
  social: {
    instagram: "https://www.instagram.com/trust_pages",
  },
  reviews: {
    ratingValue: 5,
    reviewCount: 27,
    source: "Google Business Profile",
  },
} as const;

export const STATS = [
  { value: "60+", label: "Projects delivered", note: "Websites, stores, dashboards" },
  { value: "4+", label: "Years of hands-on craft", note: "Since 2021" },
  { value: "18", label: "Industries served", note: "Local retail to global SaaS" },
  { value: "< 12 hrs", label: "Reply time", note: "Mon–Sat, IST" },
];

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  icon: string;
  blurb: string;
  hook: string;
  priceFrom: string;
  deliverables: string[];
  outcomes: { title: string; body: string }[];
  process: { step: string; title: string; body: string }[];
  faqs: { q: string; a: string }[];
  keywords: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "website-design",
    name: "Website Design & UI/UX",
    shortName: "Website Design",
    tagline: "Design that earns trust in 5 seconds",
    icon: "layout",
    blurb:
      "Conversion-first website design in Bikapur and worldwide — clear hierarchy, honest copy, and a system your team can extend without redesigning.",
    hook: "Look credible, load fast, and guide every visitor to the next step.",
    priceFrom: "₹24,999",
    deliverables: [
      "Brand-aligned design system (colour, type, components)",
      "Mobile-first wireframes for every page template",
      "High-fidelity Figma screens with clickable prototype",
      "Copy structure and CTA mapping per page",
      "Design QA against WCAG 2.2 AA contrast and focus rules",
      "Handover kit: tokens, spacing, icon set, usage notes",
    ],
    outcomes: [
      {
        title: "Trust at first scroll",
        body: "Proof, clarity and pricing signals live above the fold so a stranger knows within seconds that you solve their problem.",
      },
      {
        title: "Fewer dead ends",
        body: "Every template has one primary action, one secondary action, and a clear path for people who are not ready yet.",
      },
      {
        title: "Design that survives growth",
        body: "Componentised tokens mean new service or city pages inherit the brand instead of fragmenting it.",
      },
    ],
    process: [
      { step: "01", title: "Audit", body: "We map your current funnel, competitors and customer objections." },
      { step: "02", title: "Structure", body: "Sitemap and message hierarchy before any pixels." },
      { step: "03", title: "Design", body: "Two directions, one chosen, refined to a full component set." },
      { step: "04", title: "Handover", body: "Tokens, specs and QA checklist handed to development." },
    ],
    faqs: [
      {
        q: "How long does a website design project take?",
        a: "A five-page business site takes 10–15 working days from kickoff to handover. Larger or multi-language projects are scoped in two-week sprints.",
      },
      {
        q: "Do I get the design files?",
        a: "Yes. You own the Figma file, the design tokens and the icon set at handover. No lock-in.",
      },
      {
        q: "Can you redesign an existing site without losing rankings?",
        a: "Yes — we inventory URLs, preserve top-performing pages, map 301 redirects and keep templates crawlable before launch.",
      },
    ],
    keywords: [
      "website design Bikapur",
      "website designer Ayodhya",
      "UI UX design Uttar Pradesh",
      "conversion focused web design India",
    ],
  },
  {
    slug: "web-development",
    name: "Web & App Development",
    shortName: "Web Development",
    tagline: "Fast, clean, maintainable code",
    icon: "code",
    blurb:
      "Next.js, React and headless CMS builds engineered for Core Web Vitals, accessibility and long-term maintainability — not just a pretty launch.",
    hook: "Hand-built front ends with performance budgets, not bloated page builders.",
    priceFrom: "₹39,999",
    deliverables: [
      "Next.js or React front end with a performance budget",
      "Headless CMS so your team edits copy without a developer",
      "Technical SEO baseline: sitemap, robots, canonical, schema",
      "Analytics and conversion event tracking",
      "Staging environment and a launch checklist",
      "30 days of post-launch bug cover",
    ],
    outcomes: [
      {
        title: "Green Core Web Vitals",
        body: "Server rendering, image optimisation and font discipline keep LCP under 2.5s on real 4G handsets.",
      },
      {
        title: "Independent content team",
        body: "A headless CMS with typed fields means no broken layouts when someone publishes a blog post.",
      },
      {
        title: "Own the source",
        body: "Code lives in your repository. We document the architecture so any developer can continue.",
      },
    ],
    process: [
      { step: "01", title: "Architecture", body: "Routes, data model, integrations and performance budget agreed in writing." },
      { step: "02", title: "Build", body: "Component-first development with weekly previews." },
      { step: "03", title: "Harden", body: "Lighthouse, axe, form and redirect testing." },
      { step: "04", title: "Launch", body: "DNS cutover, monitoring, and a rollback plan." },
    ],
    faqs: [
      {
        q: "Do you build on WordPress or custom code?",
        a: "Both. Small brochure sites often suit WordPress with a lightweight theme. Performance-critical or integration-heavy projects suit Next.js with a headless CMS.",
      },
      {
        q: "Who hosts the website?",
        a: "We deploy to Vercel, Cloudflare Pages or your existing host. You keep ownership of the account and pay provider costs directly.",
      },
      {
        q: "Can you work with our in-house developer?",
        a: "Yes. We can hand over components, write integration specs, or pair with your team during the build.",
      },
    ],
    keywords: [
      "web development Bikapur",
      "Next.js developer India",
      "website developer Ayodhya",
      "custom web application Uttar Pradesh",
    ],
  },
  {
    slug: "seo-services",
    name: "SEO Services",
    shortName: "SEO",
    tagline: "Rank for what actually sells",
    icon: "search",
    blurb:
      "Local and national SEO built on technical hygiene, search-intent content and genuine local authority — measured in qualified enquiries, not vanity keywords.",
    hook: "Technical fixes, intent-led content, and local signals that compound.",
    priceFrom: "₹15,000/mo",
    deliverables: [
      "Technical audit: crawl, index, speed, schema, internal links",
      "Keyword and intent map tied to service pages",
      "On-page optimisation and metadata architecture",
      "Google Business Profile optimisation and review workflow",
      "Local citations and NAP consistency",
      "Monthly reporting on rankings, traffic and enquiries",
    ],
    outcomes: [
      {
        title: "Local map pack presence",
        body: "Category, service-area and review signals tuned for 'near me' searches in Bikapur, Ayodhya and Faizabad.",
      },
      {
        title: "Pages that match intent",
        body: "One page per real job-to-be-done, with the language buyers actually type.",
      },
      {
        title: "Reported honestly",
        body: "We report leads and rankings, including the months that go sideways.",
      },
    ],
    process: [
      { step: "01", title: "Audit", body: "Baseline crawl, index coverage, competitor gap analysis." },
      { step: "02", title: "Fix", body: "Technical debt first: speed, schema, internal links, duplicates." },
      { step: "03", title: "Expand", body: "Service and location content built around demand." },
      { step: "04", title: "Compound", body: "Links, reviews and refreshes on a monthly cadence." },
    ],
    faqs: [
      {
        q: "How long before SEO shows results?",
        a: "Local map-pack movement usually appears in 4–8 weeks. Competitive national terms typically take 4–6 months of consistent work.",
      },
      {
        q: "Do you guarantee first-page rankings?",
        a: "No, and be wary of anyone who does. Search results are controlled by Google. We commit to the work, the reporting and the technical standard.",
      },
      {
        q: "Is local SEO different from regular SEO?",
        a: "Yes. Local SEO adds Google Business Profile, citations, reviews and proximity signals on top of standard on-page and technical work.",
      },
    ],
    keywords: [
      "SEO services Bikapur",
      "local SEO Ayodhya",
      "SEO agency Uttar Pradesh",
      "small business SEO India",
    ],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing & Ads",
    shortName: "Digital Marketing",
    tagline: "Budget in, qualified leads out",
    icon: "megaphone",
    blurb:
      "Google Ads, Meta Ads and social content managed against one number that matters: cost per qualified enquiry.",
    hook: "Tight targeting, honest creative, and weekly spend reviews.",
    priceFrom: "₹18,000/mo",
    deliverables: [
      "Account and tracking audit (GA4, conversions, call tracking)",
      "Campaign structure by intent and geography",
      "Ad creative and landing page copy",
      "Lead quality feedback loop with your sales team",
      "Weekly optimisation and monthly performance review",
      "Budget pacing and negative keyword hygiene",
    ],
    outcomes: [
      {
        title: "Leads you can call",
        body: "Forms qualified with the detail your team needs to have a real first conversation.",
      },
      {
        title: "Lower wasted spend",
        body: "Search-term and audience reviews catch junk traffic in week one, not month three.",
      },
      {
        title: "Creative that fits the market",
        body: "Bilingual hooks — Hindi and English — tested for tier-2 and tier-3 Indian audiences.",
      },
    ],
    process: [
      { step: "01", title: "Measurement", body: "Conversion tracking and CRM handoff verified before spend." },
      { step: "02", title: "Launch", body: "Tight test campaigns with small daily budgets." },
      { step: "03", title: "Iterate", body: "Scale winners, kill losers, refresh creative every fortnight." },
      { step: "04", title: "Review", body: "Monthly readout: spend, CPL, lead quality, next bets." },
    ],
    faqs: [
      {
        q: "What ad budget do I need to start?",
        a: "For a local service business we usually recommend ₹15,000–₹30,000 per month in media spend to gather statistically useful data, separate from management fees.",
      },
      {
        q: "Do you run WhatsApp and call campaigns?",
        a: "Yes. Click-to-WhatsApp and call-only campaigns are often the highest-intent channels for Indian local businesses.",
      },
      {
        q: "Who owns the ad accounts?",
        a: "You do. We work inside your Google Ads and Meta Business accounts, never behind an agency-owned shell.",
      },
    ],
    keywords: [
      "digital marketing agency Bikapur",
      "Google Ads agency Ayodhya",
      "PPC services Uttar Pradesh",
      "Facebook ads for local business India",
    ],
  },
  {
    slug: "ecommerce",
    name: "eCommerce Development",
    shortName: "eCommerce",
    tagline: "Stores that survive Indian realities",
    icon: "cart",
    blurb:
      "Shopify and headless storefronts built for UPI payments, COD workflows, WhatsApp support and fast mobile checkout.",
    hook: "Fewer taps to checkout. Fewer rupees lost to drop-off.",
    priceFrom: "₹59,999",
    deliverables: [
      "Catalogue structure, variants and collections",
      "UPI, cards, netbanking and COD payment flows",
      "Shipping, tax and invoice configuration",
      "Mobile-first product and checkout templates",
      "Product schema for rich results",
      "Abandoned-cart and post-purchase email flows",
    ],
    outcomes: [
      {
        title: "Checkout built for phones",
        body: "Single-column, thumb-reachable checkout with address autofill and one-tap UPI.",
      },
      {
        title: "Fewer order enquiries",
        body: "Clear shipping, returns and COD answers placed before the cart, not after.",
      },
      {
        title: "Products found in search",
        body: "Product and Offer schema plus feed hygiene so listings can appear in Shopping and AI answers.",
      },
    ],
    process: [
      { step: "01", title: "Catalogue", body: "Products, variants, pricing rules and fulfilment mapped." },
      { step: "02", title: "Build", body: "Theme or headless storefront with payment and shipping wired." },
      { step: "03", title: "Test", body: "Real-device order tests across payment methods." },
      { step: "04", title: "Grow", body: "Feeds, email flows and CRO experiments after launch." },
    ],
    faqs: [
      {
        q: "Shopify or WooCommerce?",
        a: "Shopify if you want low maintenance and reliable hosting. WooCommerce if you need deep WordPress integration or very custom pricing logic.",
      },
      {
        q: "Can you migrate my existing store?",
        a: "Yes — products, customers, orders and URL redirects migrate with a staging rehearsal and a rollback plan.",
      },
      {
        q: "Do you support UPI and cash on delivery?",
        a: "Yes, both are configured as standard for Indian stores, along with COD verification flows to reduce fake orders.",
      },
    ],
    keywords: [
      "ecommerce website development Bikapur",
      "Shopify developer India",
      "online store design Uttar Pradesh",
      "WooCommerce development Ayodhya",
    ],
  },
  {
    slug: "ai-search-optimization",
    name: "AEO & GEO — AI Search Visibility",
    shortName: "AI Search (AEO/GEO)",
    tagline: "Be the answer, not a footnote",
    icon: "spark",
    blurb:
      "Answer Engine Optimisation and Generative Engine Optimisation: structured, extractable content that ChatGPT, Gemini, Perplexity and AI Overviews can quote accurately.",
    hook: "Entity clarity, clean schema, and answer-first writing.",
    priceFrom: "₹20,000/mo",
    deliverables: [
      "Entity audit: how models currently describe your brand",
      "Schema graph: Organization, LocalBusiness, Service, FAQ, Article",
      "Answer-first content blocks with question headings",
      "llms.txt and crawl policy for AI agents",
      "Citation and directory cleanup across the web",
      "Monthly prompt-panel testing across major AI assistants",
    ],
    outcomes: [
      {
        title: "Accurate brand facts in AI answers",
        body: "Consistent NAP, services and differentiators give models one version of the truth to quote.",
      },
      {
        title: "Quotable passage structure",
        body: "Short, self-contained answers with a definition sentence are the units that get retrieved and cited.",
      },
      {
        title: "Measured, not guessed",
        body: "We track a fixed panel of buyer prompts monthly and log where you appear.",
      },
    ],
    process: [
      { step: "01", title: "Baseline", body: "Prompt panel run across assistants, results logged." },
      { step: "02", title: "Structure", body: "Schema graph and answer blocks deployed." },
      { step: "03", title: "Authority", body: "Citations, comparisons and third-party mentions earned." },
      { step: "04", title: "Monitor", body: "Monthly re-run, gaps turned into content briefs." },
    ],
    faqs: [
      {
        q: "What is the difference between SEO, AEO and GEO?",
        a: "SEO earns rankings in a list of links. AEO earns a direct answer in a featured snippet, voice result or FAQ block. GEO earns a mention or citation inside a generated answer from an AI assistant. They share a foundation: crawlable pages, clean structure and genuine expertise.",
      },
      {
        q: "Can you guarantee ChatGPT will recommend my business?",
        a: "No one can. Models are probabilistic and change often. What we can do is make the correct facts easy to retrieve, well-structured and widely corroborated — which measurably improves citation odds.",
      },
      {
        q: "How do you measure AI visibility?",
        a: "We run a fixed panel of 40–60 buyer-intent prompts each month across ChatGPT, Gemini, Perplexity and AI Overviews, and log mentions, sentiment and cited URLs.",
      },
    ],
    keywords: [
      "AEO services India",
      "GEO generative engine optimization",
      "AI search visibility agency",
      "get cited by ChatGPT business",
    ],
  },
];

export type LocationPage = {
  slug: string;
  city: string;
  region: string;
  country: string;
  kind: "local" | "global";
  intro: string;
  localProof: string[];
  focus: string;
  landmark: string;
  faqs: { q: string; a: string }[];
};

export const LOCATIONS: LocationPage[] = [
  {
    slug: "bikapur",
    city: "Bikapur",
    region: "Uttar Pradesh",
    country: "India",
    kind: "local",
    intro:
      "We are based in Bikapur, Ayodhya district — which means a real conversation, in Hindi or English, with the people building your website. No call centre, no account-manager relay.",
    localProof: [
      "Walk-in or call meetings on Bikapur Main Road",
      "Same-day site visits across Ayodhya district",
      "Bilingual (Hindi/English) content and WhatsApp support",
      "Pricing built for tier-3 business budgets",
    ],
    focus: "Website design, local SEO and Google Business Profile for Bikapur shops, clinics, schools and service businesses.",
    landmark: "Bikapur Main Road, near the bus stand",
    faqs: [
      {
        q: "Can we meet in person in Bikapur?",
        a: "Yes. Book a slot by phone or WhatsApp and we will meet at our Bikapur office or at your premises anywhere in Ayodhya district.",
      },
      {
        q: "How much does a website cost for a Bikapur business?",
        a: "A five-page business website with mobile design, contact forms and basic SEO starts at ₹24,999. Local SEO retainers start at ₹15,000 per month.",
      },
      {
        q: "Do you work with shops that have no online presence yet?",
        a: "That is most of our local work. We start with a Google Business Profile, a one-page site and WhatsApp ordering, then expand once enquiries arrive.",
      },
    ],
  },
  {
    slug: "ayodhya",
    city: "Ayodhya",
    region: "Uttar Pradesh",
    country: "India",
    kind: "local",
    intro:
      "Ayodhya's visitor economy moves fast and seasonally. We build sites for hotels, homestays, tour operators, restaurants and retail that need to be found in a hurry and trusted on a phone screen.",
    localProof: [
      "Tourism and hospitality conversion patterns",
      "Multilingual content (Hindi, English, Awadhi tone)",
      "Booking and WhatsApp enquiry flows",
      "Seasonal campaign planning around festival footfall",
    ],
    focus: "Hospitality, tourism and retail websites plus local SEO for the Ayodhya–Faizabad belt.",
    landmark: "Ayodhya–Faizabad highway corridor",
    faqs: [
      {
        q: "Do you build hotel and homestay booking websites?",
        a: "Yes — direct booking pages with availability enquiry, WhatsApp confirmation and OTA-friendly photography, so you rely less on commission platforms.",
      },
      {
        q: "Can you rank a business for 'near me' searches in Ayodhya?",
        a: "Yes. We optimise your Google Business Profile, service areas, reviews and location pages together, which is what map-pack rankings actually depend on.",
      },
      {
        q: "Do you handle Hindi content?",
        a: "Yes, we write and optimise Hindi and English content, including hreflang setup if you run both languages.",
      },
    ],
  },
  {
    slug: "faizabad",
    city: "Faizabad",
    region: "Uttar Pradesh",
    country: "India",
    kind: "local",
    intro:
      "Faizabad is 20 minutes from our desk. We work with clinics, coaching centres, contractors and retailers who need a credible website and a Google profile that actually ranks.",
    localProof: [
      "Healthcare and education content compliance",
      "Lead forms tuned for phone-first buyers",
      "Local citation and directory cleanup",
      "On-site photography guidance for local businesses",
    ],
    focus: "Clinic, coaching and contractor websites with local SEO across Faizabad.",
    landmark: "Faizabad city, Ayodhya district",
    faqs: [
      {
        q: "Do you work with clinics and coaching centres?",
        a: "Yes. We build appointment-booking and admission-enquiry sites with the trust signals Indian patients and parents look for: credentials, results, location and reviews.",
      },
      {
        q: "How quickly can a Faizabad business get online?",
        a: "A one-page site with Google Business Profile setup can be live in 5–7 working days; a full five-page site typically takes two to three weeks.",
      },
      {
        q: "Do you provide website maintenance?",
        a: "Yes, monthly care plans cover updates, backups, uptime monitoring and small content edits.",
      },
    ],
  },
  {
    slug: "lucknow",
    city: "Lucknow",
    region: "Uttar Pradesh",
    country: "India",
    kind: "local",
    intro:
      "For Lucknow brands we operate as an embedded growth partner — design, build and SEO in one team, with weekly calls and a roadmap you can hold us to.",
    localProof: [
      "Competitive-market keyword and content strategy",
      "Conversion rate optimisation on existing traffic",
      "Paid search and social alongside organic",
      "Hindi–English brand voice work",
    ],
    focus: "Growth programmes for Lucknow SMEs, D2C brands and professional services.",
    landmark: "Lucknow, Uttar Pradesh",
    faqs: [
      {
        q: "Do you travel to Lucknow for meetings?",
        a: "Yes, we schedule in-person workshops in Lucknow when a project benefits from it. Most day-to-day collaboration happens on call and WhatsApp.",
      },
      {
        q: "Can you take over a site built by another agency?",
        a: "Yes. We start with a code, SEO and analytics audit, then agree a stabilisation sprint before any redesign.",
      },
      {
        q: "Do you offer performance-based pricing?",
        a: "Occasionally, for established brands with clean tracking. Standard engagements are fixed-scope project fees or monthly retainers.",
      },
    ],
  },
  {
    slug: "dubai",
    city: "Dubai",
    region: "Dubai",
    country: "United Arab Emirates",
    kind: "global",
    intro:
      "Dubai buyers judge a website in seconds and buy on trust. We deliver bilingual, mobile-first sites and lead systems for UAE service businesses at Indian studio economics.",
    localProof: [
      "Arabic/English layout considerations",
      "Gulf mobile-first and WhatsApp-first buying habits",
      "Local directory and citation setup",
      "Overlapping IST/GST working hours for calls",
    ],
    focus: "Website design, SEO and paid lead generation for Dubai and Sharjah SMEs.",
    landmark: "Dubai, UAE",
    faqs: [
      {
        q: "Do you work with UAE businesses from India?",
        a: "Yes. We work with Dubai and Sharjah clients remotely, with calls scheduled in Gulf Standard Time and delivery in English or Arabic-ready layouts.",
      },
      {
        q: "Can you invoice in AED or USD?",
        a: "Yes, international engagements are invoiced in USD, with AED accepted through bank transfer.",
      },
      {
        q: "Do you handle Arabic content?",
        a: "We handle layout, RTL structure and English copy, and coordinate native Arabic copywriting and review for client-facing content.",
      },
    ],
  },
  {
    slug: "london",
    city: "London",
    region: "England",
    country: "United Kingdom",
    kind: "global",
    intro:
      "For UK clients we act as a specialist build and SEO partner: UK-English content, GDPR-aware forms and analytics, and performance that holds up on British mobile networks.",
    localProof: [
      "UK-English copy and spelling conventions",
      "GDPR and cookie-consent-aware implementation",
      "Accessibility expectations (WCAG 2.2 AA)",
      "Clear overlap hours for London mornings",
    ],
    focus: "Accessible, fast websites and technical SEO for London and UK SMEs.",
    landmark: "London, United Kingdom",
    faqs: [
      {
        q: "How do time zones work for a UK project?",
        a: "We hold overlap hours during your morning (UK time), and share written updates so progress never depends on a live call.",
      },
      {
        q: "Do you build GDPR-compliant forms and analytics?",
        a: "Yes — consent-aware analytics, minimal form data collection and documented data flows are part of every UK build.",
      },
      {
        q: "Can you improve an existing WordPress site's Core Web Vitals?",
        a: "Yes. We audit hosting, images, fonts, plugins and caching, then re-test with field data after changes.",
      },
    ],
  },
  {
    slug: "new-york",
    city: "New York",
    region: "New York",
    country: "United States",
    kind: "global",
    intro:
      "New York is a crowded market where differentiation and speed decide the sale. We build tight, opinionated sites and measurable search programmes for US startups and service firms.",
    localProof: [
      "US-English copy and pricing conventions",
      "Conversion-focused landing pages for paid traffic",
      "Technical SEO for competitive metros",
      "Async-first collaboration across EST",
    ],
    focus: "Startup and professional-services websites with technical SEO for the US market.",
    landmark: "New York, USA",
    faqs: [
      {
        q: "Do you work in US business hours?",
        a: "We keep a morning overlap with EST and run async written updates so decisions are documented rather than lost in meetings.",
      },
      {
        q: "How do you price US projects?",
        a: "Fixed-scope project fees in USD, quoted after a discovery call. No hourly billing surprises.",
      },
      {
        q: "Can you work with our product and engineering team?",
        a: "Yes. We can deliver design systems, front-end components or a full build, and document everything for your team to own.",
      },
    ],
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Discover & plan",
    body: "We map your offer, buyer questions, competitors and the one action each page must drive. You leave with a written scope, timeline and fixed price.",
  },
  {
    step: "02",
    title: "Design & build",
    body: "Design and code move together in weekly previews. You review real pages in the browser, not static mockups, and approve incrementally.",
  },
  {
    step: "03",
    title: "Launch & index",
    body: "Redirects, schema, analytics, sitemaps, Search Console and Google Business Profile are wired before go-live — so the site is findable on day one.",
  },
  {
    step: "04",
    title: "Grow & report",
    body: "Monthly work on rankings, content, page speed and conversion experiments, reported in plain language with next month's priorities.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Our old site was a brochure nobody found. Trustpages rebuilt it around the questions our customers actually ask, and enquiries through the website went from rare to routine inside two months.",
    name: "Rakesh Verma",
    role: "Owner, Verma Interiors",
    place: "Ayodhya, Uttar Pradesh",
  },
  {
    quote:
      "They explained SEO without jargon and pushed back when we asked for things that would not help. The monthly report is the only agency report I actually read.",
    name: "Dr. Shalini Mishra",
    role: "Founder, Mishra Dental Care",
    place: "Faizabad, Uttar Pradesh",
  },
  {
    quote:
      "We came for a Shopify store and stayed for the growth work. Checkout is faster, product pages show up in search, and support is a WhatsApp message away.",
    name: "Amit Chaudhary",
    role: "Director, Awadh Handloom",
    place: "Lucknow, Uttar Pradesh",
  },
  {
    quote:
      "Working across time zones was the worry. It turned out to be the least of our problems — clear specs, weekly previews, and a launch that landed on the date promised.",
    name: "Daniel Okafor",
    role: "Marketing Lead, Northline Studio",
    place: "London, United Kingdom",
  },
];

export const PORTFOLIO = [
  {
    title: "Awadh Handloom",
    sector: "eCommerce · Lucknow",
    result: "+184% online orders in 6 months",
    detail: "Shopify storefront with UPI checkout and bilingual product pages.",
    tone: "plum",
    href: "/work#awadh-handloom",
  },
  {
    title: "Mishra Dental Care",
    sector: "Healthcare · Faizabad",
    result: "3× appointment enquiries",
    detail: "Appointment booking, local SEO and Google Business Profile overhaul.",
    tone: "navy",
    href: "/work#mishra-dental",
  },
  {
    title: "Ayodhya Heritage Stays",
    sector: "Hospitality · Ayodhya",
    result: "41% direct bookings, fewer OTA fees",
    detail: "Direct booking site with seasonal campaign pages.",
    tone: "sky",
    href: "/work#heritage-stays",
  },
  {
    title: "Verma Interiors",
    sector: "Interior Design · Ayodhya",
    result: "6.4s → 1.8s load time",
    detail: "Rebuilt gallery-heavy site into a fast Next.js portfolio.",
    tone: "lilac",
    href: "/work#verma-interiors",
  },
  {
    title: "Northline Studio",
    sector: "B2B Services · London",
    result: "+62% qualified demo requests",
    detail: "Positioning, landing pages and technical SEO for a UK consultancy.",
    tone: "navy",
    href: "/work#northline-studio",
  },
  {
    title: "Saryu Agro Logistics",
    sector: "Logistics · Uttar Pradesh",
    result: "One dashboard, 3 systems replaced",
    detail: "Custom shipment tracking portal and client dashboard.",
    tone: "plum",
    href: "/work#saryu-agro",
  },
];

export const FAQS = [
  {
    q: "What does Trustpages actually do?",
    a: "Trustpages is a web design and digital growth studio in Bikapur, Ayodhya, Uttar Pradesh. We design and build websites and online stores, then grow their visibility through SEO, Google Business Profile optimisation, paid ads and AI search optimisation (AEO/GEO).",
  },
  {
    q: "How much does a website cost?",
    a: "A five-page business website starts at ₹24,999. An eCommerce store starts at ₹59,999. Custom web applications and multi-language projects are quoted after a discovery call. Every quote is fixed before work begins, with no surprise line items.",
  },
  {
    q: "How long does it take to build a website?",
    a: "A one-page site takes 5–7 working days. A five-page business site takes 2–3 weeks. Larger builds run in two-week sprints, and you see working pages every week.",
  },
  {
    q: "Do you work with businesses outside Bikapur?",
    a: "Yes. We serve clients across Ayodhya, Faizabad, Lucknow and Varanasi in person, and work remotely with clients in Dubai, London and New York. All collaboration happens over call, WhatsApp and shared documents.",
  },
  {
    q: "What is AEO and GEO, and do I need them?",
    a: "Answer Engine Optimisation (AEO) helps your business appear in direct answers, featured snippets and voice results. Generative Engine Optimisation (GEO) helps AI assistants like ChatGPT, Gemini and Perplexity mention and cite you correctly. If your buyers research in AI tools — and a growing share do — it is worth doing alongside classic SEO.",
  },
  {
    q: "Will I own my website, domain and accounts?",
    a: "Always. The domain, hosting, Google Analytics, Search Console, Ads and code repository stay in your name. We work inside your accounts, not behind a reseller layer.",
  },
  {
    q: "Do you offer ongoing maintenance?",
    a: "Yes. Monthly care plans cover updates, backups, uptime monitoring, security checks and small content edits, starting at ₹3,500 per month.",
  },
  {
    q: "How do we start?",
    a: "Send a WhatsApp message or use the contact form. We reply within 12 business hours, ask a few questions about your goals, and book a free 30-minute call. If we are a good fit, you get a written scope and fixed quote within two working days.",
  },
];

export const DIFFERENTIATORS = [
  "Fixed scope and fixed price, agreed in writing before we start",
  "Design, code and SEO under one roof — no handoff gaps",
  "Bilingual Hindi/English work built for tier-2 and tier-3 India",
  "You own the domain, code, and every ad or analytics account",
  "Performance budgets enforced before launch, not audited afterwards",
  "Monthly reporting on enquiries and rankings, including the bad months",
  "Real local availability across Ayodhya, Faizabad, Lucknow and Varanasi",
  "AI-search ready structure: schema graph, llms.txt, answer-first pages",
];

export const BLOG_POSTS = [
  {
    slug: "local-seo-checklist-bikapur-businesses",
    title: "The local SEO checklist for Bikapur and Ayodhya businesses",
    excerpt:
      "Short answer: local SEO for a Bikapur business means winning the map pack first — Google Business Profile, consistent citations and reviews — then supporting it with service and location pages.",
    date: "2026-10-22",
    author: "Shivansh Tripathi",
    readingTime: "7 min read",
    category: "Local SEO",
    body: [
      {
        type: "p",
        text: "If you run a shop, clinic or service business in Bikapur or anywhere in Ayodhya district, most of your new customers will find you through a map result or a 'near me' search on a phone. That means local SEO is not a marketing extra — it is the front door.",
      },
      {
        type: "h2",
        text: "1. Claim and complete your Google Business Profile",
      },
      {
        type: "p",
        text: "Verify the listing, choose the most specific primary category, add your real address and service area, set hours that include Saturday, and upload at least ten genuine photos taken inside your premises. Listings with photographs and complete attributes get materially more calls than bare listings.",
      },
      {
        type: "h2",
        text: "2. Make your name, address and phone number identical everywhere",
      },
      {
        type: "p",
        text: "Your website footer, Google Business Profile, Justdial, IndiaMART and Facebook page should show the same name spelling, the same phone number and the same area. Small mismatches split the signals Google uses to decide which business is which.",
      },
      {
        type: "h2",
        text: "3. Ask for reviews the same day, every time",
      },
      {
        type: "p",
        text: "Send a short WhatsApp link to your review form while the customer is still with you. Ten reviews collected over two months beats fifty collected in one burst — steady recency is what the ranking systems weight.",
      },
      {
        type: "h2",
        text: "4. Build one page per service, not one page for everything",
      },
      {
        type: "p",
        text: "A page titled 'Services' ranks for nothing in particular. A page titled 'AC repair in Bikapur — same-day service' can rank for exactly the searches people type when they have a broken AC in July.",
      },
      {
        type: "h2",
        text: "5. Answer questions in the page, in the first two sentences",
      },
      {
        type: "p",
        text: "Whether the answer is shown in a Google snippet, a voice result or an AI assistant, the passage that gets lifted is short, self-contained and direct. Put the answer first, then the explanation.",
      },
    ],
  },
  {
    slug: "aeo-geo-explained",
    title: "AEO and GEO, explained without the buzzwords",
    excerpt:
      "Short answer: SEO earns a ranking, AEO earns a direct answer, and GEO earns a mention inside an AI-generated response. All three depend on clean structure, clear facts and genuine expertise.",
    date: "2026-10-14",
    author: "Shivansh Tripathi",
    readingTime: "6 min read",
    category: "AI Search",
    body: [
      {
        type: "p",
        text: "Three acronyms now sit on every marketing deck: SEO, AEO and GEO. They describe different surfaces, not different religions.",
      },
      { type: "h2", text: "SEO: the list of links" },
      {
        type: "p",
        text: "Classic search optimisation earns you a position in a ranked list. The user chooses. Your job is to be crawlable, relevant, fast and authoritative enough to sit high on that list.",
      },
      { type: "h2", text: "AEO: the single answer" },
      {
        type: "p",
        text: "Answer Engine Optimisation targets the one-answer surfaces: featured snippets, People Also Ask, voice assistants. It rewards question-shaped headings followed immediately by a 40–60 word answer that stands alone without the surrounding page.",
      },
      { type: "h2", text: "GEO: the generated response" },
      {
        type: "p",
        text: "Generative Engine Optimisation is about being retrievable and quotable when a model composes an answer. That requires three things: facts that are consistent across the web, structured data that machines can parse without guessing, and third-party corroboration — because models repeat what multiple sources agree on.",
      },
      { type: "h2", text: "What to actually do this quarter" },
      {
        type: "p",
        text: "Publish a clear services page per offering. Add Organization, LocalBusiness, Service and FAQ schema. Keep your name, address and phone consistent. Write answer-first paragraphs. Register a canonical 'about' page that states plainly what you do, who you serve and where you operate. Then measure: run a fixed set of buyer prompts in ChatGPT, Gemini and Perplexity every month and log whether you appear.",
      },
    ],
  },
  {
    slug: "website-cost-india-2026",
    title: "What a business website should cost in India in 2026",
    excerpt:
      "Short answer: in 2026 a credible five-page Indian business website costs ₹25,000–₹60,000, an eCommerce store ₹60,000–₹2,00,000, and anything under ₹10,000 usually means a rented template you do not own.",
    date: "2026-10-02",
    author: "Shivansh Tripathi",
    readingTime: "8 min read",
    category: "Pricing",
    body: [
      {
        type: "p",
        text: "Website quotes in India range from ₹3,000 to ₹5,00,000 for what sounds like the same deliverable. The difference is almost never the number of pages — it is ownership, performance and the work behind the homepage.",
      },
      { type: "h2", text: "What the cheap tier really is" },
      {
        type: "p",
        text: "Below roughly ₹10,000 you are usually buying a template installed on a shared host, with a stock theme, no performance work and a domain registered in someone else's name. It can be fine as a placeholder. It rarely ranks and it is hard to leave.",
      },
      { type: "h2", text: "The work that actual budget buys" },
      {
        type: "p",
        text: "Message hierarchy and copy structure. Mobile-first layouts. Image and font discipline for Core Web Vitals. Schema markup. Redirect mapping. Analytics and conversion tracking. Accessibility checks. A handover document. None of that appears in a ₹5,000 invoice because none of it fits in a ₹5,000 schedule.",
      },
      { type: "h2", text: "A sane 2026 range" },
      {
        type: "p",
        text: "Five-page business site: ₹25,000–₹60,000. eCommerce with 100 products, UPI and COD: ₹60,000–₹2,00,000. Custom dashboard or portal: ₹1,50,000 upward. Monthly SEO retainer: ₹15,000–₹40,000 depending on market competitiveness. Ongoing care: ₹2,000–₹6,000.",
      },
      { type: "h2", text: "Questions to ask before you pay" },
      {
        type: "p",
        text: "Whose name is the domain in? Will I get the code and design files? What happens if I stop paying? Which performance score will you guarantee at launch, and on which device? Who owns the Google Ads and Analytics accounts? A vendor who answers all five clearly is worth a premium.",
      },
    ],
  },
];
