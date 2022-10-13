import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
  name: {type: String, required: true},
  pass: {type: String, required: true},
  picture: {type: String, required: true},
}, {timestamps: true})

export default mongoose.model('Post', postSchema)