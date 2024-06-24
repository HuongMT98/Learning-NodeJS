import { StatusCodes } from "http-status-codes"
import { boardService } from "../services/boardService.js"

export const boardController = {
  createNew: async (req, res, next) => {
    try {
      console.log("Request body: ", req.body)

      //Gửi dữ liệu qua service......
      const newBoard = await boardService.createNew(req.body)
      res.status(StatusCodes.CREATED).json(newBoard)

      //Bắt lỗi tập trung
    } catch (error) {
      if (error.message === "Database chưa được kết nối ***") {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          message: "Lỗi kết nối cơ sở dữ liệu...",
          error: error.message,
        })
      } else {
        next(error)
      }
    }
  },
}
