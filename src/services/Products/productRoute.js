import express from "express"
import ProductModel from "./schema.js"
import multer from "multer" // it is middleware
import { v2 as cloudinary } from "cloudinary"
import { CloudinaryStorage } from "multer-storage-cloudinary"
import q2m from "query-to-mongo"

const cloudinaryUploaderImageUrl = multer({
  storage: new CloudinaryStorage({
    cloudinary, // search automatically for process.env.CLOUDINARY_URL
    params: {
      folder: "Amzon-Api_mongodb",
    },
  }),
}).single("productImage")

const productRouter = express.Router()

//  ***************************** Route *****************************

productRouter.post("/", async (req, res, next) => {
  try {
    const newReview = new ProductModel(req.body)
    const { _id } = await newReview.save()
    res.status(201).send({ message: `new Review Sucessfully Created with id No:- ${_id}` })
  } catch (error) {
    next()
  }
})
productRouter.get("/", async (req, res, next) => {
  try {
  } catch (error) {
    next()
  }
})
productRouter.get("/", async (req, res, next) => {
  try {
  } catch (error) {
    next()
  }
})
productRouter.put("/", async (req, res, next) => {
  try {
  } catch (error) {
    next()
  }
})
productRouter.delete(
  ("/",
  async (req, res, next) => {
    try {
    } catch (error) {
      next()
    }
  })
)

// ******************************************* ROUTE FOR IMAGE UPLOAD *******************************************

productRouter.post("/:productId/uploadProductImg", cloudinaryUploaderImageUrl, async (req, res, next) => {
  try {
    const updateProduct = await ProductModel.findByIdAndUpdate(
      req.params.productId,
      { imageurl: req.file.path },
      {
        new: true,
      }
    )
    if (updateProduct) {
      res.send(updateProduct)
    } else {
      next(createHttpError(404, `Product with id${req.params.productId} found!`))
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
})

export default productRouter
