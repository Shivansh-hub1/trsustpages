import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * robots.txt — explicit allowance for AI crawlers (GEO) alongside classic search bots.
 * Answers in AI products need to be crawlable; blocking GPTBot etc. makes citation impossible.
 */
export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-User",
    "Claude-SearchBot",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "Applebot-Extended",
    "CCBot",
    "cohere-ai",
    "Amazonbot",
    "meta-externalagent",
    "YouBot",
    "Bingbot",
    "DuckDuckBot",
  ];

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/"] },
      ...aiBots.map((ua) => ({ userAgent: ua, allow: "/" })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
