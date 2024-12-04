import mongoose from "mongoose"
import env from "../utils/env.utils.js"


export const connDB = async () => {
  try {

    await mongoose.connect(
      env.MONGO_URL
    )
    console.log('DB CONECTADA!!')
  } catch (error) {
    console.log(`error!! no se pudo conectar a la base de datos!! ${error}`)
  }
}
