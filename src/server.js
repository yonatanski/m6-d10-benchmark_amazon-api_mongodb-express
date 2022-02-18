import express from "express"
import listEndpoints from "express-list-endpoints"
import cors from "cors"
import mongoose from "mongoose"

import reviewRouter from "./services/Reviews/reviewRoute.js"
import productRouter from "./services/Products/productRoute.js"

const server = express()
const port = process.env.PORT || 5005

// ************************************* MIDDLEWARES ***************************************.
server.use(cors())
server.use(express.json())

// ************************************* ROUTES ***************************************
server.use("/products", productRouter)
server.use("/reviews", reviewRouter)

mongoose.connect(process.env.MONGO_CONNECTION)

mongoose.connection.on("🟢CONNECTED!!", () => {
  console.log("SUCCESSFULLY CONNECTED TO MONGO DB!!")
  server.listen(port, () => {
    console.table(listEndpoints(server))
    console.log("SERVER IS RUNNING 🏃‍♂️🏃‍♂️🏃‍♀️ ON PORT:-", port)
  })
})
