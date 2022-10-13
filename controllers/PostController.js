import PostService from "../services/PostService.js";

class PostController{
  async getPosts(req, res){
    try {
      const posts = await PostService.getPosts()
      res.json(posts)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }
  async getPost(req, res){
    try {
      const post = await PostService.getPost(req.params.id)
      res.json(post)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }
  async updatePost(req, res){
    try {
      const updatedPost = await PostService.updatePost(req.params.id, req.body)
      res.json(updatedPost)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }
  async deletePost(req, res){
    try {
      const deletedPost = await PostService.deletePost(req.params.id)
      res.json(deletedPost)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }
  async createPost(req, res){
    try {
      const createdPost = await PostService.createPost(req.body, req.files.picture)
      res.json(createdPost)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }
}

export default new PostController()