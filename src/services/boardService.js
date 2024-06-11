import slugify from "../untils/formatter.js"
import { boardModel } from "../models/boardModel.js"

const createNew = async (reqBody) => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title),
    }

    const creatBoard = await boardModel.creatNew(newBoard)
    console.log(creatBoard)

    return creatBoard
  } catch (error) {
    throw new Error(error)
  }
}

export const boardService = {
  createNew,
}
