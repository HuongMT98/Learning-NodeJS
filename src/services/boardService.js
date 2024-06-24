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
    // console.log(`createdBoard`, createdBoard)

    //Lấy bảng ghi đã được tạo
    const getBoard = await boardModel.findOneById(createdBoard.insertedId)
    // console.log(`getBoard`, getBoard)

    return getBoard
  } catch (error) {
    throw new Error(error)
  }
}

export const boardService = {
  createNew,
}
