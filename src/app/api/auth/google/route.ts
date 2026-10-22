import { NextRequest } from "next/server";
import { jsonResponse, corsHeaders } from "@/lib/cors";

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { idToken, email, name, avatarUrl } = body;

    // Jika ada idToken dari Google GSI
    let userEmail = email || "owner@bumirekayasamandiri.co.id";
    let userName = name || "Owner BRM";
    let userAvatar = avatarUrl || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80";

    if (idToken) {
      try {
        // Parse payload JWT sederhana dari token Google
        const parts = idToken.split(".");
        if (parts.length === 3) {
          const payload = JSON.parse(Buffer.from(parts[1], "base64").toString("utf-8"));
          if (payload.email) userEmail = payload.email;
          if (payload.name) userName = payload.name;
          if (payload.picture) userAvatar = payload.picture;
        }
      } catch {
        // abaikan error parsing JWT, gunakan default
      }
    }

    const userData = {
      userId: "brm-user-1",
      name: userName,
      email: userEmail,
      avatarUrl: userAvatar,
      role: "owner",
      token: "mock-jwt-token-brm-media-analytics",
    };

    return jsonResponse({
      success: true,
      user: userData,
      message: "Berhasil masuk dengan akun Google.",
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return jsonResponse({ success: false, message: msg }, 500);
  }
}
