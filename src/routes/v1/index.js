import express from "express"
import { StatusCodes } from "http-status-codes"
import boardRoutes from "./boardRoutes.js"

const Router = express.Router()

Router.route("/").get((req, res) => {
  res.status(StatusCodes.OK).json({ message: "Note: Api router " })
})

//Boards API
Router.use("/boards", boardRoutes)

export default Router
