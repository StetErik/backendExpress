import express from 'express'
import postRouter from "./routers/postRouter.js"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import fileupload from 'express-fileupload'

const app = express()

dotenv.config()
app.use(express.static('static'))
app.use(fileupload({}))
app.use(express.json())
app.use(postRouter)

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    app.listen(process.env.PORT)
  } catch (e) {
    console.log(e.message)
  }
}

start()