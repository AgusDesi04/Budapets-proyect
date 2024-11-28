import { Router } from "express";
import { addProducts, findProductsBySearch, getProducts } from "../controllers/productsController.js";

const productRouter = Router()

productRouter.get("/", getProducts) 
productRouter.post("/addProduct", addProducts)
productRouter.post ("/search", findProductsBySearch)
export default productRouter