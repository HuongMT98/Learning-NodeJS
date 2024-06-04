import { MongoClient, ServerApiVersion } from "mongodb"
import env from "./environment.js"

let databaseInstance = null

const client = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

// Connect to the database
const CONNECT_DB = async () => {
  if (databaseInstance) {
    throw new Error("Database is already connected")
  }

  try {
    await client.connect()

    databaseInstance = client.db(env.DATABASE_NAME)
  } catch (err) {
    console.error(err)
    throw new Error("Error connecting to the database")
  }
}

const GET_DB = () => {
  if (!databaseInstance) {
    throw new Error("Database is not connected")
  } else {
    return databaseInstance
  }
}

export { CONNECT_DB, GET_DB }
