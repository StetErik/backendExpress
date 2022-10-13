import PostModel from "../models/postModel.js";
import FileService from "./FileService.js";

class PostService{
  async getPosts(){
    const posts = await PostModel.find()
    return posts
  }
  async getPost(id){
    const post = await PostModel.findById(id)
    return post
  }
  async updatePost(id, body){
    const updatedPost = await PostModel.findByIdAndUpdate(id, body, {new: true})
    return updatedPost
  }
  async deletePost(id){
    const deletedPost = await PostModel.findByIdAndDelete(id)
    return deletedPost
  }
  async createPost(body, file){
    const filename = FileService.saveFile(file)
    const createdPost = await PostModel.create({...body, picture: filename})
    return createdPost
  }
}

export default new PostService()