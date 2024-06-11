import slugify from "../untils/formatter.js"
import { boardModel } from "../models/boardModel.js"

const createNew = async (reqBody) => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title),
    }

    const createdBoard = await boardModel.creatNewBoard(newBoard)
    console.log(createdBoard)

    return createdBoard
  } catch (error) {
    throw new Error(error)
  }
}

export const boardService = {
  createNew,
}
