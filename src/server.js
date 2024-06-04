import express from "express"
import { CONNECT_DB } from "./config/mongodb.js"
import env from "./config/environment.js"
import router from "./routes/v1/index.js"

const START_SERVER = () => {
  const app = express()
  const host = "http://localhost"
  const port = 3000

  app.use("/v1", router)

  app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>")
  })

  app.listen(port, () => {
    console.log(`3: Xin chào ${env.AUTHOR}, server đang chạy ${host}:${port}`)
  })
}

//Chỉ khi kết nối database thành công thì mới start server
;(async () => {
  try {
    console.log("1: Đang kết nối Database MongoDB...")
    await CONNECT_DB
    console.log("2: Kết nối Database thành công!")

    START_SERVER()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
})()
