import { MongoClient, Db } from "mongodb";

// ponytail: cached mongodb client with graceful fallback if server connection times out
const uri = process.env.MONGODB_URI || "";
const dbName = process.env.MONGODB_DB_NAME || "brm_media_analytics";

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient | null> | null = null;

export async function getDatabase(): Promise<Db | null> {
  if (!uri) {
    return null;
  }

  if (client) {
    try {
      return client.db(dbName);
    } catch {
      client = null;
    }
  }

  if (!clientPromise) {
    clientPromise = (async () => {
      try {
        const c = new MongoClient(uri, {
          serverSelectionTimeoutMS: 2000,
          connectTimeoutMS: 2000,
        });
        await c.connect();
        client = c;
        return c;
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        console.warn("[MongoDB] Connection not reachable, using fallback data:", msg);
        return null;
      }
    })();
  }

  const resolvedClient = await clientPromise;
  if (!resolvedClient) return null;
  return resolvedClient.db(dbName);
}
