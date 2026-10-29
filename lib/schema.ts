import { SITE, SERVICES, FAQS, LOCATIONS, type Service } from "./site";

const ORG_ID = `${SITE.url}/#organization`;
const BUSINESS_ID = `${SITE.url}/#localbusiness`;
const WEBSITE_ID = `${SITE.url}/#website`;

export const abs = (path = "/") => new URL(path, SITE.url).toString();

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: { "@type": "ImageObject", url: abs(SITE.logo), width: 512, height: 512 },
    image: abs(SITE.ogImage),
    description: SITE.shortDesc,
    slogan: SITE.tagline,
    foundingDate: String(SITE.foundingYear),
    email: SITE.email,
    telephone: SITE.phone,
    sameAs: Object.values(SITE.social),
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        contactType: "sales",
        areaServed: ["IN", "AE", "GB", "US"],
        availableLanguage: ["en", "hi"],
      },
    ],
    knowsAbout: [
      "Web design",
      "Web development",
      "Search engine optimization",
      "Local SEO",
      "Answer engine optimization",
      "Generative engine optimization",
      "eCommerce development",
      "Digital marketing",
    ],
  };
}

export function localBusinessSchema() {
  return {
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": BUSINESS_ID,
    name: SITE.name,
    url: SITE.url,
    image: abs(SITE.ogImage),
    logo: abs(SITE.logo),
    description: SITE.shortDesc,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: SITE.priceRange,
    currenciesAccepted: "INR, USD",
    paymentAccepted: "UPI, Bank transfer, Credit card",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.address.geo.lat,
      longitude: SITE.address.geo.lng,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${SITE.name}, ${SITE.address.locality}, ${SITE.address.region}, India`,
    )}`,
    areaServed: [
      ...LOCATIONS.map((l) => ({
        "@type": "City",
        name: l.city,
        address: { "@type": "PostalAddress", addressCountry: l.country },
      })),
      { "@type": "Country", name: "India" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.reviews.ratingValue,
      reviewCount: SITE.reviews.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    parentOrganization: { "@id": ORG_ID },
    sameAs: Object.values(SITE.social),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    inLanguage: SITE.lang,
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE.url}/blog?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

export function serviceSchema(service: Service) {
  return {
    "@type": "Service",
    "@id": abs(`/services/${service.slug}/#service`),
    name: service.name,
    serviceType: service.name,
    description: service.blurb,
    url: abs(`/services/${service.slug}/`),
    provider: { "@id": BUSINESS_ID },
    areaServed: LOCATIONS.map((l) => ({ "@type": "City", name: l.city })),
    audience: { "@type": "BusinessAudience", audienceType: "Small and mid-sized businesses" },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: service.priceFrom.replace(/[^\d]/g, ""),
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
        minPrice: service.priceFrom.replace(/[^\d]/g, ""),
        description: `Starting from ${service.priceFrom}`,
      },
      availability: "https://schema.org/InStock",
      url: abs(`/services/${service.slug}/`),
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} deliverables`,
      itemListElement: service.deliverables.map((d) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: d },
      })),
    },
  };
}

export function servicesItemListSchema() {
  return {
    "@type": "ItemList",
    "@id": abs("/services/#list"),
    name: "Trustpages services",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: abs(`/services/${s.slug}/`),
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    "@id": `${abs("/")}#faq`,
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: abs(t.path),
    })),
  };
}

export function howToSchema() {
  return {
    "@type": "HowTo",
    "@id": `${abs("/")}#process`,
    name: "How Trustpages builds a website that ranks and converts",
    description:
      "The four-stage Trustpages delivery process: discovery, design and build, launch and indexing, then growth and reporting.",
    totalTime: "P21D",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Discover & plan",
        text: "Map the offer, buyer questions, competitors and the primary conversion action. Deliver a written scope, timeline and fixed price.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Design & build",
        text: "Design and code in parallel with weekly browser previews and incremental approval.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Launch & index",
        text: "Wire redirects, schema, analytics, sitemaps, Search Console and Google Business Profile before go-live.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Grow & report",
        text: "Monthly work on rankings, content, page speed and conversion experiments, reported in plain language.",
      },
    ],
  };
}

export function reviewsSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": `${abs("/")}#reviews`,
    name: SITE.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.reviews.ratingValue,
      reviewCount: SITE.reviews.reviewCount,
      bestRating: 5,
    },
  };
}

/** Wraps any set of nodes into a single @graph document. */
export function graph(nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.map((n) => ({ ...n })),
  };
}

export function homeGraph() {
  return graph([
    organizationSchema(),
    localBusinessSchema(),
    websiteSchema(),
    servicesItemListSchema(),
    faqSchema(FAQS),
    howToSchema(),
  ]);
}
