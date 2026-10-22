import { NextRequest } from "next/server";
import { jsonResponse, corsHeaders } from "@/lib/cors";
import { getDatabase } from "@/lib/mongodb";
import { DUMMY_USERS, DashboardUser } from "@/data/dummyData";

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}

export async function GET() {
  try {
    const db = await getDatabase();
    if (db) {
      const usersCol = db.collection("dashboard_users");
      const docs = await usersCol.find({}).toArray();
      if (docs && docs.length > 0) {
        return jsonResponse({ success: true, source: "mongodb", data: docs });
      }
    }
    return jsonResponse({ success: true, source: "memory", data: DUMMY_USERS });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return jsonResponse({ success: false, error: msg, data: DUMMY_USERS }, 500);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { name, email, role, status } = body;

    if (!email || !name) {
      return jsonResponse({ success: false, message: "Nama dan email wajib diisi." }, 400);
    }

    const newUser: DashboardUser = {
      id: `usr-${Date.now()}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      role: role || "marketing",
      status: status || "active",
      addedAt: new Date().toISOString(),
    };

    const db = await getDatabase();
    if (db) {
      const usersCol = db.collection("dashboard_users");
      await usersCol.insertOne(newUser);
    } else {
      DUMMY_USERS.unshift(newUser);
    }

    return jsonResponse({
      success: true,
      message: `Akses pengguna ${newUser.email} berhasil ditambahkan.`,
      data: newUser,
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return jsonResponse({ success: false, message: msg }, 500);
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { id, role, status } = body;

    if (!id) {
      return jsonResponse({ success: false, message: "ID pengguna diperlukan." }, 400);
    }

    const db = await getDatabase();
    if (db) {
      const usersCol = db.collection("dashboard_users");
      await usersCol.updateOne({ id }, { $set: { role, status } });
    } else {
      const user = DUMMY_USERS.find((u) => u.id === id);
      if (user) {
        if (role) user.role = role;
        if (status) user.status = status;
      }
    }

    return jsonResponse({
      success: true,
      message: "Data akses pengguna berhasil diperbarui.",
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return jsonResponse({ success: false, message: msg }, 500);
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return jsonResponse({ success: false, message: "ID pengguna diperlukan." }, 400);
    }

    const db = await getDatabase();
    if (db) {
      const usersCol = db.collection("dashboard_users");
      await usersCol.deleteOne({ id });
    } else {
      const idx = DUMMY_USERS.findIndex((u) => u.id === id);
      if (idx !== -1) {
        DUMMY_USERS.splice(idx, 1);
      }
    }

    return jsonResponse({
      success: true,
      message: "Akses pengguna berhasil dihapus.",
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return jsonResponse({ success: false, message: msg }, 500);
  }
}
