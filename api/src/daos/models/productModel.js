import mongoose from "mongoose";
import paginate from "mongoose-paginate-v2";

const prodCollection = "Products"

const prodSchema = mongoose.Schema(
  {
    marca: { type: String, required: true },
    animal: { type: String, required: true },
    nombre: { type: String, required: true, unique: true },
    edad: { type: String, required: true},
    kilos: { type: String, required: true},
    precio: {type: Number, required: true},
    stock: {type: Boolean, default: false},
    thumbnails: []
  }
)

prodSchema.plugin(paginate)

export const productModel = mongoose.model(
  prodCollection, 
  prodSchema
)

