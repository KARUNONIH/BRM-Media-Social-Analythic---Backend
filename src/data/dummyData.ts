// Data dummy awal postingan Instagram PT Bumi Rekayasa Mandiri (@bumirekayasamandiri)
export interface InstagramPost {
  id: string;
  shortcode: string;
  type: "Reel/Video" | "Post/Carousel" | "Post/Image";
  caption: string;
  postUrl: string;
  imageUrl: string;
  likes: number;
  comments: number;
  reach: number;
  engagementRate: number;
  publishedAt: string;
  tags: string[];
  sentiment: "Positif" | "Netral" | "Informatif";
}

export const DUMMY_POSTS: InstagramPost[] = [
  {
    id: "post-1",
    shortcode: "Des6ar4ERoU",
    type: "Post/Carousel",
    caption: "ISO 45001:2018 K3 Safety First - Komitmen Sistem Manajemen Keselamatan dan Kesehatan Kerja PT Bumi Rekayasa Mandiri di seluruh proyek konstruksi.",
    postUrl: "https://www.instagram.com/p/Des6ar4ERoU/",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb1861593?w=800&auto=format&fit=crop&q=80",
    likes: 184,
    comments: 24,
    reach: 3420,
    engagementRate: 6.08,
    publishedAt: "2026-10-18T08:30:00Z",
    tags: ["K3", "ISO45001", "SafetyFirst", "KonstruksiBRM"],
    sentiment: "Informatif"
  },
  {
    id: "post-2",
    shortcode: "DeqsYmnFMOn",
    type: "Post/Carousel",
    caption: "Sertifikasi ISO 9001:2015 Manajemen Mutu Standardisasi Pelayanan Konstruksi BRM. Kualitas presisi untuk setiap fabrikasi dan erection baja.",
    postUrl: "https://www.instagram.com/p/DeqsYmnFMOn/",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80",
    likes: 215,
    comments: 18,
    reach: 4100,
    engagementRate: 5.68,
    publishedAt: "2026-10-15T10:15:00Z",
    tags: ["ISO9001", "ManajemenMutu", "BajaKonstruksi"],
    sentiment: "Positif"
  },
  {
    id: "post-3",
    shortcode: "DZhT5C9xmGa",
    type: "Reel/Video",
    caption: "Highlight Lapangan: Instalasi Sistem Proteksi Petir (Penangkal Petir) Gedung Komersial oleh Tim Engineer BRM.",
    postUrl: "https://www.instagram.com/reel/DZhT5C9xmGa/",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
    likes: 432,
    comments: 57,
    reach: 8950,
    engagementRate: 5.46,
    publishedAt: "2026-10-12T14:00:00Z",
    tags: ["MEP", "PenangkalPetir", "ProyekGedung", "ReelsViral"],
    sentiment: "Positif"
  },
  {
    id: "post-4",
    shortcode: "DeI99Y8EeFW",
    type: "Post/Carousel",
    caption: "Penerapan Building Information Modeling (BIM) dalam Perencanaan Gedung: Eliminasi Clash Detection & Efisiensi Biaya Proyek.",
    postUrl: "https://www.instagram.com/p/DeI99Y8EeFW/",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=80",
    likes: 310,
    comments: 39,
    reach: 5800,
    engagementRate: 6.01,
    publishedAt: "2026-10-09T09:45:00Z",
    tags: ["BIM", "TeknologiKonstruksi", "Arsitektur", "Engineering"],
    sentiment: "Informatif"
  },
  {
    id: "post-5",
    shortcode: "DeYQju1kRsD",
    type: "Post/Carousel",
    caption: "Progres Terkini: Proyek Renovasi dan Penguatan Struktur Pabrik PT Penguin Indonesia oleh PT Bumi Rekayasa Mandiri.",
    postUrl: "https://www.instagram.com/p/DeYQju1kRsD/",
    imageUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&auto=format&fit=crop&q=80",
    likes: 278,
    comments: 31,
    reach: 5200,
    engagementRate: 5.94,
    publishedAt: "2026-10-05T11:20:00Z",
    tags: ["ProyekPabrik", "PenguinIndonesia", "RenovasiStruktur"],
    sentiment: "Positif"
  },
  {
    id: "post-6",
    shortcode: "DegZfTAEecd",
    type: "Post/Carousel",
    caption: "3 Kunci Utama Bangun Rumah dan Gedung Berkualitas tanpa Overbudget: Perencanaan RAB Terperinci, Mutu Bahan, dan Pengawasan Ahli.",
    postUrl: "https://www.instagram.com/p/DegZfTAEecd/",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80",
    likes: 540,
    comments: 82,
    reach: 11200,
    engagementRate: 5.55,
    publishedAt: "2026-10-01T15:00:00Z",
    tags: ["TipsBangunRumah", "RAB", "KontraktorTerpercaya"],
    sentiment: "Informatif"
  }
];

