import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { PageHero, JsonLd, CTABand, SectionHeading } from "@/components/ui";
import { INSPIRATION } from "@/lib/inspiration";
import { breadcrumbSchema, graph, abs } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Website Inspiration & Project Ideas",
  description: "Explore website ideas from independent agencies, with links to their original case studies, and discuss your project with Trustpages.",
  alternates: { canonical: "/work" },
  openGraph: { title: "Website inspiration | Trustpages", description: "A credited collection of independent agency projects and ideas for your next website.", url: abs("/work/") },
};

const trail = [{ name: "Home", path: "/" }, { name: "Project ideas", path: "/work" }];

export default function WorkPage() {
  return (
    <>
      <JsonLd data={graph([breadcrumbSchema(trail)])} />
      <PageHero eyebrow="Project inspiration" title="Good ideas start with" highlight="a clear goal"
        intro="Explore publicly documented projects by independent agencies. These examples are inspiration, not Trustpages client work; each creator is credited below."
        trail={trail}>
        <Link href="/contact" className="btn btn-primary">Discuss your project <Icon name="arrow" size={16} /></Link>
      </PageHero>
      <section id="case-studies" className="section bg-mist/50">
        <div className="shell">
          <SectionHeading eyebrow="Independent agency examples" title="Ideas worth" highlight="exploring" intro="Each example links to its original agency’s case study. Trustpages did not create these projects and is not affiliated with the agencies or their clients." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {INSPIRATION.map((item, index) => {
              const screens = [
                "/screenshots/project-arts.png",
                "/screenshots/project-spa.png",
                "/screenshots/project-organizer.png",
              ];
              return (
                <article key={item.title} className="card flex flex-col overflow-hidden">
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line bg-mist">
                    <img
                      src={screens[index % screens.length]}
                      alt={`${item.title} website screenshot`}
                      width={600}
                      height={375}
                      className="h-full w-full object-cover object-top transition duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-full bg-lilac px-3 py-1 text-xs font-semibold text-plum">{item.sector}</span>
                      <span className="font-display text-xl text-plum/40">0{index + 1}</span>
                    </div>
                    <h2 className="h-card mt-4">{item.title}</h2>
                    <p className="mt-1.5 text-sm font-medium text-plum">Project by {item.agency}</p>
                    <p className="mt-3 text-[0.9rem] leading-relaxed text-body">{item.summary}</p>
                    <div className="mt-4 flex-1 rounded-2xl bg-mist p-3.5 text-sm text-navy">
                      <strong>Idea to consider: </strong>{item.takeaway}
                    </div>
                    <a className="mt-6 inline-flex min-h-11 items-center gap-2 font-display text-sm font-semibold text-plum underline underline-offset-4" href={item.url} target="_blank" rel="noopener noreferrer">
                      Read {item.agency}&apos;s case study <Icon name="arrow" size={15} />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell grid gap-8 md:grid-cols-2 md:items-center">
          <div><p className="eyebrow">Your next step</p><h2 className="h-section mt-3">Let&apos;s plan something <span className="grad-text">for your business</span></h2><p className="mt-4 lead">Tell us what you sell, who you want to reach and what your website needs to do. We&apos;ll discuss the scope, timeline and pricing for your project.</p></div>
          <div className="card p-6"><h3 className="h-card">What to share</h3><ul className="mt-4 space-y-3 text-sm text-body"><li>01 · Your business and audience</li><li>02 · Your current website, if you have one</li><li>03 · Your goals, preferred timeline and budget</li></ul><Link href="/contact" className="btn btn-primary mt-6">Request a proposal <Icon name="arrow" size={16} /></Link></div>
        </div>
      </section>
      <CTABand title="Ready to talk about your website?" body="Share your goals with us. We’ll help you identify the right next step for your business." />
    </>
  );
}
