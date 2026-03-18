import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import "dotenv/config";
import express from "express";
import { MongoClient } from "mongodb";

const PORT = parseInt(process.env.PORT || "3001", 10);
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME || "production";
const COLLECTION_NAME = process.env.COLLECTION_NAME || "customers";

if (!MONGODB_URI) throw new Error("MONGODB_URI is missing from .env");
if (!DB_NAME) throw new Error("DB_NAME is missing from .env");
if (!COLLECTION_NAME) throw new Error("COLLECTION_NAME is missing from .env");

const app = express();

const client = new MongoClient(MONGODB_URI);
const db = client.db(DB_NAME);

async function connectToMongo() {
  await client.connect();
  console.log(`Συνδέθηκε στη MongoDB — βάση: ${DB_NAME}`);
}

app.get("/api/customers", async (_req, res) => {
  try {
    const customers = await db.collection(COLLECTION_NAME).find().toArray();
    res.json(customers);
  } catch (err) {
    console.error("Σφάλμα κατά την ανάγνωση:", err);
    res.status(500).json({ error: "Αδυναμία ανάγνωσης δεδομένων" });
  }
});

connectToMongo()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server τρέχει στο http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Αδυναμία σύνδεσης στη MongoDB:", err);
    process.exit(1);
  });
