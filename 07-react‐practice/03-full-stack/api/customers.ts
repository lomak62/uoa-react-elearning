import { MongoClient } from "mongodb"

const client = new MongoClient(process.env.MONGODB_URI!)

export default async function handler(req, res) {
  await client.connect()
  const db = client.db(process.env.DB_NAME)

  const customers = await db.collection(process.env.COLLECTION_NAME).find().toArray()

  res.status(200).json(customers)
}
