import express from "express"
import { connDB } from "./config/db.connect.js"
import productRouter from "./Routes/productsRourter.js"
import mocksRouter from "./Routes/mocksRouter.js"
import env from "./utils/env.utils.js"



const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use("/api/products", productRouter)
app.use("/api/mocks", mocksRouter)


app.listen(env.PORT, () => console.log(`server ok en el puerto ${env.PORT} `))

connDB()