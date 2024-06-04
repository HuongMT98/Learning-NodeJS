const { MongoClient } = require("mongodb")
const { ServerApiVersion } = require("mongodb")
const MONGODB_URI =
  "mongodb+srv://mthanhhuong85:UCf7VugoOlCQp2uf@data-learnnodejs.5wksn3o.mongodb.net/?retryWrites=true&w=majority&appName=Data-LearnNodejs"
const MONGODB_NAME = "Data-LearnNodejs"

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