export const DUMMY_ANALYTICS_SUMMARY = {
  account: "@bumirekayasamandiri",
  totalPosts: 48,
  totalFollowers: 12450,
  averageEngagementRate: 5.78,
  totalReachMonth: 42800,
  distribution: {
    carousel: 28,
    reels: 14,
    singleImage: 6
  },
  weeklyTrend: [
    { day: "Senin", posts: 2, reach: 5200, engagement: 5.4 },
    { day: "Selasa", posts: 1, reach: 4100, engagement: 4.8 },
    { day: "Rabu", posts: 3, reach: 8900, engagement: 6.2 },
    { day: "Kamis", posts: 1, reach: 3800, engagement: 5.1 },
    { day: "Jumat", posts: 4, reach: 12400, engagement: 6.8 },
    { day: "Sabtu", posts: 2, reach: 6200, engagement: 5.9 },
    { day: "Minggu", posts: 1, reach: 2200, engagement: 4.3 }
  ],
  topHashtags: [
    { tag: "#KonstruksiBRM", count: 34, avgReach: 4800 },
    { tag: "#K3SafetyFirst", count: 28, avgReach: 4200 },
    { tag: "#BIMIndonesia", count: 19, avgReach: 5100 },
    { tag: "#FabrikasiBaja", count: 15, avgReach: 3900 }
  ]
};

export const DUMMY_AI_RECOMMENDATIONS = {
  overallHealth: "Sangat Baik (Skor 88/100)",
  executiveSummary: "Performa akun @bumirekayasamandiri didorong kuat oleh konten teknis berbasis bukti (Sertifikasi ISO, Portofolio Proyek Nyata, dan Tips RAB). Format Carousel dan Reels menghasilkan reach 2.4x lebih tinggi dibanding Single Image.",
  actionItems: [
    {
      priority: "Tinggi",
      title: "Perbanyak Konten Video Singkat (Reels) Proses Lapangan",
      description: "Video instalasi proteksi petir & perakitan baja mencapai engagement rate 6.8%. Disarankan rilis 2 video Reels proses fabrikasi per minggu.",
      expectedImpact: "+35% jangkauan profil baru"
    },
    {
      priority: "Sedang",
      title: "Publikasi Studi Kasus Efisiensi Biaya Proyek (BIM)",
      description: "Audiens B2B (developer & manajemen pabrik) merespons tinggi topik clash detection dan estimasi biaya. Jadwalkan seri edukasi berkala setiap Rabu.",
      expectedImpact: "+20% interaksi komentar prospek"
    },
    {
      priority: "Optimalisasi",
      title: "Jam Unggah Terbaik",
      description: "Interaksi tertinggi terjadi pada hari Jumat dan Rabu pukul 11:30 - 13:00 WIB serta 18:30 - 20:00 WIB.",
      expectedImpact: "Meningkatkan likes menit pertama hingga 40%"
    }
  ]
};

export const DUMMY_BOT_LOGS = [
  {
    id: "log-1",
    sender: "628129876xxxx (Owner)",
    query: "Halo bot, tolong buatkan ringkasan analitik postingan Instagram BRM bulan ini.",
    actionTaken: "Tool: Instagram Analytics -> Excel Generator",
    responsePreview: "Laporan analisis 48 postingan berhasil disusun. File Data_Postingan_Instagram_BRM.xlsx telah terkirim.",
    timestamp: "2026-10-21T08:52:10Z",
    status: "Success"
  },
  {
    id: "log-2",
    sender: "628571234xxxx (Marketing)",
    query: "Berapa engagement rate postingan ISO 45001 kemarin?",
    actionTaken: "Tool: Get Chat History + Post Search",
    responsePreview: "Postingan ISO 45001 memperoleh 184 likes, 24 komentar, dengan engagement rate 6.08%.",
    timestamp: "2026-10-20T14:15:33Z",
    status: "Success"
  }
];
