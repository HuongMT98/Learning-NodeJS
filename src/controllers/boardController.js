import { StatusCodes } from "http-status-codes"
import { boardService } from "../services/boardService.js"

export const boardController = {
  createNew: async (req, res, next) => {
    try {
      //Gửi dữ liệu qua service......
      const createdNewBoard = await boardService.createNew(req.body)

      //Có dữ liệu thì trả về phía Client
      res.status(StatusCodes.CREATED).json(createdNewBoard)
      console.log("Request body: ", req.body)

      //Bắt lỗi tập trung với Middleware xử lý lỗi tập trung
    } catch (error) {
      next(error)
    }
  },

  getDetail: async (req, res, next) => {
    try {
      const boardId = req.params.id

      //Gửi dữ liệu qua service......
      const board = await boardService.createNew(boardId)

      //Có dữ liệu thì trả về phía Client
      res.status(StatusCodes.CREATED).json(board)
      console.log("Request body: ", boardId)

      //Bắt lỗi tập trung với Middleware xử lý lỗi tập trung
    } catch (error) {
      next(error)
    }
  },
}
