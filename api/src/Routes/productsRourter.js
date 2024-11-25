import { Router } from "express";
import { findProductsBySearch, getProducts } from "../controllers/productsController.js";

const productRouter = Router()

productRouter.get("/", getProducts) 
productRouter.post ("/", findProductsBySearch)
export default productRouter