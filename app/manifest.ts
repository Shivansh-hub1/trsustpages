import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — Web Design & SEO, Bikapur Ayodhya`,
    short_name: SITE.name,
    description: SITE.shortDesc,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2a245c",
    lang: "en-IN",
    categories: ["business", "design", "marketing"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
  };
}
