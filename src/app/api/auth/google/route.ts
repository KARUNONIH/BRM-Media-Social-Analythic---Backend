import { NextRequest } from "next/server";
import { jsonResponse, corsHeaders } from "@/lib/cors";
import { getDatabase } from "@/lib/mongodb";
import { DUMMY_USERS } from "@/data/dummyData";

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { idToken, email, name, avatarUrl } = body;

    let userEmail = email || "owner@bumirekayasamandiri.co.id";
    let userName = name || "Owner BRM";
    let userAvatar = avatarUrl || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80";

    if (idToken) {
      try {
        const parts = idToken.split(".");
        if (parts.length === 3) {
          const payload = JSON.parse(Buffer.from(parts[1], "base64").toString("utf-8"));
          if (payload.email) userEmail = payload.email.toLowerCase();
          if (payload.name) userName = payload.name;
          if (payload.picture) userAvatar = payload.picture;
        }
      } catch {
        // ignore jwt decode error
      }
    }

    // Periksa role pengguna dari database / whitelist
    let assignedRole: "admin" | "owner" | "marketing" = "owner";
    const db = await getDatabase();
    if (db) {
      const existing = await db.collection("dashboard_users").findOne({ email: userEmail });
      if (existing) {
        if (existing.status === "inactive") {
          return jsonResponse({ success: false, message: "Akun Anda berstatus nonaktif. Hubungi Admin." }, 403);
        }
        assignedRole = existing.role || "owner";
      }
    } else {
      const matched = DUMMY_USERS.find((u) => u.email === userEmail);
      if (matched) {
        if (matched.status === "inactive") {
          return jsonResponse({ success: false, message: "Akun Anda berstatus nonaktif. Hubungi Admin." }, 403);
        }
        assignedRole = matched.role;
      }
    }

    const userData = {
      userId: `brm-${Date.now()}`,
      name: userName,
      email: userEmail,
      avatarUrl: userAvatar,
      role: assignedRole,
      token: "mock-jwt-token-brm-media-analytics",
    };

    return jsonResponse({
      success: true,
      user: userData,
      message: `Berhasil masuk dengan peran ${assignedRole.toUpperCase()}.`,
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return jsonResponse({ success: false, message: msg }, 500);
  }
}
