import { corsHeaders } from "@/lib/cors";
import { DUMMY_POSTS } from "@/data/dummyData";

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}

export async function GET() {
  const headers = ["No", "Shortcode", "Tipe", "Kategori", "Caption", "Likes", "Komentar", "URL", "Tanggal"];
  const rows = DUMMY_POSTS.map((p, idx) => [
    idx + 1,
    p.shortcode,
    `"${p.type}"`,
    `"${p.category}"`,
    `"${p.caption.replace(/"/g, '""')}"`,
    p.likes,
    p.comments,
    p.postUrl,
    p.publishedAt,
  ]);

  const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

  return new Response(csv, {
    status: 200,
    headers: {
      ...corsHeaders(),
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Data_Postingan_Instagram_BRM.csv"',
    },
  });
}
