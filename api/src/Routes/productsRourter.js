import { Router } from "express";
import { addProducts, findProductsBySearch, getProducts, getProductById } from "../controllers/productsController.js";

const productRouter = Router()

productRouter.get("/", getProducts) 
productRouter.get("/:pid", getProductById)
productRouter.post("/addProduct", addProducts)
productRouter.post ("/search", findProductsBySearch)
export default productRouter