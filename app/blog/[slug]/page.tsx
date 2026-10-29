import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icons";
import { JsonLd, Breadcrumbs, CTABand } from "@/components/ui";
import { BLOG_POSTS, SITE } from "@/lib/site";
import { breadcrumbSchema, graph, abs } from "@/lib/schema";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  const seoTitle =
    post.title.length > 52 ? `${post.title.slice(0, 49).trimEnd()}…` : post.title;
  return {
    title: seoTitle,
    description: post.excerpt.slice(0, 158),
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: seoTitle,
      description: post.excerpt.slice(0, 158),
      url: abs(`/blog/${post.slug}/`),
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const trail = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug);

  return (
    <>
      <JsonLd
        data={graph([
          {
            "@type": "BlogPosting",
            "@id": abs(`/blog/${post.slug}/#article`),
            headline: post.title,
            description: post.excerpt.slice(0, 158),
            datePublished: post.date,
            dateModified: post.date,
            inLanguage: "en-IN",
            articleSection: post.category,
            keywords: post.category,
            author: { "@type": "Person", name: post.author, url: abs("/about/") },
            publisher: { "@id": `${abs("/")}#organization` },
            mainEntityOfPage: { "@type": "WebPage", "@id": abs(`/blog/${post.slug}/`) },
            image: abs(SITE.ogImage),
            isAccessibleForFree: true,
            wordCount: post.body.reduce((n, b) => n + (b.type === "p" ? (b.text ?? "").split(" ").length : 0), 0),
          },
          breadcrumbSchema(trail),
        ])}
      />

      <article>
        <div className="mesh border-b border-line">
          <div className="shell py-10 md:py-14">
            <Breadcrumbs trail={trail} />
            <div className="mt-6 max-w-3xl">
              <span className="rounded-full bg-lilac/70 px-3 py-1 font-display text-[0.7rem] font-semibold uppercase tracking-wider text-plum">
                {post.category}
              </span>
              <h1 className="display-hero mt-4 !text-[clamp(1.9rem,4vw,3rem)]">{post.title}</h1>
              <p className="mt-4 lead">{post.excerpt}</p>
              <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.78rem] text-body">
                <span className="font-medium text-navy">{post.author}</span>
                <span aria-hidden="true">·</span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                </time>
                <span aria-hidden="true">·</span>
                <span>{post.readingTime}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="shell grid gap-12 py-12 lg:grid-cols-[1fr_280px]">
          <div className="prose-tp max-w-2xl">
            {post.body.map((block, i) =>
              block.type === "h2" ? (
                <h2 key={i}>{block.text}</h2>
              ) : block.type === "p" ? (
                <p key={i}>{block.text}</p>
              ) : null,
            )}

            <div className="mt-10 rounded-[20px] border border-line bg-mist/70 p-6">
              <p className="font-display text-[0.95rem] font-semibold text-navy">
                Need this done rather than explained?
              </p>
              <p className="mt-1.5 text-[0.88rem] text-body">
                Trustpages applies exactly this work for businesses in Ayodhya district and
                remotely worldwide. Fixed scope, fixed price.
              </p>
              <Link href="/contact" className="btn btn-primary btn-sm mt-4">
                Talk to us <Icon name="arrow" size={14} />
              </Link>
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="card p-5">
              <h2 className="font-display text-[0.8rem] font-semibold uppercase tracking-wider text-plum">
                Keep reading
              </h2>
              <ul className="mt-3 space-y-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/blog/${r.slug}`} className="block text-[0.86rem] font-medium leading-snug text-navy hover:text-plum">
                      {r.title}
                    </Link>
                    <span className="mt-0.5 block text-[0.72rem] text-body">{r.readingTime}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-5">
              <h2 className="font-display text-[0.8rem] font-semibold uppercase tracking-wider text-plum">
                Talk to us
              </h2>
              <div className="mt-3 space-y-2 text-[0.85rem]">
                <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 text-navy hover:text-plum">
                  <Icon name="phone" size={14} className="text-plum" /> {SITE.phoneDisplay}
                </a>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 break-all text-navy hover:text-plum">
                  <Icon name="mail" size={14} className="shrink-0 text-plum" /> {SITE.email}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </article>

      <CTABand />
    </>
  );
}
