/**
 * API route handler for retrieving all customers from the MongoDB collection.
 * This handler is used in Vercel's serverless functions to fetch customer data when requested.
 * It connects to the MongoDB database using the connection string provided in the environment variables,
 * retrieves all documents from the specified collection, and returns them as a JSON response. *
 */

import { MongoClient } from "mongodb"
import type { IncomingMessage } from "http"

type VercelResponse = {
  status(code: number): VercelResponse
  json(body: unknown): void
}

const client = new MongoClient(process.env.MONGODB_URI!)
let connected = false

export default async function handler(_req: IncomingMessage, res: VercelResponse) {
  try {
    if (!connected) {
      await client.connect()
      connected = true
    }
    const db = client.db(process.env.DB_NAME)

    const customers = await db.collection(process.env.COLLECTION_NAME!).find().toArray()

    res.status(200).json(customers)
  } catch (err) {
    console.error("Σφάλμα κατά την ανάγνωση:", err)
    res.status(500).json({ error: "Αδυναμία ανάγνωσης δεδομένων" })
  }
}
