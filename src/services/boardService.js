/* eslint-disable no-useless-catch */
// eslint-disable-next-line no-unused-vars
import slugify from "../untils/formatter.js"

export const createNew = async (reqBody) => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title),
    }

    return newBoard
  } catch (error) {
    throw error
  }
}
