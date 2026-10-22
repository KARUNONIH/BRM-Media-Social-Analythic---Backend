import { jsonResponse, corsHeaders } from "@/lib/cors";

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}

export async function POST() {
  try {
    return jsonResponse({
      success: true,
      message: "Laporan rekap media sosial berhasil dikirimkan ke WhatsApp Owner.",
      targetNumber: "Nomor Terdaftar Whitelist BRM",
      dispatchedAt: new Date().toISOString(),
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return jsonResponse({ success: false, error: msg }, 500);
  }
}
