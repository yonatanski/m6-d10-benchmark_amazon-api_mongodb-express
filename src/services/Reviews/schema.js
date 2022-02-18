import mongoose from "mongoose"

const { Schema, model } = mongoose

const ReviewSchema = new Schema(
  {
    comment: { type: String, required: true },
    rate: { type: String, required: false },
  },
  {
    timestamps: true,
  }
)

export default model("Review", ReviewSchema)
