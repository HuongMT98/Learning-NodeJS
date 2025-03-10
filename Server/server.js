import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"

// Load environment variables from .env file
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
// const URL_DB = process.env.URL_DB
const URL_DB =
  "mongodb+srv://vndong998:QLOR4MpPiKVpGgiN@learnnodejsdb.vie8f.mongodb.net/?retryWrites=true&w=majority&appName=LearnNodejsDB"

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true, limit: "20mb" }))

// Start the server use Mongoose to connect to the MongoDB database

mongoose
  .connect(URL_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(error.message))

app.get("/", (req, res) => {
  res.send("Hello World")
})
