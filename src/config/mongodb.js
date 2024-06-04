const { MongoClient } = require("mongodb")
const { ServerApiVersion } = require("mongodb")
const env = require("./environment")
const MONGODB_URI = env.MONGODB_URI
const MONGODB_NAME = env.MONGODB_NAME

let databaseInstance = null

const client = new MongoClient(MONGODB_URI, {
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

    databaseInstance = client.db(MONGODB_NAME)
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

module.exports = { CONNECT_DB, GET_DB }
