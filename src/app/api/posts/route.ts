import { jsonResponse, corsHeaders } from "@/lib/cors";
import { getDatabase } from "@/lib/mongodb";
import { DUMMY_POSTS } from "@/data/dummyData";

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}

export async function GET() {
  try {
    const db = await getDatabase();
    if (db) {
      const postsCollection = db.collection("instagram_posts");
      const docs = await postsCollection.find({}).sort({ publishedAt: -1 }).toArray();
      if (docs && docs.length > 0) {
        return jsonResponse({
          success: true,
          source: "mongodb",
          data: docs,
          total: docs.length,
        });
      }
    }

    // Fallback dummy data jika koleksi MongoDB masih kosong
    return jsonResponse({
      success: true,
      source: "dummy",
      data: DUMMY_POSTS,
      total: DUMMY_POSTS.length,
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return jsonResponse({ success: false, error: msg, data: DUMMY_POSTS }, 500);
  }
}
