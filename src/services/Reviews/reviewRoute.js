import express from "express"
import ReviewModel from "./schema.js"

const reviewRouter = express.Router()

//  ***************************** Route *****************************

reviewRouter.post("/", async (req, res, next) => {
  try {
    const newReview = new ReviewModel(req.body)
    const { _id } = await newReview.save()
    res.status(201).send({ message: `new Review Sucessfully Created with id No:- ${_id}` })
  } catch (error) {
    next()
  }
})

reviewRouter.get("/", async (req, res, next) => {
  try {
  } catch (error) {
    next()
  }
})

reviewRouter.get("/", async (req, res, next) => {
  try {
  } catch (error) {
    next()
  }
})

reviewRouter.put("/", async (req, res, next) => {
  try {
  } catch (error) {
    next()
  }
})
reviewRouter.delete(
  ("/",
  async (req, res, next) => {
    try {
    } catch (error) {
      next()
    }
  })
)

export default reviewRouter
