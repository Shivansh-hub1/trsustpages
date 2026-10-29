import Link from "next/link";
import { Icon } from "@/components/Icons";
import { SERVICES } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="mesh">
      <div className="shell flex min-h-[68vh] flex-col items-center justify-center py-20 text-center">
        <p className="font-display text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-plum">
          Error 404
        </p>
        <h1 className="display-hero mt-4 max-w-2xl">
          This page took a <span className="grad-text">wrong turn</span>
        </h1>
        <p className="mt-4 max-w-lg text-[0.98rem] leading-relaxed text-body">
          The link is broken or the page has moved. Nothing is lost — here are the routes people
          usually want.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            Back to home <Icon name="arrow" size={15} />
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Contact us
          </Link>
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-2">
          {SERVICES.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="inline-flex rounded-full border border-line bg-white px-3.5 py-2 text-[0.8rem] font-medium text-navy transition hover:border-plum/40 hover:text-plum"
              >
                {s.shortName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
