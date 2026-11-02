import type { Metadata } from "next";
import { Suspense } from "react";
import { adminConfig, adminSession, getEnquiries, STATUSES } from "@/lib/admin";
import { login, logout, updateStatus } from "./actions";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
  alternates: { canonical: "/admin" },
};

async function AdminContent({ searchParams }: { searchParams: Promise<{ error?: string; updated?: string }> }) {
  const params = await searchParams;
  const config = adminConfig();
  const session = await adminSession();
  if (!session) return (
    <section className="mx-auto max-w-lg px-5 py-20">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-plum">Trustpages · Private</p>
      <h1 className="font-display text-4xl font-semibold text-navy">Admin sign in</h1>
      <p className="mt-3 text-body">Sign in with your authorised Supabase account to manage enquiries.</p>
      {!config && <p role="alert" className="mt-5 rounded-xl bg-amber-50 p-4 text-sm text-amber-900">Admin access is not configured. Set SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY and ADMIN_EMAIL on the server.</p>}
      {params.error && config && <p role="alert" className="mt-5 rounded-xl bg-red-50 p-4 text-sm text-red-800">{params.error === "session" ? "Your session has expired. Please sign in again." : "Unable to sign in. Check your credentials and try again."}</p>}
      <form action={login} className="mt-8 space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <label className="block text-sm font-medium text-navy">Email<input name="email" type="email" required autoComplete="username" className="field mt-2" /></label>
        <label className="block text-sm font-medium text-navy">Password<input name="password" type="password" required autoComplete="current-password" className="field mt-2" /></label>
        <button className="btn btn-primary w-full" type="submit" disabled={!config}>Sign in</button>
      </form>
    </section>
  );
  let enquiries;
  try { enquiries = await getEnquiries(session); } catch {
    return <section className="mx-auto max-w-5xl px-5 py-20"><h1 className="font-display text-4xl text-navy">Enquiries</h1><p role="alert" className="mt-5 text-red-800">Could not load enquiries. Please try again later.</p><form action={logout} className="mt-5"><button className="btn btn-primary">Sign out</button></form></section>;
  }
  const counts = STATUSES.map(status => ({ status, count: enquiries.filter(item => item.status === status).length }));
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div><p className="mb-2 text-sm font-semibold uppercase tracking-widest text-plum">Trustpages · Private</p><h1 className="font-display text-4xl font-semibold text-navy">Enquiry dashboard</h1><p className="mt-3 text-body">Your most recent 100 enquiries, newest first.</p></div>
        <form action={logout}><button className="btn btn-primary" type="submit">Sign out</button></form>
      </div>
      {params.updated && <p role="status" className="mt-6 rounded-xl bg-green-50 p-4 text-sm text-green-800">Status updated.</p>}
      {params.error && <p role="alert" className="mt-6 rounded-xl bg-red-50 p-4 text-sm text-red-800">Could not update the enquiry. Please try again.</p>}
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        {counts.map(({ status, count }) => <div key={status} className="rounded-2xl border border-slate-200 bg-white p-5"><p className="text-sm capitalize text-body">{status}</p><p className="mt-1 font-display text-3xl font-semibold text-navy">{count}</p></div>)}
      </div>
      <div className="mt-8 space-y-4">
        {enquiries.length === 0 && <div className="rounded-3xl border border-slate-200 p-8 text-body">No enquiries yet. New submissions will appear here.</div>}
        {enquiries.map(item => <article key={item.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-4"><div><h2 className="font-display text-xl font-semibold text-navy">{item.name}</h2><p className="mt-1 text-sm text-body">{new Date(item.created_at).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata" })} IST · {item.service || "Service not specified"}</p></div><span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold capitalize text-plum">{item.status}</span></div>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm"><a className="text-plum underline" href={`tel:${item.phone.replace(/[^+\d]/g, "")}`}>{item.phone}</a>{item.email && <a className="text-plum underline" href={`mailto:${encodeURIComponent(item.email)}`}>{item.email}</a>}{item.source_page && <span className="text-body">From: {item.source_page}</span>}</div>
          {item.message && <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-body">{item.message}</p>}
          <form action={updateStatus} className="mt-5 flex flex-wrap items-end gap-3"><input type="hidden" name="id" value={item.id} /><label className="text-sm font-medium text-navy">Status<select name="status" defaultValue={STATUSES.includes(item.status as typeof STATUSES[number]) ? item.status : "new"} className="field mt-1"><option value="new">New</option><option value="contacted">Contacted</option><option value="qualified">Qualified</option><option value="closed">Closed</option></select></label><button className="btn btn-primary" type="submit">Save status</button></form>
        </article>)}
      </div>
    </section>
  );
}
export default function AdminPage({ searchParams }: { searchParams: Promise<{ error?: string; updated?: string }> }) {
  return <Suspense fallback={<p className="mx-auto max-w-6xl px-5 py-20">Loading admin…</p>}><AdminContent searchParams={searchParams} /></Suspense>;
}
