// Data Postingan Instagram PT Bumi Rekayasa Mandiri (@bumirekayasamandiri)
export interface InstagramPost {
  id: string;
  shortcode: string;
  type: "Reel/Video" | "Post/Carousel" | "Post/Image";
  category: "Fabrikasi Baja" | "Renovasi Pabrik" | "MEP & Proteksi Petir" | "K3 & Mutu ISO" | "Perencanaan BIM";
  caption: string;
  postUrl: string;
  imageUrl: string;
  likes: number;
  comments: number;
  publishedAt: string;
  tags: string[];
}

export const DUMMY_POSTS: InstagramPost[] = [
  {
    id: "post-1",
    shortcode: "Des6ar4ERoU",
    type: "Post/Carousel",
    category: "K3 & Mutu ISO",
    caption: "ISO 45001:2018 K3 Safety First - Sistem Manajemen Keselamatan dan Kesehatan Kerja PT Bumi Rekayasa Mandiri dalam setiap pelaksanaan proyek konstruksi.",
    postUrl: "https://www.instagram.com/p/Des6ar4ERoU/",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb1861593?w=800&auto=format&fit=crop&q=80",
    likes: 184,
    comments: 24,
    publishedAt: "2026-10-18T08:30:00Z",
    tags: ["K3", "ISO45001", "SafetyFirst", "KonstruksiBRM"]
  },
  {
    id: "post-2",
    shortcode: "DeqsYmnFMOn",
    type: "Post/Carousel",
    category: "K3 & Mutu ISO",
    caption: "Sertifikasi ISO 9001:2015 Manajemen Mutu Standardisasi Pelayanan Konstruksi BRM. Kualitas presisi untuk setiap fabrikasi dan erection baja.",
    postUrl: "https://www.instagram.com/p/DeqsYmnFMOn/",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80",
    likes: 215,
    comments: 18,
    publishedAt: "2026-10-15T10:15:00Z",
    tags: ["ISO9001", "ManajemenMutu", "BajaKonstruksi"]
  },
  {
    id: "post-3",
    shortcode: "DZhT5C9xmGa",
    type: "Reel/Video",
    category: "MEP & Proteksi Petir",
    caption: "Instalasi Sistem Proteksi Petir (Penangkal Petir) Gedung Komersial oleh Tim Engineer BRM: Proteksi maksimal terhadap sambaran petir langsung & lonjakan arus.",
    postUrl: "https://www.instagram.com/reel/DZhT5C9xmGa/",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
    likes: 432,
    comments: 57,
    publishedAt: "2026-10-12T14:00:00Z",
    tags: ["MEP", "PenangkalPetir", "ProyekGedung"]
  },
  {
    id: "post-4",
    shortcode: "DeI99Y8EeFW",
    type: "Post/Carousel",
    category: "Perencanaan BIM",
    caption: "Penerapan Building Information Modeling (BIM) dalam Perencanaan Gedung: Eliminasi clash detection antar struktur & MEP sebelum pekerjaan fisik dimulai.",
    postUrl: "https://www.instagram.com/p/DeI99Y8EeFW/",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=80",
    likes: 310,
    comments: 39,
    publishedAt: "2026-10-09T09:45:00Z",
    tags: ["BIM", "TeknologiKonstruksi", "Engineering"]
  },
  {
    id: "post-5",
    shortcode: "DeYQju1kRsD",
    type: "Post/Carousel",
    category: "Renovasi Pabrik",
    caption: "Pekerjaan Proyek Renovasi & Perkuatan Struktur Pabrik PT Penguin Indonesia oleh PT Bumi Rekayasa Mandiri.",
    postUrl: "https://www.instagram.com/p/DeYQju1kRsD/",
    imageUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&auto=format&fit=crop&q=80",
    likes: 278,
    comments: 31,
    publishedAt: "2026-10-05T11:20:00Z",
    tags: ["ProyekPabrik", "PenguinIndonesia", "RenovasiStruktur"]
  },
  {
    id: "post-6",
    shortcode: "DeLRZC8miR3",
    type: "Post/Carousel",
    category: "Fabrikasi Baja",
    caption: "Pekerjaan Pengaspalan Jalan Akses & Penataan Fasilitas Kawasan Industri PT TT Techno Park Indonesia.",
    postUrl: "https://www.instagram.com/p/DeLRZC8miR3/",
    imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop&q=80",
    likes: 195,
    comments: 16,
    publishedAt: "2026-09-28T07:50:00Z",
    tags: ["Infrastruktur", "JalanKawasan", "Industri"]
  },
  {
    id: "post-7",
    shortcode: "DegZfTAEecd",
    type: "Post/Carousel",
    category: "Renovasi Pabrik",
    caption: "3 Kunci Utama Bangun Rumah dan Gedung Berkualitas tanpa Overbudget: Estimasi RAB Transparan, Pemilihan Spesifikasi Material, dan Pengawasan Lapangan.",
    postUrl: "https://www.instagram.com/p/DegZfTAEecd/",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80",
    likes: 540,
    comments: 82,
    publishedAt: "2026-09-22T15:00:00Z",
    tags: ["RAB", "ManajemenBiaya", "KontraktorTerpercaya"]
  }
];

