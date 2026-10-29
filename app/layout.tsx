import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";
import { graph, organizationSchema, localBusinessSchema, websiteSchema } from "@/lib/schema";

const outfit = localFont({
  src: [{ path: "../public/fonts/outfit-latin.woff2", weight: "300 700", style: "normal" }],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
  fallback: ["ui-sans-serif", "system-ui", "Segoe UI", "Arial"],
  adjustFontFallback: "Arial",
});

const poppins = localFont({
  src: [
    { path: "../public/fonts/poppins-300.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/poppins-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/poppins-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/poppins-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
  fallback: ["ui-sans-serif", "system-ui", "Segoe UI", "Arial"],
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Web Design & SEO Agency in Bikapur, Ayodhya | Trustpages",
    template: "%s | Trustpages",
  },
  description:
    "Web design, development and SEO studio in Bikapur, Ayodhya. We build fast, trusted websites that rank in Google and get cited by AI search.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  keywords: [
    "web design Bikapur",
    "web development Ayodhya",
    "website designer Bikapur",
    "SEO agency Ayodhya",
    "local SEO Uttar Pradesh",
    "digital marketing agency Bikapur",
    "Next.js website development India",
    "AEO GEO services",
    "AI search optimization agency",
    "ecommerce website development Ayodhya",
  ],
  category: "Web Design & Digital Marketing",
  alternates: {
    canonical: "/",
    languages: { "en-IN": "/", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: "Web Design & SEO Agency in Bikapur, Ayodhya | Trustpages",
    description:
      "Websites that earn trust and pages that convert. Design, development, SEO and AI-search visibility from a studio based in Bikapur, Ayodhya — working with clients across India, the UAE, UK and US.",
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "Trustpages — web design and SEO studio, Bikapur, Ayodhya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & SEO Agency in Bikapur, Ayodhya | Trustpages",
    description:
      "Websites that earn trust. Pages that convert. Design, development, SEO and AI-search visibility from Bikapur, Ayodhya.",
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg" }],
  },
  manifest: "/manifest.webmanifest",
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Bikapur, Ayodhya, Uttar Pradesh",
    "geo.position": `${SITE.address.geo.lat};${SITE.address.geo.lng}`,
    ICBM: `${SITE.address.geo.lat}, ${SITE.address.geo.lng}`,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#2a245c" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${outfit.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-white antialiased">
        <a
          href="#main"
          className="sr-only left-4 top-4 z-[100] rounded-full bg-navy px-5 py-3 font-display text-sm text-white focus:not-sr-only focus:absolute"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              graph([organizationSchema(), localBusinessSchema(), websiteSchema()]),
            ).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
