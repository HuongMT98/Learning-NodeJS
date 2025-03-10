import express from "express"
const app = express()
import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT || 5000

// Start the server
app.listen(PORT, () => {
  console.log(
    `⚡️⚡️⚡️⚡️⚡️:Server is running at:⚙️  http://localhost:${PORT} ⚙️`
  )
})

app.get("/", (req, res) => {
  res.send("Hello World")
})
