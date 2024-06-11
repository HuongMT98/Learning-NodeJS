import { StatusCodes } from "http-status-codes"
import { boardService } from "../services/boardService.js"

export const boardController = {
  createNew: async (req, res, next) => {
    try {
      console.log("req.body", req.body)

      const createBoard = await boardService.createNew(req.body)

      res.status(StatusCodes.CREATED).json(createBoard)
      next()
    } catch (error) {
      next(error)
    }
  },
}
