import {config} from "dotenv"
import args from "./args.utils.js"

const { mode } = args
const path = ".env."+mode
config({ path })

export default {
  MONGO_URL: process.env.MONGO_URL,
  SECRET_KEY: process.env.SECRET_KEY,
  PORT: process.env.PORT

}