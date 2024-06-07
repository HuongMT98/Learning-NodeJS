import { StatusCodes } from "http-status-codes"
import { boardValidations } from "../validations/boardValidations.js"

const createNew = async (req, res, next) => {
  try {
    console.log(req.body)
    res.status(StatusCodes.CREATED).json({ message: "Note: Api create board" })
    next()
  } catch (error) {
    res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: error.message })
  }
}

export const boardController = {
  createNew,
}
