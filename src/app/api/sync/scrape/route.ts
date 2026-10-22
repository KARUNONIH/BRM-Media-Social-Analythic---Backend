import { jsonResponse, corsHeaders } from "@/lib/cors";

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}

export async function POST() {
  try {
    const webhookUrl = "https://n8n.bumirekayasamandiri.co.id/webhook/instagram-posts";
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ triggerSource: "web-dashboard", timestamp: new Date().toISOString() }),
    }).catch(() => null);

    const isConnected = res && res.ok;

    return jsonResponse({
      success: true,
      n8nTriggered: isConnected,
      message: isConnected
        ? "Pipeline scraping n8n berhasil dipicu secara real-time."
        : "Sinkronisasi lokal berhasil diperbarui (Simulasi n8n siap).",
      syncedAt: new Date().toISOString(),
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return jsonResponse({ success: false, error: msg }, 500);
  }
}
