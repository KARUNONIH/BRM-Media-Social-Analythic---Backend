import { jsonResponse, corsHeaders } from "@/lib/cors";
import { getDatabase } from "@/lib/mongodb";
import { DUMMY_BOT_LOGS } from "@/data/dummyData";

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}

export async function GET() {
  try {
    const db = await getDatabase();
    if (db) {
      const logs = await db.collection("whatsapp").find({}).sort({ timestamp: -1 }).limit(20).toArray();
      if (logs && logs.length > 0) {
        return jsonResponse({
          success: true,
          source: "mongodb",
          data: logs,
        });
      }
    }

    return jsonResponse({
      success: true,
      source: "dummy",
      data: DUMMY_BOT_LOGS,
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return jsonResponse({ success: false, error: msg, data: DUMMY_BOT_LOGS }, 500);
  }
}
