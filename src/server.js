const express = require("express")
const { CONNECT_DB, GET_DB } = require("./config/mongodb")
const env = require("./config/environment")

const START_SERVER = () => {
  const app = express()
  const host = "http://localhost"
  const port = 5000

  app.get("/", async (req, res) => {
    req.db = GET_DB()
    console.log(req.db)
    res.send("<h1>Học Nodejs Expressjs</h1>")
  })

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(
      `3: Hello ${env.AUTHOR} , Backend server đang chạy tại: ${host}:${port}`
    )
  })
}

//Chỉ khi kết nối database thành công thì mới start server
//Cách 1: Dùng anonymous Async function

;(async () => {
  try {
    console.log("1: Đang kết nối Database MongoDB...")
    await CONNECT_DB()
    console.log("2: Kết nối Database thành công!")

    START_SERVER()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
})()

//Chỉ khi kết nối database thành công thì mới start server
//Cách 2: Dùng Promise

// CONNECT_DB()
//   .then(() => console.log("1: Kết nối database thành công"))
//   .then(() => {
//     START_SERVER()
//   })
//   .catch((error) => {
//     console.error(error)
//     process.exit(1)
//   })
