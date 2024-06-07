import { StatusCodes } from "http-status-codes"
import { createNew as createNewService } from "../services/boardService.js"

const createNew = async (req, res, next) => {
  try {
    console.log("req.body", req.body)

    const createBoard = await createNewService(req.body)

    res.status(StatusCodes.CREATED).json(createBoard)
    next()
  } catch (error) {
    next(error)
  }
}

export const boardController = {
  createNew,
}
