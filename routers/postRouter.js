import {Router} from "express"
import PostController from "../controllers/PostController.js";

const router = new Router()

router.get('/posts', PostController.getPosts)
router.get('/post/:id', PostController.getPost)
router.put('/post/:id', PostController.updatePost)
router.delete('/post/:id', PostController.deletePost)
router.post('/post', PostController.createPost)

export default router