import mongoose from "mongoose"
const { Schema, model } = mongoose

const productScheama = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: true },
    imageurl: { type: String, required: false },
    price: { type: Number, required: false },
    category: [{ type: Array }],
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  },

  {
    timestamps: true,
  }
)

export default model("Product", productScheama)
