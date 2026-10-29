import type { MetadataRoute } from "next";
import { SITE, SERVICES, LOCATIONS, BLOG_POSTS } from "@/lib/site";

const BASE = SITE.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/services/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/work/`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/about/`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/locations/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${BASE}/contact/`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${BASE}/faq/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/privacy/`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/terms/`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const services: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BASE}/services/${s.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const locations: MetadataRoute.Sitemap = LOCATIONS.map((l) => ({
    url: `${BASE}/locations/${l.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: l.kind === "local" ? 0.85 : 0.65,
  }));

  const posts: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${BASE}/blog/${p.slug}/`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...core, ...services, ...locations, ...posts];
}
