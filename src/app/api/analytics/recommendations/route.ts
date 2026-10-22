import { jsonResponse, corsHeaders } from "@/lib/cors";
import { DUMMY_AI_RECOMMENDATIONS } from "@/data/dummyData";

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}

export async function GET() {
  return jsonResponse({
    success: true,
    data: DUMMY_AI_RECOMMENDATIONS,
  });
}
