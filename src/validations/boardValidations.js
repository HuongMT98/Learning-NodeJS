import Joi from "joi"
import { StatusCodes } from "http-status-codes"

const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict(),
    description: Joi.string().required().min(3).max(256).trim().strict(),
  })

  try {
    await correctCondition.validateAsync(req.body, { abortEarly: false })
    next()
  } catch (error) {
    console.log(error)
    res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)

      .json({ message: error.message })
  }
}

export const boardValidations = {
  createNew,
}
