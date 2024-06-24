import slugify from "../untils/formatter.js"
import { boardModel } from "../models/boardModel.js"

const createNew = async (reqBody) => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title),
    }

    //Tạo bảng ghi mới lưu vào database
    const createdBoard = await boardModel.creatNewBoard(newBoard)

    //Lấy bảng ghi đã được tạo
    const getBoard = await boardModel.findOneById(createdBoard.insertedId)

    //Trong service luôn phải có return, nếu không sẽ không có kết quả
    return getBoard
  } catch (error) {
    throw new Error(error)
  }
}

export const boardService = {
  createNew,
}
