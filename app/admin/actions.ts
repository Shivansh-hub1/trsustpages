"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { ADMIN_COOKIE, adminConfig, adminSession, STATUSES, type Status } from "@/lib/admin";

export async function login(formData: FormData) {
  const config = adminConfig();
  if (!config) redirect("/admin?error=config");
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "");
  if (email !== config.email || !password || password.length > 1024) redirect("/admin?error=login");
  let token = "";
  let maxAge = 0;
  try {
    const response = await fetch(`${config.url}/auth/v1/token?grant_type=password`, {
      method: "POST", headers: { apikey: config.key, "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }), cache: "no-store",
    });
    if (response.ok) {
      const data = await response.json();
      if (typeof data.access_token === "string" && data.user?.email_confirmed_at && data.user?.email?.toLowerCase() === config.email) {
        token = data.access_token;
        maxAge = Math.min(Number(data.expires_in) || 3600, 3600);
      }
    }
  } catch { /* Fail closed when the auth service is unavailable. */ }
  if (!token) redirect("/admin?error=login");
  (await cookies()).set(ADMIN_COOKIE, token, {
    httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", maxAge,
  });
  redirect("/admin");
}

export async function logout() {
  const session = await adminSession();
  if (session) {
    try {
      await fetch(`${session.url}/auth/v1/logout`, { method: "POST", headers: { apikey: session.key, Authorization: `Bearer ${session.token}` }, cache: "no-store" });
    } catch { /* Clear the local session even if the service is unavailable. */ }
  }
  (await cookies()).delete(ADMIN_COOKIE);
  redirect("/admin");
}

export async function updateStatus(formData: FormData) {
  const session = await adminSession();
  if (!session) redirect("/admin?error=session");
  const id = String(formData.get("id") || "");
  const status = String(formData.get("status") || "");
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id) || !STATUSES.includes(status as Status)) redirect("/admin?error=update");
  try {
    const response = await fetch(`${session.url}/rest/v1/enquiries?id=eq.${id}`, {
      method: "PATCH", headers: { apikey: session.key, Authorization: `Bearer ${session.key}`, "Content-Type": "application/json", Prefer: "return=representation" },
      body: JSON.stringify({ status }), cache: "no-store",
    });
    if (!response.ok || (await response.json()).length !== 1) redirect("/admin?error=update");
  } catch (error) {
    // redirect throws internally; let it propagate rather than masking it.
    if (error instanceof Error && "digest" in error) throw error;
    redirect("/admin?error=update");
  }
  revalidatePath("/admin");
  redirect("/admin?updated=1");
}
