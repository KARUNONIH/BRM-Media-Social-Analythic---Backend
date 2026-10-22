import { jsonResponse, corsHeaders } from "@/lib/cors";
import { DUMMY_ANALYTICS_SUMMARY } from "@/data/dummyData";

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}

export async function GET() {
  return jsonResponse({
    success: true,
    data: DUMMY_ANALYTICS_SUMMARY,
  });
}
