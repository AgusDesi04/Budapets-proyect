import express from "express"
import { connDB } from "./config/db.connect.js"
import productRouter from "./Routes/productsRourter.js"
import mocksRouter from "./Routes/mocksRouter.js"
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use("/api/products", productRouter)
app.use("/api/mocks", mocksRouter)


app.listen(8080, () => console.log('server ok en el puerto 8080'))

connDB()