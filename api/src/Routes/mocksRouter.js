import { Router } from "express";
import { addProductMocks } from "../controllers/productsController.js";

const mocksRouter = new Router()


mocksRouter.get('/products/:n', addProductMocks)

export default mocksRouter