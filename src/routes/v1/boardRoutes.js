import express from "express"
import { StatusCodes } from "http-status-codes"
import { boardValidations } from "../../validations/boardValidations.js"
import { boardController } from "../../controllers/boardController.js"

const boardRoutes = express.Router()

boardRoutes
  .route("/")
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: "Note: Api get list boards" })
  })
  .post(boardValidations.createNew, boardController.createNew)

export default boardRoutes
