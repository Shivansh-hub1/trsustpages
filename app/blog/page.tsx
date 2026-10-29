import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { PageHero, JsonLd, CTABand } from "@/components/ui";
import { BLOG_POSTS } from "@/lib/site";
import { breadcrumbSchema, graph, abs } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog — SEO, AEO, GEO and Website Notes",
  description:
    "Practical notes on local SEO in Uttar Pradesh, AEO and GEO, AI search visibility and what a website should cost in India — written for owners, not marketers.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Trustpages blog — SEO, AEO and GEO without the buzzwords",
    description: "Plain-language guides for business owners, not marketers.",
    url: abs("/blog/"),
  },
};

const trail = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

export default function BlogIndex() {
  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema(trail),
          {
            "@type": "Blog",
            "@id": abs("/blog/#blog"),
            name: "Trustpages blog",
            description: "Guidance on local SEO, AI search visibility and website projects.",
            inLanguage: "en-IN",
            publisher: { "@id": `${abs("/")}#organization` },
            blogPost: BLOG_POSTS.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              url: abs(`/blog/${p.slug}/`),
              datePublished: p.date,
              author: { "@type": "Person", name: p.author },
            })),
          },
        ])}
      />

      <PageHero
        eyebrow="Notes from the studio"
        title="Plain writing about being"
        highlight="findable online"
        intro={
          <>
            No listicles, no recycled tactics. These are the explanations we give clients on calls,
            written down once so we can point at them.
          </>
        }
        trail={trail}
      />

      <section className="section">
        <div className="shell grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="card-flat flex flex-col overflow-hidden">
              <div className="h-1.5 w-full bg-grad" />
              <div className="flex flex-1 flex-col p-6">
                <span className="w-fit rounded-full bg-lilac/70 px-2.5 py-1 font-display text-[0.68rem] font-semibold uppercase tracking-wider text-plum">
                  {post.category}
                </span>
                <h2 className="h-card mt-4 text-[1.05rem]">
                  <Link href={`/blog/${post.slug}`} className="hover:text-plum">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 flex-1 text-[0.88rem] leading-relaxed text-body">{post.excerpt}</p>
                <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-[0.74rem] text-body">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </time>
                  <span>{post.readingTime}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 font-display text-[0.82rem] font-medium text-navy hover:text-plum"
                >
                  Read article <Icon name="arrow" size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABand
        title="Prefer a conversation to a blog post?"
        body="Thirty minutes on a call usually beats an hour of reading. We will look at your site live and tell you what we would change first."
      />
    </>
  );
}
