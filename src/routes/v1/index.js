import express from "express"
import { StatusCodes } from "http-status-codes"
import boardRoutes from "./boardRoutes.js"

const Router = express.Router()

Router.get("/status", (req, res) => {
  res.status(StatusCodes.OK).json({ message: "Connected server is running" })
})

//Boards API
Router.use("/boards", boardRoutes)

export default Router
