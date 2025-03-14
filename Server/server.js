import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"

// Load environment variables from .env file
dotenv.config()

// Create an Express server
const app = express()

// Define the port to listen on
const PORT = process.env.PORT || 5000

// Replace with your own MongoDB connection string from the environment file
const URL_DB = process.env.URL_DB

// Start the server use Mongoose to connect to the MongoDB database and listen on the specified port
const connectDB = async () => {
  try {
    await mongoose.connect(URL_DB)
    console.log("1:⭕ DataBase is connected")
    app.listen(PORT, () =>
      console.log(`2:⭕ Server running on port 🔺http://localhost:${PORT}🔻`)
    )
  } catch (error) {
    console.log("3:❌ Error connecting to DataBase, try again", error)
    process.exit(1)
  }
}
connectDB()

// Middleware
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true, limit: "20mb" }))

// Routes