export const DUMMY_ANALYTICS_SUMMARY = {
  account: "@bumirekayasamandiri",
  totalPosts: 48,
  totalFollowers: 12450,
  averageLikes: 307,
  averageComments: 38,
  distribution: {
    carousel: 28,
    reels: 14,
    singleImage: 6
  },
  categoryBreakdown: [
    { category: "Fabrikasi Baja", count: 14, percentage: 29 },
    { category: "Renovasi Pabrik", count: 12, percentage: 25 },
    { category: "K3 & Mutu ISO", count: 10, percentage: 21 },
    { category: "MEP & Proteksi Petir", count: 7, percentage: 15 },
    { category: "Perencanaan BIM", count: 5, percentage: 10 }
  ],
  weeklyTrend: [
    { day: "Senin", posts: 2, avgLikes: 240, avgComments: 28 },
    { day: "Selasa", posts: 1, avgLikes: 210, avgComments: 19 },
    { day: "Rabu", posts: 3, avgLikes: 380, avgComments: 45 },
    { day: "Kamis", posts: 1, avgLikes: 260, avgComments: 22 },
    { day: "Jumat", posts: 4, avgLikes: 460, avgComments: 58 },
    { day: "Sabtu", posts: 2, avgLikes: 310, avgComments: 35 },
    { day: "Minggu", posts: 1, avgLikes: 180, avgComments: 14 }
  ]
};

export const DUMMY_AI_RECOMMENDATIONS = {
  accountScore: "88/100 (Sangat Optimal)",
  executiveSummary: "Audiens B2B PT BRM memberikan interaksi tertinggi pada video proses lapangan (Reels) dan bukti sertifikasi mutu (ISO). Topik MEP Penangkal Petir & Renovasi Pabrik menghasilkan rata-rata 432 likes dan komentar diskusi teknis.",
  nextContentIdeas: [
    {
      priority: "Tinggi",
      title: "Reels Dokumentasi Erection Rangka Baja Bentang Lebar",
      rationale: "Video proses fisik di lapangan memiliki rata-rata likes 40% lebih tinggi dari grafis statis.",
      targetPillar: "Fabrikasi Baja & Gudang",
      suggestedDay: "Jumat (Pukul 11.30 WIB)"
    },
    {
      priority: "Sedang",
      title: "Carousel Studi Kasus Penghematan Biaya via BIM Modeling",
      rationale: "Menargetkan owner developer yang sensitif terhadap resiko overbudget proyek.",
      targetPillar: "Perencanaan BIM",
      suggestedDay: "Rabu (Pukul 13.00 WIB)"
    },
    {
      priority: "Optimalisasi",
      title: "Q&A Singkat Standar Keamanan K3 di Kawasan Industri",
      rationale: "Membangun kepercayaan institusional klien korporat dan pabrik.",
      targetPillar: "K3 & Mutu ISO",
      suggestedDay: "Senin (Pukul 09.00 WIB)"
    }
  ]
};

export const DUMMY_BOT_LOGS = [
  {
    id: "log-1",
    sender: "628129876xxxx (Owner)",
    query: "Bot, kirimkan rekap data postingan Instagram terbaru ke WhatsApp saya.",
    toolCalled: "Instagram Analytics -> Generate Excel -> Send Document",
    responseSummary: "Laporan 48 postingan dan file Data_Postingan_Instagram_BRM.xlsx berhasil dikirimkan.",
    timestamp: "2026-10-22T08:15:20Z",
    status: "Success"
  },
  {
    id: "log-2",
    sender: "628571234xxxx (Marketing)",
    query: "Berapa banyak postingan kategori K3 dan ISO yang sudah kita publikasikan?",
    toolCalled: "Query MongoDB Collection -> Count by Category",
    responseSummary: "Tercatat 10 postingan kategori K3 & Mutu ISO dengan rata-rata 200 likes.",
    timestamp: "2026-10-21T14:40:10Z",
    status: "Success"
  },
  {
    id: "log-3",
    sender: "628129876xxxx (Owner)",
    query: "Apa postingan paling populer bulan ini?",
    toolCalled: "Tool: Instagram Analytics -> Sort by Likes",
    responseSummary: "Postingan terpopuler adalah video Reels Instalasi Penangkal Petir (Shortcode DZhT5C9xmGa) dengan 432 likes.",
    timestamp: "2026-10-20T10:11:05Z",
    status: "Success"
  }
];
