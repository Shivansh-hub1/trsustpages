import "server-only";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "trustpages_admin";
export const STATUSES = ["new", "contacted", "qualified", "closed"] as const;
export type Status = (typeof STATUSES)[number];
export type Enquiry = {
  id: string; created_at: string; name: string; phone: string; email: string | null;
  service: string | null; message: string | null; source_page: string | null; status: string;
};

export function adminConfig() {
  const url = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  return url && key && email ? { url, key, email } : null;
}

// Always verify the access token with Supabase; a cookie alone is not proof of access.
export async function adminSession() {
  const config = adminConfig();
  const token = (await cookies()).get(ADMIN_COOKIE)?.value;
  if (!config || !token) return null;
  try {
    const response = await fetch(`${config.url}/auth/v1/user`, {
      headers: { apikey: config.key, Authorization: `Bearer ${token}` }, cache: "no-store",
    });
    if (!response.ok) return null;
    const user = await response.json();
    if (typeof user.email !== "string" || user.email.toLowerCase() !== config.email || !user.email_confirmed_at) return null;
    return { ...config, token };
  } catch {
    return null;
  }
}

export async function getEnquiries(session: NonNullable<Awaited<ReturnType<typeof adminSession>>>) {
  const response = await fetch(`${session.url}/rest/v1/enquiries?select=id,created_at,name,phone,email,service,message,source_page,status&order=created_at.desc&limit=100`, {
    headers: { apikey: session.key, Authorization: `Bearer ${session.key}` }, cache: "no-store",
  });
  if (!response.ok) throw new Error("Unable to load enquiries");
  return await response.json() as Enquiry[];
}
