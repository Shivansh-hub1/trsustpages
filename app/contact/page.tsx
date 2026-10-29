import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import LeadForm from "@/components/LeadForm";
import { PageHero, JsonLd, Breadcrumbs } from "@/components/ui";
import { SITE, FAQS } from "@/lib/site";
import { breadcrumbSchema, faqSchema, graph, localBusinessSchema, abs } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Trustpages — Bikapur, Ayodhya",
  description:
    "Talk to Trustpages about a website, store or SEO project. Call +91 83031 72373 or WhatsApp us — replies within 12 business hours. Bikapur, Ayodhya.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Trustpages — Bikapur, Ayodhya",
    description: "Call, WhatsApp or email. Replies within 12 business hours, Monday to Saturday.",
    url: abs("/contact/"),
  },
};

const trail = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={graph([
          localBusinessSchema(),
          breadcrumbSchema(trail),
          faqSchema(FAQS.slice(0, 4)),
          {
            "@type": "ContactPage",
            "@id": abs("/contact/#page"),
            name: "Contact Trustpages",
            url: abs("/contact/"),
            isPartOf: { "@id": `${abs("/")}#website` },
            about: { "@id": `${abs("/")}#localbusiness` },
          },
        ])}
      />

      <PageHero
        eyebrow="Contact"
        title="Tell us what is not working."
        highlight="We will tell you what we would do."
        intro={
          <>
            One form, no sales sequence. Write in English or Hindi — whichever is easier. You will
            get a human reply {SITE.responseWindow}, usually with two or three specific observations
            about your current site.
          </>
        }
        trail={trail}
      />

      <section className="section">
        <div className="shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Form */}
          <div className="card p-6 md:p-8">
            <h2 className="h-card">Project enquiry</h2>
            <p className="mt-1.5 text-[0.85rem] text-body">
              Fields marked * are required. Your details are used only to reply — never sold,
              never added to a mailing list.
            </p>
            <div className="mt-6">
              <LeadForm compact={false} />
            </div>
          </div>

          {/* Contact details */}
          <div className="space-y-4">
            <div className="card p-6">
              <h2 className="h-card">Direct lines</h2>
              <ul className="mt-4 space-y-3 text-[0.92rem]">
                <li>
                  <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 text-navy hover:text-plum">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-lilac text-plum">
                      <Icon name="phone" size={16} />
                    </span>
                    <span>
                      <span className="block font-medium">{SITE.phoneDisplay}</span>
                      <span className="block text-[0.76rem] text-body">Calls &amp; WhatsApp, {SITE.hours}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-navy hover:text-plum">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-lilac text-plum">
                      <Icon name="mail" size={16} />
                    </span>
                    <span className="min-w-0">
                      <span className="block break-all font-medium">{SITE.email}</span>
                      <span className="block text-[0.76rem] text-body">Best for briefs and documents</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi Trustpages, I'd like to discuss a project.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-navy hover:text-plum"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-[#25D366]/12 text-[#1a7f45]">
                      <Icon name="whatsapp" size={16} />
                    </span>
                    <span>
                      <span className="block font-medium">WhatsApp us</span>
                      <span className="block text-[0.76rem] text-body">Fastest route to an answer</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-navy hover:text-plum">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-lilac text-plum">
                      <Icon name="instagram" size={16} />
                    </span>
                    <span>
                      <span className="block font-medium">@trust_pages</span>
                      <span className="block text-[0.76rem] text-body">Behind-the-scenes work</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="card p-6">
              <h2 className="h-card">Studio</h2>
              <address className="mt-3 space-y-1 text-[0.92rem] not-italic leading-relaxed text-body">
                <p className="font-medium text-navy">{SITE.legalName}</p>
                <p>{SITE.address.street},</p>
                <p>{SITE.address.locality}, {SITE.address.region} {SITE.address.postalCode}, India</p>
              </address>
              <p className="mt-3 flex items-center gap-2 text-[0.85rem] text-body">
                <Icon name="clock" size={14} className="text-plum" /> {SITE.hours}
              </p>
              <p className="mt-2 text-[0.82rem] leading-relaxed text-body">
                Walk-ins welcome, but call first — we are often on site with a client. Meetings in
                Hindi or English.
              </p>
            </div>

            <div className="rounded-[22px] bg-grad p-6 text-white">
              <h2 className="font-display text-[1rem] font-semibold">What happens next</h2>
              <ol className="mt-3 space-y-2 text-[0.86rem] text-white/80">
                <li>1. We reply {SITE.responseWindow} with a few questions.</li>
                <li>2. Free 30-minute call to understand goals and constraints.</li>
                <li>3. Written scope, fixed price and timeline within two working days.</li>
              </ol>
              <p className="mt-4 text-[0.78rem] text-white/60">
                No obligation. If we are not the right fit we will say so and point you elsewhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-mist/50 py-12">
        <div className="shell">
          <h2 className="h-card">Before you write</h2>
          <p className="mt-2 max-w-2xl text-[0.92rem] text-body">
            Three things make the first call far more useful: your current website URL (even if you
            hate it), one number you want to improve, and a rough budget range. If you do not have
            any of those, that is fine — we will work it out together.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/services" className="btn btn-outline btn-sm">Browse services</Link>
            <Link href="/work" className="btn btn-outline btn-sm">See the work</Link>
            <Link href="/faq" className="btn btn-outline btn-sm">Read the FAQ</Link>
          </div>
          <div className="mt-8">
            <Breadcrumbs trail={trail} />
          </div>
        </div>
      </section>
    </>
  );
}
